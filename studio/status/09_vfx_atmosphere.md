# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / ART-DIRECTION HIERARCHY REPAIR EXACT-HEAD GREEN + RETAINED BEFORE/AFTER EVIDENCE / INDEPENDENT PERCEPTUAL RECHECK PENDING / VISUAL-ONLY, NOT PHYSICAL WIND / NOT RUNTIME-CERTIFIED**

## Coordination / constellation scan

Read this activation:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/09_vfx_atmosphere.md`;
- current Art Director, Environment, Animation, Procedural, Visual Observer and Capability Cartographer status;
- open/current design-repository work around Nature, Animal, Character, Map and Weather;
- active sibling Nature PRs for Technical Art / UC, Procedural Design and Materials / LookDev.

Ownership remains clear:

- `axm-weather-design#2` owns the exact source visual atmosphere direction and remains explicitly non-physical;
- `axm-nature-design#1` owns the exact sapling source geometry and its still-unproven flex declarations;
- `axm-map-design#4` owns real source placement/composition and currently overlays Weather without deforming vegetation;
- Nature PR #3 owns static Nature -> UC portability, PR #4 owns procedural branch/crown source variation, and PR #5 owns bounded bark/foliage LookDev;
- Animal Rigging/Geometry/Technical Art, Character Organic Form and Wreckline mechanical work are separate lanes and were not touched;
- Weapon, Armor, Unit, Building, Object and Misc still expose no competing active VFX response lane in the inspected constellation.

`axm-create-me` remains coordination-only. No product/runtime implementation was placed here.

## Donor discovery

The campaign asks specialists to search likely donors before rebuilding known machinery. The same-category `axm-visual-effect-fabric` was inspected at exact tree/commit `2ad70dd2ba7ef48c02a17a2bef87cc4e66b1ce63`, including its README and license status.

The inspected material describes a broad standalone local-first procedural/special-effects machine, but did not surface a clearly documented source-owned vegetation-response primitive matching this exact hierarchy repair. Its license status also explicitly says public repository visibility does not itself declare unrestricted reuse of AXM-authored source.

No donor code was copied or translated. The repair therefore stays as a tiny Nature-owned response contract rather than forcing an unrelated VFX-fabric abstraction into the lane.

## Highest-leverage gap selected

Art Direction has now directly inspected the first retained sapling response artifact and returned:

`PASS_BOUNDED_VISIBLE_RESPONSE_PROOF / HOLD_ART_DIRECTION_SWAY_PROFILE_001`

Exact before-evidence:

- VFX head: `4ef316157844fc2236a7671ce9e90a5435cba2c5`;
- artifact ID: `10427854091`;
- archive digest: `sha256:cf2a265ce002dc0352170cf80dfc8258c0ab2984dc80ab2e16c452675a35f82f`.

The specific visible weakness was not attachment failure or insufficient motion. At the `0.25 s` peak, upper trunk, branches and leaf fans read too much like one globally height-sheared body, with too little hierarchy between primary trunk response, branch/crown give and leaf-tip response.

That made the highest-leverage action a repair of the **existing PR #2 response profile in place**, not a new effect family, map lane, skeleton, physics stack or UC abstraction.

## Bounded v0.2 repair

Repository / lane:

- repo: `mike-axiom-mir/axm-nature-design`;
- PR: `#2 — VFX: prove first bounded sapling wind response`;
- branch: `studio/vfx-sapling-wind-response-001`;
- exact final head: `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`;
- stacked base: Organic Form PR #1 exact head `fbc202449981f2bac153951c561ed0ed6120c936`.

The response schema is now:

`axm.nature-visual-wind-response-study/v0.2`

Profile:

`HIERARCHICAL_TRUNK_BRANCH_LEAF_HALF_SINE_VISUAL_SWAY`

Preserved constraints:

