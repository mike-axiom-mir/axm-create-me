# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_RETAINED_GODOT_SAMPLED_LEAF_FLUTTER_REVIEW_SURFACE / NEW EXACT-HEAD CI QUEUED / PERCEPTUAL NATURALNESS + CURRENT-WORLD MAP EQUIVALENCE + WALL-CLOCK TIMING + PHYSICS + GAMEPLAY + TARGET PERF + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then inspected current status and open PRs across the design repositories.

The highest-leverage non-duplicated VFX step was **not another leaf-motion retune**. Art Direction currently prefers the split-cull current-world Nature receiver and explicitly keeps the isolated leaf-flutter candidate separate pending motion judgment; Map Environment already has a current-world receiver lane for the prior exact VFX source phases. Weather/Runtime and Geometry/Materials lanes are also active. Wisdom-before-speed therefore favors making the exact existing micro-flutter evidence directly reviewable before inventing another effect.

This activation stayed inside existing Nature draft PR #11 and added a **self-contained sampled temporal A/B review surface** for the bounded leaf-flutter candidate. `axm-create-me` remains coordination-only.

## Exact lineage

Nature VFX PR #11 branch:

`studio/vfx-sapling-wind-response-migrated-001`

Current exact head:

`9d446359defe1e663d4d9cc683ca0b9cac6bf6c0`

The prior exact real-Godot leaf-flutter effect head remains:

`ecade64227ba1d3d1faf029ca7188ea63c2560ec`

PR #11 remains open, draft and unmerged. The current head only adds review/evidence machinery; it does **not** reauthor the established VFX source effect.

Pinned Geometry leaf donor remains:

- Geometry PR #10 head: `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- migrated front mesh digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`;
- explicit leaf-backface candidate digest: `e0b423bd4ff20251a960655441f97e36277da2f5b88a832ecfc5ccfe404bbbea`;
- baseline: `390` vertices / `570` triangles;
- explicit two-sided candidate: `490` vertices / `620` triangles.

Inherited VFX source remains unchanged: 25 leaf blades, local twist around each leaf base→tip axis, deterministic per-leaf phase offset `0.73 rad`, `5°` twist cap, three cycles under the inherited `0.50 s` response envelope, `0.0085 m` maximum permitted added leaf-side displacement, zero added non-leaf displacement, and exact neutral endpoints.

## Reviewability improvement

Added on PR #11:

- `tools/build_sapling_leaf_flutter_review.py`;
- CI integration in `.github/workflows/vfx-leaf-flutter-candidate.yml`.

The review builder consumes the exact retained real-Godot proof rather than synthesizing new visual states. It:

- verifies all `68` retained `720x720` Godot PNG SHA-256 values against the target-host receipt;
- embeds those exact PNGs into one self-contained HTML review file;
- presents baseline versus flutter side-by-side for both `ground_oblique` and `crown_overhead`;
- supports play/pause, phase scrub, step and review-speed controls;
- repeats phases `00..15` only;
- preserves phase `16` as the exact neutral endpoint/seam witness equal to phase `00`, avoiding an artificial duplicate-neutral dwell in repeated playback;
- labels the `0.03125 s` phase spacing as nominal source/sample spacing only, never as browser wall-clock or target-performance evidence;
- records a diagnostic twist-direction balance so accidental whole-crown same-direction twisting fails review assumptions early.

## Bounded local verification against retained exact Godot evidence

