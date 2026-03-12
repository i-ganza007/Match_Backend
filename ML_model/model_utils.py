import os
import random as pyrandom
import numpy as np
import tensorflow as tf
from tensorflow import keras
from PIL import Image, ImageEnhance

# ---------------------------------------------------------------------------
# Species / type mappings
# ---------------------------------------------------------------------------

CLASS_TO_TYPE = {
    'girolando_cow': 0, 'indigenous_ankole_cow': 0, 'fresian_cow': 0,
    'brown_swiss_cow': 0, 'jersey_cow': 0, 'sahiwal_cow': 0,
    'indigenous_goat': 1,
    'landrace_pig': 2, 'large_white_pig': 2, 'pietrain_pig': 2,
    'duroc_pig': 2, 'indigenous_pig': 2,
    'dorper_sheep': 3, 'merino_sheep': 3,
}
TYPE_NAMES = {0: 'COW', 1: 'GOAT', 2: 'PIG', 3: 'SHEEP'}

# ---------------------------------------------------------------------------
# Breed diversity table (used as training signal and inference hint)
# Pairs are unordered; get_breed_diversity() handles both orderings.
# ---------------------------------------------------------------------------

BREED_DIVERSITY = {
    # Cows ──────────────────────────────────────────────────────────────────
    ('fresian_cow',           'indigenous_ankole_cow'):  0.90,
    ('fresian_cow',           'sahiwal_cow'):            0.88,
    ('fresian_cow',           'girolando_cow'):          0.55,
    ('fresian_cow',           'brown_swiss_cow'):        0.50,
    ('fresian_cow',           'jersey_cow'):             0.40,
    ('girolando_cow',         'indigenous_ankole_cow'):  0.85,
    ('girolando_cow',         'sahiwal_cow'):            0.80,
    ('girolando_cow',         'brown_swiss_cow'):        0.55,
    ('girolando_cow',         'jersey_cow'):             0.45,
    ('indigenous_ankole_cow', 'brown_swiss_cow'):        0.80,
    ('indigenous_ankole_cow', 'jersey_cow'):             0.85,
    ('indigenous_ankole_cow', 'sahiwal_cow'):            0.60,
    ('brown_swiss_cow',       'jersey_cow'):             0.45,
    ('brown_swiss_cow',       'sahiwal_cow'):            0.75,
    ('jersey_cow',            'sahiwal_cow'):            0.70,
    # Pigs ──────────────────────────────────────────────────────────────────
    ('duroc_pig',       'large_white_pig'):  0.75,
    ('duroc_pig',       'landrace_pig'):     0.70,
    ('duroc_pig',       'pietrain_pig'):     0.80,
    ('duroc_pig',       'indigenous_pig'):   0.90,
    ('large_white_pig', 'landrace_pig'):     0.55,
    ('large_white_pig', 'pietrain_pig'):     0.65,
    ('large_white_pig', 'indigenous_pig'):   0.85,
    ('landrace_pig',    'pietrain_pig'):     0.70,
    ('landrace_pig',    'indigenous_pig'):   0.80,
    ('pietrain_pig',    'indigenous_pig'):   0.85,
    # Sheep ─────────────────────────────────────────────────────────────────
    ('dorper_sheep', 'merino_sheep'): 0.80,
}


def get_breed_diversity(breed_a: str, breed_b: str) -> float:
    """Return the diversity score for two breeds (order-independent).
    Returns 0.10 for same-breed pairs, 0.60 as default for unknown cross."""
    if breed_a == breed_b:
        return 0.10
    key = (breed_a, breed_b)
    return BREED_DIVERSITY.get(key, BREED_DIVERSITY.get((breed_b, breed_a), 0.60))


# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

IMAGE_SIZE = (224, 224)
EMBED_DIM  = 256

from tensorflow.keras import layers

# ---------------------------------------------------------------------------
# Model building blocks
# ---------------------------------------------------------------------------

def extract_backbone(model1_path: str):
    model1 = keras.models.load_model(model1_path)
    gap_layer = None
    for layer in model1.layers:
        if isinstance(layer, layers.GlobalAveragePooling2D):
            gap_layer = layer
            break
    if gap_layer is None:
        gap_layer = model1.layers[-3]
    backbone = keras.Model(
        inputs  = model1.input,
        outputs = gap_layer.output,
        name    = "mobilenet_backbone"
    )
    backbone.trainable = False
    classifier = keras.Model(
        inputs  = model1.input,
        outputs = model1.output,
        name    = "breed_classifier"
    )
    classifier.trainable = False
    out_dim = backbone.output_shape[-1]
    return backbone, classifier, out_dim


def build_projector(backbone_dim: int, embed_dim: int = EMBED_DIM):
    visual_in  = keras.Input(shape=(backbone_dim,), name="visual_feat")
    species_in = keras.Input(shape=(1,), dtype=tf.int32, name="species_id")
    sp_emb = layers.Embedding(4, 32, name="species_embedding")(species_in)
    sp_emb = layers.Flatten()(sp_emb)
    x = layers.Concatenate()([visual_in, sp_emb])
    x = layers.Dense(512, name="proj_fc1")(x)
    x = layers.Activation("gelu")(x)
    x = layers.LayerNormalization()(x)
    x = layers.Dropout(0.35)(x)
    x = layers.Dense(embed_dim, name="proj_fc2")(x)
    x = layers.Lambda(lambda t: tf.math.l2_normalize(t, axis=-1), name="l2_normalize")(x)
    return keras.Model([visual_in, species_in], x, name="projector")


