import argparse
import json
import sys
import os
from pathlib import Path
from model_utils import (
    extract_backbone, BreedingRecommender, load_and_preprocess, get_species_id
)

MODEL1_PATH = str(Path(__file__).parent / 'model1.h5')  # Update if needed
MODEL3_WEIGHTS_PATH = str(Path(__file__).parent / 'model3_best.weights.h5')

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--animalA', required=True)
    parser.add_argument('--animalB', required=True)
    parser.add_argument('--candidate', required=True)
    parser.add_argument('--labelA', required=False, default='fresian_cow')
    parser.add_argument('--labelB', required=False, default='fresian_cow')
    parser.add_argument('--relatedness', required=False, type=float, default=0.0)
    args = parser.parse_args()

    # Load images and preprocess — add batch dim required by the model
    import numpy as np
    imgA = np.expand_dims(load_and_preprocess(args.animalA), axis=0)
    imgB = np.expand_dims(load_and_preprocess(args.candidate), axis=0)
    speciesA = get_species_id(args.labelA)
    speciesB = get_species_id(args.labelB)
    relatedness = float(args.relatedness)
    relatedness_arr = [[relatedness]]

    # Load model
    backbone, classifier, BACKBONE_DIM = extract_backbone(MODEL1_PATH)
    model3 = BreedingRecommender(backbone=backbone, backbone_dim=BACKBONE_DIM)
    model3.load_weights(MODEL3_WEIGHTS_PATH)

    # Run inference
    preds = model3([
        imgA, speciesA, imgB, speciesB, relatedness_arr
    ], training=False)

    # Convert tensors to floats
    scores = {k: float(v.numpy().squeeze()) for k, v in preds.items()}
    print(json.dumps(scores))

if __name__ == '__main__':
    main()
