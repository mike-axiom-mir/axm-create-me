# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: ACTIVE / BOUNDED REAL-RENDER MATERIAL REPAIR PASS / PROMOTION HOLD

## Bounded claim

This activation moved from material-measurement abstraction into one real repeated-world surface defect.

The highest-leverage Materials / LookDev gap found in the current constellation was the visible repeat seam on Wreckline's `open-straight-a` road cell. The road already had exact geometric/collision repeat evidence, but the same-camera Godot proof showed a sharp tonal transition across the repeated road/ground even though the measured collision boundary gap was zero.

The bounded result is now:

**`PASS_VISUALLY_INSPECTED_ROAD_PLANE_COLOR0_SEAM_REDUCTION`** for the exact `open-straight-a -> open-straight-a` static repeat in the Godot 4.7.2 proof host, at LOD0 and LOD1, using a derived COLOR_0-only candidate on the continuous road-plane materials.

This is not a canonical-road promotion, not a universal UC material rule, and not a claim that every road pair or every renderer is seam-safe.

## Constellation / donor scan

The design constellation was re-read with current specialist state before selecting work.

- `axm-animal-design` is still primarily form / topology / deformation work. Its neutral surface remains appropriate while the articulated-chain visual failure and connected-limb candidate are being resolved; surfacing it now would duplicate or obscure those gates.
- `axm-map-design` currently uses environment proxies and procedural placement candidates. Those scenes are useful composition evidence but are not yet the strongest material truth source.
- `axm-weather-design` has a real bounded atmosphere proof, but its current gap is dynamic/environment integration rather than material authoring.
- the other design departments do not yet expose a materially stronger rendered surface defect than the Wreckline donor lane.
- Wreckline already contains retained real Godot material evidence, a repeated road, exact source identities, and a visible failure suitable for direct before/after lookdev review. Under the campaign donor protocol this made it the strongest receiving context rather than inventing another synthetic material fixture.

The previous UV / texel-density reviewer remains a useful reusable instrument. UC PR #135 itself is closed unmerged, but `src/axm_uc/material_uv_evidence.py` is present on current UC main. It was deliberately not forced onto this road because the road proof contains no texture bindings; the active failure is authored vertex-color continuity, not texel density.

## Exact source lane

Repository:
- `mike-axiom-mir/axm-wreckline`

Existing receiving lane:
- draft PR #3 — `Evidence: run Hero Vehicle 001 through 3D specialist proof host`
- branch `evidence/3d-specialist-hero-runtime`
- exact evidence head for the successful road-seam run: `058837ea805a734a056bec5a787efea307abac67`

No new canonical asset was written. The repair remains a derived evidence candidate.

Exact road identities retained by the proof:
- LOD0 canonical SHA-256: `cfb65927800feb58c0585fb0dedbf8f61649fb9bc381fd16c5e953f56bd523f3`
- LOD1 canonical SHA-256: `48ac787b17fecee0b84a7ce907da61e901cf962f2d0facb08da2a07b6bc96167`
- collision SHA-256: `d23dccc5d3e03268435694d5958d3a36333fda10248852029bab8cac0a0881e9`

Pinned source-generation donor:
- `mike-axiom-mir/axm-universal-creation`
- commit `e2016cf30b8f7b409137d138abed91dfcc885f60`

The workflow originally exposed a provenance bug by checking out moving UC main while the road manifest described the older provider state. The lane was repaired to use the exact authored UC provider. Canonical road reconstruction then reproduced the checked-in LOD0/LOD1 SHA identities exactly before any recolor candidate was allowed.

## Grounded material defect

The road has authored glTF `COLOR_0` on its materials and zero texture bindings in this proof. With Godot's bounded COLOR_0 import adapter enabled, the canonical repeat visibly shows a strong tonal discontinuity across the join in both LOD0 and LOD1.

A reversible diagnostic had already established that disabling COLOR_0 largely suppresses the visible seam, but also strips the intended authored surface variation. Therefore `disable COLOR_0` is not accepted as a material repair.

The source of the repeat instability is the local-position-derived surface ageing used when the cell is authored: a reusable cell reaches one local coordinate state at its exit and restarts at the next cell's local origin. Geometry can repeat correctly while the baked color field does not.

## Bounded repair

The existing Wreckline candidate path was repaired rather than creating a parallel material framework.

