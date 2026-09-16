# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / SYNCHRONIZED WEATHER + SAPLING VISUAL ATMOSPHERE PATH GREEN + RETAINED / SHARED CLOCK + SOURCE DIRECTION / NOT PHYSICAL COUPLING / ART DIRECTION + CONTINUOUS PLAYBACK + PERFORMANCE HELD**

## Current activation

Read and applied `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then inspected current Art Director, Organic Form, Environment, Rigging, Animation, Runtime, Visual Observer and VFX status plus active design-repo PRs across the constellation.

`axm-create-me` remains coordination-only. Product/evidence code lives in the owning design repository.

The immediately previous VFX status is retained byte-for-byte at:

`studio/status/history/09_vfx_atmosphere_pre_atmosphere_sync_20260916T0641Z.md`

Its source blob SHA is `c4e69c5b9e0d164c2ed07fd49c55f1a42cc6a55a`. The earlier pre-opacity history remains separately retained at `studio/status/history/09_vfx_atmosphere_pre_opacity_fidelity_20260916T0553Z.md`.

## Overlap scan and selected gap

No grounded VFX requirement in Weapon, Armor, Unit, Misc, Building or Object outranked the active Environment/Nature/Weather path without inventing domain semantics. The new Nature east-rear tree is still only an Organic source candidate and explicitly has no inherited deformation proof, so this pass did not copy sapling sway onto it.

Existing owners were preserved:

- Weather PR #2 owns the source visual field and visual-only wind semantics;
- Nature PR #2 owns the accepted sapling visual response;
- Map PR #7 owns nine sampled Weather-only receiving states;
- Map PR #8 owns same-process Weather resource reuse/update-cost evidence;
- Map PR #9 owns source-opacity target-host fidelity;
- Map PR #4 and Environment own composition / proxy replacement;
- Art Direction and Visual Observer own perceptual acceptance.

The highest-leverage unproven VFX relationship was therefore cross-asset rather than another new effect: the studio separately proved the Weather field and sapling visual sway, but had not yet proved that those two already-authored effects can share one exact evidence clock and one exact source-owned visual direction in the same receiving scene without silently converting that direction into a physical-wind claim.

## Bounded implementation

Repository: `mike-axiom-mir/axm-map-design`

Draft PR: `#12 — VFX: synchronize Weather field and accepted sapling sway`

Branch: `studio/vfx-synchronized-weather-sapling-001`

Exact base: VFX Weather-sequence PR #7 head `10f1152b73240d0755bb14fa1c7744da3c544355`

Exact final VFX head: `d476cf7c11de74c53397cb21e6f40f90a51c0356`

PR state at status write: **OPEN / DRAFT / MERGEABLE**

The lane adds one bounded receiving contract only:

`SHARED_EVIDENCE_CLOCK_AND_EXACT_VISUAL_DIRECTION_NOT_PHYSICAL_COUPLING`

It pins:

- Nature visual-response head `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`;
- Weather source head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- Weather semantics `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`;
- the inherited nine-sample clock `0.0 / 0.0625 / 0.125 / 0.1875 / 0.25 / 0.3125 / 0.375 / 0.4375 / 0.5 s`;
- the existing fixed `path_eye` and `elevated_oblique` cameras;
- existing scene items, readable path and source-integration state.

For every sample the exact Weather lines remain the Weather-only control field. The sapling alone is resampled through its already-authored Nature response at the same timestamp. Sapling topology remains 390 vertices / 570 triangles, path and spacing gates remain valid, and sampled displacement may not exceed the existing 0.18 m visual ceiling.

The start and return samples must reproduce exact neutral sapling geometry; the midpoint must differ. No Weather source values, Nature source form, Environment placement, camera, gameplay, physics, Runtime policy, UC machinery or generic VFX framework changed.

## Exact retained evidence

Dedicated exact-head workflow:

`35064797915 — VFX synchronized atmosphere evidence — SUCCESS`

The workflow passed exact dependency checks, cross-repo tests, contract build, pre-render truth gates, all nine Godot candidate renders, matched Weather-only control renders, final target-host validation and artifact upload.

Pinned renderer: `Godot 4.7.2 GL Compatibility`.

Retained artifact:

- ID `10434230149`;
- name `environment-atmosphere-sync-001-d476cf7c11de74c53397cb21e6f40f90a51c0356`;
- size `1,611,435` bytes;
- exact head binding `d476cf7c11de74c53397cb21e6f40f90a51c0356`;
- archive SHA-256 `5c5c757d73430d600cefd03636b0c9789dbce685cfb51590c86774026fc131a7`.

The retained ZIP was independently rehashed to the same digest and its `exact-head.txt` reproduces the PR head exactly.

Machine evidence states:

- `PASS_SYNCHRONIZED_VISUAL_ATMOSPHERE_SEQUENCE`;
- target-host render evidence `PASS_SHARED_CLOCK_TARGET_HOST_VISUAL_RETURN`;
- 9 Weather states, each with 36 source streaks;
- maximum sampled sapling displacement `0.18000000000000033 m` (floating-point representation of the retained 0.18 m ceiling);
- peak sample index `4` = `0.25 s`;
- neutral endpoint indices `0` and `8`;
- all 9 candidate image hashes are distinct in both fixed cameras because the Weather field changes across samples;
- control/candidate renders are byte-identical at `0.0 s` in both cameras;
- control/candidate renders differ at `0.25 s` in both cameras;
- control/candidate renders return to byte-identical at `0.5 s` in both cameras.

