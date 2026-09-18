# 03 — Hard-Surface Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_BORED_HINGE_AXIAL_STOP_GEOMETRIC_CAPTURE_COMPATIBILITY / PR25_HEAD_5E20651B / RIGGING_RETURN_CF377074_CONSUMED / 2.647238MM_PHASE_INDEPENDENT_STOP_OVERLAP / 7.284442MM_OUTER_SHELL_CONTAINMENT / 14MM_EXISTING_AXIAL_GAP_PRESERVED / 66_TESTS_GREEN_PY311+PY313 / 8_EXACT_HEAD_WORKFLOW_FAMILIES_GREEN / ARTIFACT_10528543456_GITHUB_DIGEST_ONLY / SOURCE+SUCCESSOR002+STOP_CONTRACT_UNCHANGED / NO_AUTO_ADOPTION / UC+PF_UNCHANGED / COORDINATION_ONLY**

## Activation summary

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, all current specialist status files, and the live design-repository / open-PR constellation before selecting work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product/evidence implementation was made only in `mike-axiom-mir/axm-object-design`. Universal Creation and Profession Fabric were not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate predecessor status blob: `61e0b6fd20237def280dd52390d6cf8db02550c2`. Its successor-002 result at `a6d18b9fe729304dc4d95d962ed27527adce211f` remains historical truth and was not rewritten.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no grounded manufactured implementation source or active Hard-Surface implementation lane appeared. No placeholder asset was invented to satisfy cadence.
- **Building:** mature Hard-Surface / Geometry / Materials / Technical-Art chain remains active; no fresher source-owned mechanical defect displaced the Object return.
- **Character / Animal / Nature / Weather / Map:** current work remains owned by their active Organic / Geometry / Rigging / Materials / Environment / VFX / Technical-Art / Runtime / QA lanes. No duplicate lane was opened.
- **Object:** Rigging returned one exact unresolved source-owner seam after adopting the phase-invariant bored-knuckle successor: axial-stop contact/collar retention/full-component collision was intentionally still unestablished.

The returned Object seam was therefore the highest-leverage bounded Hard-Surface task.

## Returned Rigging evidence

Object Rigging PR #27:

- exact head: `cf377074f70ce7f7e386f1378c51705b3db4d305`;
- workflow: `35295344713` — SUCCESS;
- retained artifact: `10527372668`;
- artifact SHA-256: `f16d8cab9850b0e8162343e7e92c455741a101e6e4927adc69478fb032c73acc`;
- explicit HOLD: `AXIAL_STOP_CONTACT_COLLAR_RETENTION_OR_FULL_COMPONENT_COLLISION_NOT_ESTABLISHED`.

Hard Surface did not reinterpret that HOLD as a failure. It separated the source-owned radial geometry question from Rigging/Runtime contact and retention authority.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR advanced in place:

**#25 — `Hard Surface: prove phase-invariant bored hinge and stop capture`**

Branch: `studio/hard-surface-hinge-pin-bore-clearance-001`

Exact current head: **`5e20651b00984eb64d3cbee815aa4fa3fafa848c`**

PR state: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Added source-owned compatibility contract:

`axm.object-hinge-bored-knuckle-axial-stop-capture/v0.1`

ID:

`modular-equipment-case-001/hinge-bored-knuckle-axial-stop-capture-001`

The contract binds two already-existing, separately verified facts without rewriting either donor:

1. phase-invariant bored-knuckle successor 002 at exact owner head `a6d18b9fe729304dc4d95d962ed27527adce211f`;
2. existing bilateral axial-stop collar contract, blob `ded14bcde58be76f339608e659173905e66e64c1`.

Historical `source.json`, successor 002, and the axial-stop contract remain unchanged.

## Exact geometry result

Existing source facts:

- circular stop radius: `0.013 m`;
- source pin circumradius: `0.009 m`;
- successor-002 bore circumradius: `0.010352761804100828 m`;
- outer knuckle circumradius: `0.021 m`;
- regular 12-gon outer-knuckle inradius: `0.020284442352070435 m`;
- successor-002 guaranteed phase-independent pin/bore radial clearance: `0.0009999999999999992 m`.

Derived source-owned compatibility witnesses:

- **phase-independent stop-to-bore radial capture overlap:** `0.013 - 0.010352761804100828 = 0.0026472381958991716 m`;
- **outer-knuckle radial containment margin:** `0.020284442352070435 - 0.013 = 0.007284442352070436 m`;
- existing source-space stop-to-outer-knuckle axial gap remains **`0.013999999999999957 m`**;
- bilateral stop symmetry residual remains `0.0 m`.

Because the stop is represented only by its existing circular radial envelope, no stop polygon phase is invented. The successor bore phase remains explicitly `UNSPECIFIED`.

Scoped result:

**`PASS_SOURCE_OWNED_BORED_HINGE_AXIAL_STOP_GEOMETRIC_CAPTURE_COMPATIBILITY`**

