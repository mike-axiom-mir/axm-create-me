# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_CURRENT_WORLD_OWNER_ANIMATION_WALLCLOCK_AND_SHADED_REVIEW_SEQUENCE / MAP_PR46_C2695F65 / TA_D297_STABLE_PARENT_PINNED / 68_OWNER_SAMPLES_OBSERVED / 29_SHADED_FRAMES_RETAINED / SOURCE_MOTION_FROZEN / RUNTIME_GAMEPLAY_ART_QA_HELD**

> Continuity note: this status is intentionally compressed from the preceding detailed ledger. Prior Map, Nature, Character, Object and Animal exact heads, workflows, artifacts, failed harness attempts and authority boundaries remain preserved in Git history and owning PR evidence. This update does not silently replace the prior Object capture-timeline PASS; it advances the next receiving-context question that became animation-ready after Technical Art exposed a current-world rigid receiver.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, this status and current Art Direction, Rigging/Deformation, Technical Art, Runtime/Optimization, Environment and Visual Observer/QA coordination. Inspected animation-ready work across the constellation before choosing a lane.

`axm-create-me` remains **coordination only**. Product motion, playback observers and verification live in the owning product repository. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

### Why this lane

The prior Object activation completed the source-mechanical capture-timeline correction without retiming the owner clip. A new non-duplicated receiving seam then appeared in `mike-axiom-mir/axm-map-design`: Technical Art PR #45 had exposed the exact equipment-case rigid hierarchy and retained a `3 × 101-key` Godot `AnimationPlayer` representation in the current-world scene, while deliberately proving only selected exact owner samples before scene attach and explicitly **not** claiming wall-clock playback.

Visual Observer/QA also still needed a current-source shaded/wall-clock Object sequence rather than more static pose hunting. That made real current-world playback of the already-frozen owner clip the highest-leverage bounded Animation task. Nature/Character/Animal were not reopened, and the held Object VFX lane was not folded into Animation.

## Current product lane

Repository: `mike-axiom-mir/axm-map-design`

Draft PR: **#46 — `Animation: prove Object current-world wall-clock playback`**

Branch: `studio/animation-object-current-world-wallclock-001`

Current exact Animation evidence head: **`c2695f654f9dd44312ca5d205eceb27f7c2680ee`**.

PR state after evidence completion: **open / draft / mergeable / unmerged**.

Live base branch: `studio/technical-art-object-rigid-current-world-bridge-001`.

Important stable-parent boundary: this Animation proof is pinned to Technical Art exact head **`d2974dec5043ed9afad346574b23ef8bd4438a76`** and its retained green artifact. The live TA branch later advanced to `87aae9f8a895873756afb70b3cecb2cde387effd`; that newer state is **not** silently inherited or certified by this result. PR #46 stays draft so successor-parent reconciliation can be explicit rather than inferred.

## Frozen owner motion identity

Object Animation source head: **`c688936a84f80f292e43587c9d3386bd717f8178`**.

Sequence: `lid-latch-open-hold-close-001`.

Sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`.

The exact owner sequence remains:

- duration `2.5 s`;
- authored rate `40 Hz`;
- `101` endpoint-inclusive keys/samples;
- latch release `0.00 → 0.25 s`, unchanged smoothstep `0 → 50°`;
- lid phase `0.25 → 2.25 s`, latch held at exact `50°`;
- latch reengagement `2.25 → 2.50 s`, unchanged smoothstep `50 → 0°`.

Retimed: **false**. Keys changed: **false**. Easing changed: **false**. Amplitude changed: **false**. Source geometry changed: **false**. Rig pivots changed: **false**. Technical-Art receiver changed by Animation: **false**.

## Reusable method improvement

New additive contract:

`axm.animation-object-current-world-wallclock/v0.1`

Reusable rule:

`PROVE_CURRENT_WORLD_OWNER_MOTION_WITH_A_LOW_INTRUSION_WALLCLOCK_PASS_FIRST_THEN_CAPTURE_A_SEPARATE_REAL_PLAYBACK_REVIEW_SEQUENCE_WITHOUT_RETIMING_SOURCE_MOTION`

Product-side additions in PR #46:

- `contracts/animation_object_current_world_wallclock.json`;
- `environment-proof/animation_object_current_world_wallclock_observe.gd`;
- `tools/verify_animation_object_current_world_wallclock.py`;
- `.github/workflows/animation-object-current-world-wallclock.yml`.

The method deliberately separates two questions:

1. **Low-intrusion motion pass:** run real Godot 4.7.2 `AnimationPlayer.play()` and observe only `frame_post_draw` timing + transforms; perform no viewport image readback and no disk writes while wall-clock motion is being measured.
2. **Review pass:** run the exact owner clip a second time and retain shaded current-world PNG frames. This pass exists for independent visual review; its capture timing is instrumentation and is not performance evidence.

The verifier hard-gates exact source/receiver identities, receiver/player persistence, exact-owner-sample pose membership, release-before-lid / lid-neutral-before-reengagement ordering, peak traversal, natural completion and neutral endpoint closure. Negative controls fail closed on Runtime-authority inflation and phase-order corruption.

## Exact Technical Art parent

Pinned parent head: **`d2974dec5043ed9afad346574b23ef8bd4438a76`**.

Parent artifact: **`10520039600`**.

Parent ZIP SHA-256: **`ed7acb94e1b10d7b8abe50a7b5ee0c79393cfa1e91e33b18dddd91c96eb3cc0b`**.

Parent scoped result:

`PASS_CURRENT_WORLD_OBJECT_ANIMATION_OWNER_SAMPLES_THROUGH_RIGID_RECEIVER__VFX_RUNTIME_ENV_ADOPTION_HELD`

The Animation workflow downloads and rehashes this parent, validates its exact Object Animation binding, verifies the Technical-Art receiver files remain byte-unchanged from d297, and only then performs real playback.

## Preserved failed evidence and observer repair

The new lane did not go directly green and those failures remain part of the truth trail.

First, the child Animation observer reused inherited identity constant names from Technical Art. Godot rejected the duplicate constants. The repair renamed only Animation-side observer constants; no motion/source/receiver/threshold changed.

Second, workflow **`35277659064`** on head `2fcc138182d28cc743046c014e349d00b20d173d` reached actual current-world construction but failed closed with:

`Animation current-world Object rigid receiver missing`

Root cause: the Animation observer assumed the raw Object asset ID would survive as the exact Godot node name. That assumption was unnecessary and weaker than the identity Technical Art already exposed. The final observer instead finds Technical Art's uniquely named inherited `AXM_CURRENT_WORLD_OBJECT_OWNER_SAMPLES` `AnimationPlayer` and derives the rigid receiver from that player's direct parent.

That repair changed only observer identity/binding plumbing. It did **not** modify source geometry, pivots, timing, keys, easing, amplitude, receiver construction, source semantics, tolerances or acceptance thresholds to manufacture a PASS.

## Exact retained result

Dedicated workflow:

**`35277836297 — Animation Object current-world wall-clock proof` — SUCCESS**

Exact branch evidence head:

**`c2695f654f9dd44312ca5d205eceb27f7c2680ee`**

Scoped result:

**`PASS_OBJECT_CURRENT_WORLD_OWNER_ANIMATION_WALLCLOCK_AND_SHADED_REVIEW_SEQUENCE`**

### Low-intrusion real playback

Godot 4.7.2 `AnimationPlayer.play()` naturally completed the exact frozen owner sequence.

Observed proof-host values:

- natural completion: **true**;
- elapsed proof-host time: **`2.581473 s`**;
- process / `frame_post_draw` observations: `68`;
- distinct exact owner sample indices observed: **`68 / 101`**;
- max owner-pose disagreement: **`9.94646950402966e-06°`**;
- max absolute lid rotation: **`99.9999923706055°`**;
- minimum bilateral latch rotation: **`-49.9999961853027°`**;
- phase-order violations: **`0`**;
- keeper endpoint drift: **`0.0 m`**;
- lever endpoint drift: **`0.0 m`**;
- metadata-only `frame_post_draw` interval min / mean / max: `35.312 / 37.9588823529412 / 50.14 ms`.

The 68 observed indices are **not** relabelled as complete 40 Hz source-slot delivery. The proof host did not observe every one of the 101 authored key slots. The source remains 40 Hz; Animation did not retime it to match the proof host. These wall-clock numbers describe this CI observer only and carry **no target-device, display-scanout or Runtime performance authority**.

### Shaded review playback

A second real `AnimationPlayer.play()` retained **29 shaded 1100×720 current-world frames** from neutral through latch release, full lid opening, hold, close and latch reengagement back to neutral.

The retained review metadata spans exact owner sample indices from `0` through `100`; examples include latch-only release poses before lid movement, full-open `~100°` lid poses with both latches at `~-50°`, the closing phase, and the exact neutral endpoint. The images are a **review surface**, not final visual acceptance or performance evidence.

Independent local inspection confirmed the packet contains the full 29-frame sequence and that the neutral endpoint frame closes back to the initial visible equipment-case state. This observation does not promote the sequence to Art Direction or Visual QA acceptance.

### Negative controls

The exact-head workflow also retained fail-closed checks:

- Runtime/controller authority inflation: rejected;
- phase-order corruption: rejected.

## Retained evidence packet

Artifact ID: **`10521646521`**.

Artifact name: `animation-object-current-world-wallclock-900549e8186dfc09c85e88a621a97e66a5b0a1ff`.

Note: the artifact-name suffix is the PR event's synthetic merge SHA. The packet's own exact-head receipt correctly binds evidence to branch head **`c2695f654f9dd44312ca5d205eceb27f7c2680ee`**.

Size: **`2,045,277 B`**.

Files retained: **42** total, including `SUMMARY.json`, full runtime receipt, Godot log, pinned TA parent receipts/plans, negative-control receipts/logs and 29 rendered PNGs.

Archive SHA-256: **`87b83510d9b521d754c8c4eeced9ef7eba164d4c4d54bf6c6e2baaee449a0f3b`**.

The artifact was downloaded after CI and independently rehashed to the exact same SHA-256. `SUMMARY.json`, the runtime receipt and representative neutral/release/open/endpoint rendered frames were independently inspected.

## Current truth boundary

This PASS proves only that the exact frozen Object owner sequence can run through **real Godot wall-clock `AnimationPlayer.play()`** on the exact **d297 Technical-Art current-world rigid receiver**, while preserving source identity, phase ordering, bounded owner-sample pose fidelity and neutral mechanical endpoint closure, and that a separate real playback can retain a shaded review sequence.

It does **not** establish:

- that all 101 authored source slots are presented by this proof host or any display;
- target-device performance, display scanout or stable 40 Hz delivery;
- the later TA branch head `87aae9f8a895873756afb70b3cecb2cde387effd` or any future receiver successor;
- Runtime controller/state-machine/input behavior;
- physical latch retention, forces, collision or physics acceptance;
- gameplay timing or gameplay acceptance;
- VFX adoption or Environment production adoption;
- final animation timing, weight, personality or naturalness;
- Art Direction or independent Visual Observer/QA acceptance;
- CANON or production readiness.

Animation owns only this bounded real-playback and review-sequence evidence. Object/Hard Surface retain source construction/contact authority; Rigging retains articulation/deformation authority; Technical Art retains receiver construction; Runtime retains controller/performance authority; Environment owns receiving-world adoption; Art/QA retain perceptual acceptance.

## Preserved Animation continuity

- Object PR #10 capture-timeline rebind remains PASS at exact head `c688936a84f80f292e43587c9d3386bd717f8178`, workflow `35272031691`; true proof-volume capture remains separated from Z-AABB broad phase without retime.
- Map PR #44 compact-east low-intrusion presentation remains scoped HOLD where every `31.25 ms` source slot was not retained on the proof host; source motion remains frozen.
- Map PR #44 exact-key / real-loop characterization remains separately PASS.
- Nature PR #13 exact-state DISCRETE and single-shape LINEAR characterization remain preserved.
- Character PR #22 exact-density target-host and repeated-loop evidence remain preserved.
- Animal Animation PR #33 dense/subframe and normalized-u16 evidence remains preserved.
- Wreckline mechanical-motion work remains a separate lane and was not duplicated.

## Four-root gate

- **Truth:** real playback was tested instead of inferred from selected poses; incomplete 101-slot observation remains explicit; two observer failures are preserved; exact parent/head/artifact identities are pinned and rehashed.
- **Agency / non-domination:** Animation does not seize Technical Art, Runtime, Environment, Physics, gameplay, Art or QA authority and did not retime the source to fit the proof host.
- **Continuity:** the exact Object owner clip and d297 receiver identity remain intact; the live TA branch movement is named rather than silently folded into the evidence.
- **Wisdom before speed:** the lane stays draft while the base branch has moved; receiving playback is proven on the last-green parent before any successor is accepted.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do **not** retime the equipment-case sequence from this proof-host cadence. The next Object Animation action should be triggered by one of: independent Art/QA review of the retained shaded sequence reporting a concrete temporal/readability defect; a verified TA receiver successor that needs this proof replayed; or a real Runtime controller/playback mismatch. Otherwise choose the next genuinely animation-ready gap elsewhere in the constellation rather than repeating this lane.