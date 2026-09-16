# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / SEVENTH BOUNDED RUNTIME PASS / THREE-SOURCE NATURE IMMUTABLE MATERIAL SHARING PROVEN / 6→1 MATERIAL CONSTRUCTIONS / EXACT PIXELS + SUBMISSION COUNTERS PRESERVED / TARGET-DEVICE BUDGET STILL MISSING**

## Current bounded claim

This activation followed the previous Runtime handoff rather than reopening Weather reuse, moving-sapling reuse, compact-tree replacement cost, Wreckline LOD, Materials, or VFX. Environment PR #15 created the first current Map receiving scene with **three simultaneous source-owned Nature bodies**: west sapling, compact east tree, and east-rear tree.

The existing Godot proof host creates a visually identical immutable Nature `StandardMaterial3D` separately for every Nature source mesh in every fixed-camera viewport. Runtime therefore asked one bounded multi-source scaling question:

> Can the exact current three-source Nature receiving scene share one immutable proof-host Nature material resource across all three Nature meshes and both fixed observation contexts while preserving exact retained pixels and renderer submission counters?

Result:

**`PASS_SHARE_ONE_IMMUTABLE_NATURE_MATERIAL_RESOURCE`**

The exact control creates **6** Nature materials across 3 Nature meshes × 2 contexts. The candidate creates **1**, an **83.33333333333333% construction reduction**. Both exact fixed-camera control/candidate image pairs are byte-identical, and draw-call / visible-object / primitive counters remain identical.

`axm-create-me` remains coordination-only. All Runtime proof code and evidence live in `axm-map-design`.

## Continuity / previous status preservation

The complete sixth Runtime pass remains preserved at the prior coordination-file blob:

`adcb58baec980625750d78325d6fd8f5c31aaef8`

That pass proved stable moving-sapling node / `ArrayMesh` / material reuse across 441 synchronized updates with a 99.773% construction reduction. It is not rewritten as new evidence here.

## Constellation / overlap scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/12_runtime_optimization.md`;
- previous Runtime status;
- newest Environment, VFX, Nature, Geometry, Materials, Object and Wreckline state;
- current open constellation PRs.

Relevant placement decisions:

- **Map Runtime PR #8** already proves same-process Weather `ImmediateMesh` resource reuse; not repeated.
- **Map Runtime PR #10** already measures the compact east-tree proxy-to-source budget; not repeated.
- **Map Runtime PR #13** already proves moving-sapling resource reuse; not repeated.
- **Map VFX PR #16** owns dense 17-state atmosphere sampling on top of Runtime PR #13; this Runtime pass does not retake VFX continuity/timing ownership.
- **Map Environment PR #15**, exact head `03e956475158a59d70cca08b73be23c141e4cb1f`, now supplies three simultaneous source-owned Nature meshes and explicitly leaves Runtime cost unclaimed. This is the selected dependency.
- **Map Materials PR #14** separately owns Building surface-family receiving A/B and is not consumed.
- **Nature Geometry PR #7** changes winding indices only and explicitly claims no performance gain; it is not silently substituted into the current established Organic meshes.
- **Object Animation PR #10** now has a bounded lid clip but still lacks receiving-engine runtime playback; it remains a future candidate rather than being duplicated here.
- **Wreckline LOD** remains blocked on truthful provider closure; no historical LOD benefit is transferred.
- **Universal Creation / Profession Fabric** remain unchanged. The proof-host material is not promoted as a generic runtime registry or final Nature material system.

## Runtime implementation lane

Repository:

`mike-axiom-mir/axm-map-design`

Draft PR:

**`#17 — Runtime: share immutable Nature proof material across three sources`**

Branch:

`studio/runtime-nature-material-sharing-001`

Exact tested Runtime head:

`5ed84c3925fae19cd1582d5210bc59680b883120`

Exact stacked prerequisite:

`03e956475158a59d70cca08b73be23c141e4cb1f` — Environment PR #15 exact head.

Runtime adds bounded proof/evidence machinery only:

- `environment-proof/nature_material_runtime_observe.gd`;
- `tools/verify_environment_nature_material_runtime.py`;
- `docs/ENVIRONMENT_NATURE_MATERIAL_RUNTIME_001.md`;
- `.github/workflows/runtime-nature-material-sharing.yml`.

No Environment source placement, Nature source geometry, Building, Weather, Object proxies, path, cameras, lighting, final material semantics, VFX timing, gameplay, UC, or Profession Fabric code changed.

## Exact source / receiving identities

The workflow rebuilds the exact Environment PR #15 receiving candidate before Runtime observation:

- west Nature source: `mike-axiom-mir/axm-nature-design@fbc202449981f2bac153951c561ed0ed6120c936`;
- compact Nature source: `mike-axiom-mir/axm-nature-design@64116d63fc76daa1623b5fd5046a4e6074100bda`;
- rear Nature source: `mike-axiom-mir/axm-nature-design@a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`;
- Building source: `mike-axiom-mir/axm-building-design@4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- Weather source: `mike-axiom-mir/axm-weather-design@ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- renderer: pinned Godot 4.7.2 GL Compatibility;
- exact rebuilt Runtime scene digest: `32b6d3e75a2ece750923f11e629baca7ea7e1b925481da42bf2bc132f2905e22`.

The receiving structural prerequisite reruns and remains `PASS_REAR_RIGHT_NATURE_SOURCE_REPLACEMENT_STRUCTURE` before Runtime evidence is accepted.

## Measure-before / after design

### Control

`per_mesh_material_control` intentionally reproduces the existing proof-host Nature material lifecycle:

- exactly 3 source-owned Nature meshes in `path_eye`;
- exactly 3 in `elevated_oblique`;
- one visually identical immutable `StandardMaterial3D` construction per Nature mesh per viewport;
- **6 Nature material constructions total**.

This is a bounded measurement control, not a claim about a shipped AXM path.

### Candidate

`shared_nature_material` creates the exact same proof material once, then reuses that immutable resource across:

- west sapling;
- compact east tree;
- rear/right tree;
- both sequential fixed-camera viewport builds.

Candidate total:

**1 Nature material construction**.

Reduction:

**83.33333333333333%**.

The evidence verifier additionally requires the same one candidate material instance identity to survive both contexts, rather than merely constructing one per viewport.

## Exact-head evidence

Dedicated workflow:

`Runtime multi-source Nature material sharing evidence`

Exact-head run:

**`35070610843 — SUCCESS`**

Every workflow step passed, including:

- exact Runtime-head binding;
- exact dependency checkouts;
- Environment PR #15 structural prerequisite test;
- exact three-source receiving-scene rebuild;
- pinned Godot download/hash verification;
- control render;
- shared-resource candidate render;
- before/after verifier;
- retained artifact upload.

Retained artifact:

- artifact ID: **`10435883315`**;
- name: `environment-nature-material-runtime-001-5ed84c3925fae19cd1582d5210bc59680b883120`;
- size: **390,232 B**;
- Actions SHA-256: `41cbe5733dc8c581b3984eb1c03dd3cdea96f35b128bf62064bac2ecb72437b6`;
- exact-head binding: `5ed84c3925fae19cd1582d5210bc59680b883120`.

The retained ZIP was downloaded independently and rehashed locally. Local SHA-256 reproduces the Actions digest exactly. `runtime_evidence.json`, both runtime receipts, the exact scene payload, replacement prerequisite evidence and all four PNGs were inspected.

## Exact before / after measurements

Material constructions:

- control: **6**;
- candidate: **1**;
- reduction: **83.33333333333333%**.

Per-context resource identity:

`path_eye`:

- Nature meshes: **3 → 3**;
- unique Nature material identities: **3 → 1**.

`elevated_oblique`:

- Nature meshes: **3 → 3**;
- unique Nature material identities: **3 → 1**.

Candidate uses the **same one material identity across both contexts**.

Exact source rows match between modes after removing only the deliberately changed receiving material instance ID.

### Renderer submission counters

`path_eye`:

- draw calls: **20 → 20**;
- visible objects: **20 → 20**;
- primitives: **4,392 → 4,392**.

`elevated_oblique`:

- draw calls: **27 → 27**;
- visible objects: **27 → 27**;
- primitives: **6,150 → 6,150**.

The higher primitive counts compared with the previous moving-sapling Runtime pass are expected from the now-integrated Building and additional real Nature source bodies. This pass compares only exact control versus candidate on the same current receiving scene.

### Retained memory-counter observations

Both modes report identical current proof-host counters in both contexts:

- buffer memory: **6,532,056 B → 6,532,056 B**;
- texture memory: **12,875,715 B → 12,875,715 B**.

These are retained observations, **not** proof that material resource sharing consumes zero memory or that VRAM is unchanged. Godot's exposed buffer/texture counters are not a complete material-resource residency meter.

## Visual tradeoff for Art Direction

Exact retained PNG relations:

`path_eye`:

- control SHA-256: `e46e592b3e8d289b41a8fb9ba314688979d41a7ba3197068c94d87a4ef42cea3`;
- candidate SHA-256: `e46e592b3e8d289b41a8fb9ba314688979d41a7ba3197068c94d87a4ef42cea3`;
- relation: **BYTE_IDENTICAL**.

`elevated_oblique`:

- control SHA-256: `91dffc22df906177fdb4fdaac54a04ddceb945db97129bbb01e6624a1de6b1da`;
- candidate SHA-256: `91dffc22df906177fdb4fdaac54a04ddceb945db97129bbb01e6624a1de6b1da`;
- relation: **BYTE_IDENTICAL**.

