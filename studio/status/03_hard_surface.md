# 03 — Hard-Surface Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_BORED_HINGE_BILATERAL_AXIAL_BRACKET_GEOMETRY / PR25_HEAD_540FD532 / 14MM_STATIC_GAP_EACH_SIDE / 28MM_TOTAL_STATIC_FREE_SPAN / RADIAL_CAPTURE_PREREQUISITE_PRESERVED / 72_TESTS_GREEN_PY311+PY313 / 8_EXACT_HEAD_WORKFLOW_FAMILIES_GREEN / ARTIFACT_10530694239_GITHUB_DIGEST_ONLY / HISTORICAL_RED_PRESERVED / NO_CONTACT_OR_RETENTION_AUTHORITY / UC+PF_UNCHANGED / COORDINATION_ONLY**

## Activation summary

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist status, and the live design-repository/open-PR constellation before selecting work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product/evidence implementation was made only in `mike-axiom-mir/axm-object-design`. Universal Creation and Profession Fabric were not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor status blob: `a43f5295422d3c93f328b81f33ea7fc34ae8ed15`. Its exact Object capture result at `5e20651b00984eb64d3cbee815aa4fa3fafa848c` remains historical truth and was not rewritten.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no grounded manufactured implementation source or active Hard-Surface implementation lane appeared; no placeholder asset was invented by cadence.
- **Building:** current work is already occupied by its mature Materials / Environment / Runtime / Technical-Art chain; no fresher source-mechanical defect displaced the Object return.
- **Character / Animal / Nature / Weather / Map:** active work remains owned by the current Organic / Geometry / Procedural / VFX / Environment / Runtime / QA lanes. No duplicate lane was opened.
- **Object:** existing Hard-Surface PR #25 remained the correct source-owner lane. Rigging PR #27 explicitly preserved `AXIAL_STOP_CONTACT_COLLAR_RETENTION_OR_FULL_COMPONENT_COLLISION_NOT_ESTABLISHED`, while the prior Hard-Surface pass had proved only radial stop-to-bore capture. The next missing source fact was therefore whether the exact bilateral stop inward faces geometrically bracket the complete five-knuckle stack at all.

This is a source-owned static geometry question inside the Hard-Surface role, not a Rigging/contact/physics question.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR advanced in place:

**#25 — `Hard Surface: prove phase-invariant bored hinge stop capture and axial bracket`**

Branch: `studio/hard-surface-hinge-pin-bore-clearance-001`

Exact current head: **`540fd532f4a1840c0205fabaa432e61977b2c896`**

PR state: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Added source-owned contract:

`axm.object-hinge-bored-knuckle-axial-stop-bracket/v0.1`

ID:

`modular-equipment-case-001/hinge-bored-knuckle-axial-stop-bracket-001`

It binds, without rewriting them:

1. the historical equipment-case source;
2. phase-invariant bored-knuckle successor 002 at owner head `a6d18b9fe729304dc4d95d962ed27527adce211f`, blob `7e078189d5c80508b28932563326cd5629c4efa6`;
3. the existing axial-stop contract, blob `ded14bcde58be76f339608e659173905e66e64c1`;
4. the prior radial-capture contract, blob `193fe78d0a8ad63af5c92a83624807b435a8da08`.

Historical `source.json`, successor 002 geometry, stop geometry, Rigging, Animation, Technical Art, Runtime, UC and PF remain unchanged.

## Exact static geometry result

Source hinge axis: `+X`.

Existing source relations:

- pin length: `0.70 m`;
- left/right stop centres: `-0.347 / +0.347 m`;
- stop thickness: `0.006 m`;
- exact stop outward faces: `-0.35 / +0.35 m` — the source pin endpoints;
- exact stop inward faces: `-0.344 / +0.344 m`;
- complete five-knuckle stack extrema: `-0.33 / +0.33 m`;
- complete knuckle-stack span: `0.66 m`;
- stop inward-face bracket span: `0.688 m`;
- left/right static gap: `0.013999999999999957 m` each;
- bilateral gap symmetry residual: `0.0 m`;
- total static bracket free span: `0.027999999999999914 m`.

The prior radial prerequisite remains independently true:

- phase-independent stop-to-bore capture overlap: `0.0026472381958991716 m`;
- outer-knuckle radial containment margin: `0.007284442352070436 m`.

Scoped result:

**`PASS_SOURCE_OWNED_BORED_HINGE_BILATERAL_AXIAL_BRACKET_GEOMETRY`**

Interpretation: both exact stop inward faces lie outside the complete source knuckle stack on opposite sides of the +X hinge axis, with 14 mm of static source-space gap on each side, while the previously proven radial-capture relation remains positive.

This is **static source geometry only**. A positive bracket gap is deliberately kept separate from contact or retention authority.

## Verification / fail-closed evidence

Added or extended in Object PR #25:

- `assets/modular-equipment-case-001/hinge-bored-knuckle-axial-stop-bracket-001.json`;
- `tools/verify_hinge_bored_knuckle_axial_stop_bracket.py`;
- `tests/test_hinge_bored_knuckle_axial_stop_bracket.py`;
- existing `.github/workflows/object-hinge-pin-bore-clearance.yml` extended to rebuild and retain the bracket proof after all prior hinge prerequisites.

Focused controls reject:

- a complete knuckle stack that grows beyond the left stop's inward bracket face while the stop remains seated at the pin endpoint;
- stop endpoint-seating drift;
- radial-capture donor identity drift;
- retention-force authority expansion;
- invented axial-translation-model authority.

The bracket verifier also re-runs the exact radial-capture prerequisite before PASS.

## Honest first-draft red / repair

First draft exact head: `ead59351137bef9a5aed891837bd37277816c620`.

Workflow `35306265672` went red honestly. Python 3.11 ran the full **72-test** suite with **one error and one failure**:

1. the verifier returned stop outward-face metrics but the new contract had not explicitly declared them;
2. the first negative control moved a stop, so the older endpoint-seating assertion failed before the intended bracket assertion could be reached.

These were evidence-harness defects, not source geometry changes. They were repaired by:

- declaring exact outward faces `-0.35 / +0.35 m` in the contract;
- changing the negative control to grow only a copied source knuckle stack beyond the left bracket while leaving the stop exactly seated.

The historical red run remains preserved and is not relabelled as PASS.

## Exact final CI — PASS

Final exact head: `540fd532f4a1840c0205fabaa432e61977b2c896`.

Dedicated workflow:

**`35306443299 — Object hinge construction evidence` — SUCCESS**

- Python 3.11: compile PASS; full Object repository suite **72/72 PASS**; all historical hinge prerequisite builders/verifiers PASS; new bracket verifier PASS; retained evidence upload PASS.
- Python 3.13: compile PASS; full repository suite PASS.
- fail-closed bracket control: `HOLD:left stop inward face does not bracket complete knuckle stack`.
- retention-authority expansion remains rejected.

Final exact-head poll: all **8 observed Object workflow families** completed SUCCESS:

- Object hinge construction evidence;
- Object hinge-pin axial-stop evidence;
- Object hard-surface interface evidence;
- Object front-latch ownership evidence;
- Object front-latch pivot-interface evidence;
- Object service-module fit evidence;
- Object service-module registration-key evidence;
- Object service-module fastener-clearance evidence.

## Retained evidence

Artifact:

- ID: **`10530694239`**;
- name: `modular-equipment-case-001-hinge-phase-invariant-successor-stop-capture-and-bracket-evidence`;
- size: **32,526 B**;
- GitHub SHA-256: **`aa40809a39bbe1ef934eed3ab9d53fc8897008ee526459bc3f1f32c520500058`**;
- exact workflow/head: `35306443299` / `540fd532f4a1840c0205fabaa432e61977b2c896`.

This activation records GitHub's retained digest only. **No independent local artifact rehash is claimed.**

## Reusable Hard-Surface pattern

**`RADIAL_COLLAR_CAPTURE_DOES_NOT_ESTABLISH_AXIAL_RETENTION__SOURCE_MUST_PROVE_STOP_INWARD_FACES_BRACKET_THE_COMPLETE_KNUCKLE_STACK_AND_KEEP_STATIC_GAP_SEPARATE_FROM_CONTACT_AUTHORITY`**

Bounded interpretation:

1. proving a stop overlaps a bore radially does not say where it sits axially relative to the moving/fixed knuckle stack;
2. source geometry should name and prove both inward stop faces against the complete axial stack, not infer retention from a radius alone;
3. a positive static gap is a geometry fact, not evidence that contact occurs or that the mechanism retains load;
4. receiver contact/translation/retention logic remains a separate authority and must explicitly rebind/retest;
5. one Object hinge does not justify a generic UC hinge/retention implementation or Profession Fabric promotion.

## Handoffs recorded

- Object Hard-Surface PR #25 comment **`5725103500`** records the exact new head, static-bracket metrics, historical red/repair, exact CI/artifact and non-claims.
- Object Rigging PR #27 comment **`5725105219`** returns the new bracket relation **evidence-only**. Existing Rigging evidence remains truthful; no branch was rebased or auto-retargeted.

If Rigging later chooses to model axial travel/contact/retention, it must explicitly bind exact Hard-Surface head `540fd532...` and retest rather than inherit this PASS.

## Four-root gate

- **Truth:** the historical first-draft red is preserved; static axial bracketing is named separately from contact/retention/full collision.
- **Agency / non-domination:** Hard Surface did not invent pin-stop attachment, translation behavior, pin ownership/spin law or force downstream adoption.
- **Continuity:** historical source, successor 002, stop contract, prior radial-capture proof, new bracket contract, exact red/final heads, workflows and retained artifact remain separately addressable.
- **Wisdom before speed:** the lane moved only because a real receiver truth boundary exposed a source-owned geometry question; no empty Weapon/Armor/Unit/Misc work or generic shared machinery was manufactured by cadence.

## Explicit non-claims / next trigger

This activation does **not** establish that the pin and collars are a rigid physical subassembly, actual stop-to-knuckle contact, an axial-translation model, contact response, retention force, pin physical ownership or spin law, manufacturing tolerance/class of fit, bearing behavior, friction, lubrication, load transfer, strength, fatigue, wear, service procedure, full articulated/component collision, Rigging/Animation/Technical-Art/Runtime adoption, physics/gameplay, final visual acceptance, CANON, production readiness or Hard-Surface mastery.

Re-scan the manufactured constellation before the next pass. Prefer a grounded Weapon / Armor / Unit / Misc source if one appears. Otherwise require a new returned source-mechanical defect or explicit receiver-adoption question. **Do not continue extending this hinge merely because the bracket proof is green.**
