# 04 — Organic Form Specialist Status

Date: 2026-09-16
State: **PASS_COMPACT_SOURCE_ENVELOPE / NEW SOURCE-OWNED EAST-FOREGROUND NATURE BODY RETAINED / ENVIRONMENT VISUAL REPLACEMENT + DEFORMATION HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the Organic Form standing role, newest Art Director / Geometry / Rigging / Visual Observer / Environment status, and current open Character / Animal / Nature work before selecting a lane.

The previous Character body remains intentionally unchanged because it still lacks direct Art Director / Visual Observer proportion acceptance. Animal's connected forelimb is already owned by Geometry PR #4 and now has clean static structural evidence but still awaits visual/deformation acceptance. The existing Nature sapling is already heavily consumed by VFX, Materials, Procedural, Technical Art and Environment and has no new source-form defect that justifies reshaping it.

The strongest newly grounded Organic dependency is the remaining **east-foreground Nature proxy** identified by Art Direction after the scene-motion gate cleared. Direct re-inspection of the retained seed-29 `elevated_oblique` scene shows the large green foreground block on the east/right side still dominates the lower-right hierarchy. The Map baseline identifies the negative-Y east proxy `proxy:nature-tree-east-b` at `[7.2, -3.5, 2.0]` with a reserved size of only `[1.6, 1.6, 4.0] m`. The existing sapling family is taller/wider than that envelope and must not be forced into it by hidden receiving-side scaling.

The bounded Organic improvement therefore adds one **distinct source-owned compact tree body** sized for that exact receiving envelope while leaving Map composition and replacement acceptance downstream.

`axm-create-me` remains coordination-only. Product/source work is in `mike-axiom-mir/axm-nature-design`.

## Selected implementation lane

Repository:

`mike-axiom-mir/axm-nature-design`

Draft PR:

**#6 — `Organic Form: add compact east-foreground tree source study`**

Branch:

`studio/organic-compact-east-tree-001`

Base:

- existing Nature Organic branch: `studio/organic-nature-sapling-001`;
- exact prerequisite head: `fbc202449981f2bac153951c561ed0ed6120c936`.

Current exact PR head:

`64116d63fc76daa1623b5fd5046a4e6074100bda`

PR state after exact evidence:

**OPEN / DRAFT / MERGEABLE**

The original sapling source, VFX response, procedural family, Materials work, UC bridge and Map scene are unchanged.

## New source-owned form

Study:

`compact-east-tree-neutral-001`

Schema remains source-domain owned:

`axm.nature-organic-form-study/v0.1`

The source deliberately authors a compact/open stylized tree rather than scaling the existing sapling:

- 6 tapered trunk points;
- 5 authored branch chains;
- 6 leaf clusters / 25 planar leaf blades;
- 6 flex zones, all still `DECLARED_NOT_DEFORMATION_TESTED`;
- minimum authored clear lower-trunk intent: `1.50 m` before the first primary branch;
- actual lowest primary branch root: `1.62 m`;
- target only: `proxy:nature-tree-east-b`;
- target envelope: `1.6 x 1.6 x 4.0 m`;
- placement truth: `PRESERVE_TARGET_CENTER_XY__GROUND_SOURCE_MIN_Z__NO_FORM_SCALE__NO_EXTRA_ROTATION`;
- handoff state remains `CANDIDATE_REPLACEMENT_NOT_COMPOSED`.

A Nature-local evidence layer was added:

`axm.nature-compact-tree-envelope-evidence/v0.1`

It does not compose the Map. It proves only that the source body itself fits the declared reserved envelope and that hidden receiving scale/rotation is not part of the contract.

## Exact structural evidence

Exact source digest:

`9c87cf26f02f7adee832908652942218ec779c9029a0611aae1fb66eb0f62f54`

Exact mesh digest:

`c7367ed5dcea6ebe39869c48fd653845b25c9a8725a2e637a1d6f2fbee1fa32f`

Generated body:

- vertices: `390`;
- triangles: `570`;
- degenerate triangles: `0`;
- finite vertices: PASS;
- bounded indices: PASS;
- strict trunk taper: PASS;
- all authored Organic design checks: PASS.

Exact generated bounds:

- X width: `1.4644696992904107 m`;
- Y depth: `1.0788037401570527 m`;
- Z height: `3.6856826895144033 m`.

Against the exact reserved proxy size `[1.6, 1.6, 4.0] m`, retained positive margins are:

- X: `0.13553030070958938 m`;
- Y: `0.5211962598429474 m`;
- Z: `0.31431731048559675 m`.

No source or receiver scale is used to achieve that fit.

Fail-closed controls cover:

- a smaller receiving envelope;
- a hidden `SCALE_TO_FIT` placement policy;
- drift of the clear-lower-trunk intent;
- silent promotion of map / visual / biology / deformation / runtime claims.

## Exact-head CI and retained artifact

Both exact-head PR workflows pass on `64116d63fc76daa1623b5fd5046a4e6074100bda`:

- **Organic compact east tree evidence** run `35059397282` — SUCCESS on Python 3.11 / 3.13;
- inherited **Nature organic form baseline** run `35059397292` — SUCCESS, preserving the existing sapling baseline path.

