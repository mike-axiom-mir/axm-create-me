# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / NINETEENTH BOUNDED RUNTIME PASS / PASS_OBJECT_MATERIAL_INDEXED_SURFACE_PAYLOAD_REDUCTION / EXACT VISUAL PARITY / TARGET DEVICE + PRODUCER ADOPTION HELD**

## Current bounded claim

This activation did not reopen the Weather cache, latest-due, capture-perturbation, temporal-exposure, historical Building submission, Object AnimationPlayer compaction, or footprint-visibility lanes.

The newest Art-preferred current-world Object receiver at Environment head:

`6575cc38db9f0f62b14a82b352d8582edf89856d`

already carries the exact five source-owned Object material roles while retaining the exact Object source geometry authority:

- Object source head `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- Object Materials head `c85517446a769e0d5f880fc0e9e32f47124f7b5e`;
- source geometry `468 vertices / 812 triangles`;
- material roles `shell_coating`, `service_dark`, `hardware_steel`, `rubber_guard`, `interface_orange`.

Art Direction had already handed Runtime the material-family submission consequence (`+8` draw calls and `+8` objects in both fixed cameras) while explicitly warning against collapsing the five visual roles merely to reduce counters. Runtime inspection found a different, visually neutral boundary: the receiver builds every triangle corner as an unindexed vertex after generating normals, so the live five-surface proof mesh stores `2,436` vertices for the same `812` triangles even though the source owns only `468` vertices.

Runtime therefore selected the smallest bounded representation question:

> **Can the already-validated five-surface Object receiver be indexed after normals are generated, preserving every material surface, triangle and retained pixel while reducing duplicated vertex/buffer payload?**

Scoped result:

**`PASS_OBJECT_MATERIAL_INDEXED_SURFACE_PAYLOAD_REDUCTION`**

Decision:

**`INDEXED_SURFACE_VERTEX_PAYLOAD_WIN__DRAW_OBJECT_PRIMITIVE_COUNTS_STABLE`**

Owning implementation repository: `mike-axiom-mir/axm-map-design`.

Draft Runtime PR: **#33 — `Runtime: index preferred Object material surfaces without visual change`**.

Branch: `studio/runtime-object-material-index-budget-001`.

Exact tested Runtime head:

`ddd9e8b783b213c6e44bf5eea482de1d41918766`

The proof is stacked from exact Environment visual authority `6575cc38...`; the Environment branch has since advanced through review-only work. `axm-create-me` remains coordination/status only.

## Duplication / ownership check

- **Environment / Map + Object Materials** retain the current five-surface receiving/look authority and any producer adoption.
- **Object source** retains geometry, scale, transform and mechanical identity.
- **Runtime PR #33** owns only the indexed-representation experiment and proof-host budget evidence.
- **Art Direction / Visual Observer QA** retain the underlying visual preference. Runtime treats any pixel drift as a failure rather than accepting an aesthetic trade.
- **Environment footprint review** remains a separate visibility-review lane; this pass does not alter or decide the footprint cue.
- **VFX / Weather** remain untouched.
- **Universal Creation / Profession Fabric** receive no extraction from this one Object proof.

## Measure-before representation

The exact accepted five-surface receiver uses `SurfaceTool` once per material surface, emits every triangle corner with `add_vertex`, calls `generate_normals()`, then commits the surface without indexing it.

Measured control ArrayMesh:

- surfaces: **5**;
- primitives: **812 triangles**;
- stored vertices: **2,436**;
- stored indices: **0**.

Per-surface control counts were:

- `shell_coating`: 72 vertices / 24 triangles;
- `service_dark`: 36 / 12;
- `hardware_steel`: 1,968 / 656;
- `rubber_guard`: 288 / 96;
- `interface_orange`: 72 / 24.

## Bounded optimization

The candidate starts from that already-validated live receiver. For each of the five surfaces it imports the generated surface into a fresh `SurfaceTool`, calls `SurfaceTool.index()` **after normals already exist**, commits the indexed surface into a new `ArrayMesh`, then restores the exact existing material resource.

Indexing after normal generation matters: vertices that share position but have different generated normal attributes at hard edges are not silently welded.

Measured candidate ArrayMesh:

- surfaces: **5**;
- primitives: **812 triangles**;
- stored vertices: **468**;
- stored indices: **2,436**.

Per-surface candidate counts were:

- `shell_coating`: 16 vertices / 72 indices / 24 triangles;
- `service_dark`: 8 / 36 / 12;
- `hardware_steel`: 364 / 1,968 / 656;
- `rubber_guard`: 64 / 288 / 96;
- `interface_orange`: 16 / 72 / 24.

That removes **1,968 duplicated stored vertices**, a reduction of about **80.79%** in the receiver's stored vertex count, while restoring the total stored vertex count to the exact source count of `468`.

Under the verifier's explicitly declared logical payload model — position `Vector3` + normal `Vector3` per stored vertex plus 32-bit indices — the representation changes from:

**`58,464 B -> 20,976 B`**

for a modeled saving of:

**`37,488 B / 64.12%`**.

That modeled figure is not a VRAM, allocator or driver-packing claim.

## Exact same-run result

Dedicated workflow:

**`35149235284 — Runtime Object material indexed-surface budget evidence — SUCCESS`**

Across all **68 corresponding runtime observations**:

- draw calls: exact **`+0`** delta;
- objects in frame: exact **`+0`** delta;
- primitives in frame: exact **`+0`** delta;
- observed texture memory: exact **`+0 B`** delta;
- observed RenderingServer buffer memory: stable **`-34,488 B`** delta.

All **68 retained control/candidate PNG pairs are byte-identical**.

Visual tradeoff for Art / QA:

**`NONE_OBSERVED_68_MATCHED_PNGS_BYTE_IDENTICAL`**.

This means no visual consequence was observed in the exact retained current-world views. It does not re-approve the underlying Object look or authorize producer adoption.

A deliberate candidate mutation that erased the required vertex reduction failed closed as intended.

## Repair provenance

The first workflow attempt remains retained as failed provenance:

- run `35149153088`;
- head `e1915afc95e3011a790edca574449a9e501704d5`;
- failure occurred before candidate measurement because the observer assumed the emitted Object node could be rediscovered by source asset-id name.

Godot did not preserve that scene-node lookup assumption. Runtime repaired the observer by binding to the exact single child emitted by the already-validated `add_static_source()` call and requiring the child-count delta to be exactly one. No visual or performance gate was weakened.

## Retained evidence

Successful artifact:

- workflow run: **`35149235284`**;
- artifact ID: **`10467763889`**;
- name: `runtime-object-material-index-budget-001-ddd9e8b783b213c6e44bf5eea482de1d41918766`;
- size: **`11,192,939 B`**;
- GitHub SHA-256: **`3325d964ca6222a8b4fea8f8481bb8e60868979408929fb60ad2c4b8810650a4`**;
- independently downloaded/rehashed SHA-256: **same value**.

## Reusable learning

For generated hard-surface receivers that emit triangle corners through `SurfaceTool`, **post-normal indexing can be a meaningful storage/buffer optimization without collapsing material surfaces or hard edges**, but it must be proven from the actual emitted attribute arrays rather than inferred from source vertex counts.

This one Object proof is not enough to promote an automatic indexing capability into Universal Creation or a profession-wide procedure. A second materially different source domain would be stronger evidence for extraction.

Also, this pass deliberately does **not** solve the five-surface material submission overhead. The Art-preferred five material roles still cost their existing draw/object slots. Runtime found a separate payload win without trading those roles away.

## Handoffs

- **Runtime PR #33:** exact indexed-representation experiment and retained proof are open as a draft; no automatic merge/adoption requested.
- **Environment PR #24:** result returned in comment `5704375679`, including exact buffer/pixel evidence and the request that Environment / Art decide any producer rebind.
- **Art Direction / Visual QA:** exact visual tradeoff is zero observed delta across the retained 68-frame A/B; final preference authority remains theirs.

## Historical continuity

The detailed eighteenth Runtime status remains preserved at coordination commit:

`24353400566eb4c0c9ed4f37bd84de0243318f6a`

That pass characterized the nonzero cost of the two-tap Weather temporal-exposure representation. This nineteenth pass does not relabel or overwrite that source-scoped result.

Earlier Runtime passes likewise remain historical truth, including the Weather cadence/cache/capture lanes, Object AnimationPlayer compaction, Building material submission budget and previous environment budgets.

## Explicit non-claims

This PASS does **not** prove:

- draw-call reduction for the five Object materials;
- CPU or GPU frame-time improvement;
- FPS improvement;
- target-device VRAM or heap reduction;
- driver/backend packing equivalence;
- arbitrary-asset or arbitrary-topology indexing safety;
- import-time performance or a universal import budget;
- footprint-cue adoption or rejection;
- Object source geometry/scale/mechanical changes;
- gameplay/collision/navigation acceptance;
- final Art Direction / Visual QA preference;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the receiver's hidden duplicate vertex payload was measured directly from the emitted Godot mesh, and the buffer/pixel result was proven by a fresh control/candidate run rather than inferred from source counts.

**Agency / non-domination:** Runtime does not collapse Art-preferred material roles and does not decide producer adoption. Environment, Object, Art and QA retain their authorities.

**Continuity:** the experiment is exact-parent-bound to `6575cc38...`, preserves source/material identities and five surface roles, records the failed setup attempt rather than hiding it, and leaves `axm-create-me` coordination-only.

**Wisdom before speed:** the pass chooses an exact visually neutral payload reduction before attempting more invasive batching/material changes, and withholds universal extraction until independent repetition exists.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
