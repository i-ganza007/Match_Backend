"""
Run once to patch model3_best.onnx for onnxruntime compatibility.

tf2onnx converts GELU activation using Erfc, but onnxruntime's CPU provider
doesn't register Erfc. This script replaces each Erfc(x) node with the
mathematically identical (1 - Erf(x)), which onnxruntime does support.

    pip install onnx numpy
    python ML_model/patch_onnx.py
"""
from pathlib import Path
import numpy as np
import onnx
from onnx import helper, numpy_helper

MODEL_PATH = Path(__file__).parent / 'model3_best.onnx'

print(f'Loading {MODEL_PATH} ...')
model = onnx.load(str(MODEL_PATH))
graph = model.graph

new_nodes = []
extra_initializers = []
patched = 0

for node in graph.node:
    if node.op_type == 'Erfc':
        x   = node.input[0]
        out = node.output[0]
        erf_tmp  = out + '__erf'
        one_name = out + '__one'

        # Constant scalar 1.0 as an initializer
        extra_initializers.append(
            numpy_helper.from_array(np.array(1.0, dtype=np.float32), name=one_name)
        )
        # Erf(x)
        new_nodes.append(helper.make_node('Erf', [x],              [erf_tmp]))
        # 1.0 - Erf(x)  ≡  Erfc(x)
        new_nodes.append(helper.make_node('Sub', [one_name, erf_tmp], [out]))

        print(f'  Patched Erfc node: {node.name!r}')
        patched += 1
    else:
        new_nodes.append(node)

del graph.node[:]
graph.node.extend(new_nodes)
graph.initializer.extend(extra_initializers)

onnx.save(model, str(MODEL_PATH))
print(f'\nDone — patched {patched} Erfc node(s). Saved to {MODEL_PATH}')
print('\nNext steps:')
print('  git add ML_model/model3_best.onnx ML_model/patch_onnx.py')
print('  git commit -m "fix: replace Erfc with (1-Erf) for onnxruntime CPU compatibility"')
print('  git push')