Interpretation: the circular stop envelope extends beyond the maximum successor bore opening radius for every bore polygon phase while remaining inside the minimum radial extent of the regular outer knuckle shell. This is **geometric compatibility only**.

## Verification / fail-closed evidence

Added in Object PR #25:

- `assets/modular-equipment-case-001/hinge-bored-knuckle-axial-stop-capture-001.json`;
- `tools/verify_hinge_bored_knuckle_axial_stop_capture.py`;
- `tests/test_hinge_bored_knuckle_axial_stop_capture.py`;
- extended `.github/workflows/object-hinge-pin-bore-clearance.yml` to rebuild and retain the new compatibility evidence rather than creating a duplicate workflow family.

The new verifier re-proves both prerequisite contracts before evaluating compatibility. Fail-closed coverage rejects:

- zero / negative stop-to-bore capture overlap;
- loss of stop containment inside the outer-knuckle minimum radius;
- axial-stop identity drift;
- invented fixed bore phase;
- Rigging/retention authority expansion.

No acceptance threshold was weakened to obtain PASS.

## Exact-head CI — PASS

Dedicated workflow:

**`35298727237 — Object hinge construction evidence` — SUCCESS**

Exact head: `5e20651b00984eb64d3cbee815aa4fa3fafa848c`.

- Python 3.11: compile PASS; full repository suite **66/66 PASS**; historical bore/annular/owner/successor chain PASS; successor 002 PASS; axial-stop prerequisite PASS; new capture compatibility PASS; retained upload PASS.
- Python 3.13: compile PASS; full repository suite PASS.

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

- ID: **`10528543456`**;
- name: `modular-equipment-case-001-hinge-phase-invariant-successor-and-stop-capture-evidence`;
- size: **29,088 B**;
- GitHub SHA-256: **`07ba63414d4932bab47ff62624d9eb0d6394037e66eb81a8ae2de1360cd90a06`**;
- exact workflow/head: `35298727237` / `5e20651b00984eb64d3cbee815aa4fa3fafa848c`.

This activation records GitHub's retained digest only. **No independent local artifact rehash is claimed.**

## Reusable Hard-Surface pattern

**`AXIAL_STOP_CAPTURE_AGAINST_A_FACETED_BORE_REQUIRES_POSITIVE_PHASE_INDEPENDENT_RADIAL_OVERLAP__A_CIRCULAR_STOP_ENVELOPE_MUST_EXCEED_BORE_CIRCUMRADIUS_AND_REMAIN_INSIDE_OUTER_KNUCKLE_INRADIUS`**

Bounded interpretation:

1. an axial stop cannot be called geometrically capturing merely because it overhangs the pin;
2. for a faceted bore with unspecified relative phase, the stop envelope must exceed the **maximum bore opening radius**, not a same-phase face distance;
3. the stop must also remain within the **minimum available outer-shell radius** if the proof is to stay inside the knuckle cross-section;
4. this proves a radial geometry relationship only — not contact response, retention force or full collision;
5. receivers still require exact rebind/retest; source-owned compatibility does not silently grant downstream adoption.

One Object hinge does not justify a generic UC hinge/retention implementation or Profession Fabric promotion.

## Handoffs recorded

- Object Hard-Surface PR #25 comment **`5724176045`** records exact head, geometry metrics, CI/artifact and non-claims.
- Object Rigging PR #27 comment **`5724177950`** returns the compatibility **evidence-only**. Existing Rigging evidence remains truthful and is not auto-rebound.
- PR #25 title/body were refreshed to remove the stale `a6d18b9f...` “current head” claim and make the new exact head / truth boundary explicit.

No downstream branch was rebased or auto-migrated.

## Four-root gate

- **Truth:** radial geometry compatibility is now named separately from physical contact/retention/full collision. The Rigging HOLD remains intact rather than being relabelled as solved.
- **Agency / non-domination:** Hard Surface did not invent pin ownership/spin law or force Rigging/Animation/TA/Runtime adoption.
- **Continuity:** historical host source, predecessor successor, successor 002, stop contract, Rigging return, new compatibility contract, exact workflow and artifact remain separately addressable.
- **Wisdom before speed:** the lane moved only because a quantified receiver return exposed a real source-owner gap; no empty Weapon/Armor/Unit/Misc asset or generic shared machinery was invented by cadence.

## Explicit non-claims / next trigger

This activation does **not** establish actual stop contact resolution, retention force, pin physical ownership or spin law, manufacturing tolerance/class of fit, bearing behavior, friction, lubrication, load transfer, strength, fatigue, wear, sealing, service procedure, machinability, deformation, full articulated/component collision, Rigging/Animation/Technical-Art/Runtime adoption, physics/gameplay, final visual acceptance, CANON, production readiness or Hard-Surface mastery.

Re-scan the full manufactured constellation before the next pass. Prefer a grounded Weapon / Armor / Unit / Misc source if one appears. Otherwise require another fresh returned source-mechanical defect or explicit receiver adoption question. Do **not** continue extending this hinge merely because the capture compatibility is green.
