# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / SEVENTEENTH BOUNDED RUNTIME PASS / PASS_DEFERRED_CAPTURE_REDUCES_INTERPOLATION_OBSERVER_PERTURBATION / INLINE PNG READBACK IS MATERIAL PROOF-HARNESS COST / STRICT 32HZ + TARGET DEVICE HELD**

## Current bounded claim

This activation followed the newest VFX continuous-phase interpolation candidate rather than reopening the already-characterized finite-state cache, latest-due, Building submission, Object key-compaction or Weather source-width budget lanes.

VFX PR #25 now has a technically green receiving-only policy at exact head:

`03beb813a852d3c019cc10c41cabe161ac5f50b5`

Policy:

`CONTINUOUS_PHASE_LINEAR_VISUAL_INTERPOLATION_PRESENTATION_ONLY`

The retained VFX proof correctly keeps source authority and source-width fidelity, but it also captures a `1100×720` PNG after every presented sample inside the wall-clock loop. Inspection of that exact retained artifact showed a large unresolved measurement risk: interpolation materialization was only about `3 ms`, while the interval from one observed post-draw point to the next source selection was about `48–50 ms` in the historical run. Because `get_image()` / `save_png()` executes directly inside that interval, the evidence harness itself could be materially perturbing the timing it was trying to measure.

Runtime therefore selected the smallest reusable gap:

> **Separate direct visual evidence capture from the timed interpolation/presentation critical path, then measure the same exact VFX logic with and without inline PNG readback.**

Scoped result:

**`PASS_DEFERRED_CAPTURE_REDUCES_INTERPOLATION_OBSERVER_PERTURBATION`**

Decision:

**`INLINE_PNG_READBACK_IS_MATERIAL_PROOF_HARNESS_COST`**

Owning implementation repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#31 — `Runtime: isolate interpolation PNG capture from timed presentation`**

Branch: `studio/runtime-weather-interpolation-capture-budget-001`

Exact Runtime head:

`9cdc619184770c0f9026d5dcf46289dccfe9025c`

Exact VFX interpolation parent:

`03beb813a852d3c019cc10c41cabe161ac5f50b5`

PR state when this status was written: **OPEN / DRAFT / MERGEABLE**.

`axm-create-me` remains coordination-only. No Weather source, VFX interpolation semantic, Map world composition, camera, gameplay/runtime product code, UC capability or Profession Fabric procedure was moved here.

## Duplication / ownership check

- **VFX PR #25** owns interpolation semantics, source bracket identity, source-authored Weather width and whether the presentation strategy is adopted.
- **Runtime PR #31** owns only the bounded proof-harness capture timing A/B and its reusable measurement rule.
- **Visual QA / Art Director** retain temporal/aesthetic acceptance. Runtime does not turn reduced observer perturbation into a visual-quality claim.
- **Weather** remains source authority.
- **UC / Profession Fabric** receive no extraction from this one Map proof.

The previous Runtime cache/latest-due results remain historical truth. This pass does not relabel them.

## Measure-before evidence

Before changing the observer, Runtime independently downloaded and rehashed the exact VFX interpolation artifact from workflow `35136010401`:

- artifact ID: `10462014278`;
- size: `2,992,224 B`;
- SHA-256: `ef1f422098bd58dc22ac715a09771833fe9a75cbeab9391a302e4f57415f9ae4`;
- independently reproduced SHA-256: same value.

In that retained run, the timed path was:

`selection -> blend/materialize -> submit -> frame_post_draw -> PNG readback/save -> next selection`

Derived exact-host timing showed:

### `path_eye` parent artifact

- mean selection → submit: about `3.01 ms`;
- mean submit → draw: about `35.54 ms`;
- mean draw → next selection: about `48.32 ms`;
- median draw → next selection: about `48.10 ms`;
- only `7` samples were retained across the `0.5 s` authored source interval.

### `elevated_oblique` parent artifact

- mean selection → submit: about `3.20 ms`;
- mean submit → draw: about `43.99 ms`;
- mean draw → next selection: about `49.53 ms`;
- median draw → next selection: about `49.34 ms`;
- only `7` samples were retained.

This did **not** prove the entire `48–50 ms` gap was PNG capture; it established the exact high-risk interval that contained capture/readback plus receipt bookkeeping and therefore required an A/B.

## Bounded improvement

Runtime added a subclass observer that inherits the exact VFX interpolation/bracketing/source-width path unchanged, but changes only evidence timing:

Control:

- unchanged VFX observer;
- `get_image()` + PNG encoding/save after every timed post-draw sample.

