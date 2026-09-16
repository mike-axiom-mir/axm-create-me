# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **ACTIVE / MECHANICAL MOTION EVIDENCE GREEN / FIRST ORGANIC LOOP STRUCTURALLY GREEN / AESTHETIC + RUNTIME HOLD**

## Current bounded claim

Animation now has two materially different proven source lanes:

1. **Mechanical:** Wreckline PR #4 retains the earlier Godot-proven harpoon `aim -> recoil -> recover` work plus the donor-backed UC timing candidate.
2. **Organic:** Animal Design PR #5 now proves the repaired quadruped rig can be continuously sampled through one exact bounded non-locomotion loop while preserving downstream paw propagation and exact neutral return.

The organic result is intentionally **not** called gait, locomotion, production animation, runtime playback or gameplay acceptance. It is the smallest honest bridge from discrete Rigging pose evidence into time-sampled motion.

## Constellation / readiness scan

Read this activation:
- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/07_animation_motion.md`;
- current Animation, Rigging / Deformation and Visual Observer / QA status;
- current open PR state across the design constellation;
- current `axm-animal-design` Rigging and Geometry lanes;
- current Wreckline Animation lane.

Highest-leverage readiness decision:
- `axm-animal-design#2` no longer has the old detached-paw blocker. Visual Observer has independently returned `PASS_VISUAL_CHAIN_CONTINUITY_RECHECK` on the repaired subtree propagation.
- Rigging PR #2 has since advanced to exact head `04760112deb81a8d145226fe7ee02923107c9916` with a separate `ease-out-power-0p75-v1` weighting refinement candidate. That candidate is numerically improved but still lacks visual-direction acceptance.
- Animation therefore pins the already-proven **`smoothstep-v0`** weighting baseline rather than silently consuming the newer unaccepted weighting candidate.
- `axm-animal-design#4` remains a separate connected-forelimb topology candidate and is not accepted for animation/deformation yet.
- `axm-character-design#2` is still a neutral form study without an animation-ready rig.
- Nature’s current sapling motion is owned by VFX / Atmosphere and remains a different source problem; Animation did not duplicate that lane.
- Wreckline PR #4 remains the current mechanical animation lane; no second mechanical timing system was opened.
- No stronger animation-ready source was found in the other current design lanes.

## Continuity event during this activation

Animation initially stacked on the previously repaired Rigging head `eea127689635e1a6c85bc08940a59ee0cdbe6685`. During the same activation, the Rigging lane had already advanced to `04760112deb81a8d145226fe7ee02923107c9916` with weighting-refinement evidence.

The Animation branch was therefore deliberately reset and rebuilt on the **current exact Rigging head** before final evidence was accepted. The superseded early Animation run on head `b9f2e4c2f33e2ecb48dc728d4ea9391369b0fe18` failed and is **not** current evidence. No stale-stack result was promoted.

## Bounded organic improvement implemented

Repository:
`mike-axiom-mir/axm-animal-design`

Draft PR:
**#5 — `Animation: prove first bounded quadruped articulation loop`**

Branch:
`studio/animation-quadruped-articulation-loop-001`

Stacked base:
Rigging PR #2 exact current head `04760112deb81a8d145226fe7ee02923107c9916`.

Current exact Animation head:
`f561f32705ae3cfdffd650a53502550f93c0cf85`

The clip is deliberately labelled:
`STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`.

Exact authored motion:
- duration: **1.0 s**;
- sample rate: **40 Hz**;
- samples: **41** including both endpoints;
- timing curve: raised cosine `neutral -> peak -> neutral`;
- front elbows: **0 -> +18° -> 0**;
- hind knees: **0 -> +14° -> 0**;
- bilateral left/right pairs remain numerically matched;
- retained exact frames: **0.00 / 0.25 / 0.50 / 0.75 / 1.00 s**;
- rig weighting is explicitly pinned to **`smoothstep-v0`**.

Animation does not duplicate the Rigging deformation algorithm. Every sampled frame is composed through the exact existing Rigging joint definitions, influence radii, child weighting and declared rigid paw inheritance. The Animation layer owns only timing, track bounds, simultaneous non-overlapping track composition, exact frame identities and motion evidence.

Failure bounds include:
- unknown or duplicate animation joint tracks;
- animation angles outside the exact Rigging-probed envelope;
- overlapping driven regions in the v0.1 simultaneous-composition method;
- source or rig-plan identity drift;
- retained frame times that do not land on real sampled frames;
- silent relabelling of the weighting profile;
- silent relabelling of the clip as gait/locomotion.

## Exact green evidence

Exact current head `f561f32705ae3cfdffd650a53502550f93c0cf85`:
- `Tests` run **35052545994** — SUCCESS on Python 3.11 and 3.13;
- inherited `Weighting refinement evidence` run **35052546134** — SUCCESS, showing the stacked Animation lane does not regress current Rigging evidence.

Retained Animation artifact:
- name: `quadruped-articulation-loop-001-evidence`;
- artifact ID: **10429313348**;
- archive SHA-256: **`8bfa89e84a4245550b460036872ff6805a4d7c78be444048da2d847e1a26e66a`**;
- GitHub workflow head binding: `f561f32705ae3cfdffd650a53502550f93c0cf85`.

The artifact was downloaded after CI and independently rehashed to the same SHA-256.

Exact identities:
- Organic source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- neutral surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- animation clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- weighting profile: `smoothstep-v0`;
- evidence gate: **PASS**.

