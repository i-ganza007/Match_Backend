import argparse
import json
from pathlib import Path

import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from PIL import Image

MODEL3_WEIGHTS_PATH = str(Path(__file__).parent / 'model3_best.weights.h5')

IMAGE_SIZE = (224, 224)
EMBED_DIM  = 256

CLASS_TO_TYPE = {
    'girolando_cow': 0, 'indigenous_ankole_cow': 0, 'fresian_cow': 0,
    'brown_swiss_cow': 0, 'jersey_cow': 0, 'sahiwal_cow': 0,
    'indigenous_goat': 1,
    'landrace_pig': 2, 'large_white_pig': 2, 'pietrain_pig': 2,
    'duroc_pig': 2, 'indigenous_pig': 2,
    'dorper_sheep': 3, 'merino_sheep': 3,
}

# ── Image preprocessing ───────────────────────────────────────────────────────

def load_and_preprocess(path: str) -> np.ndarray:
    img = Image.open(path).convert('RGB').resize(IMAGE_SIZE)
    arr = np.array(img, dtype=np.float32)
    return (arr / 127.5) - 1.0   # MobileNetV2 scale [-1, 1]

def get_species_id(label: str) -> np.ndarray:
    return np.array([[CLASS_TO_TYPE.get(label.lower(), 0)]], dtype=np.int32)

# ── Model architecture ────────────────────────────────────────────────────────

def build_projector(backbone_dim: int, embed_dim: int = EMBED_DIM):
    visual_in  = keras.Input(shape=(backbone_dim,), name='visual_feat')
    species_in = keras.Input(shape=(1,), dtype=tf.int32, name='species_id')
    sp_emb = layers.Embedding(4, 32, name='species_embedding')(species_in)
    sp_emb = layers.Flatten()(sp_emb)
    x = layers.Concatenate()([visual_in, sp_emb])
    x = layers.Dense(512, name='proj_fc1')(x)
    x = layers.Activation('gelu')(x)
    x = layers.LayerNormalization()(x)
    x = layers.Dropout(0.35)(x)
    x = layers.Dense(embed_dim, name='proj_fc2')(x)
    x = layers.Lambda(lambda t: tf.math.l2_normalize(t, axis=-1), name='l2_normalize')(x)
    return keras.Model([visual_in, species_in], x, name='projector')

def build_score_heads(pair_dim: int = EMBED_DIM * 2):
    pair_in = keras.Input(shape=(pair_dim,), name='pair_features')
    x = layers.Dense(256, name='score_fc1')(pair_in)
    x = layers.Activation('gelu')(x)
    x = layers.Dropout(0.10)(x)
    x = layers.Dense(128, name='score_fc2')(x)
    x = layers.Activation('gelu')(x)
    diversity   = layers.Dense(1, activation='sigmoid', name='diversity_head')(x)
    breed_match = layers.Dense(1, activation='sigmoid', name='breed_match_head')(x)
    return keras.Model(pair_in, [diversity, breed_match], name='score_heads')

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
        return {
            'overall_score':                 tf.clip_by_value(overall, 0.0, 1.0),
            'genetic_diversity_score':       diversity,
            'inbreeding_risk_score':         inbreeding_risk,
            'breed_composition_match_score': breed_match,
        }

# ── Backbone (no model1.h5 needed) ───────────────────────────────────────────

def build_backbone():
    base = keras.applications.MobileNetV2(
        input_shape=(224, 224, 3),
        include_top=False,
        weights=None,
        pooling='avg',
    )
    backbone = keras.Model(inputs=base.input, outputs=base.output, name='mobilenet_backbone')
    backbone.trainable = False
    return backbone, backbone.output_shape[-1]

# ── Entry point ───────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--animalA',     required=True)
    parser.add_argument('--animalB',     required=True)
    parser.add_argument('--candidate',   required=True)
    parser.add_argument('--labelA',      default='fresian_cow')
    parser.add_argument('--labelB',      default='fresian_cow')
    parser.add_argument('--relatedness', type=float, default=0.0)
    args = parser.parse_args()

    imgA        = np.expand_dims(load_and_preprocess(args.animalA),   axis=0)
    imgB        = np.expand_dims(load_and_preprocess(args.candidate), axis=0)
    speciesA    = get_species_id(args.labelA)
    speciesB    = get_species_id(args.labelB)
    relatedness = [[args.relatedness]]

    backbone, backbone_dim = build_backbone()
    model3 = BreedingRecommender(backbone=backbone, backbone_dim=backbone_dim)

    # Warm-up: builds all submodel layers before loading weights
    dummy    = tf.zeros((1, 224, 224, 3))
    dummy_sp = tf.zeros((1, 1), dtype=tf.int32)
    dummy_r  = tf.zeros((1, 1))
    model3([dummy, dummy_sp, dummy, dummy_sp, dummy_r], training=False)

    model3.load_weights(MODEL3_WEIGHTS_PATH)

    preds  = model3([imgA, speciesA, imgB, speciesB, relatedness], training=False)
    scores = {k: float(v.numpy().squeeze()) for k, v in preds.items()}
    print(json.dumps(scores))

if __name__ == '__main__':
    main()