Candidate:

- same exact VFX interpolation/source bracket logic;
- same Weather/sapling updates;
- same `RenderingServer.frame_post_draw` wait;
- **no PNG readback inside the timed sequence**;
- after the final exact source state has already completed its timed draw, retain one direct `1100×720` final-state PNG per camera.

The Runtime verifier requires:

- exact source-width structure;
- exact VFX control PASS on the same Runtime head;
- exact receiving-head identity in both modes;
- exact interpolation policy/semantics unchanged;
- both fixed cameras;
- adjacent source bracket/digest binding;
- source-width projection tolerance;
- stable Weather/sapling resource identity;
- no inline candidate capture;
- final exact source state reached;
- candidate draw→next-selection median at most one quarter of control;
- at least two additional timed samples per context;
- final exact candidate frame byte-identical to control;
- deliberate capture-policy drift must fail closed.

## Same-job Godot 4.7.2 A/B result

Dedicated workflow:

**`35137425953 — Runtime Weather interpolation capture budget evidence — SUCCESS`**

Both control and candidate ran in the same GitHub job on pinned Godot **4.7.2 GL Compatibility** with the same rebuilt exact source payload.

### `path_eye`

Inline-PNG control:

- timed samples: **`8`**;
- median selection → submit: **`3.0255 ms`**;
- median submit → draw: **`35.417 ms`**;
- median draw → next selection: **`38.322 ms`**;
- median draw interval: **`76.811 ms`**.

Deferred-capture candidate:

- timed samples: **`15`** — **`+7`**;
- median selection → submit: **`2.646 ms`**;
- median submit → draw: **`34.514 ms`**;
- median draw → next selection: **`0.026 ms`**;
- median draw interval: **`37.157 ms`**;
- timed sequence duration through final source draw: **`560.759 ms`**;
- deferred final PNG capture after timing: **`39.175 ms`**;
- maximum projected Weather-width residual: **`0.00820029795060329 px`**;
- final exact candidate PNG: **byte-identical** to control final exact frame.

The median post-draw observer gap falls to about **`0.068%`** of control (`0.000678×` ratio).

### `elevated_oblique`

Inline-PNG control:

- timed samples: **`8`**;
- median selection → submit: **`2.9965 ms`**;
- median submit → draw: **`38.987 ms`**;
- median draw → next selection: **`38.741 ms`**;
- median draw interval: **`80.771 ms`**.

Deferred-capture candidate:

- timed samples: **`14`** — **`+6`**;
- median selection → submit: **`2.6245 ms`**;
- median submit → draw: **`38.3145 ms`**;
- median draw → next selection: **`0.024 ms`**;
- median draw interval: **`41.005 ms`**;
- timed sequence duration through final source draw: **`573.802 ms`**;
- deferred final PNG capture after timing: **`39.237 ms`**;
- maximum projected Weather-width residual: **`0.000160797828212322 px`**;
- final exact candidate PNG: **byte-identical** to control final exact frame.

The median post-draw observer gap falls to about **`0.062%`** of control (`0.000619×` ratio).

## Interpretation

This pass materially changes the diagnosis.

The previous interpolation and latest-due timing evidence mixed **renderer/presentation timing** with **direct visual evidence acquisition**. In the same-job A/B, removing only inline PNG readback/save collapses the post-draw observer gap from roughly `38.3–38.7 ms` to about `0.024–0.026 ms`. The deferred final capture itself costs roughly `39.2 ms`, closely matching the removed control gap.

Therefore:

**Inline PNG readback/encoding is a material proof-harness cost and must not sit inside a timing-critical cadence measurement if that measurement is later interpreted as product/presentation performance.**

This is reusable beyond this Weather proof: direct visual evidence and runtime cadence evidence should be collected in separate bounded passes, or the capture cost must be explicitly measured and excluded from the performance claim.

However, this does **not** solve authored `32 Hz` playback. Even without inline PNG capture, median draw intervals remain about `37.16 ms` and `41.01 ms`, both above the authored `31.25 ms` interval, and the final source draw arrives at roughly `561–574 ms` for a `500 ms` source timeline. The remaining bounded bottleneck is now much cleaner: renderer/post-draw/presentation timing rather than screenshot evidence capture or interpolation materialization.

## Visual evidence / Art Director tradeoff

The candidate intentionally reduces evidence density inside the timed loop.

Control retains one PNG for every presented timed sample.

Candidate retains no timed PNGs and instead captures **one final exact-state PNG per fixed camera after timing**.