def build_cross_attention(embed_dim: int = EMBED_DIM):
    emb_a = keras.Input(shape=(embed_dim,), name="emb_a")
    emb_b = keras.Input(shape=(embed_dim,), name="emb_b")
    a_seq    = layers.Reshape((1, embed_dim))(emb_a)
    b_seq    = layers.Reshape((1, embed_dim))(emb_b)
    attn_out = layers.MultiHeadAttention(
        num_heads=4, key_dim=embed_dim // 4, dropout=0.1
    )(query=a_seq, key=b_seq, value=b_seq)
    x = layers.Reshape((embed_dim,))(attn_out)
    x = layers.Dense(64, activation="gelu", name="interaction_proj")(x)
    x = layers.LayerNormalization()(x)
    return keras.Model([emb_a, emb_b], x, name="cross_attention")


def build_score_heads(pair_dim: int = EMBED_DIM * 2):
    pair_in = keras.Input(shape=(pair_dim,), name="pair_features")
    x = layers.Dense(256, name="score_fc1")(pair_in)
    x = layers.Activation("gelu")(x)
    x = layers.Dropout(0.10)(x)
    x = layers.Dense(128, name="score_fc2")(x)
    x = layers.Activation("gelu")(x)
    diversity   = layers.Dense(1, activation="sigmoid", name="diversity_head")(x)
    breed_match = layers.Dense(1, activation="sigmoid", name="breed_match_head")(x)
    return keras.Model(pair_in, [diversity, breed_match], name="score_heads")


class BreedingRecommender(keras.Model):
    def __init__(self, backbone, backbone_dim, **kwargs):
        super().__init__(**kwargs)
        self.backbone    = backbone
        self.projector   = build_projector(backbone_dim, EMBED_DIM)
        self.score_heads = build_score_heads(EMBED_DIM * 2)

    def encode(self, image, species_id, training=False):
        visual = self.backbone(image, training=False)
        return self.projector([visual, species_id], training=training)

    def call(self, inputs, training=False):
        img_a, species_a, img_b, species_b, relatedness = inputs
        emb_a     = self.encode(img_a, species_a, training=training)
        emb_b     = self.encode(img_b, species_b, training=training)
        pair_feat = tf.concat([emb_a, emb_b], axis=-1)
        diversity, breed_match = self.score_heads(pair_feat, training=training)
        diversity   = tf.squeeze(diversity,   axis=-1)
        breed_match = tf.squeeze(breed_match, axis=-1)
        inbreeding_risk = tf.clip_by_value(
            tf.cast(tf.squeeze(relatedness, axis=-1), tf.float32), 0.0, 1.0)
        overall = (0.40 * diversity +
                   0.35 * (1.0 - inbreeding_risk) +
                   0.25 * breed_match)
        overall = tf.clip_by_value(overall, 0.0, 1.0)
        return {
            "overall_score":                 overall,
            "genetic_diversity_score":       diversity,
            "inbreeding_risk_score":         inbreeding_risk,
            "breed_composition_match_score": breed_match,
        }


# ---------------------------------------------------------------------------
# Image preprocessing
# ---------------------------------------------------------------------------

def preprocess_input(arr: np.ndarray) -> np.ndarray:
    """MobileNetV2 preprocessing: scale pixel values to [-1, 1]."""
    return (arr / 127.5) - 1.0


def load_and_preprocess(path: str, augment: bool = False) -> np.ndarray:
    """Load an image from disk and return a float32 array of shape (H, W, 3).

    augment=True applies random PIL-based transforms (flip, brightness,
    contrast, saturation, rotation).  Use augment=False for inference.
    Note: callers that feed the model directly must add the batch dimension,
    e.g. np.expand_dims(load_and_preprocess(p), axis=0).
    """
    img = Image.open(path).convert("RGB").resize(IMAGE_SIZE)

    if augment:
        if pyrandom.random() < 0.5:
            img = img.transpose(Image.FLIP_LEFT_RIGHT)
        if pyrandom.random() < 0.6:
            img = ImageEnhance.Brightness(img).enhance(pyrandom.uniform(0.8, 1.2))
        if pyrandom.random() < 0.6:
            img = ImageEnhance.Contrast(img).enhance(pyrandom.uniform(0.8, 1.2))
        if pyrandom.random() < 0.4:
            img = ImageEnhance.Color(img).enhance(pyrandom.uniform(0.7, 1.3))
        if pyrandom.random() < 0.3:
            img = img.rotate(pyrandom.uniform(-15, 15), fillcolor=(128, 128, 128))

    arr = np.array(img, dtype=np.float32)
    return preprocess_input(arr)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def get_species_id(label: str) -> np.ndarray:
    return np.array([[CLASS_TO_TYPE.get(label, 0)]], dtype=np.int32)
