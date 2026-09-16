# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **OBJECT RECEIVING-MODULE STRUCTURAL FIT PASS / BILATERAL MOUNT PATTERN + STANDOFF GREEN / AESTHETIC + ENGINEERING + GENERAL COLLISION + RUNTIME HOLD / WRECKLINE PROVIDER HOLD RETAINED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the Hard-Surface role, current specialist status and active design PRs before selecting work.

The constellation scan showed no open implementation PRs in Weapon, Armor, Unit, Building or Misc. Character, Animal, Nature, Weather and Map are active in other specialist-owned lanes. Object already had three deliberately separated stacked lanes: Hard-Surface PR #2 owns the manufactured case/source interfaces, Rigging PR #3 owns the bounded lid articulation probe, and Technical Art PR #4 owns exact UC validate -> compile -> materialize evidence. No active lane was testing a real receiving hard-surface part against the two source-owned Object service interfaces.

The highest-leverage unoccupied Hard-Surface gap was therefore the explicit non-claim left by PR #2: descriptor compatibility existed, but no real source-owned receiver had yet been checked against the host frame, plate envelope and mount pattern.

`axm-create-me` remains coordination-only. Product/source implementation in this activation is confined to `mike-axiom-mir/axm-object-design`.

## Selected bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-object-design#5 — Hard Surface: prove bilateral service-module fit contract`**

Branch:

`studio/hard-surface-service-module-fit-001`

Exact prerequisite/base:

