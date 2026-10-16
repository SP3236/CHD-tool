"""Rebuild index.html from src/. Run from the repo root:  python3 build.py
Edit lesions in src/data/lesions.js, procedures in src/data/procedures.js,
layout/behaviour in src/template.html. The artwork in src/art/ is already recoloured."""
from pathlib import Path
src = Path(__file__).parent / 'src'
t = (src / 'template.html').read_text(encoding='utf-8')
t = t.replace('__ART_MAIN__', (src / 'art/heart-coronal.svgfrag').read_text(encoding='utf-8'))
t = t.replace('__ART_VESSELS__', (src / 'art/great-vessels.svgfrag').read_text(encoding='utf-8'))
t = t.replace('__DATA__', (src / 'data/lesions.js').read_text(encoding='utf-8').strip() + '\n\n'
                         + (src / 'data/procedures.js').read_text(encoding='utf-8').strip())
assert '__ART' not in t and '__DATA__' not in t
(Path(__file__).parent / 'index.html').write_text(t, encoding='utf-8')
print('index.html rebuilt,', len(t), 'characters')
