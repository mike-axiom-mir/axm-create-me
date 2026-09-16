# 04 — Organic Form Specialist Status

Date: 2026-09-16
State: **PASS_BOUNDED_STRUCTURAL_SUCCESSOR_FOUND / BALANCED-002 DENSE NONREGRESSION FAIL CONFIRMED / VISUAL + SOURCE ADOPTION HELD / RIGGING + ANIMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/04_organic_form.md`, then re-scanned the design constellation and current specialist status before acting.

`axm-create-me` remains coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication gate

- **Character:** current connected-shoulder obstruction is owned by Geometry; neutral and posed self-intersection evidence points at ribcage/transition topology, so Organic did not open a competing shoulder-form lane.
- **Animal:** PR #8 remains the active Organic elbow-form lane. Rigging owns weighting/deformation, Geometry owns its separate ring/topology work, and Animation owns playback. This was the only grounded Organic continuation with an unresolved evidence question.
- **Nature:** current tree/sapling work already has authored organic source forms; its higher-value open questions are owned by Geometry, Materials, VFX, Technical Art and Environment.
- **Armor / Unit / Weapon / Building / Object / Weather / Map / Misc:** no stronger unowned organic-form defect outranked the Animal elbow dependency.
- **UC / Profession Fabric:** no extraction is justified from this one Animal form study.

The highest-leverage question was therefore not another shape guess. It was whether the existing balanced elbow candidate's earlier `-60 / 0 / +60°` result survived a materially denser pose schedule, and if not, whether the smallest bounded form neighborhood contained a better review successor.

## Existing lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#8 — `Organic Form: compare bounded elbow relief successors under deformation`**

Branch: `studio/organic-elbow-bend-plane-relief-001`

Exact tested head: **`82669bfaa81af21a157c4de253381cc8c8375980`**

No new PR or competing Organic lane was opened.

Historical candidates remain preserved:

- predecessor `front-left-connected-chain-elbow-relief-001`: `0.090 -> 0.085 m` bend-plane relief, elbow ring `11..20` only;
- balanced-002 `front-left-connected-chain-elbow-balanced-relief-002`: `0.0875 m` bend-plane radius plus exact +Y ring support `x1.03`, digest `ed20e6c7e7751146cd05c2069e36ce503821c889dbbb203205fdfd700168fef0`.

## Dense review found a real miss

A new Organic observer leaves the exact Rigging plan unchanged and samples the existing forms on an **observer-owned** schedule of **25 poses from `-60°` through `+60°` in exact `5°` steps** under both already-pinned weighting profiles:

1. `smoothstep-v0`;
2. `ease-out-power-0p75-v1` from exact Rigging donor head `04760112deb81a8d145226fe7ee02923107c9916`, weighting-profile digest `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`.

That is **50 pose/profile comparisons per form**.

Result for the unchanged balanced-002 form:

**`FAIL_BALANCED_ELBOW_DENSE_SWEEP_DIRECTIONAL_NONREGRESSION`**

There is exactly **one** directional non-regression miss across those 50 comparisons:

- weighting: `ease-out-power-0p75-v1`;
- pose: **`-30°`**;
- minimum-triangle-area delta vs unchanged baseline: **`-0.000004649`**.

The same sample remains structurally stable: zero collapsed triangles, zero sampled nonadjacent self-intersections, zero fixed-weight drift, and zero rigid-radius drift. Three other directional metrics improve at that pose:

- maximum-area reduction: **`+0.003040513`**;
- minimum-edge gain: **`+0.003431438`**;
- maximum-edge reduction: **`+0.003032963`**.

Therefore the prior sparse `-60 / 0 / +60°` PASS remains truthful for those exact samples, but it was not sufficient evidence for the wider sampled envelope. The miss is retained rather than tolerance-widened or hidden.

## Bounded form improvement

A declared local search then evaluated **35** elbow-ring-only variants:

- bend-plane radius: `0.0875, 0.08775, 0.088, 0.08825, 0.0885, 0.08875, 0.089 m`;
- +Y joint-axis support: `x1.025, x1.0275, x1.03, x1.0325, x1.035`.

Every variant preserves:

- exact source identity and Rigging-plan identity;
- source landmarks and regions;
- source-derived nominal radii;
- path points and indices;
- the exact connected `42 vertices / 80 triangles` topology;
- every vertex outside exact elbow ring `11..20`.

Eligibility requires, for all 25 poses under both weighting profiles:

- structural probe PASS;
- minimum area non-worse than baseline;
- maximum area non-worse than baseline;
- minimum edge non-worse than baseline;
- maximum edge non-worse than baseline;
- maximum neutral displacement <= `0.0028 m`;
- maximum positive bound expansion <= `0.003 m`.

**16 / 35** variants meet that bounded structural eligibility gate.

Deterministic structural-review selection:

- bend-plane radius: **`0.0885 m`**;
- +Y joint-axis support: **`x1.03`**;
- candidate digest: **`c68eb89eefed5ca98951ea74bb28e370ab5ce9f7c2cf88d6adcdc48583141be4`**;
- moved vertices: exact ring **`11..20`** only, 10 vertices;
- maximum neutral vertex displacement: **`0.002608891428 m`**;
- positive Y-bound expansion: **`0.002567174 m`**;
- worst nonzero area-direction margin across the 50 comparisons: **`+0.000111903`**;
- worst nonzero edge-direction margin: **`+0.000327146`**.

At the previously failing exact `ease-out-power-0p75-v1 / -30°` sample, the selected successor moves the minimum-area delta from `-0.000004649` to **`+0.000111903`** while retaining positive edge and maximum-area margins.

Scoped result:

**`PASS_BOUNDED_STRUCTURAL_SUCCESSOR_FOUND`**

Adoption state remains:

**`HOLD_VISUAL_AND_SOURCE_ADOPTION`**

This is a deterministic structural-review candidate, not source migration and not aesthetic acceptance.

## Exact evidence

Dedicated workflow:

**`35121724504 — Organic balanced elbow dense sweep evidence`**

Result: **COMPLETED / SUCCESS** at exact head `82669bfaa81af21a157c4de253381cc8c8375980`.

- Python 3.11: full unit suite PASS; dense sweep, bounded search and retained evidence PASS.
- Python 3.13: full unit suite PASS.

Retained artifact:

- ID: **`10458335703`**;
- name: `animal-organic-elbow-balanced-dense-sweep-003-evidence`;
- size: **`59,140 bytes`**;
- GitHub SHA-256: **`31abdc36381c9963a40b5d64021dab0add5794d098e08f7e6267b281b66ce016`**;
- independently downloaded and rehashed to the same SHA-256;
- retained exact head: `82669bfaa81af21a157c4de253381cc8c8375980`;
- retained exact Rigging donor head: `04760112deb81a8d145226fe7ee02923107c9916`.

The artifact retains the exact dense-sweep receipt, all 50 comparisons for balanced-002, the complete 35-variant bounded search receipt, exact-head/donor receipts, exact pose schedule, a dense-margin SVG and the complete search-grid SVG.

Animal PR #8 handoff comment: **`5700906400`**.

## Failed drafts retained and repaired

Two failures remain part of the evidence trail rather than being silently rewritten:

1. Initial dense observer run `35121041683` attempted to change the copied Rigging plan's pose schedule. The exact Rigging contract correctly rejected it. The repair moved the five-degree observation schedule entirely outside the Rigging plan; the source Rigging plan now remains digest-identical throughout the dense observer.
2. Initial bounded-search run `35121556068` compared a search candidate's whole-object digest with balanced-002. That failed because evidence-only search metadata changes the whole-object digest even when geometry is identical. The repaired gate compares `positions`, `indices`, `path_points` and `radii` directly for the control geometry while separately checking the exact balanced-002 digest.

Neither failure was bypassed by weakening source or Rigging identity checks.

## Handoffs

### Visual Observer / 3D Art Director

The selected `0.0885 m / +Y x1.03` candidate is structurally stronger than balanced-002 across the denser sampled envelope and is slightly closer to the baseline neutral radius than 002. Review it directly against baseline, predecessor and balanced-002 before source adoption. Organic does **not** convert the structural result into a silhouette, anatomy or perceptual PASS.

### Rigging / Deformation

The newer weighting remains Rigging-owned. Organic consumed it only as a pinned sensitivity profile. If this successor is ever source-adopted, Rigging must explicitly bind the new exact source/candidate identity and rerun its own deformation evidence. Nothing is inherited automatically from this search.

### Animation / Motion

Existing Animation playback remains evidence for its previously bound form. The selected Organic successor is not an Animation or runtime successor until explicitly rebound and retested by that lane.

### Geometry

Keep Geometry's separate topology/ring-phase work independent. No silent composition with this Organic form occurred.

### Character / Nature / Armor / Unit

Do not reopen their form lanes from this result. Current higher-value dependencies there remain owned by their active specialists unless a new source-form defect is evidenced.

## Truth boundary / non-claims

This activation establishes only that the previous balanced-002 Animal elbow review form has one tiny reproducible intermediate-pose minimum-area regression under the exact pinned ease-out weighting, and that one exact local elbow-ring successor (`0.0885 m`, +Y `x1.03`) removes that sampled directional regression while staying inside the declared local form bounds across 25 sampled poses under both pinned weighting profiles.

It does **not** establish:

- anatomy, biology or veterinary correctness;
- source or canonical form adoption;
- final silhouette, proportion or aesthetic acceptance;
- production topology, weighting or skinning acceptance;
- continuous deformation or continuous self-intersection freedom between samples;
- animation acceptance;
- runtime, controller, target-device, physics, collision or gameplay readiness;
- Armor / Unit fit;
- UC / Profession Fabric promotion;
- CANON, production readiness, game readiness or Organic Form mastery.

## Four-root gate

- **Truth:** the denser sweep overturned the broader interpretation of the earlier sparse PASS, and the exact `-30°` miss remains visible. Failed drafts and the positive Y-bound expansion remain explicit.
- **Agency / non-domination:** Organic owns only the local review form and observer. Rigging keeps deformation authority; Geometry keeps topology authority; Visual QA / Art Direction keep perceptual acceptance; Animation keeps playback authority.
- **Continuity:** baseline, predecessor, balanced-002 and the selected structural successor retain distinct identities and evidence. No source, Rigging, Geometry or Animation history is silently rewritten.
- **Wisdom before speed:** the lane first increased observation density, then searched a small declared neighborhood only after a real defect appeared, rather than adding another speculative form mutation.

## Next Organic Form pass

1. Re-scan the full constellation before acting; do not automatically continue Animal.
2. If Art Direction / Visual QA reviews the selected structural successor, act only on a precise returned form defect or explicit source-adoption decision.
3. If no perceptual review exists yet, do not keep micro-optimizing this elbow merely because a search space exists; prefer a genuinely unowned Character / Animal / Nature form gap if evidence supports one.
4. If source adoption occurs, give the successor a source-owned exact identity and require explicit downstream rebinds rather than inheriting this review evidence.
5. Keep biology, Rigging, Animation, runtime readiness, CANON and mastery explicitly held.