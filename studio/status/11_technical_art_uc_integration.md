# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_GEOMETRY33_SOURCE_EXTERIOR_TO_CURRENT_UC_PARITY_BRIDGE / PASS_REAL_GODOT_IMPORTED_INDEX_PARITY_DISTINGUISHED / OBJECT_TA_PR16_HEAD_7FA10BFF_DRAFT_MERGEABLE / GEOMETRY33_606D8189 / HARD_SURFACE34_77A4058B / CURRENT_UC_7BE1A28C_GENERIC_UNCHANGED / RUN_35284614372_SUCCESS / ARTIFACT_10523327698_SHA_5E72FF75 / HOLD_SOURCE_ADOPTION_RENDERED_MATERIALS_QA_RUNTIME_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, this status, fresh Geometry / Hard Surface / Materials / Animation / Environment / Runtime / Visual-QA state, the existing Object Technical Art lane, and fresh `axm-universal-creation` before acting.

`axm-create-me` remains **coordination only**. Product/evidence changes stay in `mike-axiom-mir/axm-object-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap selected

Independent Visual QA's retained Object winding result explicitly left production adoption blocked on a **Technical Art transport** decision. Geometry PR #33 had since produced a deterministic closed-shell orientation candidate, and Hard Surface PR #34 independently established that candidate as matching the source-owned exterior intent on every face. Materials PR #6 had already observed a receiver-local reversed-order behavior in one Godot review path.

The missing cross-repo contract was therefore not another Geometry, Hard Surface, Materials, Runtime, or UC feature. It was the existing Object Technical Art PR #16 boundary:

**source-owned exterior intent → Geometry orientation candidate → Technical Art coordinate/parity transport → generic UC GLB/rigid scene graph → real Godot imported target representation.**

This work stayed on the existing TA lane rather than opening a duplicate.

## Exact lane and owner inputs

Technical Art receiving lane:

- repository: `mike-axiom-mir/axm-object-design`
- PR: **#16 — Technical Art: carry source-owned rigid parts through UC scene graph**
- branch: `studio/technical-art-rigid-scene-handoff-001`
- exact tested head: **`7fa10bff981e49c9ea3396b83c4c6d731a90d146`**
- PR remains **open / draft / mergeable**.

Geometry owner:

- PR #33 exact head: **`606d8189a3bf4502141d8038f08d35d421829dde`**
- owner result: `PASS_DERIVED_RIGID_SHELL_OUTWARD_ORIENTATION_CANDIDATE`
- source vertices: `468`
- source triangles: `812`
- closed rigid groups: `31`
- orientation conflict edges: `0`
- candidate positive signed-volume groups: `31 / 31`
- source positions / face sets / rigid grouping preserved; candidate changes orientation only.

Hard Surface owner:

- PR #34 exact head: **`77a4058b305fab7fd04dab94781b9460f089727e`**
- owner result: `PASS_SOURCE_OWNED_RIGID_SHELL_EXTERIOR_INTENT`
- exact source SHA-256: **`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`**
- Geometry candidate faces matching source exterior intent: **`812 / 812`**
- face mismatches: **`0`**.

Universal Creation consumed by the proof:

- exact UC head: **`7be1a28c43a88c7e40f7d0c039aefd753d5e70d9`**
- `src/axm_uc/procedural_3d.py` exact Git blob: **`cdb654d4d0f68a4ca7539d98a985d7a70cf7ee36`**
- `src/axm_uc/rigid_scene_graph.py` exact Git blob: **`fada5e5e06e110b48c7c9886e6a7f73c5c3a2d44`**
- **UC product code was not modified.**

## Smallest reusable repair

Added a Technical Art evidence adapter, `tools/build_object_geometry_front_face_transport.py`, which consumes the two owner receipts instead of copying their domain algorithms.

The adapter binds:

1. the exact Object source identity;
2. Geometry's exact orientation candidate and receipt;
3. Hard Surface's exact source-exterior-intent receipt;
4. the existing source→UC coordinate map **`[x,y,z] -> [x,z,y]`**;
5. that map's determinant **`-1`**;
6. generic UC `build_glb` and `rigid_scene_graph` publication;
7. the source-owned lid / keeper / hinge hierarchy already carried by TA.

Because the source→UC map changes handedness, the parity-correct path reverses each of the **812** already exterior-authorized Geometry triangles exactly once at that boundary. An otherwise identical unadapted path with zero reversals is retained as the negative.

Pre-target mathematical gates prove:

- parity-corrected winding reversals: **`812`**;
- unadapted winding reversals: **`0`**;
- minimum corrected geometric-normal alignment to mapped source exterior: approximately **`0.9999999999999998`**;
- maximum unadapted alignment to mapped source exterior: approximately **`-0.9999999999999998`**;
- closed static localization residual: **`0.0 m`** on both variants.

Exact current-UC outputs:

- corrected GLB: **`90,868 B`**, SHA-256 **`c3326180d7626b224e16d372c2ff5f6fe47a6c9d13241d8225cea7629e58bd83`**;
- unadapted negative GLB: **`90,868 B`**, SHA-256 **`708926421688fbc9cc727aadb21023b4e543b174ac1434fd5387d732c2d498a2`**.

No Object exterior-intent rule, Geometry orientation algorithm, Materials rule, renderer policy, or source-specific winding table was added to UC.

## Retained failed observer attempts

Truth-before-story keeps two failed real-target observer attempts visible.

### Workflow `35284070145`

The first Godot observer compared backface-cull and two-sided renders of the complete closed, uniform, unlit shell. The transport math was green, but the visual observer was insensitive: corrected / unadapted and back-cull / two-sided images were pixel-identical.

Failed artifact:

- ID `10522952405`
- size `56,527 B`
- SHA-256 `59c73769d877e5435259d42324b612adc6b38b92f94bcd7ae770c0d22de7e6ed`.

### Workflow `35284337932`

The observer was hardened to use `MeshInstance3D.material_override`, verify the requested cull mode on every imported mesh, and require nonblank object coverage. It still remained non-discriminating for the complete watertight uniform shell:

- active cull modes were verified;
- object coverage was substantial in all three views;
- corrected / unadapted full-shell silhouettes still did not distinguish orientation.

Failed artifact:

- ID `10523313833`
- size `56,640 B`
- SHA-256 `160a53147fc7079dcc2ee76d97331dea9da25afd2eb85490d977b57a8a8923b9`.

No threshold was weakened and no false renderer PASS was narrated. The evidence oracle was changed instead.

## Real-target proof

The final observer, `rigid-proof/front_face_index_observe.gd`, imports the exact UC-generated GLBs through real **Godot 4.7.2** / GL Compatibility and inspects the target's actual imported `MeshInstance3D` vertex/index arrays directly.

It compares each of the 31 closed rigid groups in the parity-corrected and unadapted pair and measures signed volume from the imported triangle index order. This is a representation-level receiving proof, not a claim about all Godot renderers or all glTF assets.

Scoped target result:

**`PASS_OBJECT_GEOMETRY33_CURRENT_UC_GLTF_GODOT_IMPORTED_INDEX_PARITY_DISTINGUISHED`**

Exact dedicated workflow:

**`35284614372 — Object Technical Art Geometry front-face transport`: SUCCESS**

Both Python **3.11** and **3.13** jobs completed successfully. The 3.11 lane also ran the real Godot target observer.

Exact real-target observations:

- corrected mesh groups: **`31`**;
- corrected triangles: **`812`**;
- corrected negative signed-volume groups: **`31 / 31`**;
- corrected positive groups: **`0`**;
- corrected ambiguous groups: **`0`**;
- unadapted mesh groups: **`31`**;
- unadapted triangles: **`812`**;
- unadapted positive signed-volume groups: **`31 / 31`**;
- unadapted negative groups: **`0`**;
- unadapted ambiguous groups: **`0`**;
- groups with opposite imported orientation: **`31 / 31`**;
- groups with matching absolute signed-volume magnitude: **`31 / 31`**;
- maximum signed-volume magnitude delta: **`0.0 m³`**;
- maximum relative magnitude delta: **`0.0`**;
- imported face-geometric normal versus imported vertex-normal dot is essentially anti-parallel in both variants, approximately `-1` across **2436** sampled triangle corners per variant.

This binds a deterministic receiver convention for **this exact path**. It does **not** authorize extrapolating the mathematical sign into a universal Godot front-face rule.

## Transport decision

The bounded Technical Art contract is now:

- Hard Surface owns source exterior intent;
- Geometry owns the outward-orientation candidate;
- Technical Art performs exactly one parity correction at the determinant `-1` source→UC coordinate boundary;
- UC remains generic publication / scene-graph machinery;
- the exact Godot imported-index representation is observed and retained as target evidence;
- any later renderer/material-specific order adaptation stays receiver-local unless independently proven broader.

In particular, Materials PR #6's previously observed local `[a,c,b]` behavior is **not** promoted into source geometry or generic UC by this activation.

## Retained final evidence

Final artifact:

- ID: **`10523327698`**
- name: `object-technical-art-front-face-index-transport-7fa10bff981e49c9ea3396b83c4c6d731a90d146`
- size: **`34,513 B`**
- GitHub SHA-256: **`5e72ff7568c8f882b50caed78c3e3f3b5524aabae05c17e597b41d98fc944ebd`**
- independently downloaded SHA-256: **`5e72ff7568c8f882b50caed78c3e3f3b5524aabae05c17e597b41d98fc944ebd`** — exact match
- retained files: **`12`**.

Handoffs were returned to:

- Technical Art PR #16 — comment `5722347916`;
- Geometry PR #33 — comment `5722348936`;
- Materials PR #6 — comment `5722350034`.

## Authority / non-overlap boundary

- **Hard Surface:** source exterior intent.
- **Geometry:** candidate orientation derivation.
- **Technical Art:** coordinate/parity transport and exact receiver representation evidence.
- **Materials / independent Visual QA:** rendered/shaded acceptance and any receiver-local presentation adaptation.
- **Runtime:** target-device performance and runtime acceptance.
- **Universal Creation:** generic transport/publication only; unchanged.
- **`axm-create-me`:** coordination/status only.

## Explicit HOLDs

This PASS does **not** establish:

- source adoption / replacement of the current Object source mesh;
- a universal Godot front-face or winding rule;
- final backface-cull visual coherence under production materials;
- final Materials / Art Direction / independent Visual-QA acceptance;
- Runtime/device CPU/GPU/FPS/VRAM/thermal acceptance;
- CANON;
- production or game readiness.

The previous Object current-world motion transport PASS on Map TA PR #45 remains retained separately and is not rewritten by this activation. The current activation solves the separate static exterior-orientation transport boundary requested by the prior QA handoff.

## Four-root check

**Truth:** the two insensitive culling-observer attempts remain explicit failures; the final PASS uses a real target representation oracle that actually distinguishes the two exact variants. No failed silhouette test was relabeled green.

**Agency / non-domination:** Hard Surface keeps source exterior authority; Geometry keeps orientation derivation; Materials/QA keep visual acceptance; Runtime keeps device authority; UC does not absorb Object-specific policy.

**Continuity:** the existing TA PR #16, exact source identity, exact Geometry/Hard Surface owner heads, existing UC transport, source-owned hierarchy and prior QA history were bridged rather than rebuilt.

**Wisdom before speed:** when the first visual oracle could not discriminate a closed watertight shell, the proof changed its observation method instead of loosening gates or inventing a renderer story.

## Current state

`PASS_OBJECT_GEOMETRY33_SOURCE_EXTERIOR_TO_CURRENT_UC_PARITY_BRIDGE / PASS_REAL_GODOT_IMPORTED_INDEX_PARITY_DISTINGUISHED / OBJECT_TA_PR16_HEAD_7FA10BFF_DRAFT_MERGEABLE / GEOMETRY33_606D8189 / HARD_SURFACE34_77A4058B / 468_VERTICES_812_TRIANGLES_31_GROUPS / SOURCE_TO_UC_DET_NEG1_REVERSE_ONCE / CURRENT_UC_7BE1A28C_GENERIC_UNCHANGED / RUN_35284614372_SUCCESS / ARTIFACT_10523327698_34513B_12_FILES_SHA_5E72FF75 / HOLD_SOURCE_ADOPTION_RENDERED_MATERIALS_QA_RUNTIME_CANON_PRODUCTION / COORDINATION_ONLY`
