# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_SERVICE_SURFACE_REFERENCE_FRAMES / EXISTING OBJECT PR #26 ADVANCED / STACKED BASE #17 INTEGRATED WITHOUT REWRITE / EXACT HEAD 6A9593B9 / ALL 10 EXACT-HEAD WORKFLOWS GREEN / HOST 468V 812T UNCHANGED / TWO SOURCE-OWNED PLANAR FRAMES / UV + MATERIAL + TRANSPORT AUTHORITY HELD / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist status, all current specialist status lanes, and the live design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product contracts, verifier, tests, CI and retained evidence remain in `mike-axiom-mir/axm-object-design`. Only this Hard-Surface status file changed in the coordinator repository.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Object latch result remains historical truth at prior Hard-Surface head `8a23c32ebc6b4e1188d2961c878d9dc365bb6da7`: intentional neutral engagement overlap is preserved, lid motion still requires the exact 50° release state, and continuous release/re-engagement clearance remains unproved. This activation did not rewrite that mechanism.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no stronger grounded manufactured source target was present; no placeholder geometry was invented.
- **Character:** active Organic / Geometry / Rigging work remains form/deformation-led, not a Hard-Surface owner gap.
- **Animal:** active Rigging / Materials / Animation / Runtime work remains representation/transport/deformation-led; no manufactured-source defect was returned.
- **Building / Map:** Building Geometry is now realizing the prior Hard-Surface 604 source-intent equivalence domain while Environment, Technical Art and Runtime own downstream receiver/storage decisions. No source rewrite was requested, so Hard Surface did not duplicate that lane.
- **Nature / Weather:** current work remains VFX, Materials, procedural and world receiving.
- **Object latch:** source mechanical admissibility is already owned by the prior Hard-Surface pass and remained green after stacked-base integration.
- **Object service surfaces:** this was the strongest fresh owner gap. Hard Surface already owned two stable manufactured face identities, while Materials, Procedural and Technical Art independently reconstructed their source-local orientation/basis. The repeated downstream need was real, but source-space reference-frame meaning was still implicit.

No new PR was opened. The existing Object Hard-Surface surface-identity lane was advanced.

## Highest-leverage bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR:

**#26 — `Hard Surface: source-own reviewed service-surface identities`**

Head branch:

`studio/hard-surface-lid-inner-surface-identity-001`

Base branch:

`studio/hard-surface-front-latch-pivot-interface-001`

Exact final tested head:

**`6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`**

Observed PR state:

**OPEN / DRAFT / MERGEABLE**.

## New Object-local source-owner contract

Added:

**`axm.object-hard-surface-service-surface-reference-frames/v0.1`**

Contract path:

`assets/modular-equipment-case-001/service-surface-reference-frames-001.json`

The contract does not create new geometry and does not author UVs. It source-owns only a stable source-space planar frame for each already-owned service surface.

### `lid_inner_service_surface`

- owner component: `lid_shell`;
- selector: `source_local_min_z_face`;
- origin policy: selected-face center;
- exact observed origin: `[0.0, 0.0, 0.312] m`;
- primary axis: `+X` = `[1,0,0]`;
- secondary axis: `+Y` = `[0,1,0]`;
- outward normal: `-Z` = `[0,0,-1]`;
- orientation parity: `-1`;
- primary / secondary physical spans: `0.78 m × 0.48 m`.

### `front_service_panel_outer_service_surface`

- owner component: `front_service_panel`;
- selector: `source_local_min_y_face`;
- origin policy: selected-face center;
- exact observed origin: `[0.0, -0.258, 0.156] m`;
- primary axis: `+X` = `[1,0,0]`;
- secondary axis: `+Z` = `[0,0,1]`;
- outward normal: `-Y` = `[0,-1,0]`;
- orientation parity: `+1`;
- primary / secondary physical spans: `0.468 m × 0.156 m`.

This separates four facts that had previously been easy to conflate:

1. source surface identity;
2. source surface reference frame / orientation;
3. UV/material/texture mapping;
4. downstream target/runtime transport.

Hard Surface owns only the first two.

## Exact downstream observation consumed without taking ownership

The verifier pins the current Materials atlas review only as a compatibility observation:

