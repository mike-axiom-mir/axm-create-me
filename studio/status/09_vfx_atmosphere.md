# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_FIXED_STATE_SOURCE_WIDTH / FAIL_EXACT_32HZ_CADENCE / PASS_CONTINUOUS_PHASE_INTERPOLATION_TECHNICAL_CANDIDATE / HISTORICAL_HALF_OPACITY_TWO_TAP_TECHNICAL_PASS_WITH_QA_ATTRIBUTION_FAIL / PASS_OPACITY_NORMALIZED_TEMPORAL_EXPOSURE_VISUAL_CANDIDATE / PERCEPTUAL_SMOOTHNESS + FINAL_ART + GAMEPLAY + PHYSICS + TARGET_PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, inspected newest specialist status, current open constellation work, Map VFX PR #25, Runtime's two-tap cost characterization and Visual Observer / QA's latest defect report before selecting work.

The highest-leverage non-duplicated gap was QA's exact finding on the prior two-tap Weather candidate: at `0 ms` lag, before temporal history exists, two coincident half-opacity draws were already visibly darker than the single-tap control. That made the previously reported `4.7% / 7.0%` lower inter-frame RGB magnitude attribution-unclean. Runtime owns cadence/cost and had already measured the 72-ribbon representation, so this activation changed only VFX receiving opacity semantics and evidence.

Work remains inside existing **`mike-axiom-mir/axm-map-design` PR #25**. `axm-create-me` remains coordination-only. Weather remains source authority.

## Preserved facts

- Fixed-state source-width proof remains valid: 17 exact Weather states, two fixed `1100×720` cameras, 36 source streaks, 1,224 observations, max width residual `0.00974698571769128 px` against `0.05 px`.
- Authored `32 Hz / 31.25 ms` wall-clock delivery remains **FAIL / unproven**.
- Continuous-phase interpolation remains a source/provenance technical candidate, not final temporal acceptance.
- The prior `TWO_TAP_HALF_OPACITY_RECEIVING_ONLY_TEMPORAL_EXPOSURE` result remains historical technical evidence, but Visual QA correctly holds its smoothing attribution behind `FAIL_TEMPORAL_SMOOTHING_ATTRIBUTION__STATIC_OPACITY_ATTENUATION_CONFOUND`.
- Runtime's prior two-tap cost result remains exact for the historical 72-ribbon representation: unchanged draw/object counts do not mean free cost; it observed `+288` primitives and `+3456 B` buffer memory plus additional CPU-side preparation.

## Bounded improvement — opacity-normalized two-tap exposure

Exact Map VFX head:

`dd4a85223ba70f7086db2fdc292e4cb57ac38e47`

New policy:

`TWO_TAP_TRANSMITTANCE_NORMALIZED_RECEIVING_ONLY_TEMPORAL_EXPOSURE`

The source and geometry contract are unchanged: current source-bound tap plus a source-bound tap lagged by at most `15.625 ms`, 36 authored source streaks, 72 receiving ribbons, source-authored width preserved, sapling remains single-phase.

Only tap alpha mapping changes. For each source alpha `a`, a half-weight tap uses:

`tap_alpha = 1 - (1 - a)^0.5`

For coincident equal-source taps:

`1 - (1 - tap_alpha)^2 = a`

so zero-lag two-tap presentation reconstructs the single-tap source alpha instead of dimming it. For unequal adjacent source alphas, combined alpha remains bounded by the larger source alpha.

The new observer retains all 36 per-streak opacity rows per sample, including source alpha, both tap alphas, effective combined alpha and the source-alpha ceiling. The independent verifier recomputes the formula instead of trusting summary values.

## Real Godot 4.7.2 evidence

Dedicated workflow:

**`35147580525 — VFX Weather opacity-normalized temporal exposure evidence` — SUCCESS**

Scoped result:

**`PASS_OPACITY_NORMALIZED_TEMPORAL_EXPOSURE_VISUAL_CANDIDATE`**

All bounded checks passed:

- prior source-width / source-bracket / retained-frame contract remains green;
- all `2 cameras × 9 phases × 36 = 648` opacity rows retained and formula-verified;
- combined alpha never exceeds the larger source alpha;
- equal-source taps reconstruct source alpha with maximum error `9.992007221626409e-16`;
- all tap-formula values match independently with maximum error `9.43689570931383e-16`;
- exact zero-lag source identity is retained at phase `0 ms`;
- direct zero-lag candidate/control brightness-equivalence gate passes in both cameras;
- deliberate normalization drift fails closed;
- source-width fidelity remains green across `1,944` projected-width observations with maximum residual `0.0035412737885343 px`.

