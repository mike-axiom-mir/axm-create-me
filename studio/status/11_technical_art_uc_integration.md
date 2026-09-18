# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-18

State: **PASS_BUILDING_MATERIAL_EXACT_OWNER_TO_REAL_GODOT / PASS_CURRENT_UC_EXECUTABLE_RECEIVER_CLOSURE_CONTINUITY / MAP_TA_PR40_HEAD_457C086D_DRAFT_MERGEABLE / TESTED_UC_13A82334 / CURRENT_UC_3E6E5140 / SAME_HEAD_REAL_GODOT_RUN_35292755078 / CLOSURE_RUN_35292755029 / TARGET_ARTIFACT_10527162239_SHA_D760A61C / CLOSURE_ARTIFACT_10526083225_SHA_A835E4D7 / HOLD_VISUAL_RUNTIME_ENVIRONMENT_ADOPTION_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, active Building owner lanes, the receiving Map Technical Art lane, and fresh `axm-universal-creation` before acting.

`axm-create-me` remains **coordination only**. Implementation/evidence changes remain in the existing Map Technical Art PR #40. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Bounded gap selected

The Building constellation already had the correct ownership split:

**Hard Surface owns service-surface source geometry → Geometry owns UV chart/sampling → Materials owns retained checker/material meaning → Technical Art owns material-bearing GLB and exact receiver transport → UC remains a generic observer → Godot is a target receiver.**

The new exact path had one provenance blind spot: `src/axm_uc/material_uv_evidence.py` imports executable helpers from `src/axm_uc/asset_geometry.py`, while the Building workflow pinned only the entry-module blob. Dependency semantics could therefore drift while the entry blob stayed unchanged.

The repair stayed on existing Map Technical Art PR #40 and added only reusable Technical Art receiving-evidence plumbing. No Building, Geometry, Materials, Runtime, Environment, or UC product policy was centralized or duplicated.

## Exact identities

Technical Art:

- repository: `mike-axiom-mir/axm-map-design`;
- PR #40 branch: `studio/technical-art-building-planar-role-uc-index-bridge-001`;
- exact tested head: **`457c086d27f3a9c010b365fe75d54b8f812b01ef`**;
- state at verification: **open / draft / mergeable**.

Owner chain:

- Hard Surface head: **`fbfa3b47048755b45dac91451171d5511c8d4f47`**;
- Geometry head: **`02944a9f10528a051603df3a6fd7b3183730773f`**;
- Materials head: **`5f096369eee2ef44275ea8f1c7dc1b6e564e71c8`**;
- retained Materials PNG SHA-256: **`e932cdd94d370184c7361862d5064149cc193e3a8fd80b269cab6543c0919198`**;
- retained/reloaded RGBA8 SHA-256: **`02f8f464eabc734a3be687a7706edf8b8f62ece834fa981c8c993fbb8227bb4b`**.

Universal Creation:

- tested material-observer head: **`13a823349a568db266099564d6f5d8d7bac48b2b`**;
- fresh current UC head: **`3e6e51402fdb681b4bbed1bc7e816939b06a83b5`**;
- tested head is an ancestor of current;
- current is six commits ahead, with intervening changes confined to unrelated physics/report paths;
- `src/axm_uc/material_uv_evidence.py` blob at both heads: **`bc7aa2ffc2c598d75a78739c70fd349138f511e2`**;
- `src/axm_uc/asset_geometry.py` blob at both heads: **`628c862a46b46f814a67521e9558e343dfe000a1`**;
- **UC product code was not modified.**

## Smallest reusable repair

Added `tools/technical_art_python_dependency_closure.py` plus one bounded continuity workflow.

The binder is domain-neutral Technical Art evidence tooling. It recursively discovers tracked local Python imports inside one declared package root, binds each file by exact Git-blob identity, and fails closed on working-tree drift, package/repository escape, ambiguous relative imports, and dynamic imports. Standard-library/third-party runtime identity remains outside the claim.

For UC's material observer, the complete local executable closure is exactly two files:

- `material_uv_evidence.py` → **`bc7aa2ffc2c598d75a78739c70fd349138f511e2`**;
- `asset_geometry.py` → **`628c862a46b46f814a67521e9558e343dfe000a1`**.

A deliberate dependency-only mutation of `asset_geometry.py` is rejected even though the entry module is untouched, directly proving the old entry-only pin had a real blind spot.

## Same-head owner → GLB → UC → real Godot proof

The pre-existing Building material bridge workflow automatically reran on exact TA head `457c086d...` and remained green:

**`35292755078 — Technical Art Building utility-panel material GLB bridge evidence`: SUCCESS**

Python 3.11 and 3.13 contract jobs passed, and the exact-owner-to-target path passed in real **Godot 4.7.2 GL Compatibility**.

Scoped result:

**`PASS_EXACT_OWNER_UV_MATERIAL_IMAGE_TO_CURRENT_UC_AND_REAL_GODOT__HOLD_VISUAL_RUNTIME_ADOPTION`**

Exact carrier:

- GLB SHA-256: **`dc65fec67aa6aba4e4a14895b38122ae89b6eafba7f256b07c1a7c9e344bbd68`**;
- one surface / four vertices / four UVs / six indices;
- UV corners: `(0.15625, 0.03125)`, `(0.84375, 0.03125)`, `(0.84375, 0.96875)`, `(0.15625, 0.96875)`;
- imported image: **512 × 512**, **1,048,576 RGBA8 bytes**, exact retained RGBA8 digest;
- imported material: StandardMaterial3D with albedo texture, metallic ≈ **0.18**, roughness ≈ **0.62**;
- target state: **`PASS_TARGET_HOST_IMPORTED_MATERIAL_BEARING_GLB`**.

