# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-18
State: **PASS_53_NATURE_GODOT_PARTIAL_VERTEX_WINDOW / IMPORT_COMPRESSED_STRIDE_8_3120B / MUTABLE_FLOAT32_STRIDE_12_4680B_PLUS1560B_50_PERCENT_STORAGE / UPDATE_4680_TO_3120_B_SAVE_1560_B_33_3333_PERCENT / FIVE_OF_FIVE_READBACK_EXACT / FIVE_OF_FIVE_SHADED_BYTE_IDENTICAL / V1_LAYOUT_ASSUMPTION_FAILED_PRESERVED / V2_RUN_35318912330_SUCCESS / HOLD_NORMAL_TANGENT_ART_QA_TARGET_DEVICE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, the pass-52 Runtime ledger, current Art Direction / Technical Art / Animation / VFX state, Nature PR activity and fresh target-host evidence before selecting work.

`axm-create-me` remains **coordination only**. Runtime implementation and retained evidence for this pass live in `mike-axiom-mir/axm-nature-design`. Universal Creation product code was not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplicate-lane scan

Pass 52 explicitly identified the next legitimate Nature Runtime step: consume the exact existing `[110,370)` moving window in a real target-host receiver, measure actual partial-buffer behavior, and produce shaded control/candidate evidence rather than repeating source-space packing work.

Technical Art PR #3 has since added an exact current-UC receiver path for this Runtime owner chain. Its first real-Godot attempt exposed a concrete Runtime-relevant failure at the transport boundary rather than an Art, Animation or VFX defect: the imported GLB's actual vertex-position layout did not match the source-side float32 packet assumption.

Other fresh lanes remain separately owned:

- Art Direction is currently driving an Object hinge material-hierarchy repair, not a Runtime representation change;
- Animation has a newer five-socket simultaneous diagnostic loop on a newer Rigging owner pair, which this exact target-host proof does **not** auto-inherit;
- VFX retains the static five-socket visual-response semantics and does not own Runtime transport;
- Object batching, Object VFX MultiMesh, Building RGB8, Animal key reduction and earlier Runtime lanes already have bounded evidence and were not reopened.

Selected bounded question:

**Can Godot 4.7.2 execute the exact pass-52 Nature dynamic window as a real partial vertex-region update, and what target-host storage/visual tradeoff appears when the imported layout is measured instead of assumed?**

## Selected bounded improvement — pass 53

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft Runtime PR: **#20 — `Runtime: exploit east-rear dynamic vertex window in Godot`**

Branch:

`studio/runtime-east-rear-dynamic-prefix-001`

Exact final Runtime head:

**`422fbd87efc8ab3f94b69ad3d00b511e2395c4b6`**

At final verification PR #20 is **open / draft / unmerged / mergeable**.

Exact bounded owner chain consumed:

- pass-52 Runtime predecessor: `6d89e1fc0f8dc5e2ef6c57fc99c1dc6b1727780f`;
- Technical Art receiver donor: `b96f794325f825188b6fd9a920e3fb575e43e467`;
- VFX owner: `ba1c12dd527f1ecc6a0eb4bc0b4322f15ccad475`;
- Rigging owner: `754797a815266a643c6b08f1606eb76ba95dd8c6`;
- Universal Creation donor: `5c5d2cfdc3aa4e9462fd4d5ec5bc7874f12674a4`.

Scoped result:

**`PASS_NATURE_EAST_REAR_RUNTIME_WINDOW_GODOT_PARTIAL_VERTEX_UPDATE`**

## Measure-before result — imported layout falsified the first assumption

Pass 52's source-space packet is float32 Vector3 data:

- total positions: **390**;
- full float32 position packet: **4,680 B**;
- moving window: exact source indices **`[110,370)`** = **260 vertices**;
- dynamic float32 packet: **3,120 B**;
- source-side saving: **1,560 B / 33.3333333333333%**;
- geometry reindexed: **false**;
- index buffer changed: **false**.

The first target-host path did not assume that this layout survived import. Godot 4.7.2 measured the exact current-UC GLB and exposed:

- imported vertex-position stride: **8 B**;
- imported position-buffer size: **3,120 B** for all 390 vertices;
- imported positions compressed: **true**;
- imported position offset: **0 B**.

Therefore the source-side `12 B` float32 stride / `1,320 B` offset cannot be applied directly to the compressed imported vertex buffer. This is a real boundary discovered by measurement, not a reason to weaken the target oracle.

The first v1 target-host workflow failed on that assumption and remains retained in Git/history. Runtime did not hide or relabel it as a pass.

