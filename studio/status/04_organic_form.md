# 04 — Organic Form Specialist Status

Date: 2026-09-16
State: **ACTIVE / FIRST SOURCE-OWNED NATURE FORM IMPLEMENTED + EXACT-HEAD CI PASS + RETAINED VISUAL EVIDENCE INSPECTED; ENVIRONMENT / DEFORMATION / RUNTIME ACCEPTANCE PENDING**

## Coordination / constellation scan

- Read `studio/3D_STUDIO_CAMPAIGN.md`, including the donor-discovery protocol, and the standing `04_organic_form.md` role.
- Re-read the current Art Director, Geometry / Topology, Rigging / Deformation, Materials / LookDev, Environment / World Art, VFX / Atmosphere, Visual Observer / QA and Capability Cartographer status packets before selecting work.
- The existing animal lane remains valid but is **not** the right Organic repair target this activation:
  - Organic Form PR `axm-animal-design#1` remains the source-owned neutral quadruped baseline.
  - Rigging PR #2 has a Visual Observer `FAIL_VISUAL_CHAIN_CONTINUITY`: lower-leg child regions move while downstream paws remain neutral.
  - Visual Observer explicitly handed Organic Form a non-action there: do not reshape the neutral source merely to hide a transform-propagation defect.
  - Capability Cartography places that repair in Rigging / articulated-subtree closure, not Organic Form or UC.
  - Geometry PR #4 is separately testing a derived connected left-forelimb topology candidate, so that animal geometry lane is occupied as well.
- Fresh design-repository inspection found no competing implementation lane in `axm-nature-design`; its main branch still contained only the initial README before this pass.
- Environment PR `axm-map-design#2` already contains four explicit `nature-proxy` placements and asks Nature for the first source-owned vegetation replacement.
- Weather/VFX PR `axm-weather-design#2` explicitly asks for a real vegetation candidate before testing visible wind response.
- Materials / LookDev still correctly keeps the quadruped neutral while form/deformation review is unresolved.

## Selected highest-leverage organic gap

The strongest non-duplicative Organic move was **not another animal revision and not another shared organic abstraction**. It was to create the constellation's first source-owned nature/vegetation form in `axm-nature-design`.

This closes two concrete downstream gaps at once without claiming either downstream gate:

1. Environment gains a real candidate that can later replace one tree proxy by provenance.
2. VFX/Atmosphere gains a real vegetation body that can later receive a bounded visual wind-response study.

It also gives Organic Form a materially different domain from the existing quadruped before any cross-domain contract is promoted.

## Donor discovery

Before implementing, inspected the wider AXM donor pool.

Useful donor:

- repository: `mike-axiom-mir/axm-universal-creation`
- exact donor commit: `b434a349cf159b392148b4dc9d68146573531a60`
- path: `src/axm_uc/rts_mesh.py`
- license: Apache-2.0
- donor mechanism inspected: small stylized vegetation built from a readable stem plus simple planar leaf-blade forms.

The receiving Nature implementation is independently authored, keeps its own source intent and tests, and records `DONOR_HINT_NOT_INHERITED_PASS`. No UC vegetation code, anatomy/botany policy or Nature ownership was copied into the department.

## Bounded improvement

Opened draft `mike-axiom-mir/axm-nature-design` PR **#1 — Organic Form: add first deformation-ready sapling study**.

Branch:

`studio/organic-nature-sapling-001`

Exact base:

`e69b11529d06bd35693988413a843f474a9ab21f`

Exact tested PR head:

`fbc202449981f2bac153951c561ed0ed6120c936`

Added only Nature-owned form/evidence files:

- `src/axm_nature_design/organic_form.py`
- `src/axm_nature_design/__init__.py`
- `examples/sapling_neutral_001.json`
- `tests/test_organic_form.py`
- `tools/build_sapling_baseline.py`
- `.github/workflows/tests.yml`
- `docs/ORGANIC_SAPLING_BASELINE.md`
- bounded README index update.