Retained artifact:

- name: `compact-east-tree-neutral-001-evidence`;
- artifact ID: **10432340162**;
- size: `45,628` bytes;
- exact head binding: `64116d63fc76daa1623b5fd5046a4e6074100bda`;
- GitHub archive SHA-256: `497fecc0d0803576ea28e286d0434edd00e7c344294cb02de647cc107bc86291`.

The archive was downloaded and independently rehashed to the same SHA-256. It retains exact source JSON, mesh JSON, evidence JSON, OBJ and front / side / top SVGs.

## Direct Organic visual observation

The retained SVGs were rasterized and directly inspected.

Within this source-wire scope:

- the front view reads as a compact five-arm open crown rather than a solid column;
- the lower trunk remains visibly clear below the first primary branch;
- the side view retains real fore/aft depth rather than collapsing into a flat silhouette;
- the top view shows multi-directional branching around the trunk rather than one planar fan;
- no obvious detached branch mass appears in these neutral wire views.

This is **Organic Form specialist observation only**. It is not an Art Director / Visual Observer scene-hierarchy PASS, botanical validation or deformation acceptance.

Scoped result:

**`PASS_COMPACT_SOURCE_ENVELOPE / HOLD_ENVIRONMENT_VISUAL_REPLACEMENT_AND_DEFORMATION`**

## Why other organic lanes were not changed

- **Character PR #2:** exact body remains at head `92ff1594d20ac363ee28dcfc46deacf3143f4c10`, source digest `64c39965...`, mesh digest `32adddbc...`; all 13 flex zones now have explicit neutral transition context, but proportions/topology/deformation remain held. The shallow shoulder root-ring overlap remains a handoff signal, not permission to reshape before visual review.
- **Animal PR #4:** Geometry owns the exact connected left-forelimb candidate at current head `feb4b24cd36bcc879173138d240754f71db34834`. Its static topology/self-intersection work does not create an Organic source defect. Organic did not alter the quadruped or connected candidate while visual/deformation acceptance is open.
- **Existing Nature sapling:** local sway and receiving-scene motion have passed their current visual hierarchy gates; Materials / Procedural / UC work already depends on its exact identity. This activation adds a second source body instead of destabilizing that lineage.

## Truth boundary / non-claims

This activation does **not** establish:

- botanical species correctness or biological growth;
- that the compact proportions are aesthetically superior in the Map;
- production connected vegetation topology or self-intersection freedom;
- rigging, weights, branch mechanics or deformation quality;
- physical wind or biomechanical response;
- Materials / final LookDev;
- target-engine import, runtime cost or LOD behavior;
- collision, navigation or gameplay suitability;
- replacement acceptance for `proxy:nature-tree-east-b`;
- CANON, production readiness, Nature mastery or Organic Form mastery.

## Root gate

- **Truth:** exact source/mesh digests, envelope dimensions, workflow heads, retained archive digest and non-claims are recorded separately. A source-envelope PASS is not relabelled scene acceptance.
- **Agency / non-domination:** Organic owns source form; Environment owns receiving composition; Visual Observer / Art Direction own perceptual acceptance; VFX/Rigging own deformation behavior; Runtime owns target-host cost.
- **Continuity:** PR #6 stacks on the exact Nature Organic source branch and does not rewrite the established sapling lineage. Rollback is branch/PR-local and `axm-create-me` contains coordination only.
- **Wisdom before speed:** one precise missing source dependency was filled before adding another vegetation family, procedural generator, material system, wind response or UC abstraction.

## Handoffs

- **Environment / World Art:** consume this exact source digest/mesh in the fixed seed-29 scene at `proxy:nature-tree-east-b`, preserving target center XY, grounding source min-Z, and using no form scale or extra rotation. First comparison should isolate proxy → source only; do not simultaneously add Materials, Weather changes or other replacements.
- **Visual Observer / QA:** inspect that fixed receiving-scene A/B, especially the elevated-oblique foreground occlusion/hierarchy question. Source-wire readability does not answer scene hierarchy.
- **3D Art Director:** decide whether the new body actually reduces the east-foreground blockout while retaining a useful Nature silhouette. No aesthetic promotion is requested from the envelope fit alone.
- **VFX / Rigging / Animation:** all six flex zones remain untested. Do not inherit the original sapling response or Animal rig evidence onto this new body.
- **Procedural Design:** do not add variation until one receiving-scene instance is visually retained; this is a second source body, not automatic evidence for a new generic vegetation family.
- **Technical Art / UC Integration:** no new UC adapter is requested until a receiving need exists; source-domain Nature semantics remain here.

## Next Organic Form pass

1. Consume Environment / Visual QA / Art Direction evidence on the exact compact-tree receiving comparison before reshaping this candidate.
2. Consume direct Character proportion review before changing that neutral body.
3. If Animal connected topology receives visual acceptance, let Rigging deform that exact topology before Organic changes neutral form.
4. Do not proceduralize, animate or promote the compact tree from envelope fit alone.