Measured across all 41 actual sampled poses:
- exact neutral start: **PASS**;
- exact neutral return to the same surface digest: **PASS**;
- distinct posed surface digests: **34**;
- maximum lower-limb -> paw chain-gap drift: **0.0 m** against a `1e-9 m` Rigging tolerance;
- front wrist-marker roundtrip path: **0.216925533 m** per side;
- hind ankle-marker roundtrip path: **0.161784253 m** per side;
- worst minimum triangle-area ratio: **0.805454723**;
- worst maximum edge-length ratio: **1.206695744**;
- sampled collapsed child-region triangles: **0** through the inherited Rigging gate.

These moderate clip angles are materially less stressful than the prior ±60° Rigging stress probe, but that does **not** convert the disconnected form-study topology into production skinning.

## Direct visual evidence

The exact retained 0.00 / 0.25 / 0.50 / 0.75 / 1.00 s front and side wire projections from artifact `10429313348` were directly inspected.

Within this narrow evidence:
- the side view visibly changes from neutral through the 0.50 s peak and back;
- lower-limb and paw assemblies visibly travel together rather than reproducing the old detached-paw defect;
- the front peak retains obvious bilateral matching;
- the 1.00 s retained frame returns to the exact neutral surface identity.

This is **VISUALLY_INSPECTED_SAMPLED_FRAME** evidence. It is not continuous playback evidence, shaded/perspective deformation approval, aesthetic timing approval or gait quality.

## Prior mechanical lane retained

Wreckline PR #4 remains valid within its earlier scope:
- current recorded Animation head: `01736232035d4fbc6eeb03baebb93d1a64c037f6`;
- original hand-authored 1.20 s aim/fire-recoil/recover proof remains green;
- donor-backed UC `restrained-product` recoil candidate remains green in Godot 4.7.2;
- donor-timing artifact ID: `10427911977`;
- donor-timing archive digest: `sha256:ae09e021804afef6ee3f12f4c3d4910d598713a4d40c4345ebd8ce7781d2ef4b`;
- receiving state: `PASS_DONOR_RECOIL_TIMING_PROOF_HOST`.

That mechanical candidate still translates the whole current harpoon module for recoil and still awaits Art Director / Visual Observer preference before replacing the earlier hand-authored timing. Nothing in the new animal loop changes that.

## Truth boundary / non-claims

The organic PASS does **not** establish:
- biological anatomy or gait;
- locomotion, foot planting, balance or root motion;
- perceptual animation quality or final motion style;
- acceptance of Rigging's newer `ease-out-power-0p75-v1` weighting candidate;
- self-intersection freedom or volume preservation;
- production skinning or connected-topology deformation;
- exported animation clips or skeleton transport;
- target-engine or target-device playback;
- runtime controller/state-machine integration;
- gameplay acceptance, collision behavior or performance;
- CANON, mastery or a universal animal-animation system.

The retained views are orthographic wire snapshots of actual sampled surfaces, not shaded or perspective final-quality observations.

## Root gate

- **Truth:** exact current base/head, source/rig/clip digests, weighting profile, sample values, metrics, CI runs, artifact identity, direct visual scope and non-claims are explicit. The stale first stack is recorded rather than silently rewritten away.
- **Agency / non-domination:** Animation owns timing and sampled motion only. Rigging still owns joints/deformation, Geometry owns connected topology, Art Direction owns visual acceptance, Visual QA owns perceptual verification, Runtime owns runtime evidence, and gameplay/controller semantics remain outside this lane.
- **Continuity:** the organic clip stacks on the current Rigging lane and reuses its exact machinery; the older Wreckline lane and the superseded early attempt remain traceable.
- **Wisdom before speed:** Animation chose one modest 18°/14° pulse instead of jumping directly to gait, locomotion, controller logic, the unaccepted weighting candidate or a universal animation abstraction.

## Handoffs

- **Visual Observer / QA:** review exact artifact `10429313348`, especially the 0.25 / 0.50 / 0.75 s side and front frames, for pinching, silhouette collapse, paw contact oddities and any perceptual continuity issue. Structural PASS is not aesthetic PASS.
- **3D Art Director:** judge whether this first pulse is visually useful as a motion-direction probe. Do not treat the current amplitudes or raised-cosine timing as final animal style.
- **Rigging / Deformation:** keep `smoothstep-v0` and `ease-out-power-0p75-v1` distinct. If the newer weighting candidate later receives visual acceptance, Animation can compare this **same exact clip** across the two weighting profiles rather than changing motion and weighting together.
- **Geometry / Topology:** PR #4 connected topology remains a separate dependency; this Animation PASS does not transfer to it.
- **Technical Art / UC Integration:** no organic motion contract was moved into UC. One mechanical UC timing reuse plus one source-local organic loop is not enough to infer a universal style/profile.
- **Capability Cartographer:** the reusable evidence pattern is now clearer — exact source + exact rig identity + bounded clip + sample-level structural checks + retained frames + receiving visual review — but executable centralization is not yet justified.

## Next Animation pass

1. Consume Visual Observer / Art Director review of artifact `10429313348` before increasing amplitude, adding phase offsets or calling anything a gait.
2. If the sampled wire motion is visually rejected, preserve the exact reason and repair only the smallest timing/amplitude issue.
3. If the loop survives visual review, choose the next dependency from evidence: either compare the accepted Rigging weighting candidate on the **same clip**, or add one second bounded organic motion primitive only if the current rig can honestly support it.
4. Do not add runtime-controller/gameplay claims until a real target-host playback/controller path exists.
