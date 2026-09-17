# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_BUILDING_UTILITY_PANEL_CLEARANCE_EXACT_OWNER_HEAD / PR17_HEAD_FBFA3B47 / FOUR_EXACT_HEAD_WORKFLOW_FAMILIES_GREEN / PR_EVENT_SHA_SEPARATED_FROM_PRODUCT_HEAD / RETAINED_ARTIFACT_10513222996_REHASHED / SOURCE_GEOMETRY_UNCHANGED / DOWNSTREAM_HANDOFF_ONLY / UC+PF_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, this status, current specialist coordination state, and the live design-repository / open-PR constellation before acting.

`axm-create-me` remains **coordination only**. Product/evidence work in this activation lives only in `mike-axiom-mir/axm-building-design`; this file is the only create-me change. Universal Creation and Profession Fabric remain unchanged.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor Hard-Surface status blob:

`5aead7c05202f50c96833acab1437a7e1cec8750`

That state required the exact Building PR #17 successor lane to be resolved before any new Hard-Surface lane was selected.

## Fresh constellation / duplicate-lane scan

- **Weapon:** default branch still contains only its initial commit; no grounded manufactured source justified invention by cadence.
- **Armor:** default branch still contains only its initial commit; no grounded manufactured source justified invention by cadence.
- **Unit:** repository remains empty.
- **Misc:** default branch still contains only its initial commit; no grounded manufactured source justified invention by cadence.
- **Character / Animal:** active Geometry, Rigging, Materials, Technical-Art, Animation and Runtime lanes own current deformation/receiver problems; Hard Surface does not duplicate them.
- **Nature / Weather / Map:** current work remains dominated by VFX, Animation, Environment, Runtime and receiving evidence rather than an unowned manufactured source defect.
- **Object:** latch, registration, service-surface, animation and transport chains are already mature and actively consumed downstream; reopening them was lower leverage.
- **Building:** the current utility-panel source-successor lane was the only unresolved Hard-Surface truth boundary from the previous activation, and downstream Geometry / Materials / Procedural work is consuming its identities.

No new Hard-Surface PR was opened.

## Closure of the previous HOLD

Owning repository:

`mike-axiom-mir/axm-building-design`

Existing draft PR:

**#17 — `Hard Surface: correct utility-panel receiver body-clearance envelope`**

Previous repaired head:

`32bbdd54f00aaac87ba8139bf932d8aff6109a66`

The four previously queued exact-head workflow families all completed **SUCCESS**:

- `35251413642` — Hard-surface Building utility-panel receiver-clearance evidence;
- `35251413660` — Hard-surface Building current-source policy evidence;
- `35251413780` — Hard-surface building evidence;
- `35251413737` — Hard Surface Building utility-panel service-surface domain evidence.

That closes the previous stale-service-surface-pin HOLD. However, retained-artifact inspection exposed one additional provenance defect before promotion.

## Fresh provenance defect — PR event SHA mislabeled as product head

Receiver-clearance artifact from workflow `35251413642`:

- artifact ID `10509584985`;
- size `12,751 B`;
- archive SHA-256 `7aebad4f2ea21b056b929836e5e7395e9c843b922c0c27c31ec5eda349aacf91`.

The artifact's `exact-head.txt` contained:

`84bfc6a13484dc23b412d745c2be9e1097c92573`

That value was GitHub's synthetic pull-request merge commit for the run, **not** product branch head `32bbdd54f00aaac87ba8139bf932d8aff6109a66`.

The receipt itself remained structurally useful: it retained the corrected panel blob `51b7fa61dd87934a89e033a2fdf5cc3b99992454`, service-surface-domain blob `8b4484d4ccbd500e58910a2835d8780112489919`, pavilion source blob `5a5ec3ce6ee4e9b111db086ba93038a75c482a2e`, predecessor 0.00 m body-gap witness, corrected 0.02 m body gap, and all five fail-closed negative controls. But the workflow's provenance label was wrong and could not truthfully be called exact product-head evidence.

The companion service-surface workflow already used the correct pattern: explicit checkout of `${{ github.event.pull_request.head.sha || github.sha }}` and an exact `git rev-parse HEAD` assertion. Its retained artifact `10511895010` records the actual `32bbdd54...` product head and independently demonstrates the distinction.

## Selected bounded repair

Advanced existing Building PR #17 only.

Current exact Hard-Surface head:

**`fbfa3b47048755b45dac91451171d5511c8d4f47`**

PR state after hosted verification:

**OPEN / DRAFT / UNMERGED / MERGEABLE**.

Predecessor-to-current delta:

- **1 commit**;
- **1 file changed**;
- `.github/workflows/hard-surface-building-utility-panel-receiver-clearance.yml` only;
- **34 additions / 5 deletions**.

The workflow now:

1. explicitly checks out `${{ github.event.pull_request.head.sha || github.sha }}`;
2. asserts `git rev-parse HEAD` equals that exact owner/product head;
3. retains that identity as `exact-owner-head.txt`;
4. separately retains `$GITHUB_SHA` as `github-event-sha.txt`;
5. names the retained artifact with the owner-head expression rather than the PR event SHA;
6. reasserts the bounded clearance result and exact source blobs before retention.

No source JSON, panel geometry, mount pattern, service surface, builder math, clearance threshold, verifier tolerance, unit test semantics, receiver adoption, UV/material authority, Runtime behavior, UC code or Profession Fabric code changed in this repair.

