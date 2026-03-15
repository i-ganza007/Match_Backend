import argparse
import json
import os
import sys
import time
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


def build_session_options() -> ort.SessionOptions:
    opts = ort.SessionOptions()
    opts.intra_op_num_threads = 1
    opts.inter_op_num_threads = 1
    opts.execution_mode = ort.ExecutionMode.ORT_SEQUENTIAL
    return opts


def _acquire_file_lock(lock_path: str, timeout_s: float = 20.0, poll_s: float = 0.1) -> bool:
    deadline = time.time() + timeout_s
    while True:
        try:
            fd = os.open(lock_path, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
            os.close(fd)
            return True
        except FileExistsError:
            if time.time() >= deadline:
                return False
            time.sleep(poll_s)


def _release_file_lock(lock_path: str) -> None:
    try:
        os.unlink(lock_path)
    except FileNotFoundError:
        pass


def patch_erfc_nodes_in_place(model_path: str) -> int:
    try:
        import onnx
        from onnx import helper, numpy_helper
    except Exception as imp_err:
        raise RuntimeError(
            "Detected unsupported Erfc op in ONNX model, but auto-patching requires the 'onnx' package. "
            "Install it with: pip install onnx"
        ) from imp_err

    model = onnx.load(model_path)
    graph = model.graph

    patched = 0
    new_nodes = []
    extra_initializers = []

    for node in graph.node:
        if node.op_type == 'Erfc':
            x = node.input[0]
            out = node.output[0]
            erf_tmp = out + '__erf'
            one_name = out + '__one'

            extra_initializers.append(
                numpy_helper.from_array(np.array(1.0, dtype=np.float32), name=one_name)
            )
            new_nodes.append(helper.make_node('Erf', [x], [erf_tmp]))
            new_nodes.append(helper.make_node('Sub', [one_name, erf_tmp], [out]))
            patched += 1
        else:
            new_nodes.append(node)

    if patched == 0:
        return 0

    del graph.node[:]
    graph.node.extend(new_nodes)
    graph.initializer.extend(extra_initializers)

    temp_path = model_path + '.tmp'
    onnx.save(model, temp_path)
    os.replace(temp_path, model_path)
    return patched


def create_session(model_path: str) -> ort.InferenceSession:
    opts = build_session_options()
    providers = ['CPUExecutionProvider']
    try:
        return ort.InferenceSession(model_path, sess_options=opts, providers=providers)
    except Exception as e:
        err_msg = str(e)
        if 'No Op registered for Erfc' not in err_msg:
            raise

        print(
            'ONNX runtime cannot load Erfc op. Attempting automatic compatibility patch...',
            file=sys.stderr,
        )

        lock_path = model_path + '.patch.lock'
        got_lock = _acquire_file_lock(lock_path)
        try:
            if got_lock:
                patched = patch_erfc_nodes_in_place(model_path)
                if patched > 0:
                    print(f'Patched {patched} Erfc node(s) in {model_path}', file=sys.stderr)
            else:
                print('Patch lock timeout reached; retrying model load anyway.', file=sys.stderr)
        finally:
            if got_lock:
                _release_file_lock(lock_path)

        return ort.InferenceSession(model_path, sess_options=opts, providers=providers)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--animalA', required=True, help='Path to query animal image')
    parser.add_argument('--labelA',  default='fresian_cow')
    parser.add_argument('--batch',   required=True,
                        help='JSON file: [{animalId, imagePath, labelB, relatedness}]')
    args = parser.parse_args()

    # onnxruntime uses ~80 MB vs ~400 MB for tensorflow-cpu.
    # If the exported graph still contains Erfc(GELU form), we patch once and retry.
    session = create_session(MODEL_PATH)

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