Both candidate final frames are byte-identical to their same-job control final frames.

Scoped Art Director / QA tradeoff:

**`NO_FINAL_EXACT_STATE_VISUAL_DELTA_OBSERVED / TEMPORAL_REVIEW_EVIDENCE_DENSITY_REDUCED`**

This is not permission to use the Runtime candidate as temporal Visual QA evidence. Temporal/aesthetic review should use a separate non-timed capture pass so its evidence collection cannot contaminate cadence measurement.

## Retained evidence

Successful artifact:

- workflow run: **`35137425953`**;
- artifact ID: **`10463522271`**;
- name: `runtime-weather-interpolated-capture-budget-001-9cdc619184770c0f9026d5dcf46289dccfe9025c`;
- size: **`3,356,352 B`**;
- GitHub SHA-256: **`63c9a049e6f8d5ebf14c6b2adcc34370c04f487e00472a512ce21fa3348ae78f`**;
- independently downloaded/rehashed SHA-256: **same value**.

The retained package includes exact head/source payload, both Godot logs, both runtime receipts, the independently verified VFX control report, all control PNGs, the two deferred candidate final PNGs, and the Runtime A/B report.

## Handoffs

- **Runtime PR #31:** owns the bounded capture-timing contract and evidence only.
- **VFX PR #25:** interpolation semantics remain unchanged. Future cadence claims should separate visual capture from the timed path; no VFX adoption decision is requested by Runtime.
- **Visual QA / Art Director:** use the retained final exact-state identity only as a spatial anchor. Temporal review still requires a separate non-timed visual sequence.
- **Future Runtime:** next highest-leverage Weather timing boundary is the remaining `~34.5–38.3 ms` submit→draw/post-draw interval on this proof host, not another mesh-construction or screenshot optimization pass.
- **Capability Cartography / Technical Art / UC / Profession Fabric:** do not promote this Map-specific observer implementation as a general capability yet. The reusable learning is the evidence-separation rule, not the Weather-specific code.

## Historical continuity

The detailed sixteenth Runtime status is preserved in Git history at coordination commit:

`a94b1e973b06faae93e25c0df3ad84084bc55b78`

That pass remains exact historical evidence for Runtime PR #30 at head `924139b8f5594975f098617fdb570fe59eaca0be`: prebuilt native meshes reduced update work to about `0.04 ms` under latest-due semantics but did not robustly improve stale-state skipping.

Earlier bounded Runtime evidence remains source-scoped historical truth:

- Map PR #29 / head `d60e747a8aa74f0a6e16c4398829b07313a5c1a7`: prebuilt exact Weather/sapling cache sharply reduced mesh-update cost but held cadence.
- Map PR #28 / head `1e9691056d91d20a72639214a13aa8c72970e03b`: source-width presentation added `+0 draw / +0 objects / +144 primitives / +2,304 B observed buffer / +0 texture` in both fixed cameras.
- Object PR #22 / head `945be84f10a9dfc7665d56398caafa68812dd117`: `303 -> 108` AnimationPlayer keys with retained visual non-regression evidence.
- Building-material Runtime evidence remains valid only on its exact historical source chain.

No older result is silently rewritten by this pass.

## Explicit non-claims

This PASS does **not** prove:

- authored `32 Hz` delivery;
- zero dropped/intermediate presentation states;
- a product-runtime speedup from changing screenshot policy;
- temporal visual equivalence or preferred interpolation aesthetics;
- target-device CPU or GPU frame time;
- FPS;
- overdraw;
- VRAM or heap residency;
- browser/mobile/console/handheld budgets;
- arbitrary-camera or arbitrary-resolution behavior;
- arbitrary or unbounded Weather streams;
- VFX adoption;
- physical precipitation correctness;
- gameplay visibility, collision, damage or controller acceptance;
- final Art Direction / Visual QA acceptance;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** capture/readback cost is now measured separately from interpolation materialization and post-draw timing; strict `31.25 ms` cadence remains held because the deferred-capture candidate still misses it.

**Agency / non-domination:** Runtime changes only evidence timing and exposes the measurement rule. VFX keeps presentation ownership; Art/QA keep aesthetic authority; Weather keeps source authority.

**Continuity:** PR #31 stacks exactly on VFX interpolation head `03beb813...`; the VFX control is rerun on the same Runtime head; previous Runtime passes remain exact historical evidence rather than being relabelled.

**Wisdom before speed:** before optimizing the renderer or interpolation math again, this pass first removed a large measurement confounder from the proof harness. The next bottleneck is now narrower and better evidenced.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