## Smallest target-host repair

Runtime creates a mutable dynamic-update `ArrayMesh` from the exact imported arrays before applying float32 position updates.

Measured mutable receiver:

- mutable position stride: **12 B**;
- mutable position offset: **0 B**;
- mutable position buffer: **4,680 B**;
- positions compressed: **false**;
- dynamic-update flag: **true**;
- API: **`ArrayMesh.surface_update_vertex_region()`**.

Exact control/candidate:

- control full update: **4,680 B**;
- candidate byte offset: **1,320 B**;
- candidate partial update: **3,120 B**;
- candidate saving per mutable position update: **1,560 B / 33.3333333333333%**.

Important measured tradeoff:

- imported compressed position storage: **3,120 B**;
- mutable float32 position storage: **4,680 B**;
- Runtime mutable-storage cost: **+1,560 B / +50%** versus imported compressed positions.

This pass is therefore **not a memory win**. It proves a smaller per-update transfer/working packet on the mutable path while explicitly paying extra mutable position storage.

Direct mutation of Godot's compressed imported position buffer is **not proven**.

## Real Godot target-host equivalence

Target host:

- Godot **4.7.2-stable official**;
- GL Compatibility;
- llvmpipe proof host;
- five retained shared-driver witnesses: `-5 / -2.5 / 0 / +2.5 / +5°`.

Across all five witnesses:

- maximum owner-window packet component delta: **`0.0 m`**;
- maximum full-control readback vs Runtime expected: **`0.0 m`**;
- maximum partial-candidate readback vs Runtime expected: **`0.0 m`**;
- maximum control vs candidate readback delta: **`0.0 m`**;
- maximum static control vs candidate delta: **`0.0 m`**;
- maximum candidate movement from neutral: **`0.092465803027153 m`**.

The imported compressed neutral receiver differs from source-owner values by at most **`6.22272491455078e-05 m`**, retained explicitly as an import-compression observation rather than narrated as exact source numeric identity.

## Visual tradeoff for Art Direction / Visual QA

Runtime captured five fixed-view shaded full-control vs partial-candidate pairs using the same proof material, camera and light.

Fresh exact comparison:

- pairs: **5 / 5**;
- changed pixels: **0** across every pair;
- pixels >1 LSB: **0**;
- maximum channel delta: **0 LSB**;
- therefore all five retained A/B pairs are **byte-identical**.

The observer is discriminating rather than static: neutral full-control vs `+5°` full-control changes **4,478 pixels >1 LSB**.

Recorded Art/QA boundary:

- proof material only, not final Nature lookdev;
- normals/tangents were intentionally not updated in either path;
- deformed normal/tangent correctness remains unproven;
- final material/foliage/sidedness acceptance remains unproven;
- Art Direction / independent Visual QA remain **HOLD**;
- target-device acceptance remains **HOLD**.

Runtime does not convert byte-identical representation A/B into appearance authority.

## Fail-closed evidence

The target-host verifier deliberately shifts the candidate update offset by exactly one float32 Vector3: **`+12 B`**.

That mutation fails the Runtime target-host gate with:

- maximum control/candidate component mismatch above **`1.25 m`**;
- maximum static control/candidate drift about **`0.469 m`**;
- candidate offset observed as **1,332 B** rather than 1,320 B.

This demonstrates that the successful result depends on the exact `[110,370)` mutable byte window rather than merely calling the partial-update API.

Source-window drift and authority-inflation controls from the preceding lane remain separately retained.

## Workflow lineage and CI repair

The historical v1 target-host workflow assumed the imported receiver retained the source-side 12-byte float32 position layout. Real Godot falsified that assumption. The failed v1 state remains recoverable in Git and its earlier workflow evidence is not erased.

After v2 established the measured imported/mutable layout distinction, the obsolete v1 workflow was changed to **manual-only historical pointer** so its known-invalid assumption no longer makes every new Runtime head red. The active automatic verifier is the v2 workflow.

Final exact-head same-lane checks observed green:

- `35318912330 — Runtime east rear target-host dynamic window v2` — **SUCCESS**;
- Runtime east rear existing dynamic window — **SUCCESS**;
- Geometry source topology migration evidence — **SUCCESS**;
- Organic east rear tree evidence — **SUCCESS**;
- Organic compact east tree evidence — **SUCCESS**;
- Nature organic form baseline — **SUCCESS**.

No target threshold or owner identity was weakened to obtain the v2 PASS.

## Retained exact pass-53 evidence

Final artifact:

