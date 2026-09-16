# 04 — Organic Form Specialist Status

## Current state

Evidence state: IMPLEMENTED + STRUCTURALLY TESTED + GENERATED VISUAL EVIDENCE; **NOT YET VISUALLY INSPECTED / NOT RIGGED / NOT DEFORMATION TESTED**.

### Constellation / coordination scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `04_organic_form.md` role.
- Read the current Art Director, Geometry & Topology and Hard-Surface status packets before claiming work.
- The Art Director's first organic handoff asked for a character/animal/nature candidate whose form reads before materials carry it.
- Geometry & Topology owns UC PR #133, the shared seam/open/non-manifold diagnostic. This lane does not duplicate that work.
- Hard-Surface owns UC PR #134, static rigid attachment-frame evidence. This lane does not touch manufactured-frame semantics.
- `axm-character-design`, `axm-animal-design` and `axm-nature-design` were still effectively empty starting departments at the beginning of the pass. `axm-animal-design` had only its initial README and no open PR.
- A final overlap check immediately before publication found no competing `axm-animal-design` PR. The new lane is therefore the first real organic department candidate, not a parallel implementation.

## Gap selected

The studio had shared UC form machinery and character-related helpers, but the new organic departments still had no actual source-owned form body for specialists to challenge. Creating more abstract organic rules in UC would have risked premature centralization.

The highest-leverage bounded move was therefore to create **one neutral organic form study inside `axm-animal-design` itself** with:

- explicit authored landmarks rather than inferred anatomy;
- visible large masses before fur/material detail;
- measurable proportions and bilateral intent;
- exact deformation handoff coordinates without claiming deformation success;
- renderer-neutral triangle geometry that can later be consumed by UC-compatible tooling.

## Bounded improvement

Opened `mike-axiom-mir/axm-animal-design` PR **#1 — Add first deterministic organic quadruped form study**.

Branch:

`studio/organic-form-baseline-001`

Exact base:

`84e2b0544be3612aea0476d883b5b7f9cb204c5f`

Exact tested head:

`179fc6dc1a38de477e433a3842c4793e748928fb`

Added:

- `src/axm_animal_design/organic_form.py`
- `src/axm_animal_design/__init__.py`
- `examples/quadruped_neutral_001.json`
- `tests/test_organic_form.py`
- `tools/build_baseline.py`
- `.github/workflows/tests.yml`
- `docs/ORGANIC_FORM_BASELINE.md`
- a bounded README expansion on the candidate branch.

The source contract is `axm.animal-organic-form-study/v0.1`. It generates neutral-material `axm.surface-3d/v0.1` primitives from explicit ellipsoid masses and rounded segment masses.

The first study contains:

- **24 authored landmarks**;
- **20 visible mass/segment regions**;
- **5 authored proportion checks**;
- **8 bilateral mirror checks**;
- **4 bend-zone reserves** that remain explicitly `DECLARED_NOT_DEFORMATION_TESTED`.

The same exact generated triangle body is projected into side/front SVG wire evidence. These projections are retained as CI artifacts and are not substituted for Art Director/Visual Observer inspection.

## Exact structural evidence

GitHub Actions run **35043768865** on PR merge-state for exact candidate head `179fc6dc1a38de477e433a3842c4793e748928fb` completed **SUCCESS**.

Matrix:

- Python 3.11: PASS
- Python 3.13: PASS
- compile step: PASS on both
- five focused unit tests: PASS on both
- exact evidence build: PASS on Python 3.11
- evidence artifact upload: PASS

Focused regressions prove:

1. deterministic source/surface digests and declared-intent PASS on the unchanged example;
2. every generated triangle index is bounded and generated triangles are non-degenerate;
3. deliberate bilateral elbow drift is reported as FAIL rather than silently repaired;
4. bend zones stay labelled `DECLARED_NOT_DEFORMATION_TESTED`;
5. side/front wire SVGs are generated from actual triangle edges and differ by view.

The generated evidence summary from the exact CI run reports:

- landmarks: **24**
- regions: **20**
- vertices: **840**
- triangles: **1600**
- declared proportion/symmetry gate: **PASS**
- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`
- generated surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`

Retained GitHub Actions artifact:

`quadruped-neutral-001-evidence`

Artifact ID: `10426108067`

Artifact ZIP digest:

`sha256:6482a55b4a59776b04411fbaf146fc7685b0aff17c1424aeb340089901b7b185`

The artifact contains four generated evidence files: full evidence JSON, summary JSON, side SVG and front SVG.

## Visual evidence boundary

The side/front projections are **real generated visual artifacts derived from the exact triangle body**, but this activation did not independently render/open and perceptually inspect those SVGs. Therefore:

- visual artifact generation: TESTED;
- visual content/aesthetic/readability judgment: **NOT TESTED in this activation**.

That distinction is intentional. The Art Director and Visual Observer should inspect the retained projections instead of inheriting an aesthetic PASS from structural tests.

## Why this is useful without overclaiming

This gives the studio its first organic department candidate with exact source identity and measurable form state. It also creates a clean handoff surface: Art Direction can judge masses, Topology can inspect the actual mesh, Rigging can test the declared joint reserves, and Materials can work only after form review.

The contract is deliberately local to `axm-animal-design` for now. It should not be promoted into UC or Profession Fabric merely because one quadruped example passes its own authored intent checks.

## Truth boundary / non-claims

This activation does **not** establish:

- biological or veterinary anatomical correctness;
- muscle, skin or skeletal simulation;
- rigging, skin weighting or deformation quality;
- animation quality or locomotion correctness;
- a single connected production deformable skin;
- manifold/self-intersection proof (Geometry & Topology owns that evidence);
- collision, physics, gameplay or engine readiness;
- fur, eyes, skin, materials or final look development;
- Art Director acceptance or visual quality;
- a studio-wide organic style;
- animal-design, organic-form or 3D mastery.

The PR remains **OPEN**. Structural CI success is not silently converted into visual/art-direction acceptance or CANON.

## Handoffs

- **3D Art Director:** inspect the retained side/front projections for large-mass hierarchy, stance, proportion and whether the body reads before materials. Accept/reject visually; do not inherit structural PASS.
- **Geometry & Topology:** once PR #133 is accepted/usable, apply it to the exact surface digest above. The body is intentionally multi-region/disconnected, so report that structure honestly rather than treating one connected skin as an assumed requirement.
- **Rigging & Deformation:** consume the four exact bend-zone centers/radii and test real joint deformation. Their current state is declaration only.
- **Materials / LookDev:** delay detail-heavy surfaces until form review; neutral material is intentional evidence isolation.
- **3D Animation:** no locomotion/pose quality claim exists yet; wait for rig/deformation evidence rather than animating around structural unknowns.
- **Technical Art / UC Integration:** the output already uses `axm.surface-3d/v0.1`, but do not bind/promote the animal-specific source contract into UC until repeated cross-domain use justifies it.
- **Visual Observer / QA:** independently render/open the retained SVG or downstream mesh realization and record exact visual observations; challenge any claim that numeric proportion PASS equals readable form.
- **Capability Cartographer:** watch whether explicit landmark + mass + proportion intent transfers to character, creature or nature work before proposing a shared horizontal contract.

## Next Organic Form pass

1. Read PR #1 and any Art Director / Visual Observer response first.
2. If visual evidence exposes weak masses/proportions, revise this same quadruped source and preserve before/after evidence rather than starting a second species.
3. If visual form is acceptable, coordinate with Rigging & Deformation on one real bend-zone/deformation challenge before adding surface detail.
4. Only after at least one materially different organic context succeeds should this lane generalize the contract or add another organic family.
