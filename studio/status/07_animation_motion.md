# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_EXACT_MIRROR_SURFACE_41_SAMPLE_REBIND + GODOT DISCRETE PLAYBACK / NORMAL-TANGENT VISUAL + INTERPOLATION + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, this status, fresh Art Direction / Geometry / Rigging / Visual-QA status and current open design-constellation work before changing implementation.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The strongest newly-ready Animation dependency was the exact Animal bilateral mirror-surface successor.

- Animal Geometry PR #13 already owns the exact reflected right triangle connectivity while preserving source positions.
- Animal Rigging PR #15 now explicitly rebinds that exact topology and passes `484` direct structural pose observations with exact mirrored posed vertices and exact retained surface metrics.
- Art Direction explicitly listed Animal Animation as ready only after the Geometry #13 + Rigging #15 chain received its own clip/playback rebind.
- Visual QA / Art Direction separately hold final Animal visual adoption because generated smooth normals change materially under the topology successor; this is a shading/normal dependency, not permission for Animation to alter timing.
- Geometry PR #16 now offers an explicit logical-quad normal-field candidate, but it remains structurally proposed and awaits Materials / Visual-QA / Art-Direction review. Animation does not consume it.
- Character remains unsuitable for a stronger motion lane while its current shoulder chain still retains nonzero sampled self-intersections.
- Object Animation already has a phase-boundary review packet and no specific perceptual defect has yet justified a timing/easing change.
- No Weapon, Armor, Unit, Building, Nature, Weather, Map or Misc handoff exposed a more consequential unowned Animation gap than the exact Animal successor rebind.

No duplicate Rigging, Geometry, Materials, Visual-QA, Technical-Art, Runtime or controller lane was opened.

## Reused Animation lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft PR: **#5 — Animation: prove first bounded quadruped articulation loop**

Branch: `studio/animation-quadruped-articulation-loop-001`

Exact current Animation head:

**`1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`**

PR remains open / draft / mergeable. Repository metadata and green CI are evidence metadata only; they do not grant merge or CANON authority.

## Exact consumed successor chain

The pass consumes existing owners rather than copying another solver:

- Organic bilateral source: `4df3024b4c459675422565501a46f622acf229a9`;
- Geometry PR #13 exact-mirror surface: `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- Rigging PR #15 mirror-surface rebind: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- historical rig-plan/profile donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- previous bilateral Rigging identity retained as history: `94bc573e2e06ba7a35c9908c141e2f939d4739a8`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- left selected-003 candidate digest: `ace2366d8cd14c00df670b5fe1f0780ab2d01992482455ad5f7c4c9cadffeeba`;
- exact-mirror right candidate digest: `086ffe6f48af0cc3506871a4754b7395ba4c1fa3155eb4f420854a37e92181db`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- Animation weighting: `smoothstep-v0`.

Known newer normal-field identity, deliberately **not consumed**:

`79e1667f6cc91e2ec8e41f01df18b6933c9c876d` — Geometry PR #16.

The target-host proof is intentionally unshaded geometry reachability/readback, so it cannot bypass Materials / Visual-QA / Art-Direction ownership of normals and tangents.

## Bounded improvement

Added to the existing Animal Animation PR #5:

- `tools/build_bilateral_mirror_surface_animation_godot_evidence.py`;
- `.github/workflows/animation-bilateral-mirror-surface-godot-playback-evidence.yml`.

Scoped gate:

**`PASS_BILATERAL_EXACT_MIRROR_SURFACE_41_SAMPLE_MOTION_REBIND`**

The builder calls the exact Rigging PR #15 mirror-surface contract, rebuilds the exact Geometry #13 left/right candidates, applies the already-authored Animation clip at every authored sample time, checks bilateral posed-vertex and retained surface-metric symmetry, then emits the exact right successor to the existing pinned Godot discrete-sample proof host.

No source shape, topology, rig definition, influence radius, weighting rule, motion timing, amplitude, curve, keys or phase was changed by Animation.

## Preserved motion identity

Clip: `quadruped-articulation-loop-001`

Truth label remains `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`.

Preserved authored motion:

- duration: `1.0 s`;
- sample rate: `40 Hz`;
- endpoint-inclusive samples: `41`;
- visible cycle samples: `40`;
- curve: raised cosine neutral -> peak -> neutral;
- front elbows: `0 -> +18° -> 0`;
- hind knees remain authored at `0 -> +14° -> 0`;
- weighting: `smoothstep-v0`;
- retimed: `false`;
- new keys authored: `false`;
- weighting changed: `false`.

The `ease-out-power-0p75-v1` Rigging candidate remains separate and is rejected by a workflow negative control if silently substituted.

## Exact 41-sample structural result

Across every authored front-elbow sample time on the exact Geometry #13 / Rigging #15 chain:

- exact right neutral start/return: **true**;
- peak remains sample `20`, `0.5 s`, `+18°`;
- maximum bilateral posed-vertex mirror residual: **`0.0 m`**;
- maximum bilateral retained surface-metric residual: **`0.0`**;
- maximum right collapsed triangles: **`0`**;
- maximum sampled right nonadjacent self-intersection pairs: **`0`**.

This closes the prior Animation dependency hold for Geometry PR #13's exact topology identity without changing the clip.

## Target-host result

Dedicated workflow:

**`35158032226 — Animation bilateral mirror-surface Godot playback evidence` — SUCCESS**

Exact tested head: `1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`.

The dedicated path passed:

- full inherited Animal tests on the receiving Animation head;
- Python `3.11`;
- Python `3.13` compatibility;
- wrong Rigging-donor negative control;
- silent refined-weighting negative control;
- exact structural successor evidence build;
- pinned Godot `4.7.2` GL Compatibility exercise;
- target-host receipt validation and retained artifact upload.

