# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_BUILDING_DIRECT_STICKER_FABRIC_CONSUMER_HELPER_CONSOLIDATION / EXISTING BUILDING PR #4 ADVANCED / TWO ORTHOGONAL RECEIVERS EXACT / LOCAL RIGID TRANSFORM REMOVED / BUILDING SEMANTICS RETAINED / UC + PF UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the active PR constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before changing implementation evidence.

`axm-create-me` remains **coordination only**. Product/evidence work stayed in the existing `mike-axiom-mir/axm-building-design` Procedural PR #4; this repository changes only this status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no grounded repeated source pattern justified opening a Procedural lane.
- **Character:** current shoulder work remains Geometry / Rigging / Organic owned and still carries structural-intersection pressure. Procedural did not interfere.
- **Animal:** Geometry, Materials, Rigging, Animation, Technical Art, Runtime and Visual QA remain actively occupied by the exact-mirror normal / UV / tangent / deformation chain. Proceduralizing that work now would duplicate active ownership.
- **Building:** Hard Surface and Geometry now also have a boundary-only union-shell receiving representation, but it remains an explicit opt-in downstream rebind rather than a new repeated generator pattern. The existing utility-panel receiver family, however, still carried duplicate local rigid-frame transform math after exact Sticker Fabric equivalence had already been proven.
- **Nature:** mature bounded Procedural branch/crown generation already exists; current pressure is Geometry / VFX receiving evidence.
- **Weather:** the existing bounded three-seed Procedural family already exists; current work is VFX / receiving / Runtime owned.
- **Map:** current work is Environment / Runtime representation and acceptance tradeoffs, not a missing generator.
- **Object:** its existing Procedural configuration family has already completed the direct Sticker Fabric consumer-helper consolidation. That makes the matching held Building cleanup an earned consolidation target rather than a speculative new abstraction.
- **Universal Creation / Profession Fabric:** no Building receiver, tag, fit, mount, clearance or acceptance semantics were moved into either. UC's standalone compatible placement implementation remains intentionally untouched.

No new Procedural PR or duplicate generator was opened.

## Why this Building repair is justified

The prior Building rebind proved that Sticker Fabric reproduces both source-owned utility-panel receiver placements exactly, but deliberately left local helper removal held. Object later completed the same direct-consumer consolidation independently. At that point Building still performed the repeated neutral rigid-frame operation locally even though the shared home had already been selected and exact equivalence had already been demonstrated across two receiving domains.

That is now a real duplication boundary: keep Building's domain semantics local, but stop maintaining a second implementation of the neutral rigid transform inside its Procedural family.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#4 — `Procedural: derive repeated pavilion box rows from exact source`**

Exact current Procedural head:

**`cdf93ea6ad2757e14e5febc96d579d94f64a4d24`**

Observed PR state after completion: **OPEN / DRAFT / MERGEABLE**.

The bounded family remains:

**`axm.building-utility-panel-receiver-placement-family/v0.1`**

No new family or attachment schema was created.

## Smallest repair

`tools/build_pavilion_utility_panel_receivers.py` now directly consumes the pinned shared neutral rigid-frame implementation from:

- repository: `mike-axiom-mir/axm-sticker-fabric`;
- exact head: **`3aa93b0132eea9becefb20c716c6ec1a023ad28b`**;
- module: `src/axm_stickers/placement.py`;
- exact module SHA-256: **`1344884f14cbe2fa25617664521291b96c4bde067ba0cba31e043045ca3f1436`**.

The Building generator still owns and executes:

- exact source receiver IDs and ordering;
- accepted tags;
- right-handed orthonormal receiver-frame validation;
- panel footprint and mount-pattern fit;
- body-clearance checks;
- panel proof shape and vertex ordering;
- Building-specific source and acceptance semantics.

Only the already-proven neutral local-to-world rigid-frame matrix operation moved to the shared implementation. The evidence now records:

**`local_rigid_frame_transform_implementation: false`**

and:

**`placement_capability: mike-axiom-mir/axm-sticker-fabric:src/axm_stickers/placement.py`**.

The historical UC donor remains provenance only; UC was not rewritten or removed.

## Multiple materially different exact outputs

The same source-owned panel is still tested through two orthogonal receiver frames, so the proof is not one lucky transform:

1. `front-utility-bay`
   - center `[-2.45, -1.08, 1.65]`;
   - outward normal `[0.0, -1.0, 0.0]`;
   - exact mesh digest **`dcadb6a7e938557c866259ed4a3ca7febb32b593b68b22073adc2617d63ef5c0`**.
2. `east-utility-bay`
   - center `[3.88, 0.1, 1.65]`;
   - outward normal `[1.0, 0.0, 0.0]`;
   - exact mesh digest **`95bbe7d3feebcaeebdaa285ea2f69ee24989d16f140ef59abf08f4725d77a904`**.

