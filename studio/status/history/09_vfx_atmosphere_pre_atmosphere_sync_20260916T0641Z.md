# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / SOURCE WEATHER OPACITY TARGET-HOST FIDELITY GREEN + RETAINED / ONE-SURFACE REPRESENTATION PRESERVED / VISUAL-ONLY / ART DIRECTION + CONTINUOUS PLAYBACK + WIDTH + PHYSICAL WEATHER HELD**

## Current activation

Read and applied:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/09_vfx_atmosphere.md`;
- newest Art Director, Environment, Visual Observer, Runtime, VFX and design-repo status;
- current open PRs and exact receiving/source evidence across Animal, Character, Nature, Weather, Map and Object, with Weapon / Armor / Unit / Building / Misc checked for competing grounded VFX lanes.

`axm-create-me` remains coordination-only. Product/evidence code lives in the owning design repository.

The previous full VFX status is retained byte-for-byte at:

`studio/status/history/09_vfx_atmosphere_pre_opacity_fidelity_20260916T0553Z.md`

Historical status blob SHA: `97b393b61eae84e8be05aa3b521afcb37a711f5b`.

## Overlap scan and selected gap

No stronger unoccupied VFX lane appeared in Weapon, Armor, Unit, Building or Misc. Character remains upstream organic-form work. Animal is active in Geometry / Rigging / Animation and has no grounded VFX requirement that outranks the live Weather path. Object now has manufactured geometry, articulation and material evidence but no source-owned impact/trail/reactive-effect need yet.

Nature PR #2 already owns accepted local sapling response. Map PR #4 already owns receiving-scene sapling motion and the newer compact east-tree Environment replacement. Map PR #7 already owns the nine-sample Weather receiving sequence. Runtime PR #8 separately owns same-process Weather resource reuse / update-cost evidence. Those lanes were not duplicated.

The highest-leverage distinct VFX gap was inside the real Environment proof host itself:

- exact Weather PR #2 already authors one opacity value per streak;
- the Environment receiving payload already preserved that value in all 36 `weather_lines` rows;
- the Godot observation host nevertheless rendered all streaks with one uniform material alpha `0.62`.

So prior target-host Weather renders proved line geometry/motion/readability but did **not** prove source opacity fidelity.

## Bounded implementation

Repository:

`mike-axiom-mir/axm-map-design`

Draft PR:

`#9 — VFX: preserve source Weather streak opacity in target-host renders`

Branch:

`studio/vfx-weather-opacity-fidelity-001`

Exact Environment base when opened:

`cdac7d1316631b3b130d5e558de2aee462a21d40`

Exact final VFX head:

`1d24506e1d5f37cad32c878a15ac6908bf096329`

PR state at status write:

**OPEN / DRAFT / MERGEABLE**

The repair is target-host-only:

- historical/default mode stays `UNIFORM_PROOF_ALPHA_0P62` so inherited Environment evidence is not silently rewritten;
- candidate mode is `SOURCE_STREAK_OPACITY_VERTEX_ALPHA`;
- the candidate keeps one `ImmediateMesh` line surface and the existing material family;
- `vertex_color_use_as_albedo` is enabled only for the candidate;
- each exact source opacity is written to both vertices of that exact streak through `ImmediateMesh.surface_set_color()`;
- line identities, tails/heads, presentation height, cameras and unrelated scene state remain unchanged;
- no per-streak material or extra surface is created;
- source `width_px` is deliberately **not** mapped into 3D line width because no portable mapping is proven here.

No Weather source semantics, Nature source, composition, gameplay, physics, Runtime policy, UC machinery or generic VFX framework was changed.

## Exact source identity

Weather remains source-owned by `mike-axiom-mir/axm-weather-design#2`:

- exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- source digest `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`;
- sample time `0.5 s` for this A/B;
- 36 streaks;
- semantics `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`.

Exact carried source opacity statistics:

- minimum `0.2816030476712573`;
- maximum `0.7702827572792859`;
- mean `0.5480209573055225`.

## Exact final evidence

Dedicated workflow:

`35061056592 — VFX Weather opacity fidelity evidence — SUCCESS`

Same-head inherited/neighboring workflows also remained green:

- `35061056417 — Environment eye-level observation evidence — SUCCESS`;
- `35061056512 — Environment east-tree replacement evidence — SUCCESS`;
- `35061056448 — Environment neutral-peak scene motion evidence — SUCCESS`;
- `35061056488 — Environment composition baseline — SUCCESS`;
- `35061056401 — Procedural environment variation — SUCCESS`.

Retained VFX artifact:

- ID `10432651635`;
- name `environment-weather-opacity-fidelity-001-1d24506e1d5f37cad32c878a15ac6908bf096329`;
- size `195,591` bytes;
- exact head binding `1d24506e1d5f37cad32c878a15ac6908bf096329`;
- archive SHA-256 `c8de221292595fcaa826116d04725aeae1a01dec2017f7b96b0148a88766c43d`.

The retained ZIP was downloaded and independently SHA-256 rehashed to that exact digest.

Machine evidence proves:

- all 36 exact source streak opacities are present and in `[0,1]`;
- authored opacity variation is retained;
- control and candidate scenes are equal after removing only `weather_render_profile` and the resulting `scene_digest`;
- the exact Weather line payload is identical across A/B;
- both target-host modes retain one line surface / 36 streaks;
- control consumes source opacity `false`;
- candidate consumes source opacity `true`;
- Weather semantics remain visual-only.