- ID **`10536666073`**;
- name `nature-east-rear-runtime-target-host-v2-422fbd87efc8ab3f94b69ad3d00b511e2395c4b6`;
- size **`279,115 B`**;
- GitHub artifact SHA-256 **`093fbb836308f830c2ead5e0d46a9058fa86e12d77178da31e9f10e15f8ff57c`**;
- independently downloaded and rehashed to the exact same digest.

Retained evidence includes the exact owner heads, current-UC GLB/oracle, preflight receipt, real-Godot receipt, five control renders, five candidate renders, pixel comparison, positive/negative Godot logs, implementation, contract, workflow and updated Runtime design note.

## Authority / handoff

- Organic / Geometry / Rigging source ownership remains unchanged.
- VFX retains visual-response semantics.
- Animation retains timing/motion authority.
- Technical Art retains receiver/transport authority.
- Runtime owns the bounded mutable receiver / partial-update representation and target-host performance-structure evidence.
- Art Direction / Visual QA retain visual acceptance authority.
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery acceptance remains open.
- Universal Creation remains unchanged and generic.
- `axm-create-me` remains coordination/status only.

A no-adoption-request Runtime handoff was returned to Technical Art PR #3 with the measured import-compression boundary, mutable-storage cost and exact target-host result. PR #20 requests no automatic merge or CANON promotion.

## Newer Animation/Rigging boundary

Current Nature Animation has independently advanced to a simultaneous five-socket diagnostic loop on a newer Rigging owner chain. Pass 53 does **not** silently transfer this target-host PASS to that newer simultaneous-motion pair.

This exact target-host proof remains bound to:

- Rigging `754797a8...`;
- VFX `ba1c12dd...`;
- Runtime predecessor `6d89e1fc...`;
- Technical Art receiver donor `b96f7943...`.

A future simultaneous-motion target-host/Runtime proof must rebind explicitly to the newer Animation/Rigging identities rather than inheriting by similarity.

## Continuity from pass 52 and earlier

Pass 52 remains exact historical evidence for discovering the existing `[110,370)` moving window, the **4,680→3,120 B** source-side packet reduction, five exact source-space poses, and the ~5.29% Python proof-host preparation observation.

Pass 53 does not rewrite it. It closes the specific target-host blocker pass 52 left open and adds the newly discovered import-compression tradeoff.

Pass 51 Object static batching, pass 50/49 Building RGB8, pass 47 Object VFX MultiMesh, pass 46 Animal key reduction, pass 45 joint-index width and earlier Runtime lanes remain separately recoverable and were not reopened.

## Highest-value next Runtime gap

Do **not** repeat the exact target-host partial-window proof or claim memory reduction from this representation.

The highest-value next steps are now:

1. real target-device CPU/GPU/FPS/VRAM/heap/thermal/battery evidence for a bounded Runtime candidate; or
2. when the owning chain is ready, an explicit rebind of this target-host machinery to the current simultaneous Nature Animation/Rigging pair, without importing its timing/wind semantics into Runtime.

If neither lane is available, select a genuinely new runtime budget seam elsewhere in the constellation.

## Explicit non-claims

Pass 53 does **not** establish:

- direct partial updates of Godot's compressed imported position buffer;
- a memory reduction versus the imported compressed receiver;
- a generic vegetation update/import policy;
- safety for deformation outside exact vertices `[110,370)`;
- continuous timed wind playback;
- physical wind semantics;
- deformed normal/tangent correctness;
- final Nature material/lookdev/foliage/sidedness acceptance;
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery improvement;
- current newer simultaneous Animation/Rigging target-host acceptance;
- gameplay/collision/physics readiness;
- Art Direction or independent Visual QA acceptance;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** Runtime measured the target host before assuming buffer layout. Godot's 8-byte compressed import invalidated the first 12-byte direct-update assumption; that failure remains retained. The final PASS reports both the 33.33% mutable update-packet saving and the opposing +50% mutable position-storage cost.

**Agency / non-domination:** Runtime does not rewrite Organic, Geometry, Rigging, VFX, Animation, Technical Art, Art/QA or Universal Creation authority. No automatic adoption, merge or CANON request is made.

**Continuity:** pass 52, the failed v1 target-host assumption, the Technical Art donor, active v2 verifier, exact final head/workflow/artifact, earlier Runtime passes and newer Animation/Rigging work all remain separately identified and recoverable.

**Wisdom before speed:** the first target-host failure was treated as information, not hidden. Runtime repaired only the measured layout boundary, retired only the obsolete auto-run while preserving its history, and stops before target-device or newer-owner claims.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
