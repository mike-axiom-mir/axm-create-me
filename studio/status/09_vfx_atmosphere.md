# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / OBJECT_PHASE_BOUND_LID_RELEASE_MOTES_TARGET_HOST_PASS / VISUAL_ONLY / NO_GAMEPLAY_OR_PHYSICS_CLAIM**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the preceding VFX status, current owner-specialist status and fresh repository / PR state across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. This status file is the only coordination-repository change. The bounded implementation and proof remain in the owning Object repository.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The compact-east Nature / Map lane remains intentionally frozen from VFX retuning:

- Nature owns the exact 17-state source response.
- Map Animation owns continuous / exact-key playback characterization.
- Weather owns visual-field semantics and does not promote visual direction into physical wind speed.
- Art Direction / Visual QA retain final perceptual acceptance.
- Runtime retains production representation and performance.

Weapon, Armor and Unit currently expose no open competing specialist PR. Character, Animal and Building have active geometry / rigging / technical-art / procedural work that does not create a stronger unowned VFX receiver. Object has the already-open dedicated VFX lane on PR #31 and therefore remains the highest-leverage continuity target: finish its exact real-host evidence instead of opening another effect branch.

## Selected bounded improvement — repair the exact Object VFX observer and finish the real-host gate

Repository: `mike-axiom-mir/axm-object-design`

Draft PR: **#31 — `VFX: bind lid-release motes to equipment-case opening phase`**

Branch: `studio/vfx-object-lid-release-motes-001`

Exact final tested head:

`7994d6f28050053f07dd355d8c54a983b0e8268b`

Exact base / frozen Animation parent:

`07130d3481d69b5a4d8a399e86bd207d623dc87c`

PR state at final inspection: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

### Why this was the right bounded action

The preceding exact-head workflow was no longer queued when this activation began. Run `35254653189` had completed **FAILURE** at head `158152d19b8357d3ece4e7c2e7f1f8df9a55dc8f`.

All pre-Godot gates had passed: exact VFX / Animation identities, the full 46-test Object suite, Technical Art / UC donor rebuild, Rigging donors, frozen Animation sequence, exact source/phase binding, Godot download and virtual display setup. The real receiver itself never executed because Godot rejected one local declaration:

`Parse Error: Cannot infer the type of "is_active" variable because the value doesn't have a set type.`

The failure was at `animation-proof/observe_lid_release_motes.gd:457`.

The repair is intentionally parser-only:

- predecessor: `var is_active := ...`
- repaired: `var is_active: bool = ...`

The exact commit comparison is one commit ahead with **one modified file, one addition and one deletion**. No effect parameter, source geometry, material, Animation timing/easing/order, gameplay/controller meaning, acceptance threshold or truth boundary changed.

The failed predecessor remains retained rather than rewritten green:

- workflow: `35254653189`;
- failed artifact ID: `10511909806`;
- failed artifact archive SHA-256: `55f4dcbd0a664058509bdd81d805496085b179c3b1c1a0619c4d07be72c11e56`.

Because its GDScript never loaded, that failed run is **not** visual evidence.

## Candidate contract preserved

The effect remains exactly the previously-authored bounded candidate:

- effect ID `lid-open-release-motes-001`;
- `18` deterministic analytic billboard motes;
- fixed seed `41027`;
- emitter derived from the imported neutral camera-facing lid/body seam;
- exact Animation sequence `lid-latch-open-hold-close-001`;
- exact trigger phase `play_exact_lid_clip`;
- exact trigger `0.25 s`;
- trigger semantics `EXACT_ANIMATION_PHASE_BOUNDARY_NOT_GAMEPLAY_EVENT`;
- source semantics `STYLIZED_VISUAL_RELEASE_MOTES_NOT_DUST_OR_FLUID_SIMULATION`.

No Object source geometry, rig, material, Animation timing/easing/order, controller semantics or gameplay state is changed by the VFX.

## Exact real-context proof — PASS

Dedicated workflow:

`35259884178 — Object VFX phase-bound lid-release motes`

Exact tested head:

`7994d6f28050053f07dd355d8c54a983b0e8268b`

Result:

**`PASS_TARGET_HOST_PHASE_BOUND_LID_RELEASE_MOTES`**

The complete workflow is green, including the real Godot target-host step, retained-receipt validation and artifact retention.

Pinned target receiver:

- Godot `4.7.2-stable` / official hash `ed1daf0bf...`;
- X11;
- GL Compatibility;
- Mesa llvmpipe.

The exact donor chain was rebuilt before target-host rendering:

- Technical Art rigid-scene donor `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- UC donor `6dc465987e01362264f88b7cef4213609ae50763`;
- frozen Animation parent `07130d3481d69b5a4d8a399e86bd207d623dc87c`;
- rebound GLB SHA-256 `9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`.

The source/phase identity gate passed, and a verifier-only `+25 ms` trigger-time mutation was rejected before acceptance.

### Retained visual observations

Matched control / candidate images were rendered from the exact same animated Object state:

- `0.20 s`: `0` active motes, `0` changed pixels;
- `0.30 s`: `9` active motes, `1,142` changed pixels, `0.224626%` of the frame;
- `0.40 s`: `18` active motes, `1,859` changed pixels, `0.365657%` of the frame;
- `0.52 s`: `18` active motes, `1,850` changed pixels, `0.363887%` of the frame;
- `0.80 s`: `0` active motes, `0` changed pixels.

Maximum active changed-frame fraction: `0.00365656963021243`, inside the existing `<= 0.08` bounded review gate.

Pre-trigger and post-effect control/candidate PNGs are pixel-identical. The observer also verifies that the VFX leaves lid and latch `AnimationPlayer` transforms unchanged at every retained sample.

Direct inspection of the retained A/B images shows a small localized warm mote trail near the lid/body opening seam during the active samples, while the inactive samples remain visually identical. That is **visual inspection of this exact proof surface only**, not Art Direction or Visual QA acceptance.

### Retained final evidence

Artifact:

- ID `10514900595`;
- size `261,164 B`;
- archive SHA-256 `cf620d98c315189f1d5c4f3c8cea702aee969602eaef9a5ad7f5374daa894187`.

The downloaded archive was independently rehashed to the same SHA-256 and contains the effect contract, exact identities, rebuilt donor receipts, rebound GLB, target-host receipt and all ten control/candidate PNGs.

## Explicit truth boundary

This PASS establishes only that the deterministic analytic mote candidate is correctly bound to the exact existing Animation phase, is visibly localized in this exact Godot proof receiver during the retained active samples, disappears outside its retained lifetime window, and does not alter the retained lid/latch animation state.

It does **not** establish:

- physical dust, pressure, airflow or fluid simulation;
- physical latch release or mechanical force;
- collision, damage, interaction or gameplay behavior;
- runtime controller / state-machine semantics;
- production GPU / CPU particle implementation;
- target-device FPS, VRAM, thermal or battery performance;
- final Art Direction preference;
- independent Visual QA acceptance;
- CANON;
- production / game readiness;
- VFX / Atmosphere mastery.

## Ownership / handoff

- **VFX / Atmosphere:** owns only the visual effect source, exact phase binding and this evidence.
- **Animation:** retains sequence timing, easing, ordering and playback authority.
- **Rigging:** retains articulation authority.
- **Technical Art / UC:** retain transport / scene-graph authority.
- **Runtime:** retains production representation and target-device performance authority.
- **Art Direction / Visual QA:** retain perceptual acceptance authority.
- **Gameplay / physics:** unchanged and unclaimed.

No automatic adoption or merge is requested. The PR remains draft and unmerged.

## Continuity retained

The immediately preceding VFX status remains historical truth at Git blob:

`7e6337f821fb46a35907f06a3d521f688277c509`

That status in turn retains the compact-east current-world evidence chain and the pre-run Object candidate state. The failed Object workflow is explicitly preserved above rather than silently collapsed into the later PASS.

## Four-root check

- **Truth:** the queued assumption was corrected from actual Actions state; the first exact-head run is retained as a parser failure, and only the repaired exact-head real-host run is called PASS.
- **Agency / non-domination:** VFX binds to an Animation-owned phase without taking Animation, Rigging, Technical Art, Runtime, Art/QA, gameplay or physics authority.
- **Continuity:** the repair changes exactly one typed local declaration; source/effect semantics and all pinned donor identities remain fixed, while failed and passing evidence are both retained.
- **Wisdom before speed:** no new effect branch or parameter retune was opened when the highest-leverage action was to repair the proof harness and finish the already-bounded real-context gate.

The four AXM roots remain the merge gate.
