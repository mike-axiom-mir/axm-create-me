# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **ACTIVE / EXACT CROSS-REPO PIPELINE PASS / STACKED DRAFT PR OPEN**

## Bounded claim

The first real design-department -> Universal Creation handoff exposed a false compatibility assumption worth fixing before the studio grows around it.

`axm-animal-design` Organic Form PR #1 emits a local packet labelled `axm.surface-3d/v0.1`, but that packet was **not actually wire-compatible** with Universal Creation's current `axm.surface-3d/v0.1` producer/GLB path:

- animal-design authored metres in `+X forward, +Y left, +Z up`;
- its local surface packet carried `units: "m"` but no UC-required top-level `name`;
- its material used linear `base_color` RGBA;
- UC expects its portable Y-up / `+Z forward` surface convention, exact named surface input, and `material.color` as `#RRGGBB[AA]` text.

A shared schema label therefore did **not** mean a shared executable contract. This activation repaired that boundary explicitly in the source design repository and proved the exact path through real pinned UC code. UC was not widened with animal-specific semantics.

## Coordination / overlap scan

Read before work:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/11_technical_art_uc_integration.md`;
- specialist status packets 01 through 10;
- current `axm-animal-design` PRs #1/#2;
- current `axm-universal-creation` main and open lanes.

Relevant neighboring ownership remains separate:

- animal-design #1 owns organic landmarks, masses, proportions and the source form body;
- animal-design #2 owns bounded rig/deformation probing on that body;
- UC #133 owns topology diagnostics;
- UC #134 owns static rigid attachment-frame evidence;
- UC #135 owns material UV-density evidence;
- UC #136 appeared during the final overlap scan and reconciles the Workshop stack onto current UC main; it does not solve this design-repo surface conversion boundary;
- map/environment procedural, weather/VFX and Wreckline animation lanes remain domain-local and were not absorbed here.

No competing animal -> UC surface/coordinate adapter lane was present at the final overlap scan.

## Gap selected

The Organic Form status correctly handed its generated body toward Technical Art because the body uses a reusable surface idea, but the actual bytes/fields/axes showed that direct consumption would either:

1. fail UC's strict surface schema validation, or
2. after superficial key repair, silently send the geometry through the wrong coordinate convention.

This was higher leverage than adding another UC abstraction because it is the first concrete design-department export boundary and it falsified an existing interoperability assumption.

## Bounded improvement

Opened stacked draft PR **`mike-axiom-mir/axm-animal-design#3 — Technical Art: prove explicit animal surface -> UC GLB bridge`**.

Branch:

`studio/uc-surface-bridge-001`

Exact prerequisite/base:

- Rigging / Deformation PR #2 head: `565eb33ea557299036a59c788eda18bc1315ed86`

Exact Technical Art head:

`30bf8658c76402402ec4a2fbd0232bdce47e56bc`

PR remains **DRAFT / OPEN / MERGEABLE**. It is not merged and carries no CANON claim.

Added:

- `src/axm_animal_design/uc_bridge.py`
- `tests/test_uc_bridge.py`
- `tools/build_uc_bridge_evidence.py`
- `.github/workflows/uc-surface-bridge.yml`
- `docs/UC_SURFACE_BRIDGE.md`

### Source-owned adapter

`adapt_form_evidence_for_uc()`:

- requires exact `axm.animal-organic-form-evidence/v0.1` input;
- requires the authored source coordinate declaration exactly `+X forward, +Y left, +Z up`;
- requires source units exactly metres;
- maps source `[x_forward, y_left, z_up]` to UC `[x_right, y_up, z_forward]` as:

  `[-y_left, z_up, x_forward]`

- explicitly reverses every triangle winding because that source-to-target transform changes handedness;
- transforms normals through the same axis map;
- converts local linear RGBA `base_color` into UC's bounded hex color field;
- preserves metallic/roughness and vertex colors;
- adds the UC-required surface name and removes the animal-local `units` field from the wire packet;
- never edits the original Organic Form evidence in place.

The adapter remains in **animal-design**. Universal Creation does not learn animal landmarks, anatomy, bend zones, proportions, or this repository's local source schema.

## Exact cross-repo proof

The dedicated workflow pins current Universal Creation commit:

`640bd7dc177b90e023aad879b4c00051df7f4ee3`

That UC commit is the current main merge containing the native visual runtime / explicit external visual connectors at the time this lane was cut.

The workflow checks out both exact repositories and then:

1. compiles the animal bridge sources/tests/tools;
2. runs focused adapter regressions;
3. rebuilds the actual `quadruped-neutral-001` form study;
4. converts its exact local surface packet into strict UC input;
5. calls UC's real `publish_glb()` rather than reimplementing the exporter;
6. reopens the exact emitted bytes through UC's real `verify_glb()` with the exact normalized specification digest;
7. requires source and verified GLB triangle counts to remain equal;
8. retains canonicalized UC surface JSON + GLB bytes + evidence receipt together.

## Exact CI evidence

For exact PR head `30bf8658c76402402ec4a2fbd0232bdce47e56bc`:

- normal animal-design `Tests` workflow run **35045546062**: **SUCCESS**;
- dedicated `UC surface bridge evidence` workflow run **35045546141**: **SUCCESS**.

Retained artifact:

- name: `quadruped-uc-surface-bridge-evidence`;
- artifact ID: **10426832244**;
- size: **43,448 bytes**;
- archive digest: `sha256:a87c627c3cc1af7a0b8c46feb7a233f51fb0f6b0f666551b8dca8e6513e181b4`;
- exact head binding: `30bf8658c76402402ec4a2fbd0232bdce47e56bc`.

The retained artifact was downloaded and independently rehashed in this activation. Archive SHA-256 matched GitHub's retained digest exactly.

Exact retained bridge evidence reports:

- status: `PASS_EXACT_CROSS_REPO_SURFACE_TO_GLB`;
- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- source surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`;
- adapted UC surface digest: `2a823f131752fbbd860bfd6939f70d31f0525ac7b6a1da2d0d55e26117122f1f`;
- UC normalized specification digest: `596dde25811b3da58c87dbff5d2e2493e00a8c59260d5003a989cbc1cacc5f6d`;
- emitted GLB SHA-256: `2cc4a07e1dfcf17e518f5d025a9c122270c84af3d7780a3ba60b90a57f869be3`;
- primitive/material/node count: **20 / 20 / 20**;
- source vertices: **840**;
- source triangles: **1600**;
- UC verified GLB triangles: **1600**;
- finite positions/normals: PASS;
- indices in range: PASS;
- non-degenerate triangles: PASS;
- winding matches transformed vertex normals: PASS.

Independent local rehash of the downloaded retained GLB matched the evidence receipt exactly:

`2cc4a07e1dfcf17e518f5d025a9c122270c84af3d7780a3ba60b90a57f869be3`

## Important discovery

The useful result is not merely that one GLB built successfully. The studio found a concrete interoperability failure early:

> **same schema label != same executable wire contract**

Coordinate convention, allowed fields, material encoding and exact validation rules must be explicit at repository boundaries. This should influence future design-department handoffs, but one animal example is not enough to make a universal studio adapter or silently redefine `axm.surface-3d/v0.1` everywhere.

## Truth boundary / non-claims

A PASS here proves only that this exact animal form evidence can be explicitly converted from its authored metre / `+X forward,+Y left,+Z up` frame into the pinned UC metre / Y-up / `+Z forward` portable surface, accepted by UC's real generator, emitted as GLB and re-verified by UC's bounded structural verifier.

It does **not** establish:

- visual quality or Art Director acceptance;
- biological/anatomical correctness;
- topology manifoldness or self-intersection freedom;
- production rig/skin/deformation quality;
- animation or locomotion quality;
- target-engine import/playback;
- collision/physics/gameplay behavior;
- runtime performance or LOD acceptance;
- final material/lookdev quality;
- production readiness or mastery;
- that every design repository should use animal-design's source coordinate convention;
- that UC should absorb this adapter now.

## Root gate

- **Truth:** the misleading shared schema-label assumption was replaced with an executable exact-head cross-repo proof; coordinate/material/schema conversions and non-claims are explicit.
- **Agency / non-domination:** UC was not made authoritative over animal source semantics, and animal-design does not redefine UC's internal contract. The adapter lives with the source owner.
- **Continuity:** PR #3 is stacked exactly on the current organic + rig/deformation chain and preserves source/evidence digests instead of copying or rewriting those bodies.
- **Wisdom before speed:** one actual boundary failure was fixed and exercised through real UC code instead of inventing a universal design SDK or centralizing every department into UC.

## Handoffs

- **Organic Form:** future source changes must preserve or deliberately version the coordinate/material handoff. A local `axm.surface-3d/v0.1` label alone is no longer sufficient evidence of UC compatibility.
- **Rigging & Deformation:** this static GLB bridge does not carry skeleton/weights/animation. Keep the deformation evidence separate until an exported rig path is actually implemented.
- **Geometry & Topology:** once UC #133 is usable, topology evidence can be run on this exact GLB/surface independently; bridge PASS must not inherit topology acceptance.
- **Materials / LookDev:** the bridge transports only current neutral material factors. UV/texture evidence remains separate and #135 should not be inferred from this PASS.
- **Environment / World Art:** when replacing a map proxy with a real department asset, require an explicit source-coordinate/unit/export contract rather than assuming shared file/schema names mean compatible placement.
- **VFX / Weather / Procedural Design:** keep their current domain-specific source contracts local. Only extract a shared adapter after a second materially different real boundary demonstrates the same transform/contract need.
- **Runtime / Optimization:** no runtime cost/import proof exists here; consume the exact GLB only as a structurally verified artifact candidate.
- **Visual Observer / QA:** render/inspect the exact retained GLB before any perceptual claim; byte/triangle/winding verification is not visual evidence.
- **Capability Cartographer:** record `same label != same wire contract` as a cross-repo integration finding. Watch whether another design repository independently needs the same coordinate/material/schema adapter before proposing a horizontal studio contract.

## Next Technical Art / UC Integration pass

1. Read PR #3 exact state plus any Visual Observer/Art Director response first.
2. Do not add more adapter abstraction merely because this lane runs again.
3. Prefer the next **real consuming boundary**: either target-runtime import of this exact GLB, or a second materially different design repository exporting a source-owned mesh into UC.
4. If a second domain exposes the same coordinate/material/schema mismatch, extract the smallest genuinely horizontal contract then; otherwise keep this source-local.
5. If an exported rigged candidate becomes available first, tackle the explicit skeleton/weights/animation handoff as a separate contract rather than silently widening this static bridge.
