# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-18

State: **PASS_NATURE_RUNTIME_DYNAMIC_WINDOW_CURRENT_UC_GODOT_PARTIAL_VERTEX_RECEIVER / NATURE_TA_PR3_HEAD_DA60CD49_DRAFT_MERGEABLE / RUNTIME_OWNER_6D89E1FC / VFX_OWNER_BA1C12DD / RIGGING_OWNER_754797A8 / TESTED_UC_5C5D2CFD / FRESH_UC_724DDE63_PROCEDURAL3D_BYTE_IDENTICAL / 390_VERTICES_570_TRIANGLES / WINDOW_110_370 / 3120B_PARTIAL_VS_4680B_FULL / 33_333333_PERCENT_REDUCTION / FIVE_OF_FIVE_RENDER_IDENTICAL / RUN_35318777686_SUCCESS / ARTIFACT_10535719088_SHA_07CDAE25 / UC_PRODUCT_UNCHANGED / HOLD_DEVICE_PERFORMANCE_PHYSICAL_WIND_TIMING_VISUAL_CANON_PRODUCTION / COORDINATION_ONLY**

## Activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, the Nature design constellation, Runtime/VFX/Rigging ownership, the active Nature Technical Art lane, and fresh `axm-universal-creation`.

`axm-create-me` remains **coordination only**. Product and target-evidence changes stayed on the existing Nature Technical Art PR #3. The merge gate remains **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage bounded gap

Selected path:

**Runtime-owned Nature dynamic position window -> existing Nature Technical Art target receiver -> generic UC GLB -> real Godot 4.7.2 `ArrayMesh.surface_update_vertex_region` partial update**.

The missing target fact was not whether Runtime could describe a smaller packet; that owner contract already existed. The missing Technical Art boundary was whether the exact Runtime-owned window could update a real imported target receiver while remaining equivalent to the corresponding full target-host control, without teaching UC what Nature, wind, a branch, or a Runtime update policy means.

This reused the existing Nature TA PR #3 rather than opening a duplicate Runtime, VFX, Geometry, or UC lane.

## Exact lane and owner chain

Repository: `mike-axiom-mir/axm-nature-design`

Existing Technical Art PR #3:
- branch: `studio/uc-nature-surface-bridge-001`;
- exact tested/successful head: **`da60cd491ac7f9ac04f918dd000f464a627b3316`**;
- state at this activation: **open / draft / unmerged / mergeable**.

Exact owner/test pins consumed:
- Runtime owner: **`6d89e1fc0f8dc5e2ef6c57fc99c1dc6b1727780f`**;
- VFX owner: **`ba1c12dd527f1ecc6a0eb4bc0b4322f15ccad475`**;
- Rigging owner: **`754797a815266a643c6b08f1606eb76ba95dd8c6`**;
- tested generic UC donor: **`5c5d2cfdc3aa4e9462fd4d5ec5bc7874f12674a4`**;
- Nature source digest: **`178cd8cfb1a859bff411f60e13154109528062cf0ad2384b343d406cc0cc9d61`**;
- migrated mesh digest: **`aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`**;
- UC surface SHA-256: **`c4babaacd8cf9c7f07366db83d4462d73304f5b1a1dd23a0a444e5b4b8bc9c28`**;
- exact tested-UC receiver GLB SHA-256: **`d19515a6bbb9905aaf4a36f50453cc07f9c7be2ab9dc10a7ebbca97f8fbcd01f`**.

## Smallest reusable repair

No UC product code changed.

The repair stayed in the existing Technical Art target observer:

`target-proof/observe_dynamic_window_update.gd`

The first target implementation compared:
- a full packet containing all 390 source/oracle FLOAT positions; against
- a partial packet that changed only Runtime's `[110,370)` window on top of Godot's imported target arrays.

That comparison was subtly invalid because Godot import is only a bounded numeric observation of the UC FLOAT payload, not exact source-float identity. The 130 out-of-window vertices therefore differed slightly between the two controls even though neither belonged to Runtime's update window.

The correct receiving contract now starts **both** controls from the same exact Godot-imported target baseline:
- full target control = imported neutral target positions with only Runtime's exact dynamic window overlaid;
- partial target control = the same imported neutral target positions plus the same window packet through `surface_update_vertex_region` at the exact byte offset.

The full target control is still compared back to the owner/oracle control under the original unchanged **`0.0001 m`** bounded target-import observation envelope. No target threshold was weakened, no owner geometry was rewritten, and no target-host quantization was promoted into source, Geometry, Runtime, or UC authority.

The same `ArrayMesh` receiver resource is reused between full and partial updates and is created with `Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE`.

## Runtime window contract

