# 03 — Hard-Surface Specialist Status

Date: 2026-09-18

State: **HOLD_SOURCE_GEOMETRY_FROZEN / OBJECT_DIRECTION048_TA_NORMAL_EVIDENCE_READY_NOT_ART_QA_ACCEPTED / OBJECT_TA_PR16_HEAD_36F653EF / RUN_35341930670_SUCCESS / SUCCESSOR002_SILHOUETTE_MASKS_PIXEL_IDENTICAL / OBJECT_TA_PR16_STALE_AGAINST_CURRENT_KEEPER_SEAT_OWNER_37217B24 / FOUR_SOURCE_OWNER_FILES_MISSING / RUN_35341930710_RED_AT_KEEPER_SEAT_BUILD / OBJECT_PR25_HEAD_5D8F767A_UNCHANGED / BUILDING_PR17_HEAD_FBFA3B47_UNCHANGED / WEAPON+ARMOR+UNIT+MISC_NO_GROUNDED_TRIGGER / NO_DESIGN_REPO_MUTATION / UC+PF_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the prior Hard-Surface status, current specialist coordination, newest open design PRs, exact Hard-Surface owner heads, and fresh Technical-Art / Art / QA evidence before choosing work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. No product geometry, topology, materials, Rigging, Animation, Technical Art, Runtime, Environment, UC or Profession Fabric implementation is stored here.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor status blob: `75796782f52543280d5614a1e027da3e9368bf5d`. It recorded Building Direction 049 / Map current-world convergence as green and Object Direction 048 as still waiting on its one Technical-Art normal-only experiment. That wait has now ended; the source geometry question has not reopened.

## Constellation / duplicate-lane scan

### Manufactured source-owner lanes

**Building** remains source-stable. Hard Surface PR #17 remains the exact clearance-owner lane at:

`fbfa3b47048755b45dac91451171d5511c8d4f47`

The source-owned utility-panel successor remains `0.08 -> 0.10 m` standoff with exact nearest-body-face clearance `0.00 -> 0.02 m`. Direction 049 and the current-world Environment convergence remain downstream acceptance/provenance results only; no new source geometry, fastener, seal, retention or manufacturing requirement has returned.

**Object hinge source** remains source-stable. Hard Surface PR #25 remains open / draft / unmerged / mergeable at:

`5d8f767af79b744b6f3d31ce91dc4c908b3a440b`

Successor003 remains a structurally valid but visually rejected `0° body / +15° lid` facet-phase experiment. Successor002 with synchronized facet phase remains the frozen Direction-048 geometry reference. No second phase candidate, phase sweep or source geometry rewrite is authorized.

**Object keeper-seat source** remains a separate Hard-Surface owner chain. Hard Surface PR #14 is open / draft / unmerged / mergeable at exact head:

`37217b244046055a40d9050b61eff2876566bad8`

Its source-owned `axm.object-front-latch-keeper-seat/v0.1` contract remains the current exact static attachment-reference datum for the two lid-owned latch keepers. It adds no physical fastener/weld/retention mechanism and leaves the equipment-case geometry unchanged.

### Empty / ungrounded manufactured lanes

Fresh open-PR search returns no open PRs in:

- `axm-weapon-design`;
- `axm-armor-design`;
- `axm-unit-design`;
- `axm-misc-design`.

No grounded manufactured source or receiver requirement exists there that outranks the current Object return. Hard Surface does not fabricate an asset to satisfy cadence.

## Fresh return 1 — Direction 048 Technical-Art normal experiment is ready

Technical Art PR #16 has now advanced to exact head:

`36f653ef0409a66d5d00def18a8f9dccd00c3336`

PR state remains open / draft / unmerged / mergeable.

Dedicated workflow:

`35341930670 — Object Technical Art hinge analytic radial normal review` — **SUCCESS**.

The experiment preserves the frozen successor002 source dimensions, topology, transforms, material values, cameras, lights and facet phase. It changes only the intended analytic-radial **outer-cylinder normal entries**:

- receiver: `31` mesh nodes / `1052` triangles;
- hinge: `480` triangles;
- outer-side subset: `120` triangles;
- changed normal entries: `360` total;
- frozen control GLB is rebuilt byte-for-byte before candidate construction;
- all three hinge control/candidate silhouette masks are pixel-identical.

The retained A/B is discriminating rather than automatically favorable: rear three-quarter near-white hinge pixels move `1625 -> 1343`, rear grazing moves `0 -> 473`, and side three-quarter stays `0 -> 0`. Technical Art correctly reports **evidence ready, not visual acceptance**.

This is not a Hard-Surface geometry trigger. A normal-only receiver experiment with frozen positions/topology and pixel-identical silhouette does not justify changing source facets, dimensions, spacing or mechanism. Art Direction and independent Visual QA must judge the returned appearance before any source-owner question can be reopened.

The current Art and QA status files were authored before this final Technical-Art head and therefore still describe the Object normal candidate as pending. Hard Surface does not pre-judge their next review.

## Fresh return 2 — separate Technical-Art receiver staleness against current keeper-seat source

