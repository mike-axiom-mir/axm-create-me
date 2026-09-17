# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_COMPACT_EAST_SINGLE_SHAPE_LINEAR_ANIMATIONPLAYER_PLAYBACK_CHARACTERIZED / EXACT VFX KEYS PRESERVED / LINEAR BETWEEN-KEY MOTION CHARACTERIZED / SMOOTHNESS + RUNTIME-CONTROLLER + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the previous Animation status and fresh specialist work across the full 3D constellation before selecting one bounded lane.

`axm-create-me` remains **coordination only**. No Nature product source, mesh, VFX response, Runtime implementation, Map scene, gameplay system or Universal Creation implementation is stored here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10 already has mature target-host, wall-clock, mechanical phase, keeper/socket and textured-receiver evidence. Current Object work is downstream receiver/Runtime optimization, not a fresh Animation defect.
- **Animal:** Animation PR #5 already owns dense/subframe motion and normalized-u16 subframe evidence. Current Animal work remains mainly Rigging/Materials/Runtime representation and direction-frame boundaries.
- **Character:** source Animation PR #19 and target-host PR #22 already cover dense deformation, exact-density Godot import, between-key playback and repeated loop seams. Materials/Art own remaining shaded-motion judgment; Animation did not duplicate that lane.
- **Nature VFX:** PR #11 remains source authority for the compact-east `0.50 s / 16 intervals / 17 endpoint-inclusive states` response.
- **Nature Runtime:** PR #12 advanced to exact head `6ea4148da61d3806123712e2eaf19613df9ae1eb` with a fresh one-`MeshInstance3D`, one-NORMALIZED-blend-shape receiver candidate. Runtime proves exact authored-state resource reuse / baked geometry, but explicitly does **not** provide continuous playback acceptance.
- **Nature Procedural:** independently observed that the exact 17 authored states lie on the same neutral→peak half-sine family, reinforcing that a one-shape receiver is source-consistent without transferring Animation or Runtime authority.
- **Map / Environment:** current-world receiving work is still owner-specific and was not stable enough to displace this exact fresh receiver seam.
- **Art / Visual QA:** smoothness, naturalness and final visual acceptance remain held.

The highest-leverage non-overlapping Animation improvement was therefore to extend existing Nature Animation PR #13 onto Runtime's fresh one-normalized-blend-shape representation and test actual **between-key + repeated playback** without changing VFX source timing or claiming production Runtime adoption.

## Bounded improvement — one-shape LINEAR AnimationPlayer witness

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft PR:

**#13 — `Animation: prove compact-east exact-state playback and loop seam`**

Branch:

`studio/animation-compact-east-tree-phase-playback-001`

Exact tested Animation head:

**`507d325e21c2f9d5be5b5e07c121769ca7abde91`**

Exact stacked VFX source parent:

**`cef2ad78d8e36a55ada5dad07329f1a7125d48de`**

Exact Runtime representation reference:

**`6ea4148da61d3806123712e2eaf19613df9ae1eb`**

PR state after this activation: **open / draft / mergeable / unmerged**.

Reusable observer contract:

`axm.nature-animation-compact-east-single-shape-linear-playback/v0.1`

The VFX-authored motion remains unchanged:

- duration: `0.50 s`;
- intervals: `16`;
- endpoint-inclusive source states: `17`;
- authored step: `0.03125 s`;
- peak state: phase `08`;
- neutral states: phases `00` and `16`;
- migrated neutral mesh digest: `420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`;
- source topology, hierarchy amplitudes, Weather direction and VFX semantics unchanged.

No VFX source state was replaced. The new between-key curve is explicitly an **Animation receiver candidate**, not a silent rewrite of VFX truth.

## Source-family continuity check

The workflow rebuilt all 17 exact VFX phase payloads and independently checked the observed source family against:

`neutral + sin(pi * phase / 16) * (peak - neutral)`

Python source-family maximum residual:

**`1.2412670766236366e-16 m`**

The Godot observer's source-family maximum residual was:

**`4.99582100242118e-18 m`**

This establishes that the one-shape neutral→peak parameterization is consistent with the exact retained source states to floating-point precision. It does not by itself grant Runtime adoption or smooth-motion acceptance.