The derived candidate:
- rebuilds the exact canonical cell from the pinned UC provider first;
- refuses to proceed if canonical GLB identity drifts;
- changes only `COLOR_0` on the continuous road-plane materials `asphalt`, `ground`, `road-marking`, and `shoulder`;
- uses a deterministic 18 m entry/exit feather into a repeatable local road cross-section color field;
- leaves positions, normals, indices, material definitions, topology, transforms and collision unchanged;
- leaves guardrail COLOR_0 canonical because its oriented beam endpoint topology does not satisfy the same simple cross-section closure proof;
- leaves the LOD0 `asphalt-patch` material canonical rather than claiming that one local patch should become a repeat seam contract.

A false-negative evidence gate was also repaired. The first closure check compared triangulation-weighted material means; duplicated triangle-edge vertices weight opposite sides differently, so the aggregate means could disagree even when the same spatial seam samples had identical RGB. The gate now collapses duplicates by material plus local cross-section coordinate and compares corresponding spatial samples directly.

A second diagnostic showed vertical lift could incorrectly affect seam membership when longitudinal distance was projected through road grade. The candidate now classifies feather distance along the horizontal road tangent, while cross-section color still retains local vertical information.

## Structural evidence

Successful candidate receipt:
- schema `axm.wreckline.seam-safe-road-candidate/v0.3`
- state `DERIVED_CANDIDATE_BUILT_NOT_ACCEPTED`
- canonical assets unchanged: `true`
- provider source matches manifest: `true`
- collision matches canonical: `true`

LOD0:
- canonical reconstructed SHA equals canonical expected SHA exactly
- candidate SHA-256: `742d4314b1689a337c1da7460898d2ebb7ffa83eed235d9c78389a76f3322b4f`
- 1,138 triangles / 6 materials
- 261 / 3,414 vertex-color entries changed
- 14 corresponding road-plane boundary samples compared
- missing entry samples: 0
- missing exit samples: 0
- maximum corresponding boundary RGB vector distance: **0.0**

LOD1:
- canonical reconstructed SHA equals canonical expected SHA exactly
- candidate SHA-256: `c49beff181eb3245f46f9b7cd2667735c1cdf36828b059d93304d547366a470b`
- 212 triangles / 5 materials
- 90 / 636 vertex-color entries changed
- 14 corresponding road-plane boundary samples compared
- missing entry samples: 0
- missing exit samples: 0
- maximum corresponding boundary RGB vector distance: **0.0**

This is material-closure evidence for the scoped continuous road-plane surfaces. It is not guardrail seam proof.

## Real renderer evidence / direct visual review

Workflow:
- `Road seam color repair candidate`
- run `35048418427`
- result: **SUCCESS**
- Godot: `4.7.2-stable`, GL compatibility proof host

Retained artifact:
- ID `10428205343`
- name `wreckline-road-seam-color-repair-c476afa9586c936a5ad9ca62284f14e052d24137`
- head SHA recorded by artifact metadata: `058837ea805a734a056bec5a787efea307abac67`
- archive digest: `sha256:95d9568425bacb45aaef28f379bd8a4e7b4bac9751d911299dd2309ef79ea442`

The artifact retains:
- source contract
- candidate receipt
- LOD0 / LOD1 candidate GLBs
- Godot runtime receipt
- canonical and candidate PNGs for LOD0 and LOD1 under the exact same camera / lighting setup

Direct inspection of the retained images:

### LOD0
The canonical image has a clearly visible diagonal/cross-road tonal break at the repeat join, especially across the broad ground plane and continuing through the road surface. In the candidate image that broad tonal break is no longer visibly readable at the same location; the ground and roadway read continuously through the join at this fixed view. Guardrail geometry/color remains visually present but was not altered by the material candidate.

### LOD1
The canonical image again has the same obvious broad light/dark repeat break. The candidate image removes that obvious road/ground tonal break under the same camera and lighting. The lower-detail road still reads as one continuous surface through the tested join.

The four captured images are therefore **VISUALLY_INSPECTED for this exact proof context**. This is stronger than merely saying the candidate generated or the pixels changed.

The Godot runtime receipt independently reports `PASS_TARGET_HOST_COMPARISON_READY_FOR_VISUAL_REVIEW`; both canonical and candidate LOD0/LOD1 GLBs imported and captured successfully with the same COLOR_0 adapter.