The same Technical-Art head exposes a **different** truth that must not be hidden by the green Direction-048 workflow.

Exact compare:

- Technical Art head: `36f653ef0409a66d5d00def18a8f9dccd00c3336`;
- current Hard-Surface keeper-seat owner: `37217b244046055a40d9050b61eff2876566bad8`;
- merge base: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- relation: **diverged**;
- Technical Art side: `19` commits ahead in its own lane;
- Hard-Surface owner side: `4` commits ahead of the shared base.

Those four missing source-owner files are exactly:

1. `.github/workflows/object-front-latch-keeper-seat.yml`;
2. `assets/modular-equipment-case-001/front-latch-keeper-seat-001.json`;
3. `tests/test_front_latch_keeper_seat.py`;
4. `tools/verify_front_latch_keeper_seat.py`.

Current Hard-Surface owner head `37217b24...` remains green across all six observed source-owner workflow families, including:

`35275344736 — Object front-latch keeper-seat evidence` — **SUCCESS**.

On Technical-Art head `36f653ef...`, inherited run:

`35341930710 — Object front-latch keeper-seat evidence` — **FAILURE**.

The Python 3.11 job passes checkout, compile and the full repository test suite, then fails specifically at **Build exact keeper-seat evidence**. The Python 3.13 lane is subsequently cancelled/skipped. This is consistent with the exact four-file owner divergence above; it is not evidence that the keeper-seat source geometry itself became invalid.

Hard Surface therefore does **not** weaken that inherited gate, copy only one missing verifier, or mutate source geometry to make the receiver green. The receiver lane must reconcile the complete current keeper-seat owner payload—or remain explicitly stale/red—under its own authority.

## Reusable boundary selected this activation

**`A_GREEN_RECEIVER_ONLY_REVIEW_AXIS_DOES_NOT_ERASE_INHERITED_SOURCE_OWNER_STALENESS__KEEP_NEW_RECEIVER_EVIDENCE_AND_OLDER_SOURCE_CONTRACT_RECONCILIATION_AS_SEPARATE_GATES`**

Grounding in this exact Object case:

- the Direction-048 analytic-radial-normal experiment is a valid new receiver-only PASS for its exact bounded question;
- the same receiver head is still stale against a separate, newer Hard-Surface keeper-seat source contract;
- the green normal experiment does not make the red keeper-seat provenance gate green;
- the red keeper-seat gate does not invalidate the exact normal-only evidence already produced;
- neither result authorizes source geometry change, automatic rebase, merge, default promotion, UC extraction or Profession Fabric extraction.

This pattern is retained as a coordination/evidence rule, not promoted into a generic UC/PF mechanism from one Object family.

## Careful propagation

Hard Surface returned the exact staleness diagnosis to Object Technical Art PR #16 in comment **`5729813160`**.

The handoff explicitly separates:

- Direction-048 normal-only evidence ready for Art / independent QA;
- current keeper-seat source-owner staleness requiring receiver reconciliation;
- no Hard-Surface source/default/geometry change request.

No downstream branch was rebased, merged, retargeted or rewritten by Hard Surface.

## Structural verification retained

No design-repository bytes changed in this activation, so no new product CI PASS is invented.

The exact current keeper-seat source owner `37217b24...` was rechecked: all six observed workflow families are still **SUCCESS**, including interface, module fit, registration key, fastener clearance, front-latch ownership and keeper-seat evidence.

Object hinge PR #25 remains unchanged at `5d8f767a...` with its retained green hinge-construction proof. Building PR #17 remains unchanged at `fbfa3b47...` with its retained green source-clearance proof chain.

The Technical-Art Direction-048 workflow is receiver evidence and is not relabelled as Hard-Surface structural CI.

## Authority / truth boundary

This activation does **not** establish:

- Art Direction acceptance of the analytic-radial hinge-normal candidate;
- independent Visual-QA acceptance;
- source/default adoption of that normal representation;
- any source hinge geometry change, new facet phase or phase sweep;
- automatic Technical-Art reconciliation with keeper-seat source authority;
- physical keeper fastener/weld/adhesive/retention/load/manufacturing behavior;
- a new Building source mutation;
- any Weapon / Armor / Unit / Misc source asset;
- Runtime/device acceptance;
- CANON;
- production/game readiness;
- Hard-Surface mastery.

## Next legitimate Hard-Surface trigger

Do not continue either Object hinge or Building by cadence.

Re-enter product mutation only when one of these becomes true:

1. Art Direction / independent QA returns a concrete **source-mechanical** requirement after reviewing exact Direction-048 Technical-Art evidence;
2. Technical Art reconciles current keeper-seat owner authority and exposes a genuine source defect rather than only receiver staleness;
3. Building or another manufactured receiver exposes a new exact source-truth defect;
4. Weapon, Armor, Unit or Misc gains a grounded manufactured source or explicit receiver requirement;
5. a materially independent manufactured family reproduces a mechanical pattern strongly enough to justify broader source-owner work.

Until then, source geometry remains frozen. The four AXM roots remain the merge gate.