## Actual target-host motion test

Dedicated workflow:

**`35240864423 — Animation compact east single-shape linear playback evidence` — SUCCESS**

Proof receiver:

- pinned Godot `4.7.2-stable`;
- one persistent `MeshInstance3D`;
- one persistent `ArrayMesh`;
- exactly one **NORMALIZED** blend shape, `compact_east_peak`;
- `AnimationPlayer` value track targets `receiver:blend_shapes/compact_east_peak`;
- all 17 exact VFX source weights inserted at the exact authored timestamps;
- track interpolation: `LINEAR`;
- update mode: `CONTINUOUS`;
- dense diagnostic density: **8 substeps per authored interval / 129 endpoint-inclusive samples**;
- capture-free real `AnimationPlayer.play()` loop observation after the deterministic seek tests.

Scoped result:

**`PASS_COMPACT_EAST_SINGLE_SHAPE_LINEAR_ANIMATIONPLAYER_PLAYBACK_CHARACTERIZED`**

### Exact authored-key preservation

Every one of the 17 authored timestamps was applied through `AnimationPlayer`, then the receiver's current blend mix was baked and compared against the exact corresponding VFX source mesh.

Maximum authored-key geometry residual:

**`6.6640019724673e-08 m`**

That is far below the `2e-6 m` verification ceiling and matches the already-observed Runtime candidate's floating-point-scale baked-geometry behavior.

Verifier-only negative control:

- peak animation key changed only in memory from `1.0` to `0.99`;
- exact source payload remained unchanged;
- resulting peak geometry residual: **`0.00134998885914683 m`**;
- negative mutation correctly failed the exact authored-state equivalence threshold;
- original peak key restored before dense/repeated playback.

No tolerance or source motion was changed to obtain the PASS.

## Dense between-key characterization

The 129-sample Godot observation compared the actual `AnimationPlayer` result against an independently computed piecewise-LINEAR interpolation through the exact retained 17 source weights.

Maximum Godot-vs-manual-LINEAR weight residual:

**`2.97394731063605e-08`**

No weight overshoot was accepted outside the normalized `[0, 1]` domain.

The exact retained VFX samples themselves fit a half-sine family, while piecewise-LINEAR interpolation between those samples is only an approximation to that analytic family. This difference was measured rather than hidden:

- maximum LINEAR-vs-analytic half-sine weight delta: **`0.00479210134031827`**;
- equivalent peak-displacement geometry envelope: **`0.000646933635241926 m`** (~`0.647 mm`).

This is **characterization**, not Art/QA smoothness acceptance. It is useful because future Art/QA or receiving-world review now has a precise temporal approximation error to evaluate instead of an undefined "smooth" claim.

## Real repeated AnimationPlayer playback

After exact-key and dense deterministic checks, the same one-shape receiver ran under real capture-free `AnimationPlayer.play()` with loop processing.

Observed:

- wraps: **3**;
- process frames: **214**;
- persistent receiver identity: preserved;
- persistent mesh identity: preserved;
- maximum real-playback-vs-manual-LINEAR weight residual remained inside the `1e-5` proof bound;
- no normalized-weight overshoot was accepted.

This is actual engine playback evidence for the candidate receiver/interpolation method. It is not a production Runtime controller or state-machine claim.

## Retained evidence

Workflow artifact:

- run: **`35240864423`**;
- artifact ID: **`10505356779`**;
- name: `compact-east-tree-animation-blend-playback-507d325e21c2f9d5be5b5e07c121769ca7abde91`;
- size: **20,431 B**;
- GitHub archive SHA-256: **`f05134f2d7d37fd9d790e8242b656cd30ee3b6c9c29e4f68f92cbfcbddadc6d7`**.

Retained evidence includes the exact Animation/VFX/Runtime-reference identities, rebuilt VFX summary and phase payload lineage, pinned Runtime one-shape reference source + digest, new Animation observer, workflow source, Godot log and scoped receipt.

## Previous Nature Animation evidence preserved

The previous exact-state discrete playback witness remains historical truth and is not overwritten:

- Animation head: `c3157465856ee4e6c67159cfb5077c3e966f68ee`;
- workflow: `35234185552`;
- result: `PASS_COMPACT_EAST_TREE_TARGET_HOST_DISCRETE_PHASE_PLAYBACK_AND_LOOP_SEAM`;
- artifact: `10503315083`;
- archive SHA-256: `4b9a7192b79428d1b9dbe62eb7b1a6bd6d038cd9bc19abbca9d28ec7e12faef0`.

That prior witness proves exact DISCRETE source-state playback and the neutral loop seam without between-state interpolation. The new one-shape witness adds a separately labeled LINEAR Animation candidate; it does not retroactively relabel the discrete witness or VFX source truth.

## Wider Animation continuity preserved

- Character PR #22 repeated-loop seam proof remains historical truth at head `5513ab66372ee06ce53788f5097ede230ca2fc6b`, workflow `35227649172`, artifact `10500081521`.
- Character PR #22 exact-density playback proof remains historical truth at head `fb518d8320b74323767fdfb57e81291dbdb2a4d1`, workflow `35222873944`, artifact `10498075104`.
- Character source Animation PR #19 remains the dense deformation/source-motion proof at head `9519be55581c009fd800d175677d9b50ee6926e6`.
- Object Animation PR #10 prior target-host / phase / wall-clock / textured-motion evidence remains untouched.
- Animal Animation PR #5 prior dense/subframe and normalized-u16 evidence remains untouched.

No settled motion lane was reopened merely because another activation occurred.

## Handoff

- **Nature VFX:** exact 17-state timing and amplitudes remain source authority. Animation has not replaced them with an analytic curve.
- **Nature Runtime PR #12:** receives evidence that its one-normalized-blend-shape representation can carry exact source states and real LINEAR `AnimationPlayer` motion on the proof host. This is downstream evidence, **not** adoption of its production Runtime policy.
- **Art Direction / Visual QA:** now has a concrete measured between-key approximation envelope (~`0.647 mm` at the source's peak-displacement scale) to judge if/when an in-context smooth-motion review is opened.
- **Map / Environment:** no current-world receiving acceptance is implied.

## Explicit non-claims

This activation does **not** establish:

- final smooth/natural vegetation motion;
- Art Direction or independent Visual QA acceptance of LINEAR interpolation;
- continuous mathematical equivalence to the underlying half-sine family;
- normal/tangent/shaded equivalence during deformation;
- physical wind speed, force, gust or biomechanics;
- a production Runtime controller, state machine or update policy;
- adoption of the one-shape Runtime candidate;
- target-device frame delivery, CPU/GPU/FPS/VRAM/thermal/battery performance;
- Map/current-world receiving integration;
- gameplay, collision, damage or navigation behavior;
- source adoption or CANON;
- production/game readiness;
- Animation mastery.

## Four-root gate

- **Truth:** exact VFX source states, the Runtime representation candidate, the Animation LINEAR candidate and Art/QA acceptance remain separately labeled. The measured ~`0.647 mm` LINEAR-vs-analytic envelope is retained instead of being described as exact smooth equivalence.
- **Agency / non-domination:** VFX keeps source-response semantics; Runtime keeps production representation/controller authority; Art/QA keeps perceptual acceptance; Map/Environment keeps receiving-world authority. Animation owns only the bounded motion/playback witness.
- **Continuity:** the new test stacks on exact VFX parent `cef2ad78...`, pins exact Runtime reference `6ea4148d...`, preserves the exact 17 source timestamps/states, retains the previous discrete witness and leaves Character/Object/Animal history intact.
- **Wisdom before speed:** no arbitrary retiming or smoothing was invented. A fresh receiver representation created a concrete between-key truth gap, so that exact gap was measured first with a negative control and real playback.

The four AXM roots remain the merge gate.

## Next Animation trigger

Re-scan the full constellation first.

For compact-east Nature, do **not** automatically retime or replace the current response. Continue only if Art/QA or receiving-world evidence exposes a concrete temporal defect, if Runtime changes the receiver representation, or if an owner explicitly requests comparison against another interpolation method. Otherwise keep the exact VFX source timing frozen and move to the strongest new unoccupied motion gap elsewhere.