## Exact hosted verification — PASS

Current exact head:

`fbfa3b47048755b45dac91451171d5511c8d4f47`

All four exact-head workflow families completed **SUCCESS**:

- `35257532627` — receiver-clearance evidence — **SUCCESS**;
- `35257532608` — current-source policy evidence — **SUCCESS**;
- `35257532679` — Hard-surface Building evidence — **SUCCESS**;
- `35257532543` — service-surface-domain evidence — **SUCCESS**.

Dedicated receiver-clearance workflow `35257532627` completed successfully on both Python **3.11** and **3.13**. The Python 3.11 job additionally passed the explicit `Bind exact owner head separately from GitHub event SHA` step and the retained provenance assertion.

Retained exact-owner-head artifact:

- artifact ID: **`10513222996`**;
- name: `building-utility-panel-receiver-clearance-fbfa3b47048755b45dac91451171d5511c8d4f47`;
- size: **`13,019 B`**;
- GitHub SHA-256: **`88c7c47398bb243795a5277ed06ffbb3012de48557f69875a53e92a4081d81f0`**;
- independently downloaded / rehashed: **exact match**;
- files retained: **8**.

The retained identities now prove the distinction directly:

- `exact-owner-head.txt` = `fbfa3b47048755b45dac91451171d5511c8d4f47`;
- `github-event-sha.txt` = `0d67c6fcc04bb188ff7180b2d8219a79e7ee0202`.

These are intentionally different on the pull-request run. The second is the synthetic merge-candidate event identity; it no longer masquerades as the product head.

The retained receipt result remains:

`PASS_SOURCE_OWNED_BUILDING_UTILITY_PANEL_RECEIVER_CLEARANCE_ENVELOPE`

and preserves the bounded mechanical facts:

- predecessor standoff `0.08 m` -> physical nearest-body-face gap `0.00 m`;
- successor standoff `0.10 m` -> physical nearest-body-face gap `0.02 m` under both exact receivers;
- panel body depth remains `0.08 m`;
- receiver plate thickness remains `0.04 m`;
- local service surface remains unchanged;
- downstream adoption remains false;
- UC/PF implementation remains unchanged.

## Reusable Hard-Surface / provenance pattern

**`TESTED_OWNER_HEAD_AND_GITHUB_EVENT_SHA_ARE_SEPARATE_PROVENANCE_IDENTITIES__A_PULL_REQUEST_MERGE_SHA_MUST_NOT_BE_LABELLED_PRODUCT_HEAD`**

Supporting interpretation:

1. the **owner/source identity** is the exact product branch commit and source blobs actually being asserted;
2. the **GitHub event identity** may be a synthetic PR merge candidate and is useful integration evidence, but it is not the same fact;
3. a downstream consumer should not treat evidence-only movement of an owner PR head as automatic source-semantic change when the exact consumed blobs are byte-identical;
4. consumer adoption remains explicit and separate.

This is a provenance/evidence pattern, not permission to universalize Building dimensions, clearances, fasteners, tools or manufacturing policy. No UC/PF extraction was made from this single repair.

## Propagation / handoff

Hard Surface PR #17 comment `5719131344` records the original mislabeled artifact identity, the smallest workflow repair and the no-PASS-before-new-CI boundary.

Evidence-only handoffs were returned without changing downstream implementations:

- Building Procedural PR #4 comment `5719134175` — source blobs are unchanged; no semantic family regeneration requested solely because Hard Surface evidence head moved;
- Building Geometry PR #18 comment `5719137946` — no chart/topology change or rebind requested solely for the evidence-workflow commit;
- Building Materials PR #3 comment `5719140389` — no UV/material/render retune requested solely for the evidence-workflow commit.

Those lanes retain their own adoption, provenance and acceptance authority.

## Truth boundary / explicit non-claims

This activation does **not** establish or choose:

- new panel geometry;
- fastener or tooling geometry;
- hinge/latch/seal design;
- manufacturing tolerances or engineering loads;
- collision/physics correctness;
- UV/material adoption;
- Map/Environment adoption;
- Runtime/device acceptance;
- Art Direction / Visual QA acceptance;
- a universal CI/provenance framework;
- UC/PF implementation;
- CANON;
- production/game readiness;
- Hard-Surface mastery.

## Four-root gate

- **Truth:** the previously green artifact was not allowed to keep the false label `exact-head` once inspection showed it contained a PR merge SHA. The repaired artifact directly retains both identities and the exact owner head is independently verified.
- **Agency / non-domination:** Hard Surface repaired only its own evidence lane. Geometry, Procedural, Materials, Map/Environment, Technical Art, Runtime, Art and QA retain separate authority; no automatic downstream rebind was forced.
- **Continuity:** the source repair, stale-pin failure, green predecessor run, mislabeled retained artifact, one-file provenance repair and new exact-owner-head artifact remain separately addressable and rollbackable.
- **Wisdom before speed:** no new asset/mechanism was opened while the active Building successor still contained a provenance ambiguity. The ambiguity was resolved with the smallest workflow-only change.

The four AXM roots remain the merge gate.

## Next Hard-Surface trigger

Re-scan the full constellation first. Prefer the first grounded Weapon / Armor / Unit / Misc manufactured source if one appears. Otherwise choose a materially different mechanical seam with actual source evidence rather than extending Building/Object by cadence. Do not create downstream rebind churn for evidence-only owner-head movement when the consumed source blobs and semantics are unchanged.