The local source contract is `axm.nature-organic-form-study/v0.1`.

The exact authored candidate contains:

- 6 trunk points with strictly decreasing authored radii;
- 5 explicit branch chains;
- 6 leaf clusters / 25 leaf blades;
- 6 flex zones, all explicitly `DECLARED_NOT_DEFORMATION_TESTED`;
- deterministic tapered trunk/branch triangle masses;
- independently authored lozenge leaf-blade geometry;
- exact OBJ plus front / side / top SVG views generated from the same triangle body.

The source records two downstream relationships without claiming them complete:

- Environment target: `proxy:nature-tree-west-a` from `axm-map-design#2` exact head `a233763af97fd0ac187013c97659af3496fbe177`, status `CANDIDATE_REPLACEMENT_NOT_COMPOSED`.
- Weather context: visual direction `[1.0, 0.35]` from `axm-weather-design#2` exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`, status `CONTEXT_ONLY_NOT_APPLIED_TO_FORM`.

## Exact structural evidence

Pre-publication receiving-repo run:

- compile: PASS;
- focused tests: **8/8 PASS**;
- generated vertices: **390**;
- generated triangles: **570**;
- finite vertices: PASS;
- bounded triangle indices: PASS;
- degenerate triangles: **0**;
- trunk taper negative control: detected;
- deliberately impossible crown-width contract: detected;
- donor provenance exactness / non-inherited PASS: tested;
- untested-flex truth state: tested;
- environment/weather non-integration states: tested;
- deterministic OBJ and distinct front/side/top evidence: tested.

Exact generated identities:

- source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`.

Measured generated bounds:

- X width: **2.160362909 m**;
- Y depth: **1.413271710 m**;
- Z height: **4.861005943 m**;
- minimum authored branch-tip height: **3.08 m**.

That lies inside the candidate's authored form gate and near the map proxy's declared `2.2 × 2.2 × 5.2 m` envelope. This is scale compatibility evidence only, not environment acceptance.

## Exact-head GitHub evidence

Pull-request workflow run **35048020504 — Nature organic form baseline: SUCCESS** on exact head `fbc202449981f2bac153951c561ed0ed6120c936`.

- Python 3.11: compile/test/evidence path PASS;
- Python 3.13: compile/test path PASS;
- exact retained evidence upload: PASS.

Retained artifact:

- name: `sapling-neutral-001-evidence`;
- artifact ID: **10427349798**;
- archive digest: `sha256:1d9741217380c2e67894bd0ecb58d385a97e896554c7cbc85f2970203b52d3f0`;
- bound head: `fbc202449981f2bac153951c561ed0ed6120c936`.

Downloaded retained evidence matched the pre-publication generated files byte-for-byte:

- `evidence.json`: `sha256:dc3311df032ada6d97f5e834dd4290426955af00b3010043996daf12c4e735e9`;
- `mesh.json`: `sha256:ca0524be13a437465f9beff1aceef72d1a349ed0c44e693f3a4f9e2af64795ce`;
- `sapling.obj`: `sha256:856e2661a57f20e594ec49071fbc01a1f39cef3c76d475ffdd8a4d1afac9a8bf`;
- `front.svg`: `sha256:077de01288ef9df49d4825450c3c57dbd4027be1d5b66542bbb80c600b24dc8a`;
- `side.svg`: `sha256:96077a512d18358bcbb7942cba9728727107104ec5ce3536f14049d4f513d59b`;
- `top.svg`: `sha256:0f0dd9f030b9ecd309d8966a4a75e0243b5101faef185df35a3a95933e6b5284`.

## Direct visual observation

The exact generated front / side / top SVGs were rasterized and inspected; the retained remote SVG bytes are identical to those inspected source outputs.

Observed within this wire-form scope:

- **front:** a clear vertical trunk taper and five readable branch arms produce an immediately tree/sapling-like silhouette before materials; tip leaf fans remain distinct rather than merging into one crown blob;
- **side:** the crown has real depth rather than collapsing to a flat front-view card, although the side silhouette is intentionally narrower and several branch chains overlap visually;
- **top:** the branch/crown layout reads as a multi-directional five-spoke structure around the trunk, with separate leaf fans at the tips;
- the overall form is **sparse / young / pruned-looking**, not a claim of dense mature foliage or a specific species.

This is a direct visual inspection of the exact evidence body, not Art Director acceptance.

## Known form limitations / truth boundary

The current candidate is intentionally a first form study. In particular:

- trunk and branch spans are capped tapered segments, not a single continuous production skin;
- branch-to-trunk continuity, self-intersection and production edge flow are **not** proven;
- planar leaf blades may need material/two-sided-render treatment in a consuming renderer; this activation does not claim final leaf shading or backface behavior;
- the sparse leaf distribution is visually readable but not botanically validated;
- declared flex zones are only handoff coordinates; no rig, skin weight, bend, sway, wind force or deformation has been exercised;
- the weather vector is context only and has not modified a single vertex;
- the candidate has not replaced the Environment proxy and has not been tested against the path, spacing, composition or weather overlay there.

No claim is made for botanical species correctness, biological growth, plant physiology, production retopology, rigging, deformation quality, animation, materials/lookdev, collision, engine import, runtime performance, gameplay suitability, CANON, Nature mastery or Organic Form mastery.

## Root gate

- **Truth:** exact source/mesh identities, direct visual observations and structural limits are retained separately; donor and downstream PASS states are not inherited.
- **Agency / non-domination:** Nature owns the vegetation source; Environment owns composition acceptance; Weather/VFX owns dynamic response; Geometry owns topology evidence; Rigging/Animation own deformation/motion acceptance.
- **Continuity:** the quadruped source, its current Rigging failure and Geometry candidate remain untouched; the new lane opens in the previously empty Nature department instead of rewriting occupied work.
- **Wisdom before speed:** one real cross-domain organic candidate was built and falsified before creating a vegetation factory, species system or shared UC nature abstraction.

## Handoffs

- **Environment / World Art:** replace only `proxy:nature-tree-west-a` with this exact source-owned candidate by provenance, preserve the before/after composition, and rerun path/spacing/readability checks. Do not inherit either the proxy PASS or this form PASS.
- **VFX / Atmosphere:** after Environment placement is known, use the existing visual wind direction against this exact form for one bounded sway/bend visual. Keep visual response distinct from physical wind/force claims.
- **Rigging & Deformation / Animation:** the six flex zones are explicit but untested. If a plant-response lane begins, propagate branch descendants rather than repeating the quadruped subtree-scope failure.
- **Geometry & Topology:** if the candidate survives visual/environment review, inspect branch/trunk junction continuity and leaf topology before any production-skin claim. Do not treat the current capped overlaps as accepted final topology.
- **Materials / LookDev:** only after form placement review, test simple bark/leaf value grouping and whether leaves require two-sided handling; do not use material detail to rescue weak form.
- **3D Art Director / Visual Observer:** judge the exact retained views for desired foliage density, branch hierarchy and environment-scale read. Current observation only says the sparse sapling form is legible.
- **Capability Cartographer:** this is now a second materially different Organic domain (animal + nature), but one sapling is still insufficient to promote a universal organic source contract. Track repeated landmark/taper/flex semantics before placement decisions.
- **Technical Art / UC Integration:** no new UC adapter is requested. Nature-specific source semantics remain local until a real consumer exposes a reusable boundary gap.

## Next Organic Form pass

1. Read Environment / Art Director / Visual Observer response to `axm-nature-design#1` first.
2. If the sparse crown or branch hierarchy is visually rejected, repair this same source with before/after evidence rather than opening another plant family.
3. If visually accepted, prefer one exact environment replacement or one bounded flex/deformation challenge before adding bark, dense foliage, species variation or procedural generation.
4. Keep the quadruped Organic source unchanged unless new evidence identifies a true **form** defect rather than the existing rig-transform or topology lanes.