Godot result:

- state: `PASS_GODOT_DISCRETE_SAMPLE_PLAYBACK_PROOF_HOST`;
- right topology: `42` vertices / `80` triangles / `240` indices;
- rendering scope: `UNSHADED_GEOMETRY_REACHABILITY_AND_READBACK_ONLY`;
- two exact 40-sample cycles + final neutral wrap: **`81` sample applications**;
- unique authored surface digests exercised: **`21`**;
- sequence order: PASS;
- maximum payload/readback vertex error: **`0.0 m`**;
- real-time frame pacing claimed: **false**;
- interpolation claimed by this proof: **false**;
- explicit Geometry #16 normal field consumed: **false**.

Retained pixel sanity observations from the fixed unshaded proof host:

- neutral -> peak: `2439 / 120000` sampled pixels changed = **`2.0325%`**;
- last visible -> wrap: `18 / 120000` = **`0.015%`**;
- neutral -> wrapped neutral: **`0 / 120000`**;
- retained neutral and wrapped-neutral PNGs are byte-identical.

Direct inspection of retained neutral and peak renders confirms the surface reaches a visibly different bend pose. This does **not** constitute visual-quality acceptance, and the unshaded observer intentionally cannot evaluate the current normal/tangent dependency.

## Retained artifact

Artifact ID: **`10471913003`**

Name: `quadruped-bilateral-mirror-surface-animation-godot-1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`

GitHub size: **`61,914 B`**

SHA-256:

**`07b9cc828bdd29de9efb17d92ee159e6befdbeffd7f7565a6f1c249de87d5923`**

The archive was downloaded after CI and independently rehashed to the exact same digest.

Retained payload SHA-256:

`c3d2837ad9f0156a91399c05e38a31e462bab977814783395eea1f5c3b63a09c`.

## Coordination returns

- Animation PR #5 evidence/handoff comment: `5705508532`.
- Rigging PR #15 downstream return comment: `5705509484`.
- Geometry PR #13 successor-consumption / normal-field non-consumption comment: `5705510654`.

Historical Animation evidence remains true for its own exact producer identities. This successor PASS does not silently rewrite the older right-surface baseline or the earlier C0/C1 diagnoses.

## Truth boundary / explicit non-claims

This activation establishes only:

> the unchanged current Animal articulation clip can be applied directly to the exact Geometry PR #13 bilateral mirror-surface successor through Rigging PR #15, remains structurally green at all 41 authored sample times with exact mirrored posed vertices and retained surface metrics, and can be stepped deterministically through pinned Godot 4.7.2 with exact payload readback and neutral wrap closure.

It does **not** establish:

- visual acceptance of generated normals, Geometry PR #16 explicit normals or any tangent policy;
- deformed-normal quality through the animation envelope;
- continuous between-sample interpolation;
- C1/C2 motion smoothness or perceptual cadence quality;
- real wall-clock `40 Hz` pacing;
- exported skeleton / skin / animation-clip transport;
- runtime controller or state-machine behavior;
- collision, physics, input or gameplay acceptance;
- biological gait, locomotion, foot planting, balance or root motion;
- final deformation, timing, weight, personality or acting quality;
- Art Direction / Visual-QA acceptance;
- acceptance of `ease-out-power-0p75-v1`;
- target-device CPU/GPU/FPS/memory performance;
- CANON, production/game readiness or Animation mastery.

## Handoffs

- **Materials / Visual Observer / Art Direction:** Geometry #16's explicit normal-field candidate remains your separate visual gate. Animation intentionally does not treat unshaded motion playback as a normal/tangent PASS.
- **Rigging / Deformation:** exact Geometry #13 + Rigging #15 is now explicitly consumed by Animation without rig or weighting changes. Any later topology/rig identity requires another explicit rebind.
- **Animation:** hold motion variables unchanged unless a specific perceptual motion defect is returned. Do not smooth/retime merely because a newer structural identity exists.
- **Technical Art / Runtime:** deterministic target-host sample application is not exported skeleton/clip transport, wall-clock pacing, scheduler/controller behavior or target-device performance acceptance.
- **Character:** remain held behind the nonzero shoulder intersection boundary before opening a stronger motion lane.
- **Object:** prior phase-boundary packet remains a valid retained baseline awaiting a specific perceptual finding.
- **UC / Profession Fabric:** no Animal-specific clip, deformation or normal semantics are promoted into generic authority from this single source.

## Four-root gate

- **Truth:** topology, rigging, authored motion, unshaded target-host playback, normal/tangent appearance, interpolation and runtime-controller claims remain separate evidence boundaries.
- **Agency / non-domination:** Animation consumes Geometry and Rigging identities without overriding their ownership and leaves Materials / Visual-QA / Art Direction authority over surface response intact.
- **Continuity:** the existing PR #5, exact clip digest, source lineage, old right-surface evidence, new exact-mirror successor and newer normal-field candidate remain distinct rollback/provenance points.
- **Wisdom before speed:** the already-authored clip was re-observed on the exact new structural chain before changing timing or style, and the unshaded proof host was not misused to bypass the known normal/tangent hold.

The four AXM roots remain the merge gate.

## Next Animation pass

Re-scan first. Strong next actions only if a real dependency arrives:

1. if Visual QA / Art Direction returns one specific visible motion defect on the exact-mirror successor, change one Animation-owned variable against this retained baseline;
2. if the explicit normal-field candidate advances through Materials / Visual-QA / Art Direction and a deformed-normal owner requests motion-envelope evidence, preserve this clip and add only the missing exact visual/deformation observation;
3. if another asset gains a cleaner animation-ready handoff than Animal/Object, take that bounded gap instead;
4. otherwise hold rather than manufacture another clip, smoothing pass or controller claim.