- repository: `mike-axiom-mir/axm-object-design`;
- PR: #6;
- exact head: `4c12a0a57f6aa8778cff41efad321e13567c6c91`;
- path: `lookdev/service_dark_atlas_pack_review_001.json`;
- Git blob: `2b95fcc1fcc523576eca08dbf47a140a727ab598`;
- schema: `axm.object-service-dark-atlas-pack-review/v0.1`.

Exact compatibility observed:

- lid inner: `SOURCE_LOCAL_X_TO_U__SOURCE_LOCAL_Y_TO_V`;
- front service panel: `SOURCE_LOCAL_X_TO_U__SOURCE_LOCAL_Z_TO_V`.

That match does **not** promote the Materials review basis into a source UV set. Materials retains UV projection, density, atlas packing/padding, texture and appearance authority.

The current Procedural lane independently exercises the same two basis planes for deterministic atlas replay, and Technical Art currently reconstructs the same source orientation during transport. Those repeated consumers are the reason source frame identity is useful; they do not transfer their acceptance back into Hard Surface.

## Smallest implementation

Added only to Object PR #26:

- `assets/modular-equipment-case-001/service-surface-reference-frames-001.json`;
- `tools/verify_service_surface_reference_frames.py`;
- `tests/test_service_surface_reference_frames.py`;
- `.github/workflows/object-service-surface-reference-frames.yml`.

The verifier rebuilds the exact host, binds both existing source surface-identity contracts, requires unit orthogonal tangent/normal axes, binds selector-to-outward-normal meaning, computes selected-face centers and physical spans, records orientation parity, verifies Materials basis/span compatibility, and fails closed on authority inflation.

Retained negative controls reject:

- silent tangent-axis mirroring;
- selector / outward-normal disagreement;
- downstream Materials basis drift;
- source surface-identity selector drift;
- Hard-Surface UV-authority expansion;
- silent Technical-Art transport adoption.

## Stacked-lineage continuity repair

The first frame head `a0a75f66d5238dd30402066e0067dbe8c82e737b` passed the new reference-frame workflow, but exact-head constellation CI exposed a real stacked-PR continuity problem: PR #26 had been branched from older PR #17 base `6086f39a...`, while the base branch had since advanced to `8a23c32e...` with the mechanical-state policy. GitHub therefore invoked the newer base workflow against a child checkout that did not yet contain its verifier.

I did **not** disable, skip or weaken that inherited check.

The exact current base head `8a23c32ebc6b4e1188d2961c878d9dc365bb6da7` was integrated into PR #26 as the second parent of merge commit:

**`6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`**

The merged tree preserved the four exact base additions unchanged:

- `.github/workflows/object-front-latch-mechanical-state-policy.yml`;
- `assets/modular-equipment-case-001/front-latch-mechanical-state-policy-001.json`;
- `tests/test_front_latch_mechanical_state_policy.py`;
- `tools/verify_front_latch_mechanical_state_policy.py`.

No force-push or history rewrite was used. The child PR now records the current stacked base explicitly and the previously failing inherited mechanical-state workflow passes again.

## Exact structural result

Dedicated frame workflow:

**`35199004996 — Object service-surface reference-frame evidence`**

Result:

**SUCCESS**.

Exact tested head:

`6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`

Both Python 3.11 and 3.13 jobs completed successfully. Python 3.11 also materialized the exact Materials donor, rebuilt the exact frame evidence, validated the retained receipt and uploaded the retained artifact.

Scoped result:

**`PASS_SOURCE_OWNED_SERVICE_SURFACE_REFERENCE_FRAMES`**

Exact retained observations:

- host geometry: **468 vertices / 812 triangles**, unchanged;
- frame count: **2**;
- Materials bases match the source-owned frames: `true`;
- source geometry changed: `false`;
- existing source surface identities changed: `false`;
- production UV authored: `false`;
- material assignment authored: `false`;
- Technical-Art transport accepted: `false`;
- host mesh digest: `315e61fbbe88242bba9bb373f08790fc2f7da249c41989824225ab004908508f`;
- reference-frame contract SHA-256: `0dcdb7689aedb385adc470fb668e4963101adfd34283db50ea21a55b73f2476a`;
- canonical reference-frame contract digest: `f309e47895ff70062fd2791c154bac08dcf625ec16ff58d8cd92d491efb8b896`.