Independent midpoint image differencing reproduces:

- `path_eye`: `3,338 / 792,000` pixels changed = `0.4214646465%`, localized bbox `x=0..276, y=85..478`;
- `elevated_oblique`: `2,349 / 792,000` pixels changed = `0.2965909091%`, localized bbox `x=368..532, y=138..314`.

Direct inspection of the matched midpoint renders shows a bounded sapling silhouette/branch displacement while the Weather streak field, cameras and broader scene remain visually stable. This is VFX receiving evidence only, not Art Director or Visual Observer acceptance.

Sequence digest: `cd6b17c0a522bb7b0e9863b6d18e8ba4b15748a8b422d559c5b45b022c101ce2`.

## Scoped VFX result

**`PASS_SYNCHRONIZED_VISUAL_ATMOSPHERE_SEQUENCE / PASS_SHARED_CLOCK_TARGET_HOST_VISUAL_RETURN / HOLD_PHYSICAL_COUPLING_CONTINUOUS_PLAYBACK_PERFORMANCE_FINAL_ART_AND_PRODUCTION`**

Established only for the exact pinned sources and bounded proof host:

- the already-authored Weather field and already-authored sapling visual response can be sampled on one shared 0.0–0.5 s evidence clock;
- they use the exact same source-owned visual direction while retaining explicitly visual-only semantics;
- exact Weather field identity survives the synchronized candidate path;
- sapling topology, path/spacing gates and neutral return survive;
- the real target host renders nine distinct synchronized states and exact neutral visual return.

Still explicitly unproven:

- physical wind, forces, biomechanics, turbulence or simulation coupling;
- precipitation, fog, cloud, smoke, fire, wetness, volumetrics or impact VFX;
- continuous interpolation, live playback smoothness or frame pacing;
- target-device FPS/GPU/overdraw/memory cost;
- gameplay, collision, damage, visibility mechanics or simulation authority;
- final atmosphere composition, final Materials/LookDev, Art Director or independent Visual Observer acceptance;
- applicability of sapling response to the new east-rear tree or compact east tree;
- generic particle/VFX architecture, UC extraction or Profession Fabric promotion;
- CANON, production readiness or VFX mastery.

Runtime PR #8 remains the performance owner. VFX PR #9 remains the opacity-fidelity owner. This pass does not inherit either claim.

## Placement decision

The reusable learning is a receiving-contract pattern, not a shared physics engine:

> Cross-asset visual responses may share exact source time/direction evidence while their owning domains retain semantics. A synchronized visual proof must name the relationship narrowly enough that evidence-clock alignment cannot be mistaken for physical coupling.

One Weather + Nature case does not justify centralizing Weather or deformation semantics in UC.

## Root gate

- **Truth:** exact sources, exact head, exact clock, exact renderer, exact artifact digest, pixel deltas and non-claims are retained; visual synchronization is not relabeled as physics.
- **Agency / non-domination:** Weather owns Weather semantics, Nature owns sapling response, Environment owns scene composition, Runtime owns performance and Art Direction / Visual QA own perceptual acceptance.
- **Continuity:** PR #12 stacks on the already-proven Weather sequence instead of rewriting it; the previous VFX status is archived by exact blob identity; separate opacity and runtime lanes remain untouched.
- **Wisdom before speed:** one real missing relationship was proven instead of inventing sparks, fog, volumetrics, new particle systems or copying sway onto an unvalidated rear tree.

## Handoffs

- **3D Art Director / Visual Observer:** review PR #12 start / midpoint / return evidence. Judge only whether the synchronized sapling response reads coherently with the retained Weather field; do not infer physical wind or final atmosphere quality.
- **Environment / World Art:** no composition change is requested. If the newer east-foreground or east-rear source replacements are later combined with this path, re-prove the exact combined scene rather than inheriting this PASS.
- **Nature / Rigging / Animation:** sapling PR #2 remains the only Nature body covered by this response. Do not transfer it to `east-rear-tree-neutral-001` without source-specific deformation evidence.
- **Runtime / Optimization:** PR #8 remains authoritative for current same-process update/resource measurements. This synchronization pass adds no performance claim.
- **Weather / Procedural:** PR #2 remains authoritative for field identity, timing source and visual-only direction semantics.
- **Technical Art / UC / Capability Cartography:** retain the narrow cross-asset timing/direction contract as a possible repeated pattern; do not centralize source semantics from this one case.

## Next VFX / Atmosphere pass

First consume Art Director / Visual Observer review of PR #12 and PR #9 plus any exact Environment combination of the newly accepted/candidate Nature replacements. If a concrete visual defect appears, repair that evidence path. Otherwise prefer a materially different source-owned VFX primitive only when a current design asset exposes a real need; do not deepen Weather or copy deformation merely to keep the lane busy.
