# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_DIRECTIONAL_TEXEL_DENSITY_OBSERVER_PLACEMENT_MAP / BUILDING_PHYSICAL_DENSITY_ANISOTROPY_VISIBLE / OBJECT_RECTANGULAR_ATLAS_SUPPORTING_CASE / UC_ISSUE_192_OPEN_OBSERVER_ONLY / PF_38_EXISTING_SPATIAL_BINDING_VOCAB_SUFFICIENT / NO_PRODUCT_POLICY_MOVE / CREATE-ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then scanned fresh `axm-create-me` specialist status, newest design-constellation PR state, current Universal Creation main/open work, and existing Profession Fabric issue #38 vocabulary before changing any coordination state.

`axm-create-me` remains **coordination only**. No product implementation, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, CANON state, adoption decision or merge authority was moved here.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selected material cross-repo learning

Fresh Building Materials evidence plus the already-independent Object manufactured-surface chain expose one reusable machine-observer gap:

> **A structurally valid normalized UV parameterization and an area-equivalent scalar texel-density measurement do not prove physically isotropic directional sampling.**

The relevant capability chain is now explicit:

`source surface identity/frame/metric domain -> structural parameterization -> directional sampling scale -> atlas/storage representation -> target-host visual evidence -> product acceptance`

These are separate identities and obligations.

A unit-square structural chart can be correct as a bijection while the mapping from physical metres to texture pixels is directionally stretched. Conversely, a product may deliberately choose a non-square atlas or another density policy while preserving correct physical sampling. The shared neutral need is therefore **measurement of directional sampling scale**, not a shared target density or automatic UV policy.

## Evidence A — Building makes the missing observation directly visible

Repository: `mike-axiom-mir/axm-building-design`

Existing Materials PR #3 current exact head:

`c12766ecdc3e47a6d422a5af67b4cd28ec68c1ac`

Fresh scoped result:

`PASS_TARGET_HOST_BUILDING_UTILITY_PANEL_PHYSICAL_UV_DENSITY_REVIEW`

The Materials lane consumes rather than re-owns:

- Geometry PR #16 exact structural chart head `79e09f68a05770eb6dabbbbbb3b008fc8e050aa0`;
- Hard-Surface PR #15 exact source metric domain `1.10 m × 1.50 m`, area `1.65 m²`.

The Geometry chart is deliberately a normalized structural bijection, not a production texel-density contract.

Materials then compares two mappings on the unchanged source-bound service surface:

### Metric-aware review candidate

- diagnostic image: `512 × 512 px`;
- local review density: `320 px/m`;
- active physical extent: `352 × 480 px`;
- checker period: `16 px = 0.05 m`;
- checker count: `22 × 30`.

`320 px/m` is explicitly **review-only** and Building-local.

### Aspect-blind negative

The same valid unit-square chart is stretched across the full `512 × 512` image without respecting the `1.10 : 1.50` metric aspect.

Its effective directional scale is approximately:

- `465.4545 px/m` on one physical axis;
- `341.3333 px/m` on the other;
- directional ratio: `1.363636`.

Pinned Godot 4.7.2 distinguishes candidate and negative in all three retained contexts:

- `front_service`: `48,963` pixels above 1 LSB;
- `east_service`: `49,509` pixels above 1 LSB;
- `three_quarter`: `12,463` pixels above 1 LSB.

This is the key new evidence: **topological/structural UV validity can remain green while physical directional sampling is visibly different.**

Cartography return to Building Materials PR #3:

`5718236991`

No Building density, atlas or visual preference moved to UC.

## Evidence B — Object independently supplies a non-square receiving family

Repository: `mike-axiom-mir/axm-object-design`

Hard Surface PR #26 exact head:

`f7c64d08e4e2a0d6954291d8b4e064d7345ab658`

Scoped source result:

`PASS_SOURCE_OWNED_SERVICE_SURFACE_METRIC_DOMAINS`

Object independently separates:

1. exact manufactured surface identity;
2. exact planar source frame;
3. exact physical metric domain;
4. downstream UV/texel-density/atlas/material/storage policy.

Exact source metric domains include:

- lid inner: `0.78 × 0.48 m`, area `0.3744 m²`;
- front service panel: `0.468 × 0.156 m`, area `0.073008 m²`.