All **10** pull-request workflow families associated with exact head `6a9593b9...` completed **SUCCESS**, including the newly restored front-latch mechanical-state policy workflow. This confirms the stacked-base integration did not regress the existing Object hard-surface/interface suite.

## Retained evidence

Artifact ID:

**`10486513489`**

Artifact name:

`modular-equipment-case-001-service-surface-reference-frames-6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`

Uploaded size:

**`8,407 B`**

GitHub SHA-256:

**`92a0e75f7e232b0ae50bcc822431f4683cf652bcc20ed983802a1f60a8b541a9`**

The archive was downloaded and independently rehashed to the exact same SHA-256. It contains **9 files / 17,759 uncompressed bytes**, including the exact head, both source surface-identity contracts, host source, exact Materials donor/head/blob receipts, frame contract and final frame evidence.

## Handoffs recorded

- Object Hard-Surface PR #26: comment `5711257816` — exact source frames, artifact, authority boundary and stacked-base continuity repair.
- Object Materials PR #6: comment `5711260315` — optional explicit frame rebind; no UV/material adoption inherited.
- Object Procedural PR #11: comment `5711261643` — future deterministic replay may pin source frame instead of rediscovering primitive axes; existing exact evidence remains valid.
- Object Technical Art PR #28: comment `5711262948` — source orientation is now explicit, but source→UC conversion, tangent basis, texture transport, target import and downstream acceptance remain independently owned and must be retested.

No Runtime, Technical Art, Materials, Procedural, Geometry, Rigging, Animation, Art Direction or QA implementation was silently rewritten.

## Reusable Hard-Surface learning

The strongest reusable manufactured-surface lesson from this activation is:

> **A source-owned manufactured surface identity is not yet a complete orientation contract. When multiple independent consumers repeatedly reconstruct the same planar basis, Hard Surface should source-own a stable reference frame — origin policy, tangent axes, outward normal and orientation parity — while leaving UVs, materials, textures and target transport to their proper owners.**

This avoids both failure modes:

- downstream lanes silently inventing source orientation semantics; and
- Hard Surface overreaching by turning a geometric frame into a production UV/material/transport decision.

The pattern remains **Object-local**. Two service surfaces in one equipment-case family are not enough evidence for a universal surface-frame ontology in Universal Creation or Profession Fabric. A materially different manufactured family should reproduce the need first.

## Truth boundary / explicit non-claims

This PASS does **not** establish:

- production UVs or source UV mutation;
- final texel density, atlas size, packing or padding;
- material assignment, texture, decal or wear acceptance;
- tangent-space correctness;
- source→UC axis conversion correctness;
- target-engine import/transport acceptance;
- Runtime cost or performance acceptance;
- final Art Direction or Visual-QA acceptance;
- manufacturing tolerances, loads or physical validity;
- a universal surface-frame schema in UC or Profession Fabric;
- CANON, production/game readiness or Hard-Surface mastery.

## Four-root check

- **Truth:** exact source identity, exact Materials donor bytes, exact axes, parity, spans, CI, artifact digest and the initial stacked-lineage failure are all retained rather than rewritten away.
- **Agency / non-domination:** Hard Surface owns only source surface identity/orientation; Materials keeps UV/lookdev, Procedural keeps derivation, Technical Art keeps transport, Runtime keeps performance, Art/QA keep visual acceptance.
- **Continuity:** the child PR was brought onto the exact current stacked base with a real two-parent merge rather than skipping an inherited workflow or force-rewriting history; all 10 exact-head workflows returned green.
- **Wisdom before speed:** only the repeatedly reconstructed planar source frame was promoted. No generic unwrap, atlas, tangent or UC ontology was invented from one Object family.

## Next Hard-Surface trigger

Re-scan the full manufactured constellation before extending Object again. Prefer a materially different Weapon, Armor, Unit, Building or Misc mechanism/surface if one becomes real enough to test this identity-vs-frame separation. If Materials, Procedural or Technical Art explicitly rebinds to the new frame, require their own exact retest; source PASS does not certify consumer transport or visual output. Keep Universal Creation and Profession Fabric unchanged until cross-domain repetition exists.
