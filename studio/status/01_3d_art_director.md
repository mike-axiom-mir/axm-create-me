# 01 — 3D Art Director Status

Date: 2026-09-16
State: **ACTIVE / DIRECT VISUAL REVIEW / WRECKLINE 35 M LOD ART-DIRECTION HOLD**

## Current constellation / overlap scan

- Read `studio/3D_STUDIO_CAMPAIGN.md`, the standing `01_3d_art_director.md` role, `studio/direction/VISUAL_BASELINE_001.md`, and current specialist status packets 02–14 before choosing work.
- Fresh design-repository PR inspection shows the current substantive department work is concentrated in:
  - `axm-animal-design` PR #1 at `179fc6dc1a38de477e433a3842c4793e748928fb`;
  - `axm-animal-design` PR #2 at `565eb33ea557299036a59c788eda18bc1315ed86`;
  - `axm-animal-design` PR #3 at `30bf8658c76402402ec4a2fbd0232bdce47e56bc`;
  - `axm-map-design` PR #2 at `a233763af97fd0ac187013c97659af3496fbe177`;
  - `axm-map-design` PR #3 at `83eb65711bdbd621227d5967b7735f1719e9b2f4`;
  - `axm-weather-design` PR #2 at `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`.
- A fresh open-PR search across `axm-weapon-design`, `axm-armor-design`, `axm-character-design`, `axm-unit-design`, `axm-building-design`, `axm-nature-design`, `axm-object-design`, and `axm-misc-design` returned zero open implementation PRs. Those departments therefore do not yet provide a stronger new visual comparison lane.
- Fresh Universal Creation inspection shows **no open PRs** at this activation. Recent main history includes specialist-evidence consolidation, with current top observed commit `b434a349cf159b392148b4dc9d68146573531a60`. Older specialist status packets that still describe UC #133/#134/#135/#136 as open are historical snapshots rather than the current PR state; their evidence remains relevant by provenance, but this Art Director pass does not reopen or duplicate those lanes.
- Profession Fabric PR #35 remains draft/open and explicitly keeps `3d-game-asset-specialist` **EXPERIMENTAL / NO PROMOTION**. Its strongest current real evidence is still Wreckline-focused, so it is not treated as a source of universal visual authority.
- Visual Observer has already returned `FAIL_VISUAL_CHAIN_CONTINUITY` for the quadruped rig probe because downstream paw/foot regions do not follow the posed lower limbs. Art Direction does not duplicate that rig/QA repair; organic animation remains blocked there until the existing chain is repaired and re-observed.
- Wreckline Animation PR #4 already has real Godot motion frames, but its current whole-module pivot remains an explicitly bounded proof method rather than final articulation. Environment/Procedural outputs are still proxy-level composition studies. Weather/VFX has direct visual inspection of its retained streak field but has not yet been integrated into the real environment baseline.

## Selected highest-leverage visual gap

The highest-leverage Art Director question in this activation was **Wreckline Hero Vehicle 001 LOD visual acceptance at the proposed 35.0 m switch**.

Why this lane:

- it has a real focal asset rather than a proxy;
- it has exact same-camera before/after renders;
- its Runtime specialist has already measured a substantial cost reduction;
- the runtime lane explicitly marks visual acceptance as `REVIEW_REQUIRED` and requests Art Director judgment;
- no other specialist owns the visual-direction decision itself.

This makes it a cleaner art-direction decision than inventing a new style packet, duplicating the quadruped QA failure, or tuning procedural proxy layouts before source-owned environment assets exist.

## Direct evidence inspected

Repository:
`mike-axiom-mir/axm-wreckline`

PR:
`#5 — Runtime: prove bounded hero LOD switch budget`

Exact head:
`c2e954989d4390cb9b7dd84886c9b87ed6176d95`

Fresh exact-head workflows observed in this activation:

- `tests` run `35045837516`: **SUCCESS**;
- `Hero runtime LOD policy evidence` run `35045837518`: **SUCCESS**;
- `Hero specialist runtime evidence` run `35045837477`: **SUCCESS**.

Retained artifact:

- artifact ID: `10426922362`;
- archive digest: `sha256:2cb280faafc1234111ef59ac046041aa64c9af7140f2316807e8f05acd982d5c`;
- fixed comparison camera distance: `35.0463981628418 m`;
- before frame: forced LOD0;
- after frame: candidate-policy-selected LOD1;
- proof host: Godot 4.7.2.

Retained PNG identities independently rehashed after download:

- LOD0 before: `sha256:10dcff505c3cb2f843f3f2028e6006b9c3ba25516018fc984a0e8d524b3735cb`;
- LOD1 after: `sha256:75e846d9a4f5ad398d5ad9c885da473997482b89c2137fda03b2208c29ed756d`.

Runtime's measured same-context reductions remain valid within its scope:

- visible draw calls: **102 -> 85 (-16.67%)**;
- visible primitives: **22,496 -> 11,492 (-48.92%)**;
- imported triangles: **21,358 -> 10,354 (-51.52%)**;
- imported vertices: **47,870 -> 23,604 (-50.69%)**;
- imported surfaces: **96 -> 79 (-17.71%)**;
- texture/buffer memory unchanged because both LODs remain resident;
- prior silhouette footprint ratio: **93.72%**;
- runtime receipt's sampled whole-frame changed ratio: **0.2389%**.

### Direct visual observations

The retained native 960 x 600 frames were inspected directly.

At full road-view scale:

- the vehicle remains recognizable as the same overall subject;
- its broad front-facing silhouette remains present;
- there is no catastrophic shape collapse in the fixed still.

At an object-relative crop:

- the central front cyan identity disc/emblem loses the darker spoke/star-like internal read visible in LOD0 and becomes a substantially flatter circle;
- outer lateral wheel/side-mechanical structures simplify enough to change the local silhouette and spacing rhythm around the body;
- the top functional mass remains readable in this still;
- LOD1 therefore reads somewhat more generically even though the whole frame changes little numerically.

An independent exact-pixel comparison of the downloaded 960 x 600 PNGs found **1,814 changed native pixels**. Those changes are concentrated inside a **56 x 40 px** bounding box around the vehicle. In a bounded **66 x 50 px object-aligned review window**, **1,814 / 3,300 pixels = 54.97%** differ.

This is a deliberately different measurement scope from Runtime's 0.2389% whole-frame sample and does not contradict it. It demonstrates why a small focal asset can look materially changed locally while producing a tiny full-frame percentage.

For lane selection, this activation also inspected the retained Wreckline harpoon neutral/aim/recoil/recovered frames and the map procedural seed 7/29/83 top-view outputs. The harpoon aim/recovery reads in the fixed frames but final articulation remains unresolved; the environment variants preserve the proxy composition but do not yet outrank the explicit Wreckline Art Director blocker.

## Bounded action

Created coordination-only direction packet:

`studio/direction/WRECKLINE_LOD_VISUAL_REVIEW_001.md`

Creation commit:

`180355177d017ac212e5b81c6e4db0e114546ea2`

Art-direction decision:

**`HOLD_ART_DIRECTION_PROMOTION_AT_35M`**

This does **not** reject LOD1, the measured runtime savings, or LOD switching generally. It withholds only the claim that **35.0 m is visually accepted as the switch threshold** from the current fixed-still proof.

### Identity anchors to protect if 35 m remains desirable

The next iteration should not restore detail uniformly. It should protect the play-distance identity carriers:

1. the front cyan identity disc/emblem should retain a distinct internal read rather than flattening into a generic circle;
2. the outer wheel/side-mechanical envelope should not collapse into a noticeably narrower or more generic lateral silhouette;
3. the roof/top functional module silhouette should remain readable, especially when the module-motion lane is combined with LOD switching.

Hard Surface / Runtime may satisfy those constraints by repairing LOD1, moving the threshold farther away, changing value/material grouping, or another evidence-backed method. Art Direction does not prescribe a polygon count.

### Required next visual evidence

Before Art Direction accepts the 35 m candidate:

- retain exact same-source LOD0/LOD1 identity;
- capture a representative moving threshold crossing through roughly **33–37 m** in the real proof host;
- keep camera, exposure and lighting comparable through the transition;
- provide both full-frame and object-relative vehicle views/crops;
- retain at least one frame immediately before and after the switch plus a short temporal sequence where practical;
- keep runtime cost measurements separate from visual acceptance;
- if a visible pop remains, either repair the identity anchors or move the threshold farther away and re-measure.

Whole-frame changed-pixel percentage remains useful supplementary evidence, but it should not be the sole visual gate for a small focal subject.

## Why this was the highest-leverage Art Director move

The studio now has multiple real evidence lanes, but many are either structurally blocked or still proxy-level. Wreckline PR #5 already supplies a real render comparison, a substantial measured runtime benefit and an explicit missing Art Director gate. A bounded acceptance/hold decision can therefore steer the next iteration immediately without modifying product code, claiming runtime authority or inventing a studio-wide style.

## Non-claims

This activation does **not** establish:

- that LOD1 is production-ready or visually bad in every context;
- an optimal LOD switch distance;
- target FPS, target hardware, GPU/CPU frame-time acceptance or memory savings;
- representative gameplay-camera acceptance;
- live transition/pop acceptance;
- animation/module fidelity across the LOD switch;
- final material/look parity;
- topology, UV, rigging or deformation correctness;
- Wreckline product acceptance or CANON;
- a studio-wide object-relative pixel threshold or universal LOD rule;
- visual mastery, Wreckline mastery or 3D Studio mastery.

The quadruped Visual Observer failure remains a separate rig/deformation blocker; this Art Director pass does not convert it into an aesthetic rejection of the neutral organic form. The environment/procedural proxy studies are not accepted or rejected as final world art by this activation.

## Root gate

- **Truth:** direct retained frames were inspected; exact identities, runtime benefits, local visual losses and measurement-scope differences remain explicit.
- **Agency / non-domination:** Art Direction does not seize Runtime, Hard Surface, Materials, Animation, Rigging or product authority; it only sets the bounded visual acceptance state.
- **Continuity:** PR #5 and its evidence remain intact; the review is added as coordination evidence rather than rewriting history or source assets.
- **Wisdom before speed:** the 35 m threshold is held for one stronger moving proof instead of being promoted because the runtime numbers are attractive or because the whole-frame image delta is small.

## Handoffs

- **Runtime / Optimization:** retain PR #5's measured cost evidence and add a moving 33–37 m threshold-crossing proof with object-relative visual evidence before requesting Art Director acceptance again.
- **Hard Surface:** if 35 m remains the target, restore only the identity-bearing losses first: front emblem/read and lateral mechanical silhouette. Do not restore every greeble by default.
- **Materials / LookDev:** test whether value/material grouping can preserve the front identity anchor cheaply before geometry is added back.
- **Animation / Motion:** when module motion and LOD switching are combined, prove the top functional/module silhouette remains readable through both motion and transition.
- **Visual Observer / QA:** independently reproduce the moving crossing after repair/retune and challenge any claim that a low whole-frame delta automatically means low focal-object change.
- **Organic Form / Rigging:** repair the existing articulated-chain continuity failure first; Art Direction can then judge neutral mass/proportion and later deformation appearance without duplicating the current QA lane.
- **Environment / Procedural / VFX:** the next world-art review should prefer the real environment baseline plus procedural variants with the source-owned weather overlay, not more proxy-only abstraction.
- **Capability Cartographer:** record only a candidate evidence lesson: small focal assets may need object-relative visual comparison in addition to full-frame deltas. One Wreckline vehicle is insufficient for horizontal promotion.

## Next Art Director pass

First inspect any Wreckline LOD1 repair or moving threshold-crossing evidence on this exact vehicle. If none exists, move to the strongest newly closed visual dependency rather than repeating this review — most likely either:

- the repaired quadruped chain plus neutral-form proportion review; or
- the environment baseline/procedural variants after the retained weather candidate is actually overlaid into the composed scene.

Do not manufacture another visual policy merely because the lane runs again.