Exact receiver:
- vertices: **390**;
- triangles: **570**;
- position stride: **12 bytes**;
- Runtime-owned half-open vertex window: **`[110,370)`** = **260 vertices**;
- byte offset: **1320**;
- partial position packet: **3120 B**;
- full position packet: **4680 B**;
- saved position bytes per update: **1560 B**;
- packet reduction: **33.33333333333333%**.

Negative controls continue to reject Runtime-window mutation and attempts to inflate this evidence into target-device/performance authority.

## Retained failed predecessors

Two failed target predecessors remain retained as evidence.

### `4515630bdc5e71acf8b558ac6b98944fe1ab8514` / run `35317762026`

Python 3.13 structural evidence passed, while the Python 3.11 real-Godot target lane failed at the `-5°` witness: full source/oracle control versus partial imported-target control differed by **91 / 630000 pixels**, maximum channel delta **1**.

This exposed the actual boundary error: source/oracle values outside Runtime's dynamic window had been written back into the full control while the partial control retained Godot-imported values there.

Retained artifact:
- ID `10535184615`;
- 59,636 B;
- SHA-256 `8c1a3731f6d0e9bafc61b4b2ac2e2bd87f1fc811cd33038ebe4b262e23a9a903`.

### `2ee0a2668c9631324df64604cecec9f61dc8d58a` / run `35318601870`

A narrower intermediate repair proved that reusing one target receiver resource was not sufficient; it retained the same 91-pixel discrepancy because the full control still used source-derived out-of-window positions.

Retained artifact:
- ID `10536370948`;
- 59,696 B;
- SHA-256 `1de8cf37a55a162eb5679016b584b79e4959c87926626fa90047d509730b00b2`.

Neither predecessor was hidden or converted into a PASS.

## Exact real-target result

Dedicated workflow:

**`35318777686` — SUCCESS**

Both Python 3.11 and Python 3.13 lanes succeeded. The Python 3.11 lane exercised real **Godot 4.7.2**, GL Compatibility, headless target rendering.

Target state:

**`PASS_NATURE_EAST_REAR_CURRENT_UC_GODOT_PARTIAL_VERTEX_WINDOW_RECEIVER`**

Real-target facts:
- exact tested-UC GLB imported: yes;
- imported vertices: **390**;
- imported triangles: **570**;
- imported-neutral maximum owner/oracle distance: **`2.8440980705202183e-06 m`**;
- imported-neutral maximum component delta: **`1.9073486328125e-06 m`**;
- **389 / 390** imported vertices differ at exact-float level, so exact source numeric identity is deliberately **not** claimed;
- unchanged target-import observation envelope: **`0.0001 m`**;
- real target API: **`ArrayMesh.surface_update_vertex_region`**;
- dynamic receiver flag: **`Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE`**;
- exact partial window: **`[110,370)`**;
- exact partial byte offset: **1320**;
- exact partial packet: **3120 B**;
- exact full packet: **4680 B**;
- all **5 / 5** retained driver poses: full-vs-partial **0 changed pixels**, maximum channel delta **0**, byte-identical rendered output.

This proves exact receiving-path equivalence for the retained five static driver witnesses on one real Godot target-host receiver. It does **not** prove physical wind, wall-clock animation, collision, device performance, or final visual quality.

## Same-head continuity

On exact TA head **`da60cd491ac7f9ac04f918dd000f464a627b3316`**, all observed workflow families completed successfully:
- Nature baseline gate — `35318777759`;
- UC Nature surface bridge — `35318777757`;
- UC Nature source migration rebind — `35318777758`;
- UC Nature topology + target culling — `35318777752`;
- Nature primary-branch Animation target — `35318777761`;
- UC Nature dynamic-window target receiver — `35318777686`.

The new Runtime-window target proof therefore did not revoke the earlier static, culling, source-migration, or Animation target receiver evidence on this head.

## Fresh UC continuity boundary

The target workflow is pinned honestly to tested UC **`5c5d2cfdc3aa4e9462fd4d5ec5bc7874f12674a4`**.

Fresh UC main has since advanced to:

**`724dde638763253ba1d4cf93d13aaa9a4981e4bf`**

Current main still carries `src/axm_uc/procedural_3d.py` as exact Git blob:

**`cdb654d4d0f68a4ca7539d98a985d7a70cf7ee36`**

which is byte-identical to the tested donor's executable publisher module used by this path. This is an executable-module continuity fact only; it is **not** presented as a fresh-current-main Godot rerun.

**UC product code was not modified by Technical Art, and no Nature, Runtime, branch, wind, or Godot policy was centralized into UC.**

## Retained successful evidence

