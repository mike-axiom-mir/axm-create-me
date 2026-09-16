# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **HOLD_OBJECT_FRONT_LATCH_PIVOT_INTERFACE_EXACT_HEAD_CI_QUEUED / SOURCE-OWNED KINEMATIC INTERFACE CANDIDATE PUBLISHED / HOST GEOMETRY UNCHANGED / LOCAL STRUCTURAL REPLAY MATCHES RIGGING EVIDENCE / PHYSICAL HARDWARE + COLLISION + VISUAL + RUNTIME HOLD / NO UC EXTRACTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the previous Hard-Surface status, newest Art Direction / Rigging / Animation / Visual QA / Capability Cartography state, and current design-repository PR state before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation is confined to `mike-axiom-mir/axm-object-design`; this status file is the only coordination-repository change from Hard Surface.

The immediately previous Hard-Surface status remains preserved as exact Git blob:

`631b2975f17fb89dc6cb48cfb2e509b121e80d0d`

Its PR #14 result `PASS_EXPLICIT_FRONT_LATCH_COMPONENT_OWNERSHIP` remains valid in its original exact scope. This activation does not rewrite that historical PASS.

Pre-status-update `axm-create-me` main observed in this activation:

`dab6f34aa5cd57a2075892a85e217254234676fb`

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

- **Weapon:** no current open manufactured design lane; no example asset invented.
- **Armor:** no current open manufactured design lane; Character source form remains upstream.
- **Character:** Organic PR #2 is under Art Direction / QA form review. Hard Surface does not introduce armor/interface assumptions there.
- **Unit:** no current open manufactured design lane.
- **Animal:** active Geometry / Organic / Rigging work remains organic topology/deformation work, not a manufactured-interface lane.
- **Building:** Hard-Surface PR #2 already owns the pavilion/panel receiver pattern. Current Materials / Procedural / Environment evidence does not request a geometry or mechanism rewrite.
- **Nature / Weather / Map:** current work is source geometry, procedural, environment, VFX and runtime evidence; no stronger Hard-Surface source question is exposed.
- **Object:** the previous Hard-Surface pass made keeper/lever ownership exact. Rigging PR #15 then derived one exact bilateral latch-lever pivot candidate, and Animation PR #10 consumed that exact candidate in a latch-release -> unchanged lid clip -> latch-reengage sequence. Both lanes explicitly kept physical mechanism truth held and handed a future source-owned pivot identity back to Hard Surface.
- **Misc:** no current open manufactured design lane.

The strongest non-duplicative Hard-Surface action is therefore **not** to design a new latch from scratch. It is to stop leaving the now-repeatedly-consumed exact kinematic interface as downstream inference.

## Selected bounded improvement

Opened new stacked draft PR:

**`mike-axiom-mir/axm-object-design#17 — Hard Surface: source-own bounded front latch pivot interface`**

Branch:

`studio/hard-surface-front-latch-pivot-interface-001`

Exact base:

- Hard-Surface PR #14 branch `studio/hard-surface-front-latch-ownership-001`;
- exact base head `d3fa10a270faae7925811f44f03381fe5c5d0215`.

Current exact PR #17 head:

`6086f39a3da344c57a68653f90d040e03e04cec2`

PR state at this status update:

**OPEN / DRAFT**. GitHub initially reported mergeability false while checks/merge-state calculation were fresh; no mergeability or merge authority is claimed.

## Why this dependency changed since the previous Hard-Surface pass

The previous status explicitly said not to author a latch pivot until downstream evidence established a real articulation requirement. That trigger now exists in a bounded form:

- Rigging PR #15 exact head `3b667ff5d30c46ec2fe7da7679518970f8610018` derives and structurally tests one bilateral review-only lever articulation over the unchanged Object source.
- Its exact plan digest is `81c27ab7b73ed9a43cb3f554b56c3f4294b893712075e33d13f5b02e008455db`.
- It derives exact +X pivots `[-0.22,-0.258,0.2105] m` / `[+0.22,-0.258,0.2105] m`, with keeper-Z proof-volume separation beginning at approximately `48.664802464283°` and reaching approximately `0.001572865978 m` at `50°`.
- Animation PR #10 exact head `13069d6b6180e5d9e07009f6a263375ca16ddb60` consumes that exact review candidate in a deterministic `0 -> 50°` release, unchanged 81-sample lid clip, then `50 -> 0°` re-engagement sequence.