Technical Art PR #28 then proves a separate Object-owned `500 px/m` atlas policy through a **rectangular `512 × 384`** generic UC bundle receiver and real Godot. The retained candidate reports approximately:

- lid: `498.31715339156955 px/m`;
- front: `495.72194925534416 px/m`.

The atlas layout, `500 px/m` target, padding and Runtime adoption remain Object-owned.

Cartography return to Object Technical Art PR #28:

`5718238612`

This gives a materially different second manufactured family. Building demonstrates the visible anisotropy problem; Object demonstrates that exact image width and height must remain independent inputs because valid receiving is not necessarily square.

## Existing UC capability inspected — scalar area density is truthful but intentionally incomplete

Repository: `mike-axiom-mir/axm-universal-creation`

Current main observed:

`50e85c8f6a39822eef01e4fb546dcb875917bb3b`

Current unrelated active PR:

- PR #191 — bounded Physics hourly growth; no overlap with material-UV observation.

Existing shared observer:

`src/axm_uc/material_uv_evidence.py`

Current main blob:

`197bb9f31c9c5e459bf415b73145abd99c0caa7c`

The observer already owns the correct neutral layer: it reads exact static GLB POSITION/TEXCOORD_0/indices/node transforms/material bindings and embedded image dimensions. It explicitly does **not** unwrap, repair, render or decide that a density is aesthetically good.

Its current per-triangle scalar scale is based on:

`sqrt(UV area / world area) * sqrt(image width * image height)`

and aggregates that area-equivalent result.

That is useful and truthful for surface-area scale. It also deliberately documents that it does **not** prove attractive seams or low **directional distortion**.

The fresh Building evidence should therefore **not** be used to reinterpret the existing scalar as something it never claimed. The missing capability is a sibling measurement inside the same observer.

## Correct-home proposal — UC observer-only directional density extension

Opened Universal Creation issue:

**#192 — `Proposal: expose directional texel-density / UV anisotropy in static material observer`**

Placement: **Universal Creation neutral observation**, proposal only.

Smallest supported extension:

For each measurable supported static textured triangle:

1. construct two world-space triangle edges;
2. express them in an orthonormal 2D basis of the triangle plane;
3. construct corresponding UV edges in **texel coordinates** using exact image width and height separately;
4. derive the local `2 × 2` world-plane → texel Jacobian;
5. report the two singular values as principal directional densities, e.g. `texels_per_m_min` and `texels_per_m_max`;
6. report `anisotropy_ratio = max / min`;
7. aggregate bounded area-weighted distributions while retaining the existing scalar report unchanged for backward compatibility.

The existing area-equivalent scalar is then understood as the geometric/area-scale view; the new principal values expose directional stretching that the scalar can legitimately hide.

### Required stop conditions

UC #192 explicitly does **not** request:

- a studio-wide texel-density target;
- an acceptable anisotropy threshold;
- automatic UV rescale;
- unwrap or seam generation;
- atlas packing;
- texture authoring;
- aesthetic acceptance;
- product migration/adoption.

Unsupported/singular maps should HOLD or emit explicit findings rather than estimate.

No current UC directional-distortion PASS is claimed. Issue #192 is an evidence-linked proposal, not implementation completion.

## Why this is UC rather than Profession Fabric

Profession Fabric #38 was re-inspected before opening the UC proposal.

Its existing experimental evidence vocabulary already distinguishes:

- `field_payload_identity`;
- `field_domain_identity`;
- `receiver_domain_identity`;
- `spatial_parameterization_identity`;
- storage/decode identity;
- exact spatial-binding state;
- independent visual/adoption obligations.

That is sufficient to **record** this new observation if/when a consumer uses it.

The missing piece is not new profession procedure. It is a neutral numerical observation over exact geometry/UV/image bytes, which already belongs to UC's `material_uv_evidence.py` responsibility.

Therefore:

- no new PF issue was opened;
- no PF #38 refinement was added merely by cadence;
- no product density target was moved into PF;
- PF remains evidence/provenance procedure only.

## Duplicate-work / continuity scan

Fresh live work was checked before opening UC #192:

- **Building Materials PR #3** already owns the physical-density renderer review; Cartography did not duplicate it.
- **Building Geometry PR #16** already owns the source-frame structural chart; Cartography did not create another unwrap/chart lane.
- **Building Hard Surface PR #17 / Procedural PR #4** currently own a separate utility-panel nearest-face-clearance repair/rebind; unrelated to this UV observer proposal.
- **Map Animation PR #44** already owns compact-east current-world exact-state playback; no playback lane was duplicated.
- **Animal Runtime PR #28** already owns compilation/cost follow-through for the adopted post-skin owner-frame reconstruction contract; no Runtime duplicate was opened.
- **Character Rigging PR #17** currently has an exact-head dense vertex-only margin workflow queued and remains HOLD until CI; no PASS was inferred from the PR description.
- **UC PR #191** is active bounded Physics work and does not overlap material UV observation.

This activation therefore adds one bounded proposal where the correct shared home is already evidenced and otherwise leaves active owner lanes intact.

## Bounded capability-placement map

| Layer | Correct home | What remains there |
|---|---|---|
| Source surface identity / frame / metric dimensions | Product Hard Surface / source owner | Physical source truth; no atlas redefinition |
| Structural chart / topology / parameterization construction | Product Geometry / Procedural unless a generic mechanism is independently proven | Bijection, seams, topology, source-corner identity |
| Product target density / atlas / padding / lookdev scale | Product Materials / Technical Art as appropriate | `320 px/m`, `500 px/m`, atlas rectangles, review policy |
| Directional density measurement on supported exact GLB bytes | **Universal Creation observer** | Renderer-neutral min/max principal texels-per-m + anisotropy evidence |
| Evidence identity / obligation bookkeeping | Profession Fabric experimental procedure | Exact consumed identities, binding state, scoped verdicts/non-transfer |
| Visual preference / final acceptance | Art Direction / Visual QA | Whether the measured/observed result is desirable |
| Storage/device adoption | Runtime | Memory/bandwidth/performance/device tradeoffs |
| Cross-repo coordination | `axm-create-me` | Map, status, provenance, handoff only |

## Returns / changes this activation

- Opened UC issue **#192** for observer-only directional texel-density / UV-anisotropy evidence.
- Building Materials PR #3 return: **`5718236991`**.
- Object Technical Art PR #28 return: **`5718238612`**.
- No product implementation changed.
- No UC implementation changed.
- No PF implementation or new PF framework was created.
- No merge/rebase/adoption/CANON action occurred.

## Explicit non-claims

This activation does **not** establish:

- that the Building `320 px/m` review density is a production target;
- that Object `500 px/m` should apply to Building or any other domain;
- that anisotropy is always undesirable;
- an acceptable anisotropy threshold;
- production unwrap/seam/packing quality;
- final mip/filter/compression/device behavior;
- that the proposed UC observer is implemented or tested yet;
- that scalar area-equivalent density is invalid — it remains a useful bounded measurement;
- Art Direction or Visual QA acceptance;
- Runtime/device adoption;
- CANON, production readiness, game readiness, mastery or merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- Watch UC #192 for an implementation only if it preserves the observer-only boundary and backward-compatible scalar evidence.
- If a directional observer is implemented, require exact consumer rebind/rerun before any Building/Object PASS uses it; do not inherit current product evidence by analogy.
- Keep structural parameterization, physical metric domain, sampling-density policy, storage representation and visual acceptance as separate identities.
- Continue scanning active product lanes before extracting any additional shared machinery.

## Recovery / provenance

Previous Cartography state:

`PASS_OBSERVER_COVERAGE_AND_SENSITIVITY_MAP`

Previous status blob SHA before this update:

`79b2e691aad3f3039fcfc118f1a06094ad7a90b4`

Previous Cartography commit:

`c8d733c02e8f0075bb9056ff83593125c3982914`

Prior PF observer-coverage refinement remains:

`5717406911`

New UC proposal:

`mike-axiom-mir/axm-universal-creation#192`

New product returns:

- Building Materials #3: `5718236991`
- Object Technical Art #28: `5718238612`

Current UC main observed:

`50e85c8f6a39822eef01e4fb546dcb875917bb3b`