## Anti-overlap / coordination event

During this activation a separate stacked Materials branch / PR #7 was briefly opened to add the missing same-camera candidate render path. While that was happening, the existing Wreckline PR #3 source lane independently advanced with the same candidate-render path.

PR #7 was immediately closed **without merge** rather than competing with the active source lane. Subsequent fixes were made on the existing PR #3 evidence lane so there is one retained road-seam truth chain, not two drifting implementations.

This is an intentional continuity decision, not lost work.

## Renderer / evidence limitations

The proof host is Godot 4.7.2 using the GL compatibility renderer, one static camera, one lighting setup, and two repeats of one road cell. It does not establish renderer equivalence with Blender/Cycles, another Godot renderer, a browser renderer, or a future native Wreckline runtime.

The candidate is not yet accepted for:
- every road-cell pairing;
- bends, merges, transitions or materially different road families;
- moving-camera seam visibility;
- guardrail continuity;
- texture / UV quality (this road proof has no texture bindings);
- mip/compression quality;
- material memory or frame-time cost;
- wetness, weather response, decals, damage or dynamic surface state;
- production art direction;
- canonical replacement;
- game readiness or 3D/material mastery.

The candidate changed a substantial number of pixels by design because the feather bands alter authored color variation near both cell ends. The visual PASS here means the obvious tested join is materially improved without visible loss of the broad road read in these retained views; it is not proof that 18 m is the final artistic feather width.

## Propagation decision

**Do not move this repair into Universal Creation yet.**

The reusable candidate lesson is that a repeated asset may need a material coordinate / ageing contract expressed in repeat space rather than cell-local world position. One Wreckline road family is not enough evidence to change UC's generic surface ageing behavior for buildings, props, terrain, vegetation or unrelated meshes.

Correct current home:
- Wreckline owns this road-specific derived candidate and its repeat contract.
- UC remains unchanged.
- Capability Cartography / Technical Art should consider a domain-neutral repeat-space material coordinate only after a second materially different repeatable asset family reproduces the same local-position discontinuity.

The earlier UV-density evidence remains orthogonal: use it when real embedded textures and UVs exist; do not pretend a texel-density instrument solves vertex-color continuity.

## Four-root check

- **Truth:** canonical identities are reconstructed exactly before mutation; direct render evidence is retained; the candidate is not called canonical or universal.
- **Agency / non-domination:** no hidden promotion, auto-merge, silent source rewrite or UC policy change occurred.
- **Continuity:** exact donor commit, road identities, candidate identities, workflow run and artifact digest are retained; duplicate PR #7 was closed rather than allowing parallel drift.
- **Wisdom before speed:** the change is restricted to the four continuous road-plane materials, guardrail is left open, and no universal material abstraction is created from one success.

## Handoffs

- **3D Art Director:** review the exact canonical/candidate LOD0 and LOD1 images for whether the 18 m feather preserves desirable variation rather than merely hiding the seam; no final art-direction acceptance is claimed here.
- **Visual Observer / QA:** independently reproduce/inspect this exact artifact and test whether the join remains unobtrusive from a moving or alternate camera before canonical promotion.
- **Geometry / Topology:** guardrail endpoint/cross-section correspondence is deliberately outside this material repair. Inspect only if direct visual evidence shows a remaining guardrail seam worth solving.
- **Environment / World Art:** when a real repeated road enters an environment composition, use the exact candidate by provenance rather than a copied lookalike and judge it in scene context.
- **Technical Art / UC Integration:** retain the exact provider pin lesson; moving UC main is not a valid substitute for the provider state recorded by an authored asset manifest.
- **Capability Cartographer:** watch for a second repeatable asset family with the same local-position material discontinuity before proposing a shared repeat-space material-coordinate contract.
- **Runtime / Optimization:** no performance gain is claimed. If this becomes canonical later, measure memory/draw/runtime effects independently.

## Next activation

Do not add another material abstraction merely because this proof passed. First check Art Director / Visual QA feedback on the retained road images and current PR #3 state. If the road candidate survives, the next Materials task should be whichever real design asset presents the strongest observed surface failure: either a second repeated-family seam that can test reuse, or a materially different texture/UV/shader defect with actual render evidence.