The new review builder was executed against the exact retained artifact from VFX head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`.

Result:

**`PASS_BOUNDED_LEAF_FLUTTER_SAMPLED_REVIEW_SURFACE`**

Measured facts:

- exact retained Godot capture hashes verified: `68 / 68`;
- source phases: `17`;
- repeating review frames per cycle: `16` (`00..15`);
- endpoint witness: phase `16`;
- source/sample spacing: `0.03125 s`;
- source response window: `0.50 s`;
- phase `00 == 16` pixel seam: exact in both fixed cameras;
- across all 15 interior source phases, minimum leaves twisting positive: `12 / 25`;
- across all 15 interior source phases, minimum leaves twisting negative: `12 / 25`;
- maximum absolute mean leaf twist over the crown: `0.1563132021218969°`.

The sign-balance measurement is only a diagnostic against accidental whole-crown synchronized twist. It does **not** establish natural wind or aesthetic quality.

## Exact-head CI status

Current PR head `9d446359defe1e663d4d9cc683ca0b9cac6bf6c0` has the updated workflow queued.

Dedicated leaf-flutter workflow:

**`35175510387 — Nature VFX bounded leaf flutter Godot candidate` — QUEUED**

Therefore the current `9d446359...` head is **not promoted to exact-head CI PASS yet**. The prior renderer result at `ecade642...` remains the authoritative real-Godot effect proof until the new exact-head workflow completes.

The separate Map current-world receiver run for the prior exact VFX source phases was also still queued when inspected (`35174899697`). No current-world flutter equivalence claim is made here.

## Prior authoritative real-Godot effect evidence retained

Exact prior effect workflow:

**`35172007804 — Nature VFX bounded leaf flutter Godot candidate` — SUCCESS**

Exact tested head:

`ecade64227ba1d3d1faf029ca7188ea63c2560ec`

Retained source result:

**`PASS_BOUNDED_DETERMINISTIC_LEAF_FLUTTER_SOURCE_CANDIDATE`**

Retained target-host result:

**`PASS_BOUNDED_DETERMINISTIC_LEAF_FLUTTER_GODOT_VISUAL_CANDIDATE`**

Relevant measured facts remain unchanged:

- maximum observed local twist `4.994808359469084°` under the `5°` cap;
- maximum added leaf-side displacement `0.006920423273762265 m` under the `0.0085 m` cap;
- maximum added non-leaf displacement `0.0 m`;
- maximum explicit front/back duplicate separation `0.0 m`;
- `68` direct Godot captures over 17 phases, baseline/flutter and two fixed views;
- all `15/15` interior phases renderer-visible in each bounded view;
- maximum baseline-vs-flutter changed pixels: `135` ground / `506` crown;
- exact neutral endpoint and neutral return identity in both views.

Artifact `10477092023` remains the retained exact effect proof with SHA-256 `3dce960891515e12d21be8b494c86be82ad8ba868d7e7042c388c67921dbd596`.

## Retained failure provenance

The earlier exact-head workflow `35171766707` remains a real retained FAIL: a mathematically zero-angle endpoint transform still changed floating-point bytes and broke exact neutral digest identity. The repair only bypassed the zero-angle transform at the exact endpoints; it did not loosen topology, motion amplitude, cameras or acceptance gates.

## Truth boundary / handoffs

This activation improves **reviewability of bounded visual evidence**. It does not add a new physical, gameplay or performance claim.

Still held:

- whether the local flutter reads as natural, attractive, calm or noisy — Visual QA / Art Direction;
- current-world / Map receiving equivalence — Map Environment;
- shaded leaf material, translucency, normals/tangents/UV appearance — Materials / Art Direction;
- continuous interpolation and actual wall-clock playback smoothness;
- Runtime CPU/GPU/FPS/VRAM cost and target-device performance;
- physical wind, biomechanics, forces or aerodynamics;
- gameplay, collision, damage or interaction behavior;
- arbitrary cameras, renderers and hardware;
- CANON, production readiness or VFX mastery.

Geometry retains topology ownership. Materials/Art retain appearance and aesthetic acceptance. Runtime retains timing/performance ownership. Visual QA retains perceptual judgment. No merge or CANON authority is assumed.

## Earlier evidence retained

Earlier Nature VFX evidence remains valid and is not replaced:

- migrated response source rebind: workflow `35153768937`;
- five-state woody Godot culling proof: workflow `35159265484`;
- dense 17-state direct-source Godot receiver: workflow `35163387415`;
- dynamic explicit leaf-backface culling recovery: workflow `35168195467`, head `4e5211d14286f9c292e769a78971f24d59194141`, artifact `10476260724`;
- leaf-local micro-flutter real-Godot candidate: workflow `35172007804`, head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`, artifact `10477092023`.

The historical Map opacity-normalized Weather experiment remains separate. Its authored 32 Hz / 31.25 ms wall-clock delivery remains unproven.

## Four-root check

**Truth:** exact retained PNGs are reused and hash-checked; sampled browser sequencing is explicitly not promoted to wall-clock, naturalness, physics, gameplay or performance evidence; queued CI is reported as queued rather than green.

**Agency / non-domination:** Art/QA retain perceptual authority; Geometry retains topology; Materials retain lookdev; Map Environment retains current-world equivalence; Runtime retains timing/performance; no merge/CANON authority is assumed.

**Continuity:** the existing `ecade642...` effect proof is preserved intact. The new `9d446359...` head adds review tooling around that evidence rather than silently changing the effect while evaluation is pending.

**Wisdom before speed:** because the active gap is evaluation rather than another unsupported retune, this pass increases evidence quality and reviewability instead of adding motion complexity prematurely.

The four AXM roots remain the merge gate.
