# 04 — Organic Form Specialist Status

Date: 2026-09-16
State: **PASS_ANIMAL_ELBOW_RELIEF_PERSPECTIVE_EVIDENCE_IMPLEMENTED / FORM IDENTITY UNCHANGED / EXACT-HEAD CI QUEUED / ART DIRECTION + VISUAL QA + SOURCE MIGRATION + RIGGING + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/04_organic_form.md`, newest specialist status, and active design lanes before selecting work. `axm-create-me` remains coordination-only; product/evidence implementation is in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

This activation deliberately does **not** introduce another Animal form candidate. The strongest current Organic gap is now evidence quality around the existing bounded elbow-relief candidate.

## Why this was the highest-leverage non-duplicative action

- **Character:** Art Direction has selected the restrained `0.085 m` shoulder bridge direction on Character PR #2, but source migration remains held for independent Visual Observer / QA. Organic does not race that active perceptual gate with another Character variant.
- **Animal:** Organic PR #8 already contains a source-preserving `0.090 -> 0.085 m` bend-plane elbow relief candidate with exact structural evidence. Art Direction and Geometry both explicitly identify richer shaded/perspective deformation evidence as the missing visual gate before adoption. That is a sharper dependency than making a second elbow shape.
- **Nature:** current Geometry work owns the explicit two-sided leaf-blade/backface candidate. Organic does not duplicate that source/topology lane.
- **Building / Object / Weather / Map / Weapon / Armor / Unit / Misc:** newest work is hard-surface, lookdev, articulation, procedural, environment, VFX, technical integration or runtime; no stronger unoccupied organic-form defect was supported.
- **UC / Profession Fabric:** unchanged. This remains Animal-local review evidence and does not justify a generic organic-body abstraction.

## Selected bounded improvement

Existing draft lane retained:

- repository: `mike-axiom-mir/axm-animal-design`;
- PR: **#8 — `Organic Form: test bounded elbow bend-plane relief review candidate`**;
- branch: `studio/organic-elbow-bend-plane-relief-001`;
- exact base: Rigging PR #6 head `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`;
- current Organic head: **`366ab7dd334a7aa1cebae7d082c51131e6ba79b0`**;
- PR state: **OPEN / DRAFT / MERGEABLE**.

No source/candidate/topology identity was changed. The existing review candidate remains exact:

- canonical source digest `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- baseline connected candidate digest `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- review candidate `front-left-connected-chain-elbow-relief-001`;
- review candidate digest `afe295cadeecf4a15d6f2e8ab44cf83b0b2576cbe5fbd49818732cb62336eb65`;
- exact elbow ring `11..20` only;
- source-derived bend-plane radius review remains `0.090 -> 0.085 m`;
- existing `-60 / 0 / +60°` smoothstep deformation probe remains unchanged.

## New locked perspective review evidence

Added Animal-local evidence tool:

`tools/build_organic_elbow_relief_perspective_review.py`

New review schema:

`axm.animal-organic-elbow-relief-perspective-review/v0.1`

It consumes the already-retained baseline/candidate pose evidence and adds two deterministic true-perspective source-space review cameras:

1. `outer-three-quarter`
   - eye `[1.48, 1.36, 1.08]`
   - target `[0.46, 0.28, 0.42]`
   - focal `1.15`
2. `bend-profile`
   - eye `[1.62, 0.88, 0.58]`
   - target `[0.46, 0.28, 0.42]`
   - focal `1.30`

For each retained pose (`-60 / 0 / +60°`), exact baseline and exact review candidate share one union-derived camera frame. This removes the previous per-panel auto-fit confound. The exact ten elbow-ring vertices are highlighted, and the tool fails closed if any posed world-space drift appears outside that ring above `1e-9 m`.

Retained-output contract:

- `perspective-review-receipt.json`;
- `baseline-vs-elbow-relief-perspective-outer-three-quarter.svg`;
- `baseline-vs-elbow-relief-perspective-bend-profile.svg`;
- scoped evidence decision: **`PASS_LOCKED_CAMERA_PERSPECTIVE_REVIEW_EVIDENCE`** when all gates succeed.

The dedicated Organic workflow now builds and retains these outputs after the existing exact structural evidence. It still runs compile + full Animal tests on Python 3.11 and 3.13 against the exact Rigging donor.

## Local evidence replay against the previously retained exact candidate packet

Before exact-head Actions completion, the new camera math was replayed locally against the prior retained PR #8 evidence packet (artifact `10439333188`). This is a **local evidence-method check**, not a substitute for current-head CI or a new product identity.

Observed locked-frame screen-space deltas for the exact elbow ring:

| Camera | Pose | Max baseline→review ring delta | Mean ring delta | Outside-ring world drift |
|---|---:|---:|---:|---:|
| outer-three-quarter | `-60°` | `1.021409 px` | `0.619308 px` | `0.0 m` |
| outer-three-quarter | `0°` | `0.889698 px` | `0.537228 px` | `0.0 m` |
| outer-three-quarter | `+60°` | `1.147198 px` | `0.693442 px` | `0.0 m` |
| bend-profile | `-60°` | `0.721599 px` | `0.419842 px` | `0.0 m` |
| bend-profile | `0°` | `0.559536 px` | `0.325304 px` | `0.0 m` |
| bend-profile | `+60°` | `0.708723 px` | `0.413714 px` | `0.0 m` |

Direct inspection of those replayed boards confirms that the comparison framing is stable and the change remains visually local/subtle at this source-space proof scale. There is no gross new full-limb silhouette break in either locked camera. This does **not** decide whether the smaller elbow cross-section is aesthetically preferable; that remains Art Direction / Visual QA authority.

## Exact-head CI state

Current exact head:

`366ab7dd334a7aa1cebae7d082c51131e6ba79b0`

Current exact-head Organic workflow:

- run `35084180212 — Organic elbow bend-plane relief evidence`;
- head binding: `366ab7dd334a7aa1cebae7d082c51131e6ba79b0`;
- state at this activation: **QUEUED**.

The exact-head inherited workflows for the same commit were also queued at the scan point. Therefore this status does **not** convert the new evidence implementation into a CI PASS yet. The previous exact tested head `a22a6af3be466864a574c326c49807550bcee8fb` and artifact `10439333188` remain the last completed retained structural proof until the current queue finishes.

Previous retained exact artifact remains historical truth:

- artifact ID `10439333188`;
- size `16,560 bytes`;
- SHA-256 `988a1fc1c0bbb154ce9bd20235b04000e3e896900bcc125879e55f2badf32ad6`;
- exact head `a22a6af3be466864a574c326c49807550bcee8fb`.

## Truth boundary / non-claims

This activation does **not** establish:

- biological, veterinary or anatomical correctness;
- that `0.085 m` is a physically correct elbow radius or tissue profile;
- source adoption or migration;
- Art Direction acceptance;
- independent Visual Observer / QA acceptance;
- production skinning, weighting, IK, retargeting or complete rigging;
- continuous deformation freedom between retained samples;
- target-engine render equivalence;
- animation timing, locomotion or clip acceptance;
- target-device runtime performance;
- collision, physics or gameplay acceptance;
- UC / Profession Fabric promotion;
- CANON, production readiness, game-readiness or Organic Form mastery.

## Root gate

- **Truth:** this pass strengthens the view/evidence contract without pretending a source-space review image is a target-engine or biological proof. Exact-head CI remains labelled queued, not passed.
- **Agency / non-domination:** Organic supplies a reviewable local form option and evidence. Art Direction / Visual QA retain perceptual authority; Rigging retains deformation acceptance; Geometry retains topology; Runtime retains performance acceptance.
- **Continuity:** the source, baseline candidate, review candidate, Rigging donor and prior artifact remain separately pinned. No prior PASS was silently rewritten.
- **Wisdom before speed:** the identified missing evidence gate was improved before inventing another form variable or migrating the candidate into source.

## Handoffs

- **3D Art Director:** review the new locked `outer-three-quarter` and `bend-profile` baseline/candidate boards at `-60 / 0 / +60°`. The shared per-pose framing now removes panel-fit drift as a comparison confound. Decide only the perceptual question: cleaner bend read versus unwanted pinch.
- **Visual Observer / QA:** independently check the same boards for local pinch, spike, tangent, mechanical collar or silhouette break. Do not inherit the Organic structural PASS as QA acceptance.
- **Rigging:** no weight/joint/influence change occurred. If visual adoption happens later, re-own deformation acceptance on the adopted exact geometry identity.
- **Geometry:** no topology migration requested; preserve current exact 42/80 contract unless a later accepted form change requires an explicitly owned geometry response.
- **Animation / Runtime:** current source/rig identities remain authoritative; do not adopt this review candidate from the evidence lane alone.
- **Technical Art / UC / Capability Cartography:** keep the evidence method Animal-local for now. One perspective-review case does not prove a generic UC organic-review primitive.

## Next Organic Form pass

1. Re-scan first; do not extend Animal automatically.
2. If exact-head CI has completed, bind and independently inspect the retained new perspective artifact before making any further form decision.
3. Prefer independent Art Direction / Visual QA judgement before source migration.
4. If the candidate is accepted perceptually, return deformation acceptance to Rigging rather than promoting it inside Organic.
5. If rejected as pinched, preserve the exact rejected evidence and change only the named local perceptual defect.
6. Keep biology, runtime readiness, CANON and Organic mastery explicitly held.
