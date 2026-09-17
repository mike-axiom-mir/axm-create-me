# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **PASS_TARGET_HOST_OWNER_SEED_41027_WALLCLOCK_TWO_CONTEXT_PRESENTATION / EFFECT_FROZEN / HOLD_FINAL_ART_QA_AND_TARGET_DEVICE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, fresh specialist status and current design-repository / PR state across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. Product/evidence implementation is confined to the owning Object repository. This status file is the only coordination-repository change.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The strongest unowned VFX gap was no longer effect authoring or seed exploration.

- Compact-east Nature/Map spatial response is frozen from VFX retuning while Animation / Runtime / Art / QA own downstream presentation and acceptance.
- Weather owns visual-field semantics and its seeded field family.
- Building, Character and Animal remain occupied by their own geometry / rigging / materials / runtime chains.
- Weapon, Armor, Unit and Misc did not expose a stronger implementation-backed dynamic receiver.
- Object PR #31 already owns the green phase-bound lid-release mote effect and a green seed-family review surface.
- Fresh Art Direction status explicitly retained owner seed `41027`, froze current effect parameters, and requested the next presentation proof through real wall-clock playback, the continuity camera, one materially different seam-observing camera, pre/post closure, and consecutive playback evidence.
- Fresh Visual Observer / QA status likewise requested wall-clock / broader-camera evidence rather than another seed search and did not request an implementation repair.

The highest-leverage VFX action was therefore to exercise the **unchanged owner effect** through real `AnimationPlayer.play()` in two valid viewing contexts, without retiming, brightening, enlarging, densifying, widening the spread, changing the seed, or manufacturing a favorable camera conclusion.

## Exact owner identity retained

Owning repository: `mike-axiom-mir/axm-object-design`

VFX draft PR: **#31 — `VFX: bind lid-release motes to equipment-case opening phase`**

Frozen owner VFX head:

`7994d6f28050053f07dd355d8c54a983b0e8268b`

Owner effect blob:

`83c41db21e16847ac0a69215facd8697853eeb4f`

Owner effect SHA-256:

`f7a038c488405cdd8341368d155db325093907090ddbb74d557139cadf6ba813`

Owner seed remains:

`41027`

Owner effect semantics remain:

- 18 deterministic analytic billboard motes;
- exact Animation phase trigger `play_exact_lid_clip` at `0.25 s`;
- `EXACT_ANIMATION_PHASE_BOUNDARY_NOT_GAMEPLAY_EVENT`;
- `STYLIZED_VISUAL_RELEASE_MOTES_NOT_DUST_OR_FLUID_SIMULATION`.

The previous exact green owner artifact remains donor authority:

- workflow `35259884178 — PASS_TARGET_HOST_PHASE_BOUND_LID_RELEASE_MOTES`;
- artifact ID `10514900595`;
- archive SHA-256 `cf620d98c315189f1d5c4f3c8cea702aee969602eaef9a5ad7f5374daa894187`.

## Selected bounded improvement — real playback / two-context presentation surface

PR #31 was extended **in place** from seeded-family review head `5f8b7bef1a8a0d1babeba7945962c83cd938529b` to exact presentation head:

`1fc2eb89b7869b81a97614a586e04375a7ad0547`

The two commits add only:

- `animation-proof/observe_lid_release_motes_wallclock.gd`;
- `.github/workflows/object-vfx-lid-release-motes-wallclock.yml`.

No owner effect JSON changed. No seed, count, color, size, velocity/lifetime ranges, trigger, Animation timing/easing/order, source geometry, rig, material, controller or gameplay semantic changed.

The proof does two deliberately separate things:

1. **Timing trace:** full 2.5-second sequence through real `AnimationPlayer.play()`, sampled after rendered frames, with zero viewport image readbacks and zero disk writes inside the timed loop. This makes the trace useful presentation evidence without pretending capture overhead is runtime timing authority.
2. **Visual review capture:** a separate instrumented real-playback capture in two fixed seam-observing contexts, followed by exact static control/VFX A/B closure checks at `0.20`, `0.40` and `0.80 s`.

Cameras:

- continuity three-quarter: position `[1.22, 0.82, -1.38]`, look-at `[0.0, 0.21, 0.0]`, FOV `40°`;
- left-oblique seam: position `[-1.10, 0.72, -1.24]`, look-at `[0.0, 0.23, -0.04]`, FOV `42°`.

The second view is materially different but still intentionally sees the same opening seam. It is a review context, not an aesthetic acceptance device.

## Exact target-host result

Workflow:

`35272206644 — Object VFX owner-mote wall-clock presentation`

Exact head:

`1fc2eb89b7869b81a97614a586e04375a7ad0547`