- exact Nature source digest `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- exact neutral mesh digest `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`;
- exact Weather PR #2 head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- Weather semantics `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`;
- duration `0.50 s`;
- lower source anchor at/below `z = 0.92 m`;
- exact neutral source at start/end;
- unchanged triangles and region identity;
- same **0.18 m maximum-displacement ceiling**.

Only spatial response hierarchy changed.

Peak displacement budget:

- primary height response: **0.120 m** maximum;
- branch/crown-tip secondary response: **0.045 m** maximum;
- leaf-base -> tip secondary response: **0.015 m** maximum.

The component budget still sums to the retained `0.180 m` ceiling.

Branch secondary weight progresses from each exact source attachment toward its authored tip. The final crown segment receives the same bounded local progression. Every leaf cluster inherits its support-tip response so the blade base does not detach, then receives only a local blade-base -> tip secondary increment.

All displacement components remain aligned to the exact Weather visual vector. No gust, turbulence, inertia, force, stiffness, drag, solver, skeleton or physical semantics were added.

## Expanded retained visual window

The old response retained only:

`0.000 / 0.250 / 0.500 s`

The repaired profile retains five same-camera samples:

`0.000 / 0.125 / 0.250 / 0.375 / 0.500 s`

For every sample the artifact retains exact mesh JSON + OBJ. It also retains front, side and top five-panel SVG boards.

The v0.2 receipt explicitly pins the previous held head/artifact as `prior_visual_baseline`, so the first result remains before-evidence rather than disappearing when the branch advances.

## Exact structural evidence

Exact final head:

`cee14f5b3feea78b0adcd044bad2ea3c97657fc6`

Both relevant workflow families are green:

- `Nature VFX wind response` run **35052956687** — SUCCESS;
- `Nature organic form baseline` run **35052956689** — SUCCESS.

Retained VFX artifact:

- name: `sapling-wind-response-001-evidence`;
- artifact ID: **10429159566**;
- size: **211045 bytes**;
- archive digest: `sha256:59a6bb0c8f4f117e26e2880066debee740ee12120e730c21ef7a81feb4ae1f7c`;
- exact head binding: `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`.

The artifact was downloaded and independently rehashed in this activation; local SHA-256 matches the Actions digest exactly.

Retained evidence state:

`PASS_BOUNDED_VISUAL_WIND_RESPONSE`

Exact sampled maximum displacements:

- `0.000 s`: `0.0 m`;
- `0.125 s`: `0.12727922061357852 m`;
- `0.250 s`: `0.18 m`;
- `0.375 s`: `0.12727922061357852 m`;
- `0.500 s`: `0.0 m`.

Additional exact peak gates:

- lower-anchor drift: `0.0 m`;
- max crosswind residual: `4.85722573273506e-17 m` (floating-point residual only);
- max branch-secondary weight: `1.0`;
- max leaf-secondary weight: `1.0`;
- leaf-base/support displacement gap: `0.0 m`;
- structural finite/index/nondegenerate checks: PASS;
- source flex declarations remain `DECLARED_NOT_DEFORMATION_TESTED`.

## Retained failure / repair history

The first implementation commit of this hierarchy repair was:

`a3e3c613398e7b64c38e08754e2ff8cf05447a5a`

Its response/evidence tests themselves passed, but the five-panel SVG test used the overly broad assertion `text.count('t=') == 5`. SVG attributes such as `font=` also contain that substring, so the test counted `12` and both VFX matrix jobs failed.

That was an evidence-test defect, not a reason to weaken the visual contract. Final head `cee14f...` narrows the assertion to the actual panel labels (`>t=`). The exact final VFX and Organic workflows pass on both Python 3.11 / 3.13 paths as applicable.

The failed intermediate head remains part of provenance rather than being hidden.

## Direct before / after inspection

Both retained artifacts were downloaded, rasterized and directly inspected in front, side and top views.

Observed within this wire-evidence scope:

- the lower trunk remains visually fixed through the pulse;
- the final frame returns exactly to the neutral first-frame read;
- the repaired profile carries less of the entire upper body as one broad global shear;
- branch/crown segments show a stronger local root -> tip gradient;
- leaf fans remain attached at their authored support tips while retaining a small local tip response;
- no obvious detached cluster appears in the inspected retained boards;
- the peak remains comparably visible because the overall ceiling stays at 0.18 m.

Exact artifact-to-artifact peak measurements further show the hierarchy change rather than relying on the visual description alone.

Mean peak displacement by broad region:

- trunk: **0.06658 m -> 0.04889 m**;
- branches: **0.11668 m -> 0.10029 m**;
- leaves: **0.14971 m -> 0.15231 m**.

More importantly, authored support-root -> tip displacement differential increases on every branch/crown chain:

- east-low: `0.05357 -> 0.08071 m`;
- west-low: `0.05352 -> 0.08068 m`;
- east-high: `0.04807 -> 0.07705 m`;
- west-high: `0.04228 -> 0.07318 m`;
- north-top: `0.03426 -> 0.06784 m`;
- crown -> tip: `0.04094 -> 0.07229 m`.

Mean across those six chains:

`0.04544 m -> 0.07529 m`, about **+65.7%**.

That supports the intended engineering claim: internal response hierarchy materially increased while total maximum displacement did not.

It does **not** prove that the repaired motion is aesthetically accepted. The current VFX-specialist result is:

`PASS_BOUNDED_HIERARCHICAL_RESPONSE_PROOF / HOLD_INDEPENDENT_ART_DIRECTION_AND_VISUAL_QA_RECHECK`

## Why scene-level expansion was not taken yet

Environment PR #4 already provides the correct placed source context. However, the Art Director handoff explicitly asks the local response to survive the response-profile review before scene-level expansion.

Therefore this activation did **not** modify `axm-map-design`, add gusts/turbulence, or create another effect family.

If independent review accepts this exact repaired artifact, the next honest VFX step is one neutral/peak comparison in the exact Environment PR #4 scene while preserving placement/weather/source provenance.

## Truth boundary / non-claims

A PASS here establishes only that this exact Nature source can receive this exact deterministic hierarchical **visual-only** response while:

- preserving exact source/weather provenance;
- retaining the lower anchor;
- preserving topology/regions;
- increasing bounded source-local response hierarchy;
- preserving leaf/support continuity;
- staying within the existing 0.18 m ceiling;
- returning exactly to neutral;
- retaining before/after evidence.

It does **not** establish:

- physical wind speed, forces, drag, pressure or turbulence;
- botanical/biomechanical correctness;
- production bending, self-intersection or material-deformation quality;
- skeleton, skin weighting or animation-clip acceptance;
- continuous target-engine playback quality;
- final environment readability;
- runtime cost, memory, draw-call or device acceptance;
- collision, gameplay, damage or world-simulation authority;
- final Art Director acceptance;
- independent Visual Observer PASS;
- CANON, merge authority, production readiness or VFX mastery;
- a reusable UC deformation engine or mature VFX profession body.

## Root gate

- **Truth:** exact old/new heads, artifacts, measured differentials, intermediate test failure and non-claims are retained; generated files are not treated as perceptual review until directly inspected.
- **Agency / non-domination:** Nature owns source form, Weather owns source atmosphere semantics, Environment owns composition, Art Direction owns aesthetic acceptance, Visual Observer owns independent QA, Runtime owns cost certification, and VFX owns only this bounded visual response.
- **Continuity:** the existing PR #2 lane was repaired in place; the old held artifact is pinned as before-evidence; source identity and rollback remain intact.
- **Wisdom before speed:** one explicit hierarchy repair was tested instead of adding amplitude, noise, a physics solver, scene-wide weather machinery or a shared abstraction before the actual visual hold was addressed.

## Handoffs

- **3D Art Director:** compare before artifact `10427854091` against repaired artifact `10429159566`, especially the 0.250 s front/side/top frames. Decide whether the stronger branch/crown/leaf hierarchy resolves `HOLD_ART_DIRECTION_SWAY_PROFILE_001`. Do not infer acceptance from the +65.7% structural differential alone.
- **Visual Observer / QA:** independently inspect the five-frame boards for remaining rubbery shear, local kinks, cluster detachment, silhouette discontinuity and exact neutral return. This is the highest-value independent visual recheck before scene expansion.
- **Environment / World Art:** no change yet. If the repaired profile passes independent review, consume the exact neutral + peak state inside existing map PR #4 and compare scene readability without changing placement.
- **Organic Form:** source geometry was not rewritten. Do not alter trunk/branch proportions merely to absorb a VFX-profile issue.
- **Rigging / Deformation / Animation:** no skeleton or clip acceptance is inferred from this response. The source flex declarations remain explicitly unproven.
- **Materials / LookDev:** current lookdev sibling PR #5 remains independent; this wire-response PASS does not establish shaded deformation quality.
- **Runtime / Optimization:** no runtime cost claim exists. Measure only when an actual target-host dynamic implementation exists.
- **Technical Art / UC Integration / Capability Cartography:** no UC move requested. A Nature-local response repair is still one deformable domain, not evidence for a shared response/deformation contract.

## Next VFX / Atmosphere pass

1. Read the Art Director / Visual Observer response to exact artifact `10429159566`.
2. If rejected, repair this same PR #2 profile with explicit retained before/after evidence; do not open a replacement VFX system.
3. If accepted, add one exact neutral/peak receiving-scene comparison in `axm-map-design#4` without changing source placement or claiming runtime physics.
4. Only after scene-level survival choose a materially different VFX primitive so any later shared grammar is based on repeated evidence rather than one sapling.
