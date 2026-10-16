# Congenital Heart Explorer

An interactive teaching tool for pediatric residents. Click a structure on a coronal heart diagram to see every congenital lesion that involves it, with abbreviations, common/rare grouping, and treatment options. A Procedures view lists 80 operations and catheter interventions, grouped by category and linked to the defects they treat.

**Teaching aid only. Not for clinical decision-making.** The diagram is schematic and not to anatomical scale.

## Use it
Open the GitHub Pages link on your phone, then:
- **iPhone (Safari):** Share → Add to Home Screen
- **Android (Chrome):** ⋮ menu → Add to Home screen

## Files
| Path | What it is |
|---|---|
| `index.html` | The complete app in one file. This is what GitHub Pages serves. |
| `src/data/lesions.js` | The 16 structures and all lesion entries |
| `src/data/procedures.js` | Procedure categories and the procedure library |
| `src/template.html` | Layout, styling and behaviour |
| `src/art/*.svgfrag` | Heart artwork, already recoloured |
| `build.py` | Combines `src/` into `index.html` |

## Editing content
1. Edit a file in `src/` (most content changes go in `src/data/`).
2. Run `python3 build.py` from the repo root. It needs only Python 3, no packages.
3. Commit both the `src/` change and the regenerated `index.html`.

If you edit `index.html` directly, the change will be overwritten the next time someone runs `build.py`.

## Credits
Heart illustrations licensed from Freepik and modified (recoloured, with interactive overlays). Content by Parth Shirode, MD (Pediatrics, Akron Children's Hospital).