Successful target artifact:
- ID **`10535719088`**;
- name `nature-east-rear-dynamic-window-target-evidence-py3.11`;
- **59,908 B** archive payload;
- **46 retained files**;
- 531,701 B uncompressed;
- SHA-256 **`07cdae2576337c8d1ffd0dc7745492ac990ac86d3a99eeb42465c0d416586104`**;
- independently downloaded and rehashed to the exact same digest.

The packet retains the exact owner/test heads, runtime-window contract, UC surface/GLB evidence, target observer, target oracle, five full/partial rendered pairs, receipts, and failed-path context.

## Handoff / authority boundary

Technical Art now proves only the exact target-host receiving contract for the Runtime-owned dynamic window.

Ownership remains separate:
- Nature owns source/form semantics;
- Rigging owns deformable partition/selection authority;
- Animation owns motion timing/clips;
- VFX owns physical/visual wind response;
- Runtime owns update scheduling, controller policy, device/performance budgets;
- Technical Art owns cross-repo identity binding, target representation, import/export, and exact receiver observation;
- Environment/Map owns receiving-world/default adoption;
- Art Direction and independent Visual QA own final look acceptance;
- UC remains generic capability infrastructure, not a Nature policy store.

## Authority and HOLDs

Still HOLD:
- target-device frame-time / bandwidth / memory performance;
- physical wind behavior and VFX acceptance;
- continuous wall-clock Animation/VFX scheduling through this exact packet path;
- collision, navigation, gameplay, or physics suitability;
- final Nature material / foliage sidedness / lookdev;
- Art Direction or independent Visual-QA acceptance;
- Map/default-world adoption;
- CANON;
- production/game readiness;
- Technical Art mastery.

## Four-root check

**Truth:** two failed predecessors, Godot import quantization, exact tested UC, fresh UC module continuity, the successful run, and non-claims are all recorded. No target-import float equivalence was fabricated.

**Agency / non-domination:** Runtime/VFX/Rigging/Animation/Environment/Art authority remains with its owner. Technical Art does not promote a receiving proof into downstream adoption, performance, visual, or CANON authority.

**Continuity:** exact heads, source/mesh/surface/GLB identities, window offsets/byte counts, same-head regressions, failed runs, successful run, and retained artifact digest are bound.

**Wisdom before speed:** reused existing Nature PR #3 and generic UC publication; fixed only the target-host baseline contract revealed by evidence; no duplicate lane, no threshold weakening, no Nature centralization in UC.

## Prior activation preserved

The immediately prior full status was committed in `axm-create-me` at **`226ecf05c52d80c15d99f80e1cf20e74d6fec771`** and remains recoverable in git without rewrite.

That activation proved the Nature five-primary-branch Animation -> generic UC -> real Godot target receiver on exact TA head **`b83c7d71759213d96c57874282e60705402540f5`**, workflow **`35312845639`**, with **12 receiver nodes / 620 triangles / 5 clips / 205 samples**, maximum target residual **`3.65889513886941e-06 m`** under the unchanged `5e-06 m` gate, and retained artifact **`10534795193`**, 76,163 B / 20 files, SHA-256 **`1206a7d92cacab1eb77de14728e09785010069898bcb01766f64faac0fae21cc`**. That evidence remains valid and is also rerun successfully on the current TA head as workflow `35318777761`.

## Current state

`PASS_NATURE_RUNTIME_DYNAMIC_WINDOW_CURRENT_UC_GODOT_PARTIAL_VERTEX_RECEIVER / NATURE_TA_PR3_HEAD_DA60CD49_DRAFT_MERGEABLE / RUNTIME_OWNER_6D89E1FC / VFX_OWNER_BA1C12DD / RIGGING_OWNER_754797A8 / SOURCE_178CD8CF / MESH_AA9D450A / TESTED_UC_5C5D2CFD / FRESH_UC_724DDE63_PROCEDURAL3D_BLOB_CDB654D4_IDENTICAL / RECEIVER_GLB_D19515A6 / 390_VERTICES_570_TRIANGLES / WINDOW_110_370_260_VERTICES / OFFSET_1320B / PARTIAL_3120B_FULL_4680B_REDUCTION_1560B_33_333333_PERCENT / IMPORT_MAX_DISTANCE_2_844098E-6M / FIVE_OF_FIVE_FULL_PARTIAL_RENDER_BYTE_IDENTICAL / FAILED_RUNS_35317762026_35318601870_RETAINED / RUN_35318777686_SUCCESS / SAME_HEAD_SIX_WORKFLOW_FAMILIES_SUCCESS / ARTIFACT_10535719088_59908B_46_FILES_SHA_07CDAE25 / UC_PRODUCT_UNCHANGED / HOLD_DEVICE_PERFORMANCE_PHYSICAL_WIND_TIMING_VISUAL_CANON_PRODUCTION / COORDINATION_ONLY`