Scoped target-host result:

**`PASS_SOURCE_WEATHER_OPACITY_FIDELITY / PASS_VISIBLE_SOURCE_OPACITY_DELTA`**

Pinned renderer:

`Godot 4.7.2 GL Compatibility`

Exact retained image deltas:

- `path_eye`: `1,338 / 792,000` pixels changed (`0.1689393939%`), with `1,075` darker and `263` brighter changed pixels;
- `elevated_oblique`: `1,198 / 792,000` changed (`0.1512626263%`), with `960` darker and `238` brighter changed pixels.

All four retained PNGs were directly inspected. The scene hierarchy, silhouettes and composition stay visually stable; the visible change is restricted to the sparse Weather streak appearance. The source-opacity candidate is less uniformly bright while preserving sparse streak readability. The effect is intentionally subtle.

This direct specialist observation is **not** Art Director or Visual Observer acceptance.

## Retained failure / repair provenance

Initial VFX head:

`1641aa14594feeff45be3fd04cc981a7bee2d0bc`

Initial workflow:

`35060958060 — FAILURE`

The failure occurred during the receiving-repository test step. The new A/B equality gate correctly found that control and candidate had different `study_id` values, so they were not truly identical except for the render profile.

Repair commit:

`1d24506e1d5f37cad32c878a15ac6908bf096329`

The repair gives both payloads one common study identity. It did **not** change Weather source values, opacity values, geometry, cameras, renderer mechanism, source semantics or the visual-delta acceptance criterion. The failed run remains retained provenance.

## Scoped VFX result

**`PASS_SOURCE_WEATHER_OPACITY_FIDELITY / HOLD_ART_DIRECTION_CONTINUOUS_PLAYBACK_WIDTH_PHYSICS_AND_PRODUCTION`**

Established only for this exact proof host and source state:

- exact source opacity survives into the target-host render;
- the A/B isolates that one representation change;
- the visible target-host delta is real but small;
- one-surface representation remains intact;
- inherited Environment evidence remains backward compatible by default.

Still explicitly unproven:

- better or final atmosphere quality;
- Art Director / independent Visual Observer acceptance;
- source `width_px` fidelity in 3D;
- continuous playback, interpolation or frame pacing;
- final transparency / overdraw / GPU / FPS / target-device budget;
- physical wind, force, turbulence, precipitation, fog, cloud, smoke, wetness or volumetrics;
- gameplay, collision, damage, visibility mechanics or simulation authority;
- generic particle/VFX architecture or UC extraction;
- CANON, production readiness or VFX mastery.

Runtime PR #8 remains the separate owner of same-process Weather resource-reuse/update-cost evidence. This VFX PASS does not inherit or extend its performance claim.

## Placement decision

The reusable learning is **not** a new shared particle engine:

> If a source-owned effect already carries a visual attribute into a receiving payload, the target-host evidence path should either consume it explicitly or state that it is intentionally flattened. A target-host visual PASS should not silently discard source-owned visual semantics.

This is one Weather receiving case. It does not justify moving Weather semantics into UC, adding a universal VFX schema, or promoting a cross-domain effect runtime.

## Root gate

- **Truth:** the previously hidden opacity-flattening boundary is now explicit; the first failed A/B run remains provenance; exact source/head/artifact/metrics and non-claims are retained.
- **Agency / non-domination:** Weather owns Weather semantics, Environment owns scene composition/cameras, Runtime owns performance, Art Direction / Visual QA own perceptual acceptance, and VFX owns only this bounded receiving representation.
- **Continuity:** the Environment host default remains historical uniform-alpha behavior; inherited workflows stayed green; source repositories and existing VFX/Runtime lanes remain intact; the prior long-form VFX status is archived byte-for-byte rather than silently discarded.
- **Wisdom before speed:** the pass repairs one proven fidelity gap rather than adding fog, volumetrics, turbulence, physical precipitation, per-streak materials or a generic effects framework.

## Handoffs

- **3D Art Director / Visual Observer:** inspect exact PR #9 artifact `10432651635`. Judge whether source-opacity variation improves atmosphere hierarchy/readability or is too subtle/uneven. Do not infer physical Weather or final-quality acceptance.
- **Environment / World Art:** no composition move is requested. The candidate preserves all non-Weather scene state and the historical host default.
- **Weather / Procedural Design:** source PR #2 remains authoritative; no source values or semantics changed.
- **Runtime / Optimization:** one-line-surface identity is preserved, but this pass makes no new cost claim. PR #8 remains the current performance evidence owner.
- **Materials / LookDev:** this remains proof-material Weather. Do not infer final transparency, texture, shader or overdraw quality.
- **Technical Art / UC / Capability Cartography:** retain the source-attribute-consumption lesson if it repeats across materially different effect families; do not centralize it from one Weather case.

## Next VFX / Atmosphere pass

First consume any Art Director / Visual Observer review of PR #9 and the newest Environment replacement evidence. If a precise visible opacity/readability defect is named, repair the same lane with exact before/after evidence.

If PR #9 is perceptually accepted and no Weather-specific defect remains, prefer a **materially different grounded VFX primitive** only when a current source-owned object/weapon/environment candidate exposes a real need. Do not keep deepening Weather merely because the lane exists.
