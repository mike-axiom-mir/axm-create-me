# 08 — Environment / World Art Specialist Status

## Current state

Evidence state: **IMPLEMENTED + STRUCTURALLY TESTED + RETAINED CROSS-ASSET SCENE EVIDENCE; NOT YET VISUALLY INSPECTED AS A RENDER.** No final building/nature/object/weather, traversal, runtime, performance, gameplay, art-quality, CANON or mastery claim.

## Coordination / constellation scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `08_environment_world_art.md` role.
- Read all currently present specialist status packets before claiming work: Art Director, Geometry & Topology, Hard-Surface, Organic Form, and Rigging & Deformation.
- The Art Director's first environment handoff asks for an environment-scale comparison once enough map/building/nature ingredients exist; the current design departments still begin as near-empty bodies, so there is not yet a truthful final environment board to judge.
- Geometry & Topology owns UC PR #133; this lane does not claim mesh-manifold evidence.
- Hard-Surface owns UC PR #134; this lane does not claim connector/frame correctness.
- Organic Form and Rigging are active in `axm-animal-design`; this lane does not modify that body.
- `axm-map-design` contained only its initial README on main before this pass. A final overlap scan found no existing map-design PR lane solving environment composition.

## Gap selected

The studio had no real environment-scale composition body yet. Waiting for all of building/nature/object/weather to mature would leave scale relationships, world readability and cross-department replacement semantics untested; inventing finished assets inside `axm-map-design` would collapse repository ownership.

The bounded move was therefore to create one **real deterministic 3D composition proof made only from explicit proxies**, where the composition questions are testable now and every proxy can later be replaced by a source-owned department asset without inheriting its evidence.

## Bounded improvement

Opened `mike-axiom-mir/axm-map-design` PR **#2 — Add first cross-asset environment composition baseline**.

Branch:

`studio/environment-composition-baseline-001`

Exact base:

`5c9f743af53bc9586a136d17e7fb29e384a6930c`

Exact tested head:

`c6a13d87f7dbb75f5f7765fa2e55b890a1078264`

Added:

- `examples/environment_baseline_001.json`
- `tools/environment_composition.py`
- `tests/test_environment_composition.py`
- `.github/workflows/environment-baseline.yml`
- `docs/ENVIRONMENT_BASELINE_001.md`

The source contract is `axm.environment-composition-study/v0.1`.

The first study composes four explicit asset classes in one 24 m × 18 m scene:

- `map-surface` — ground body;
- `building-proxy` — pavilion mass;
- `nature-proxy` — four tree-scale masses;
- `object-proxy` — two crate-scale props.

All geometry is explicitly `PROXY_ONLY`. Weather is represented only as a nonzero directional context with status `CONTEXT_ONLY_NOT_SIMULATED`.

From the same source manifest the tool generates:

- deterministic text `scene.obj` 3D geometry;
- deterministic `top.svg` composition evidence;
- `evidence.json` with the bounded structural result.

## Structural evidence

GitHub Actions run **35044472697** completed both matrix jobs successfully for exact head `c6a13d87f7dbb75f5f7765fa2e55b890a1078264`:

- Python 3.11: compile PASS; regression suite PASS; exact environment evidence build PASS; evidence artifact upload PASS.
- Python 3.13: compile PASS; regression suite PASS. Evidence build/upload are intentionally 3.11-only and were skipped there.

The regression suite exercises:

1. exact baseline PASS across all declared bounded checks;
2. required presence of map/building/nature/object proxy classes;
3. central readable-path clearance;
4. explicit minimum proxy spacing;
5. fail-closed detection when an object is moved into the path;
6. fail-closed detection when any candidate is relabelled as a final asset rather than `PROXY_ONLY`;
7. fail-closed zero-length weather-context direction;
8. deterministic OBJ/SVG generation from the same source;
9. generated OBJ contains building, nature and object identities rather than a map-only shell.

Retained Actions artifact:

`environment-baseline-001-evidence`

Artifact ID: **10425459801**

Artifact ZIP digest:

`sha256:3c8382398e571874d142513d9209df83e3b51bcea03502b0922aaf26214ca406`