UC observation on this exact carrier remains ~**320 / 320 texels per metre**. The aspect-blind negative remains ~**341.333 / 465.455 texels per metre**, exposing the intended anisotropy distinction.

Same-head target artifact:

- ID: **`10527162239`**;
- size: **`47,057 B`**;
- files: **28**;
- GitHub SHA-256: **`d760a61cd95f756de7e0143096bb7923a0dfbaff0d480ccff9a17dfd19f0c70c`**;
- independently downloaded SHA-256: **exact same digest**.

## Fresh current-UC executable receiver continuity

Separate bounded continuity workflow:

**`35292755029 — Technical Art Building material UC receiver closure continuity`: SUCCESS**

Scoped result:

**`PASS_BUILDING_MATERIAL_CURRENT_UC_EXECUTABLE_RECEIVER_CLOSURE_AND_OBSERVATION_IDENTICAL_TO_TESTED_RECEIVER`**

It reuses the exact carrier bytes and observes them independently through tested UC `13a82334...` and fresh current UC `3e6e5140...`.

Exact continuity:

- tested/current positive reports: **identical**;
- tested/current aspect-blind-negative reports: **identical**;
- positive directional density: **320.0 / 320.0 texels per metre**;
- positive anisotropy: **1.0**;
- negative directional density: **341.3333333333333 / 465.45454545454544 texels per metre**;
- negative anisotropy: **1.3636363636363638**.

Closure artifact:

- ID: **`10526083225`**;
- size: **`106,473 B`**;
- files: **43**;
- GitHub SHA-256: **`a835e4d7299c68c5e9ac708ade47b17578ffc9a35b2c9758b987bd4307c80df4`**;
- independently downloaded SHA-256: **exact same digest**.

The target-host run is not relabelled as a fresh current-UC Godot runtime test: Godot receives the unchanged exact carrier, while the second proof establishes that current UC's complete local material-observer executable closure and resulting observations are identical to the tested receiver.

## Same-head regression context

Relevant existing Technical Art workflows on exact TA head `457c086d...` are green, including:

- Building utility-panel material GLB bridge: **`35292755078` — SUCCESS**;
- Building material UC receiver closure continuity: **`35292755029` — SUCCESS**;
- Building planar-role UC index bridge: **`35292755021` — SUCCESS**.

This does not promote unrelated owner lanes or claim that every future workflow is green.

## Authority / non-overlap boundary

- **Hard Surface:** source service-surface geometry/domain.
- **Geometry:** UV chart and directional sampling handoff.
- **Materials / LookDev:** checker values, material meaning, review-density target, appearance, replacement policy.
- **Technical Art:** material-bearing package, coordinate/data transport, receiver/evidence plumbing.
- **Environment:** receiving-world adoption/rollback.
- **Runtime:** runtime cost and target-device acceptance.
- **Art Direction / independent Visual QA:** appearance acceptance.
- **Universal Creation:** generic observation only; no Building/Materials policy added.
- **`axm-create-me`:** coordination/status only.

## Explicit HOLDs

This PASS does **not** establish production UV/source adoption, final look quality, Environment default adoption, Runtime/device CPU/GPU/FPS/VRAM/thermal acceptance, a universal texel-density target, a universal Godot material/import policy, CANON, or production/game readiness.

## Prior lineage preserved

The previous Object Technical Art continuity state remains valid in Object TA PR #16 and retained artifact `10525954724`; this Building activation does not overwrite or reinterpret it.

## Four-root check

**Truth:** the gap was an executable dependency-provenance hole, not a visual defect. The dependency-only negative is retained, exact carrier bytes are bound, real target evidence is same-head and the current-UC continuity claim is kept distinct from the target-host claim.

**Agency / non-domination:** Hard Surface, Geometry, Materials, Technical Art, Environment, Runtime and Art/QA keep separate acceptance authority; UC remains generic.

**Continuity:** owner heads, exact carrier, exact Materials pixel identity, tested/current UC heads, complete executable closure, same-head Godot receipt and both retained archives are explicit.

**Wisdom before speed:** one small reusable closure binder closes the blind spot instead of duplicating material logic or centralizing Building semantics into UC.

## Current state

`PASS_BUILDING_MATERIAL_EXACT_OWNER_TO_REAL_GODOT / PASS_CURRENT_UC_EXECUTABLE_RECEIVER_CLOSURE_CONTINUITY / MAP_TA_PR40_HEAD_457C086D_DRAFT_MERGEABLE / TESTED_UC_13A82334_ANCESTOR / CURRENT_UC_3E6E5140 / CLOSURE_2_FILES_IDENTICAL / CARRIER_DC65FEC6 / PNG_E932CDD9 / RGBA_02F8F464 / SAME_HEAD_REAL_GODOT_RUN_35292755078_SUCCESS / CLOSURE_RUN_35292755029_SUCCESS / TARGET_ARTIFACT_10527162239_47057B_28_FILES_SHA_D760A61C / CLOSURE_ARTIFACT_10526083225_106473B_43_FILES_SHA_A835E4D7 / UC_PRODUCT_UNCHANGED / HOLD_VISUAL_RUNTIME_ENVIRONMENT_ADOPTION_CANON_PRODUCTION / COORDINATION_ONLY`