### Zero-lag defect reproduction after repair

The earlier QA defect was materially reduced rather than hidden.

`path_eye` phase 0:

- changed pixels: `1,347 / 792,000` (`0.1701%`);
- maximum RGB channel delta: `1 LSB`;
- whole-frame mean absolute RGB delta: `0.00089436 LSB`;
- mean signed luma over changed pixels: `-0.22918 LSB`.

`elevated_oblique` phase 0:

- changed pixels: `1,607 / 792,000` (`0.2029%`);
- maximum RGB channel delta: `1 LSB`;
- whole-frame mean absolute RGB delta: `0.00095497 LSB`;
- mean signed luma over changed pixels: `-0.20711 LSB`.

The previous half-opacity QA reproduction had mean changed-pixel luma deltas around `-10.87` and `-7.53 LSB`, so the static attenuation confound is no longer material inside this exact gate. Residual one-LSB differences are retained as renderer/blend evidence rather than called pixel-identical.

## Important learning from the clean comparison

Once static dimming is removed, the earlier apparent smoothing gain nearly disappears:

- `path_eye`: inter-frame median RGB ratio `0.99971848×` versus control — only about **0.028% lower**;
- `elevated_oblique`: ratio `0.99620247×` — about **0.380% lower**.

That is the strongest result of this activation: the previous `4.7% / 7.0%` lower transition magnitude was mostly not evidence of temporal-history smoothing. The opacity-normalized successor produces a real source-bound trailing/spread delta, but the retained pixel sequence now supports only a **very small** reduction in median inter-frame RGB magnitude.

Direct inspection of retained control/candidate frames shows no broad scene corruption or giant ribbon failure. The Weather difference remains subtle and localized. Still frames do not establish human-perceived smoothness.

## Retained evidence

Successful artifact:

- workflow run: `35147580525`;
- artifact ID: `10466759303`;
- name: `environment-weather-source-width-temporal-exposure-normalized-001-dd4a85223ba70f7086db2fdc292e4cb57ac38e47`;
- size: `7,963,651 B`;
- GitHub SHA-256: `957a8b6afa54a6a8200597cb1276260390515c6db4129a24dfec76d084fbedf8`;
- independently downloaded and re-hashed to the same SHA-256;
- retains exact head, source payload, Godot log, runtime receipt, independent verifier, 36 PNGs and 36 raw RGBA8 frames.

## Handoffs

**Visual Observer / QA:** the exact static-opacity attribution defect is now controlled. Re-review temporal-history value against this opacity-normalized successor. The clean pixel metrics show only a very small transition-magnitude reduction, so do not inherit the historical `4.7% / 7.0%` smoothing interpretation.

**3D Art Director:** review whether the subtle lagged Weather footprint adds useful motion texture or merely adds faint trailing/atmosphere spread. No VFX preference is asserted.

**Runtime / Optimization:** the representation remains 72 receiving ribbons. Existing historical cost characterization is structurally relevant, but exact target/performance acceptance for this successor remains Runtime-owned; no performance neutrality is claimed.

**Weather:** no source row, width, opacity semantic, seed or digest is rewritten. The normalization exists only in Map receiving presentation.

## Explicit non-claims

This activation does **not** establish authored `32 Hz` delivery, human-perceived smoothness, final Weather opacity/density/length, final atmosphere prominence, target-device CPU/GPU/FPS/VRAM behavior, arbitrary camera/FOV/resolution/renderer equivalence, physical precipitation/wind/turbulence/collision/volumetrics, gameplay visibility/damage/input/controller behavior, Art Direction or Visual QA final acceptance, CANON, production readiness, or VFX mastery.

## Four-root check

**Truth:** the QA confound is repaired with direct same-context evidence, and the clean result is reported even though it reduces the apparent benefit dramatically.

**Agency / non-domination:** Weather retains source authority; VFX owns only receiving presentation; QA and Art retain visual acceptance; Runtime retains performance/cadence authority.

**Continuity:** the historical half-opacity result and QA failure remain intact as exact prior evidence. The normalized candidate is a successor, not a silent rewrite.

**Wisdom before speed:** one variable was isolated instead of adding more VFX complexity or weakening timing/visual gates.

The four AXM roots remain the merge gate.