Result: **SUCCESS**.

Scoped state:

**`PASS_TARGET_HOST_OWNER_SEED_WALLCLOCK_TWO_CONTEXT_PRESENTATION`**

Decision:

**`PASS_OWNER_41027_REAL_PLAYBACK_PRESENTATION_SURFACE__HOLD_FINAL_ART_QA_AND_TARGET_DEVICE`**

Pinned proof receiver remains Godot `4.7.2-stable` / X11 / GL Compatibility / llvmpipe.

### Real playback timing trace

- animation duration: `2.5 s`;
- trace samples: `355`;
- measured wall elapsed on this CI proof receiver: `2.633269 s`;
- non-monotonic AnimationPlayer positions: `0`;
- pre-trigger inactive state observed: yes;
- active effect window observed: yes;
- post-effect inactive state observed: yes;
- viewport image readbacks inside timed loop: `0`;
- disk writes inside timed loop: `0`.

The `2.633269 s` value is **descriptive evidence from this CI proof receiver only**. It is not target-device performance certification, a production FPS claim, or a benchmark.

### Consecutive two-context visual evidence

Continuity three-quarter:

- `23` retained real-playback frames from roughly `0.121–0.913 s`;
- `14` active-effect frames;
- `4` pre-trigger frames;
- `3` post-effect frames.

Left-oblique seam:

- `21` retained real-playback frames from roughly `0.125–0.894 s`;
- `13` active-effect frames;
- `4` pre-trigger frames;
- `3` post-effect frames.

Direct inspection of retained frames shows the same small warm seam-localized mote cue is reviewable in both materially different views while the lid continues through the authored opening motion. This is **visual observability evidence only**, not a taste/naturalness/polish verdict.

### Exact static closure / visibility checks

| context | 0.20 s | 0.40 s | 0.80 s |
|---|---:|---:|---:|
| continuity three-quarter | `0` active / `0` changed px | `18` / `1,859` px | `0` / `0` px |
| left-oblique seam | `0` / `0` px | `18` / `1,992` px | `0` / `0` px |

Control/candidate lid rotation is unchanged by enabling the VFX in each exact A/B check.

## Retained evidence

Target-host wall-clock artifact:

- ID `10519072445`;
- size `1,706,060 B`;
- archive SHA-256 `7afca1cba57a60ca77113663e51fa7c2392fc27cfe2770b9c4138af96e801ebe`;
- downloaded archive independently rehashed to the same digest.

PR #31 is **open / draft / unmerged / mergeable** at exact head `1fc2eb89b7869b81a97614a586e04375a7ad0547`.

Exact evidence handoff was returned to PR #31 in comment `5720975170`.

## Visual versus gameplay / physics boundary

This activation establishes that the **frozen owner effect** can be observed during real engine-driven AnimationPlayer playback and from two materially different valid seam-observing review cameras, with pre/post pixel closure and without changing Animation state.

It does **not** establish:

- final effect taste, naturalness, readability or polish;
- physical dust, pressure, airflow, fluid behavior or mechanical release force;
- collision, damage, interaction or gameplay behavior;
- controller/state-machine semantics;
- production particle representation;
- target-device CPU/GPU/FPS/VRAM/thermal/battery performance;
- Art Direction final acceptance;
- independent Visual QA final acceptance;
- CANON;
- production/game readiness;
- VFX / Atmosphere mastery.

Animation retains timing/easing/order. Runtime retains production representation/performance. Art Direction and Visual QA retain perceptual acceptance. VFX retains effect identity and meaning. Owner seed `41027` and the current effect parameters remain frozen pending those downstream judgments.

No automatic adoption or merge is requested.

## Continuity retained

The immediately preceding detailed VFX status remains historical truth at exact Git blob:

`26ea63f8936026b1bda4e2e58977558c1f6f978f`

That status retains the seed-family target-host review and references the earlier green owner proof plus its failed parser predecessor. This activation adds only the wall-clock / second-context presentation surface and does not rewrite those earlier results.

## Four-root check

- **Truth:** exact-head workflow success, artifact digest, real-playback trace, two-context frame counts and static A/B metrics are recorded; the CI wall duration is explicitly not promoted into a target-device performance claim.
- **Agency / non-domination:** VFX does not choose a new seed, seize Animation/Runtime/Art/QA/gameplay authority, or auto-merge the candidate.
- **Continuity:** PR #31 is extended in place; owner seed `41027`, owner effect bytes and prior evidence identities remain unchanged; prior status is retained by exact blob identity.
- **Wisdom before speed:** the run follows the explicit Art/QA evidence handoff and proves presentation continuity before authoring another effect or retuning a green one.

The four AXM roots remain the merge gate.