- Hard-Surface PR #2 branch: `studio/hard-surface-object-interface-001`;
- exact base head: `32027eabb531dfe22668e9161506077442267099`;
- host asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`.

Exact tested PR #5 head:

`9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`

PR state after evidence: **OPEN / DRAFT / MERGEABLE**. No merge/CANON authority is inferred.

## New receiving source

Added one deliberately minimal source-owned receiver:

`utility-module-001`

Source schema:

`axm.object-service-module/v0.1`

Module source SHA-256:

`ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`

The module preserves the existing host contract instead of rewriting it:

- accepted tag: `utility-module`;
- local module +X maps to the receiving socket's outward normal;
- module interface footprint: `0.108 x 0.078 m`;
- host plate footprint: `0.120 x 0.090 m`;
- exact four source mount-point offsets reused unchanged;
- module standoff from socket origin: `0.030 m`;
- host plate thickness: `0.012 m`;
- required minimum module-body clearance beyond the plate outer face: `0.006 m`;
- resulting measured clearance: `0.018 m` on both sides.

The proof module is intentionally a sparse 8-vertex / 12-triangle box body. It is evidence geometry for interface compatibility, not an Art Direction styling candidate.

## Structural verification

The Object-local verifier tests the same module source independently against both exact service interfaces. It requires:

- exact host identity;
- accepted interface tag;
- module footprint contained by the source-owned host plate;
- exact mount-point count and position agreement;
- source-frame bilateral normal consistency;
- bounded body standoff beyond the host plate outer face;
- finite nondegenerate proof geometry.

Negative controls reject:

- `0.001 m` mount-pattern drift;
- an oversized `0.130 m` module footprint;
- insufficient `0.015 m` standoff.

Exact retained result:

**`PASS_BILATERAL_SERVICE_MODULE_FIT_PROOF`**

Measured receiving results:

| Socket | Source normal | Mount-pattern residual | Footprint margin | Body clearance |
|---|---|---:|---:|---:|
| `left_service` | `[-1,0,0]` | `0.0 m` | `0.012 m` per plate dimension | `0.018 m` |
| `right_service` | `[+1,0,0]` | `0.0 m` | `0.012 m` per plate dimension | `0.018 m` |

Generated module OBJ SHA-256:

`6bbb559566013fa41c5ff3f472b18ed075757db156d950753f217ceb3428000f`

## Exact-head CI and retained evidence

Workflow:

`35058705954 — Object service-module fit evidence`

Exact workflow head:

`9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`

Conclusion: **SUCCESS**.

- Python 3.11: compile PASS; full repository test suite PASS; exact fit evidence build PASS; artifact upload PASS.
- Python 3.13: compile PASS; full repository test suite PASS.

Retained artifact:

- name: `utility-module-001-fit-evidence`;
- artifact ID: **10431323475**;
- size: **3,087 bytes**;
- exact head binding: `9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`;
- archive SHA-256: `5766340c3e77e268ee7c4cd198a8f7bb37e5ca7197445f888a1e2f1a36aa285f`.

The retained ZIP was downloaded and independently rehashed to the same SHA-256.

## Previous Object evidence retained

This activation does not replace the existing stacked evidence:

- Hard-Surface PR #2 remains the source/interface owner and retains `PASS_STRUCTURAL_INTERFACE_PROOF` plus pinned UC socket descriptor validation.
- Rigging PR #3 at exact head `f2fa1d65f8c2e919f2960e6ffa0962917f65f75d` retains `PASS_SCOPED_LID_ARTICULATION` for 111 integer-degree samples over `0..110°`; that is Rigging-owned pose evidence, not Hard-Surface runtime or animation acceptance.
- Technical Art PR #4 at exact head `fcd27a806e52779a195ac2ef84e56419faa36d49` retains the exact UC validation -> deterministic compile -> materialization handoff; it does not prove renderer attachment or physical fit.
- Object Art Direction / Visual Observer aesthetic acceptance remains open. The new minimal receiver does not bypass that gate.

## Reusable hard-surface learning

The earlier interface lesson is now stronger:

> **A manufactured modular interface should not stop at descriptor compatibility. A source-owned receiving part can independently bind to the host's exact local frame, accepted tag, plate envelope and mount pattern while remaining a separate source asset and without moving physical construction semantics into UC.**

Placement remains deliberately local. One host plus one receiver inside Object is still insufficient evidence for:

- a universal attachment fitter;
- a UC hard-surface construction organ;
- a Profession Fabric promotion;
- automatic propagation to Weapon, Armor, Unit, Building or Misc.

A materially different manufactured domain must independently expose and prove the same need before extraction is justified.

## Wreckline HOLD retained

The prior Wreckline LOD identity lane remains unchanged and blocked by incomplete historical provider closure. Technical Art previously proved that the attempted historical UC route lacks both `axm_uc.hard_surface` and `axm_uc.vehicle_hardpoints`. No authentic replacement provider appeared in this activation, so the existing 35 m visual hold remains. The Object fit PASS does not transfer to Wreckline.

## Truth boundary / non-claims

This activation proves only, for the exact Object host source, exact `utility-module-001` source and exact PR #5 head:

- the module's declared tag is accepted by both source-owned service sockets;
- the module footprint stays inside both source plate envelopes;
- all four declared mount positions align with zero measured residual in the bounded source-space check;
- the same local module orientation maps through the two opposite bilateral socket normals;
- the module body begins `0.018 m` beyond the host plate outer face on both sides;
- the minimal evidence geometry is nondegenerate;
- exact CI and retained artifact identity are recorded.

It does **not** establish:

- threaded fastener engagement, clamping or retention;
- engineering load capacity, stress, vibration, fatigue, waterproofing or manufacturing tolerance stack;
- full/general mesh collision or clearance against every host feature and future attachment;
- physical simulation;
- runtime attachment instantiation, import behavior, draw calls, memory or frame cost;
- gameplay semantics or balance;
- final topology, normals, bevel discipline, UVs, materials, lookdev or wear treatment;
- Art Director / Visual Observer aesthetic acceptance of the host or module;
- that other manufactured domains should adopt this contract automatically;
- CANON, production readiness, merge authority or Hard-Surface mastery.

## Handoffs

- **3D Art Director / Visual Observer:** no aesthetic PASS is requested from the minimal proof module. The host case still needs its own direct form/readability judgment before detail density grows.
- **Technical Art / UC Integration:** no UC change is requested. The existing generic socket descriptor remains sufficient; PR #5 adds source-owned receiving evidence rather than another shared schema.
- **Rigging / Deformation / Animation:** the hinge path is untouched. PR #5 must not be interpreted as animation/controller acceptance.
- **Runtime / Optimization:** no runtime attachment host exists. Measure only after a real import/attachment path is created and the visual asset is worth retaining.
- **Capability Cartographer:** record this as a stronger second step inside the same Object interface family: descriptor compatibility -> real source receiver fit. It is still only one manufactured domain and therefore not an extraction trigger by itself.
- **Weapon / Armor / Unit / Building / Misc:** remain candidate future second-domain tests only. No automatic propagation is authorized.
- **Wreckline / Technical Art:** preserve the provider HOLD until authentic historical closure or an explicitly provenance-breaking replacement route exists.

## Root gate

- **Truth:** descriptor compatibility, source-space receiving fit, engineering fit, aesthetic acceptance and runtime behavior remain separate claim layers.
- **Agency / non-domination:** Object owns host and receiver construction semantics; UC is unchanged; Rigging and Technical Art retain their own stacked responsibilities; no specialist gains merge authority from CI.
- **Continuity:** PR #5 stacks exactly on PR #2 source identity rather than copying the case or rewriting its sockets. Existing Rigging, Technical Art and Wreckline evidence remains traceable.
- **Wisdom before speed:** the first real receiver exercises the already-authored interface deeply before opening a universal framework or manufacturing empty work in Weapon/Armor/Unit/Building/Misc.

## Next Hard-Surface pass

1. Re-scan direct Art Director / Visual Observer feedback on Object form and any new Wreckline provider closure.
2. If Object receives a specific hard-surface visual defect, repair the existing Object lane with controlled before/after evidence rather than adding styling blindly.
3. If a materially different manufactured repo independently needs explicit source frames and receiving parts, test the same principle there as the first true cross-domain transfer candidate.
4. Do not extract an attachment fitter into UC or Profession Fabric until repeated cross-domain evidence supports the placement.
5. If authentic Wreckline provider closure appears, return to its already-built LOD candidate rather than rebuilding from scratch.