The artifact is bound by GitHub to exact head `c6a13d87f7dbb75f5f7765fa2e55b890a1078264`.

## Visual evidence boundary

`top.svg` is a real generated visual artifact and `scene.obj` is a real text 3D scene derived from the exact composition source. This activation confirmed CI generation and retention, but did **not** independently render the OBJ or perceptually inspect the SVG as an image.

Therefore:

- cross-asset 3D scene generation: TESTED;
- deterministic top-view evidence generation: TESTED;
- spatial/path/spacing checks: TESTED;
- perceptual world readability / beauty / believable composition: **NOT TESTED**;
- runtime engine scene import: **NOT TESTED**.

## Replacement-by-contract rule

This is the main reusable composition result of the pass:

> A map-level proxy PASS does not transfer to a real department asset. Replace one proxy with a source-owned `building-design`, `nature-design`, `object-design`, or `weather-design` candidate, preserve exact provenance, then rerun the composition and visual checks.

That lets the world become progressively real without centralizing source ownership into map-design or UC.

## Truth boundary / non-claims

A PASS here means only that the exact proxy scene is deterministic, spans the declared asset classes, keeps the declared path clear, respects the declared proxy spacing, retains nonzero weather context, and keeps every composed asset explicitly labelled proxy-only.

It does **not** establish:

- final building architecture, vegetation or prop design;
- believable scale beyond the declared numeric source values;
- navigation, traversal, collision or gameplay encounter quality;
- weather simulation, particles, wind response or VFX;
- lighting, material or LookDev quality;
- topology/manifoldness;
- engine import, runtime performance or LOD acceptance;
- Art Director / Visual Observer acceptance;
- a studio-wide world style;
- map-design or environment-art mastery.

The PR remains **OPEN**. Green structural CI is not silently converted into visual acceptance, merge, CANON or production readiness.

## Root gate

- **Truth:** proxy status is machine-checked; generated scene evidence remains separate from visual/runtime claims.
- **Agency / non-domination:** map-design owns composition only; it does not absorb source-asset authority from other design departments.
- **Continuity:** the replacement-by-contract path preserves source identity and permits one-by-one evolution from proxies to real department assets.
- **Wisdom before speed:** one bounded cross-asset scene was built instead of creating a giant world framework or pretending empty departments were finished.

## Handoffs

- **3D Art Director:** inspect the retained top-view and a rendered OBJ realization when available for scale hierarchy, negative space, path readability and composition. Structural PASS is not visual approval.
- **Building Design:** first real pavilion/building candidate can replace `proxy:building-pavilion`; preserve source identity and rerun the map composition gate.
- **Nature Design:** first real vegetation family can replace one tree proxy at a time; do not inherit proxy spacing/visual acceptance automatically.
- **Object Design:** replace one crate-scale prop with a source-owned candidate and challenge clutter/readability around the path.
- **Weather / VFX:** current wind is context only. A later specialist may make vegetation/cloth/particle response observable without changing map authority.
- **Geometry & Topology:** apply topology evidence to real replacement meshes independently; composition PASS does not strengthen mesh claims.
- **Materials / LookDev:** once real replacements exist, test whether material grouping reinforces rather than obscures environment hierarchy.
- **Technical Art / UC Integration:** only add a shared scene/import adapter after at least one real cross-repo replacement proves the contract useful.
- **Runtime / Optimization:** no performance claim exists; measure only after a real renderer/runtime consumes the composed scene.
- **Visual Observer / QA:** independently render/inspect the exact evidence and challenge numeric PASS versus actual readability.
- **Capability Cartographer:** track whether replacement-by-contract survives multiple department assets before proposing a shared horizontal environment contract.

## Next Environment / World Art pass

1. Read PR #2 exact-head CI and any Art Director / Visual Observer response first.
2. Prefer replacing **one** proxy with the first source-owned building, nature or object candidate rather than adding more proxy variety.
3. Preserve a before/after composition image and exact provenance for that replacement.
4. If no real department asset exists yet, do not inflate this into a world framework; HOLD or inspect the current scene visually instead.
