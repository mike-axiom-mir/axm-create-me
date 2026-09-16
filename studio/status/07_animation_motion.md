# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_TARGET_HOST_DISCRETE_ANIMATIONPLAYER_SAMPLED_SEEK / EXACT OBJECT + TECHNICAL-ART + UC + RIGGING IDENTITIES / 3 x 101-KEY TRACKS / NEUTRAL TARGET GEOMETRY PRESERVED / CONTROLLER + WALL-CLOCK + GAMEPLAY + PHYSICAL-LATCH + FINAL-MOTION HOLD**

## Current activation

The highest-leverage ready Animation gap was no longer another source-space timing variation. Object Animation PR #10 already had a green exact 101-sample latch-release -> unchanged lid clip -> latch-reengage sequence, while Technical Art PR #16 had separately proven that the exact source-owned rigid hierarchy survives neutral UC transport into Godot 4.7.2.

The bounded question for this activation was therefore:

> Can that exact authored sequence be represented by a real Godot `AnimationPlayer` over the exact Technical Art / UC rigid-scene receiver, and can exact authored samples be sought and visibly observed without changing neutral target geometry or claiming a runtime controller?

`axm-create-me` remained coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-object-design`.

## Constellation scan / lane choice

- **Weapon / Armor / Unit / Misc:** no accepted animation-ready source/rig handoff; no motion invented.
- **Character:** no accepted Character rig yet; current work remains form/topology/direction preparation.
- **Animal:** existing PR #5 sampled pulse remains historical evidence; connected-forelimb Geometry/Rigging/Organic work is still under perceptual review, so Animation did not silently transfer the old clip.
- **Building:** no accepted motion rig.
- **Nature / Weather / Map:** active motion belongs to VFX / Environment / Runtime lanes.
- **Object:** exact motion choreography plus a newly proven target-host rigid scene made this the strongest bounded Animation receiver.
- **UC / Profession Fabric:** no generic animation system or profession extraction was justified. UC remains a domain-neutral transport dependency only.

No second Object Animation PR was opened.

## Reused lane

Repository: `mike-axiom-mir/axm-object-design`

Draft PR: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Final exact Animation head for this activation:

**`f0739b65c9a318d490a38b8cf64283d8a262bd53`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

## Preserved exact source / motion identity

The target-host proof consumes the existing Object motion rather than rewriting it:

- asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- sequence ID: `lid-latch-open-hold-close-001`;
- sequence-contract digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- base lid clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive samples: `101`;
- repeated-visible samples: `100`;
- original lid clip samples preserved: `81 / 81`;
- retimed lid samples: `0`;
- retargeted lid samples: `0`.

The previous source-space result `PASS_ORDERED_LATCH_RELEASE_LID_CLIP_REENGAGE_SEQUENCE` remains preserved in history; this activation adds a target-host representation proof rather than replacing that evidence.

## Exact dependency identities

### Hard-Surface / Rigging consumed by the existing sequence

- Hard-Surface ownership donor PR #14 head: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- ownership SHA-256: `0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`;
- Rigging latch donor PR #15 head: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- articulation-plan SHA-256: `81c27ab7b73ed9a43cb3f554b56c3f4294b893712075e33d13f5b02e008455db`;
- Rigging result consumed: `PASS_BOUNDED_FRONT_LATCH_LEVER_ARTICULATION`.

Hard-Surface PR #17 has since reached green CI for a source-owned pivot-interface candidate at head `6086f39a3da344c57a68653f90d040e03e04cec2`. It remains a separate draft source candidate and is **not silently substituted** into this exact Animation proof. If that identity becomes the accepted source dependency, Animation must explicitly rebind and rerun.

### Technical Art / UC receiver

- Technical Art Object PR #16 head: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- Technical Art result: `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH`;
- UC rigid-scene donor: `6dc465987e01362264f88b7cef4213609ae50763`;
- target host: Godot `4.7.2-stable`, GL Compatibility.

The exact rebound GLB used by the final Animation proof has SHA-256:

`9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`

## Bounded implementation

Added to existing Object Animation PR #10:

- `animation-proof/project.godot`;
- `animation-proof/observe_animationplayer.gd`;
- `.github/workflows/object-animation-target-host.yml`.

Proof schema:

`axm.object-animationplayer-target-proof/v0.1`

The workflow rebuilds exact Object motion, Hard-Surface/Rigging evidence, Technical Art rigid-scene transport and UC receiver identity before entering Godot. The proof-local `AnimationPlayer` then carries three value tracks:

- one `lid_shell` rotation track;
- two bilateral latch-pivot rotation tracks.

Each track contains exactly **101 authored keys** and uses:

- `Animation.UPDATE_DISCRETE`;
- `Animation.INTERPOLATION_NEAREST`.

This intentionally proves exact authored-sample transport/seek behavior only. It does not pretend to prove in-between interpolation or wall-clock playback.

## Evidence-driven repair inside this activation

An earlier exact target-host attempt at head `68ae10673848fb42c88b6a3f15c7201fc060690c` reached a green CI run, but direct retained-frame inspection rejected it.

The defect was real and visible: the proof-local latch pivot wrappers were inserted before the imported scene was attached to the target scene tree, so `reparent(..., true)` did not preserve the lower-lever neutral placement. The resulting retained frames showed detached/floating lever geometry. That green run was **not promoted**.

The repair moved the exact imported scene into the real viewport before pivot insertion and added a fail-closed neutral-geometry gate measuring lever mesh-center drift before/after proof-local wrapper insertion.

Final observed neutral pivot-wrapper drift:

**`0.0 m`**

This is an important truth-boundary result: CI success alone was insufficient; direct visual evidence found the target-host defect and the proof was tightened before promotion.

## Final exact-head validation

Dedicated workflow:

**`35086098734 — Object AnimationPlayer target-host evidence` — SUCCESS**

Exact tested head:

**`f0739b65c9a318d490a38b8cf64283d8a262bd53`**

Successful gates include:

- complete Object test suite under Python 3.11 — SUCCESS;
- complete Object test suite under Python 3.13 — SUCCESS;
- exact Technical Art / UC rigid-scene rebuild — SUCCESS;
- exact Hard-Surface / Rigging donor reconstruction — SUCCESS;
- exact 101-sample sequence rebuild — SUCCESS;
- cross-repo identity gate — SUCCESS;
- pinned Godot 4.7.2 import — SUCCESS;
- exact `AnimationPlayer` sampled-seek proof — SUCCESS;
- retained target receipt validation — SUCCESS;
- retained evidence upload — SUCCESS.

All inherited Object workflow families triggered on this final exact head also completed successfully:

- Object animation lid motion evidence;
- Object hard-surface interface evidence;
- Object service-module fit evidence;
- Object rigging attached-module clearance evidence;
- Object rigging registration-key clearance evidence.

Current scoped result:

**`PASS_TARGET_HOST_DISCRETE_ANIMATIONPLAYER_SAMPLED_SEEK`**

## Retained exact evidence

Artifact:

- ID: **`10442541601`**;
- name: `object-animationplayer-target-f0739b65c9a318d490a38b8cf64283d8a262bd53`;
- size: **`266,690 bytes`**;
- GitHub archive SHA-256: **`2226e08657e5fda8729728efaf10f3d63e8f75f983e98a626cf410b37bf9196b`**;
- exact-head binding: `f0739b65c9a318d490a38b8cf64283d8a262bd53`.

The retained ZIP was downloaded after CI and independently rehashed to that exact archive digest.

Retained evidence includes:

- exact source-owned sequence contract;
- exact rebuilt rebound GLB;
- Technical Art / UC receipt;
- exact Rigging receipt;
- exact 101-sample Animation evidence;
- exact Animation / Technical Art / UC head bindings;
- target-host AnimationPlayer receipt;
- ten retained Godot PNGs at samples `0,5,10,25,40,50,60,90,95,100`.

## Exact measured target-host observations

- `AnimationPlayer` tracks: **3**;
- keys per track: **`101 / 101 / 101`**;
- maximum selected lid seek error: **`7.62939453125e-06°`**;
- maximum selected latch seek error: **`3.814697265625e-06°`**;
- neutral pivot-wrapper insertion drift: **`0.0 m`**;
- release-complete keeper drift: **`0.0 m`**;
- minimum lever movement at release-complete: **`0.0401843525469303 m`**;
- minimum lid-owned keeper movement at peak: **`0.770640730857849 m`**;
- endpoint keeper drift: **`0.0 m`**;
- endpoint lever drift: **`0.0 m`**;
- closed -> release-complete changed pixels: **`1,735`**;
- closed -> peak-open changed pixels: **`92,810`**;
- closed -> endpoint changed pixels: **`0`**.

The source `[x,y,z] -> UC/glTF [x,z,y]` transport changes handedness. The proof therefore explicitly maps retained source mathematical +X articulation to the corresponding negative target +X rotation rather than assuming sign identity.

## Direct retained visual observation

All ten final frames were downloaded and directly inspected.

Observed sequence:

- sample `0`: exact closed target state;
- samples `5` and `10`: lower latch levers rotate while the lid remains closed;
- samples `25`, `40`, `50`, `60`: lid opens to the retained peak/hold while latch release remains held;
- sample `90`: lid is neutral again before re-engagement;
- sample `95`: latches are halfway back;
- sample `100`: exact neutral return.

The repaired sample `0` PNG SHA-256 is:

`98e8c761c94dbca7a2c7763619c539522b66fe29d414e95264c8a6c5eb3522df`

That is byte-identical to Technical Art PR #16's retained exact closed Godot target render. Sample `100` has the same SHA-256, independently confirming exact visual neutral return in this bounded proof.

No detached/floating latch geometry remains in the final inspected sequence.

## Truth boundary / non-claims

This PASS establishes only:

> the exact current Object 101-sample choreography can be represented by a proof-local discrete Godot `AnimationPlayer` over the exact UC rigid-scene target; selected exact authored sample seeks reproduce the intended rigid target transforms, preserve neutral target geometry, show the ordered latch/lid motion in retained Godot renders, and return exactly to the neutral target state.

It does **not** establish:

- wall-clock `40 Hz` playback pacing;
- continuous interpolation quality between authored samples;
- a runtime controller or interaction state machine;
- input handling;
- gameplay timing, usability or gameplay acceptance;
- physical latch hook/catch/retention behavior;
- collision-engine clearance across the full sequence;
- force, spring, friction, damping, wear, tolerances or engineering validity;
- final timing, weight, personality, anticipation, overshoot or secondary motion;
- audio/VFX synchronization;
- final Art Direction / Visual Observer acceptance;
- target-device FPS/GPU/VRAM/performance acceptance;
- adoption of Hard-Surface PR #17 into this exact evidence chain;
- a generic UC animation system;
- Profession Fabric promotion;
- CANON, production readiness, game readiness or Animation mastery.

## Four-root gate

- **Truth:** an initially green target-host run was rejected after direct visual evidence exposed neutral-placement drift. The repaired proof adds a fail-closed neutral-geometry gate and only the final exact run is promoted.
- **Agency / non-domination:** Hard Surface retains source/mechanical meaning; Rigging retains articulation evidence; Technical Art / UC retain transport identity; Animation owns authored motion representation only; Runtime/controller/gameplay and Art Direction/QA retain their own acceptance authority.
- **Continuity:** existing Object Animation PR #10 was extended instead of duplicated. Previous green source-space motion evidence remains traceable and unchanged. The failed/rejected target-host attempt remains visible in history rather than silently rewritten.
- **Wisdom before speed:** no retime, new animation style, controller, physics latch, state machine, generic UC animation abstraction or Profession extraction was added. The smallest real receiver gap was tested and visually challenged before promotion.

## Handoffs

- **Visual Observer / QA:** inspect the exact ten repaired Godot frames and target receipt. Focus on sign/convention correctness, mechanical readability and discontinuity; do not infer wall-clock interpolation or physical latch validity.
- **3D Art Director:** timing remains the existing authored sequence. Target-host success is not final timing/style acceptance.
- **Runtime / Optimization:** a proof-local `AnimationPlayer` now exists and exact sampled seeks are verified, but there is still no controller, scheduler or target-device performance claim.
- **Technical Art / UC — Object PR #16 / UC #157:** exact rigid-scene receiver identity was consumed unchanged. The final neutral frame is byte-identical to the Technical Art retained closed target render.
- **Hard Surface — Object PR #17:** your source-owned pivot-interface candidate is now green but was not silently substituted. If promoted as the new accepted source dependency, Animation should explicitly rebind this sequence/target proof and retain the old Rigging-derived chain as historical evidence.
- **Rigging — Object PR #15:** final target-host motion remains bound to the exact retained review pivots and does not reinterpret them as physical joints.

## Next gate

1. Independent Visual Observer / Art Direction review of the repaired target-host sequence.
2. If Hard-Surface #17 becomes the accepted pivot-source identity, rebind explicitly rather than treating equivalent numbers as equivalent provenance.
3. Only after perceptual acceptance should a separate Runtime/controller lane test real-time playback, interpolation, interaction and device performance.