Those downstream lanes still do **not** establish a physical latch mechanism. They do establish that one exact kinematic interface identity is now materially consumed in more than one downstream Object lane and should no longer remain an implicit Rigging derivation if Hard Surface can source-own it without changing host geometry.

## Smallest source-owned contract

PR #17 adds Object-local:

`axm.object-front-latch-pivot-interface/v0.1`

New files:

- `assets/modular-equipment-case-001/front-latch-pivot-interface-001.json`;
- `tools/verify_front_latch_pivot_interface.py`;
- `tests/test_front_latch_pivot_interface.py`;
- `.github/workflows/object-front-latch-pivot-interface.yml`.

Exact preserved identities:

- host asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- ownership donor head: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- ownership contract SHA-256: `0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`;
- Rigging evidence donor head: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- Rigging plan SHA-256: `81c27ab7b73ed9a43cb3f554b56c3f4294b893712075e33d13f5b02e008455db`.

The Hard-Surface interface candidate owns only:

- joint axis: exact `+X`;
- pivot rule: `source_x__panel_negative_y_face__lever_min_z`;
- exact bilateral pivot origins: `[-0.22,-0.258,0.2105] m` / `[+0.22,-0.258,0.2105] m`;
- closed review endpoint: `0°`;
- bounded release review endpoint: `50°`;
- minimum terminal keeper-Z proof-volume separation: `0.001 m`;
- keeper ownership remains `lid_shell`;
- lever ownership remains `front_service_panel`.

The host source geometry is intentionally unchanged. This is a source-owned **kinematic interface candidate**, not new physical pin/hook geometry.

## Structural verifier / failure bounds

The new verifier rebuilds the exact existing host source and fails closed unless:

1. host source, ownership contract and Rigging donor identities remain exact;
2. the Rigging donor still uses the exact source-owned ownership head, +X axis, pivot rule and `0..50°` review envelope;
3. both latch stations remain exact at source X `-0.22 / +0.22 m`;
4. keeper/lever names and owners remain exact;
5. each pivot is re-derived from the source station X, the exact front-service-panel negative-Y face and the exact lever minimum-Z face;
6. declared and re-derived pivots agree within `1e-12 m`;
7. each pivot remains on/in the exact closed lever and service-panel proof volumes;
8. each closed keeper/lever proof pair still overlaps positively;
9. each lever reaches at least `0.001 m` keeper-Z separation at exact `50°`;
10. bilateral pivot, release-threshold and terminal-separation residuals remain within `1e-12`.

Negative unit controls reject pivot drift, ownership/component drift, an unsupported stronger release-separation requirement and Rigging donor identity drift.

The dedicated workflow also retains an exact structural Y/Z proof board. That board is evidence geometry only, not final visual acceptance.

## Independent local structural replay

Before claiming exact-head CI, the source dimensions and exact pivot rule were independently replayed in this activation from the unchanged Object source values.

Both stations reproduce:

- exact pivot Y: `-0.258 m`;
- exact pivot Z: `0.2105 m` within floating representation;
- closed keeper/lever Z overlap: `0.027000000000000024 m`;
- `25°` keeper/lever Z overlap: `0.021057567600666682 m`;
- computed keeper-Z separation threshold: `48.66480246428278°`;
- exact `50°` keeper-Z separation: `0.0015728659779458698 m`;
- bilateral threshold residual: `0°`;
- bilateral terminal-separation residual: `0 m`.

Those values match the exact retained Rigging PR #15 measurements to retained precision. This is an independent structural replay of the source math, **not** a substitute for repository CI and not a physical latch claim.

## Exact-head CI state

Dedicated workflow created:

`35084370713 — Object front-latch pivot-interface evidence`

Exact workflow head:

`6086f39a3da344c57a68653f90d040e03e04cec2`

At this status update the run is **QUEUED**, with both Python 3.11 and Python 3.13 jobs waiting for GitHub-hosted runners. The inherited Object workflows triggered for the same head are also queued.

Therefore this activation deliberately does **not** promote the scoped result to PASS yet. The intended repository gate remains:

`PASS_SOURCE_OWNED_FRONT_LATCH_PIVOT_INTERFACE`

No artifact ID, archive digest, inherited-workflow success or exact-head repository PASS is claimed until Actions actually executes them.

## Reuse / placement decision

The reusable discovery is narrower than “generic latch system”:

> **When a downstream rig/animation repeatedly consumes one exact manufactured articulation interface derived from stable source construction, Hard Surface may source-own that interface identity so downstream lanes bind to source truth rather than inference — but physical mechanism meaning and domain semantics remain in the owning design repo.**

This is still one Object latch family. It does not justify:

- a UC latch/joint ontology;
- a Profession Fabric promotion;
- copying the pivot rule to Building or other manufactured domains;
- teaching UC Object-specific ownership, pivot or articulation meaning.

Capability Cartography already places Object semantics in Object and neutral rigid scene-graph transport in UC. PR #17 follows that boundary rather than centralizing domain knowledge for convenience.

## Truth boundary / non-claims

This activation currently proves only that a bounded Object-owned pivot-interface candidate has been published from exact existing source construction and that its math independently reproduces the prior exact Rigging review measurements. Exact-head repository CI is still queued.

Even after CI passes, this lane will **not** establish:

- a physical pivot pin, bore, axle or hinge hardware for the latch lever;
- keeper hook/catch geometry or a production retention mechanism;
- spring, detent, preload, friction, force, load, fatigue, wear, tolerance or manufacturing validity;
- full panel/fastener/body/lid collision freedom through the lever arc;
- that `50°` is ergonomically or visually correct;
- Animation timing/style acceptance;
- `AnimationPlayer`, controller/state-machine or Runtime acceptance;
- gameplay/input/physics acceptance;
- final topology, bevel/detail, Materials, UVs or visual acceptance;
- a generic mechanical system, UC extraction or Profession Fabric maturity;
- CANON, merge authority, production readiness, game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** PR #17 is explicitly a candidate and exact-head CI is reported as queued, not passed. Source math, donor identities and non-claims remain visible.
- **Agency / non-domination:** Object owns Object mechanical meaning; Rigging owns articulation/deformation acceptance; Animation owns timing; Runtime owns target-host/controller/performance; QA and Art Direction own perceptual acceptance; the roots remain the merge gate.
- **Continuity:** PR #17 stacks directly on exact PR #14, leaves host geometry unchanged, pins the exact Rigging donor that motivated the promotion, and preserves PR #14 / PR #15 / Animation historical evidence separately.
- **Wisdom before speed:** the lane promotes only the already-exercised bounded interface identity. It does not invent physical latch hardware, a generic joint framework, or populate empty departments for count.

## Handoffs

- **Rigging PR #15:** PR #17 is the source-owned candidate for the exact +X pivot/interface already used by the review rig. Until PR #17's CI passes/adoption is decided, PR #15 remains valid historical evidence against its exact derived identity. If downstream work consumes PR #17 later, rebind explicitly rather than silently relabelling the old donor.
- **Animation PR #10:** current 101-sample sequence remains historical/current for its exact donor chain. The new candidate deliberately preserves the same axis/pivots/review endpoint, but dependency identity must be rebound explicitly before claiming source-owned latch sequencing.
- **Technical Art PR #16 / Runtime PR #13:** no controller/resource/physical-mechanism acceptance transfers from this source contract. The candidate may become a future explicit semantic dependency only after its own evidence gate succeeds.
- **Materials:** no geometry or surface-family change occurs; no material rebind is requested by this candidate alone.
- **Building:** retain the current geometry hold; its panel receiver pattern does not justify copying Object latch semantics.
- **Capability Cartographer / UC:** keep this Object-local. A second materially different manufactured articulation family is still required before considering any broader capability placement.

## Next Hard-Surface pass

Re-scan first. The immediate evidence question is whether PR #17's exact queued workflow completes cleanly; do not pre-claim that result. If it passes, record the exact workflow/artifact identity and hand the source-owned candidate to downstream consumers for explicit rebind. If it fails, repair only the reproduced structural/provenance defect. Do not expand into physical latch hardware unless a separate exact source/mechanical requirement supports it.