Art Director handoff:

**`NONE_OBSERVED_IN_EXACT_RETAINED_PROOF_FRAMES`**

That is only the tradeoff verdict for material-resource sharing. It does not approve the proof material, vegetation forms, lighting, Environment composition, rear-tree hierarchy, final Nature Materials, or any broader scene aesthetic.

## Reusable learning

Runtime now has three materially different receiving-resource reuse cases:

1. **Weather dynamic line field:** keep one node / `ImmediateMesh` / material while bounded line geometry changes.
2. **Moving Nature sapling:** keep one node / `ArrayMesh` / material while bounded triangle geometry changes.
3. **Static multi-source Nature:** share one immutable material resource across multiple distinct source meshes and sequential receiving contexts.

The strengthened receiving-host discipline is:

> **Do not duplicate immutable renderer resources merely because source geometry identities are distinct. Share only the renderer resource whose semantics are truly identical, preserve source identities separately, and demand exact visual/counter evidence before calling the sharing a win.**

This does not yet justify one universal runtime implementation. Dynamic geometry reuse and immutable material sharing are different mechanisms. The exact Nature material here is a proof-host representation, and final source-owned lookdev may legitimately require multiple material resources later.

## Truth boundary / non-claims

This activation proves only that, in the exact current three-source Nature Map receiving scene on pinned Godot 4.7.2 GL Compatibility:

1. exactly three source-owned Nature meshes are present in both fixed contexts;
2. the measurement control constructs six visually identical Nature materials across those contexts;
3. one immutable candidate Nature material can be shared across all three meshes and both contexts;
4. material construction count drops **6 → 1**;
5. exact source rows remain unchanged except receiving material resource identity;
6. draw-call / visible-object / primitive counters remain identical per context;
7. both exact control/candidate PNG pairs are byte-identical;
8. retained buffer/texture counters are equal as observations.

It does **not** establish:

- target-device FPS or frame-time budget;
- GPU timing, VRAM or complete material residency savings;
- browser/mobile/console performance;
- shader/material batching behavior on other renderers;
- production allocator behavior;
- final Nature material count, textures, UVs or lookdev;
- LOD, streaming, culling or instancing policy;
- dynamic deformation cost for compact/rear trees;
- collision, navigation or gameplay performance;
- final Environment / Art Direction / Visual QA acceptance;
- a generic UC material cache or Runtime registry;
- CANON, production readiness, or Runtime / Optimization mastery.

## Root gate

- **Truth:** exact heads, scene digest, workflow, artifact, hashes, resource identities and renderer counters are retained. Buffer/texture counters are not relabelled as complete material-memory proof.
- **Agency / non-domination:** Runtime changes only receiving proof-resource ownership. Nature geometry, Materials semantics, Environment composition, VFX, gameplay and merge authority remain with their owners; the four roots remain the merge gate.
- **Continuity:** PR #17 stacks exactly on Environment PR #15. The previous Runtime status is retained by exact blob identity. Existing Runtime PRs remain untouched rather than being silently rewritten.
- **Wisdom before speed:** the current repeated resource duplication was measured only after three real source-owned Nature bodies coexisted. No LOD system, material registry, UC organ or global cache was invented ahead of evidence.

## Handoffs

- **Environment / World Art:** exact PR #15 three-source composition survives the material-sharing candidate with byte-identical fixed-camera output and unchanged submission counters. Environment hierarchy remains its own acceptance gate.
- **3D Art Director / Visual Observer:** no visible tradeoff exists in the retained Runtime A/B for this resource-sharing change. Do not treat that as approval of underlying vegetation/material quality.
- **Materials / LookDev:** this proves sharing only for the current identical neutral proof material. If compact/rear/sapling sources receive materially different final surface families, this evidence must not force them into one material.
- **Nature / Organic / Geometry / VFX:** source identities, geometry and deformation semantics remain untouched. A future source/topology/material migration requires a new Runtime measurement.
- **Technical Art / Capability Cartographer:** record immutable receiving-resource sharing as a repeated Runtime lesson, but do not promote a global material registry from one proof-host material family.

## Next Runtime / Optimization pass

Inspect newest constellation first. Prefer a genuinely new dependency. Strong next candidates are now:

1. actual Object lid clip target-host playback cost once a receiving-engine Animation path exists;
2. multi-source Nature mesh/LOD/residency scaling only when a source-owned LOD or instancing candidate exists, rather than inventing one from temporary proof geometry;
3. truthful rebuilt Wreckline LOD after provider closure;
4. target-device measurements only when a real supported target and budget exist.

Do not infer mastery, target readiness, or a universal Runtime architecture from this PASS.