Preserved exactness:

- receiver-normal dot product: **`0.0`**;
- distinct receiver frames: **2/2**;
- distinct transformed mesh digests: **2/2**;
- exact retained vertex-list matches through Sticker Fabric: **2/2**;
- maximum position residual: **`0.0 m`**;
- mount-pattern residual remains **`0.0 m`** for both outputs;
- previous mesh digests are byte-semantically unchanged;
- procedural coverage remains `17/19` for the base builder and `21/23` for the retained successor composition; `slab` and `roof` remain deliberately outside the repeated families.

Scoped consolidation decision:

**`PASS_BUILDING_DIRECT_STICKER_FABRIC_CONSUMER_HELPER_CONSOLIDATION`**

The older receipt field `PASS_FIRST_CONSUMER_REBIND__LOCAL_HELPER_REMOVAL_HELD` remains present only as explicit historical compatibility and is marked as superseded by the current decision.

## Failure bounds

The Building family retains its seven domain failure controls:

- duplicate receiver ID;
- unknown receiver ID / order drift;
- pavilion source identity drift;
- panel source identity drift;
- orientation-contract drift;
- non-orthogonal receiver frame;
- panel / receiver tag mismatch.

The direct shared-placement proof also retains four shared-capability controls:

- reflected target frames reject;
- socket identity mismatch rejects;
- non-unit scale leaves the exact-neutral contract;
- upstream Sticker Fabric placement-digest drift rejects.

There is still no nearest-receiver fallback, frame inference, hidden scale, hidden extra rotation or silent source rewrite.

## Exact CI / retained evidence

All exact-head workflows on `cdf93ea6ad2757e14e5febc96d579d94f64a4d24` completed successfully:

- **`35168217905 — Procedural building symmetric-row evidence` — SUCCESS**;
- **`35168216867 — Procedural building symmetric-row evidence` (push) — SUCCESS**;
- **`35168218000 — Hard-surface building evidence` — SUCCESS**;
- **`35168218050 — Hard-surface Building current-source policy evidence` — SUCCESS**.

Retained Procedural artifact:

- ID: **`10475701586`**;
- name: `service-pavilion-procedural-001-cdf93ea6ad2757e14e5febc96d579d94f64a4d24`;
- uploaded size: **`26,567 B`**;
- GitHub SHA-256: **`68b91e0135cc8de20b46e76063fdf1a097ce9510506038972e353953fadcce6e`**;
- independently downloaded and rehashed in this activation to the same SHA-256;
- exact-head binding: `cdf93ea6ad2757e14e5febc96d579d94f64a4d24`.

Artifact inspection confirms the direct-consumer receipt reports `local_rigid_frame_transform_implementation: false`, current migration decision `PASS_BUILDING_DIRECT_STICKER_FABRIC_CONSUMER_HELPER_CONSOLIDATION`, two exact receiver matches and `0.0 m` maximum residual.

## Placement / authority boundary

Correct placement remains **Building-local Procedural evidence consuming one neutral shared Sticker Fabric capability**.

- Building retains all receiver, fit, mount, clearance, shape, source and acceptance semantics.
- Sticker Fabric supplies only renderer-independent neutral rigid 3D placement math.
- Object's prior consolidation is independent evidence, not authority over Building.
- The newer Building boundary-only union shell remains a separate explicit opt-in receiving representation and was not silently adopted into this family.
- UC retains its standalone compatible copy; no forced dependency was introduced into UC.
- Profession Fabric receives no new procedure from this pass.

## Explicit non-claims

This activation does **not** establish:

- a universal attachment schema or universal receiver semantics;
- deletion or migration of any other consumer's local code;
- automatic adoption of the Building boundary-only union-shell representation;
- arbitrary building generation or arbitrary panel placement;
- runtime attachment, physics, collision, navigation or gameplay acceptance;
- architectural, structural-engineering or manufacturing validity;
- final material / visual / Art-Direction acceptance;
- UC extraction or Profession Fabric promotion;
- CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact dependency identity, unchanged output digests, historical receipt semantics and the absence of a local rigid-transform implementation are stated separately and testably.
- **Agency / non-domination:** Building keeps its domain authority; neither Sticker Fabric nor Procedural rewrites source semantics or silently migrates other consumers.
- **Continuity:** the existing PR and family were repaired in place, previous exact outputs remain unchanged, historical UC provenance remains explicit, and unrelated workflows can run without vendoring the shared dependency.
- **Wisdom before speed:** consolidation happened only after cross-domain equivalence and a second direct consumer existed; no larger attachment framework or premature UC/PF promotion was invented.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Building merely because PR #4 is active. A future Building change is justified only by another real source/consumer contract change or a newly evidenced repeated pattern. Otherwise prefer a different bounded pattern with clear ownership and at least two materially different outputs.