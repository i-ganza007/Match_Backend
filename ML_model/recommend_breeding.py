import argparse
import json
import os
import sys
from pathlib import Path

import numpy as np
import onnxruntime as ort
from PIL import Image

MODEL_PATH = str(Path(__file__).parent / 'model3_best.onnx')

IMAGE_SIZE = (224, 224)

CLASS_TO_TYPE = {
    'girolando_cow': 0, 'indigenous_ankole_cow': 0, 'fresian_cow': 0,
    'brown_swiss_cow': 0, 'jersey_cow': 0, 'sahiwal_cow': 0,
    'indigenous_goat': 1,
    'landrace_pig': 2, 'large_white_pig': 2, 'pietrain_pig': 2,
    'duroc_pig': 2, 'indigenous_pig': 2,
    'dorper_sheep': 3, 'merino_sheep': 3,
}

def load_and_preprocess(path: str) -> np.ndarray:
    img = Image.open(path).convert('RGB').resize(IMAGE_SIZE)
    arr = np.array(img, dtype=np.float32)
    return (arr / 127.5) - 1.0   # MobileNetV2 scale [-1, 1]

def get_species_id(label: str) -> np.ndarray:
    return np.array([[CLASS_TO_TYPE.get(label.lower(), 0)]], dtype=np.int32)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--animalA', required=True, help='Path to query animal image')
    parser.add_argument('--labelA',  default='fresian_cow')
    parser.add_argument('--batch',   required=True,
                        help='JSON file: [{animalId, imagePath, labelB, relatedness}]')
    args = parser.parse_args()

    # onnxruntime uses ~80 MB vs ~400 MB for tensorflow-cpu
    opts = ort.SessionOptions()
    opts.intra_op_num_threads = 1
    opts.inter_op_num_threads = 1
    opts.execution_mode = ort.ExecutionMode.ORT_SEQUENTIAL
    session = ort.InferenceSession(MODEL_PATH, sess_options=opts,
                                   providers=['CPUExecutionProvider'])

    # Discover output names from the model (order: overall, diversity, inbreeding, breed_match)
    output_names = [o.name for o in session.get_outputs()]

    imgA     = np.expand_dims(load_and_preprocess(args.animalA), axis=0)
    speciesA = get_species_id(args.labelA)

    with open(args.batch) as f:
        candidates = json.load(f)

    results = []
    for c in candidates:
        try:
            imgB        = np.expand_dims(load_and_preprocess(c['imagePath']), axis=0)
            speciesB    = get_species_id(c['labelB'])
            relatedness = np.array([[float(c['relatedness'])]], dtype=np.float32)

            outputs = session.run(output_names, {
                'img_a':       imgA,
                'species_a':   speciesA,
                'img_b':       imgB,
                'species_b':   speciesB,
                'relatedness': relatedness,
            })

            overall, diversity, inbreeding, breed_match = outputs
            results.append({
                'animalId':                       c['animalId'],
                'overall_score':                  float(overall[0]),
                'genetic_diversity_score':         float(diversity[0]),
                'inbreeding_risk_score':           float(inbreeding[0]),
                'breed_composition_match_score':   float(breed_match[0]),
            })
            del imgB, speciesB, relatedness, outputs
        except Exception as e:
            print(f'Warning: skipping {c["animalId"]}: {e}', file=sys.stderr)

    print(json.dumps(results))

if __name__ == '__main__':
    main()
