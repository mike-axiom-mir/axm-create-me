# 10 — Procedural Design Specialist Status

Date: 2026-09-18  
State: **PASS_BOUNDED_HINGE_KNUCKLE_OWNER_PARTITION_FAMILY / THREE MATERIALLY DIFFERENT OUTPUTS / EXACT HARD-SURFACE OWNER + ANNULAR DONOR REUSED / SEVEN FAIL-CLOSED CONTROLS / EXACT CI + ALL COMPANION WORKFLOWS GREEN / NO SOURCE-RIG-DOWNSTREAM ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, this status lane, every current specialist status, and current repository / PR state across all eleven design repositories: Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination-only**. Product implementation, tests and retained evidence were added only to `mike-axiom-mir/axm-object-design`. No Universal Creation or Profession Fabric product code was added here.

The merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Full constellation scan

No lane was opened merely to satisfy cadence.

- **Weapon / Armor:** no active specialist PR family requiring Procedural intervention; repositories remain effectively at their initial design baselines.
- **Character:** current active work is already owned by Animation / Technical Art / Runtime around playback, accessor reuse and posed-normal caching; no stronger unowned procedural family surfaced.
- **Unit / Misc:** no active design lane stronger than the selected Object repeat.
- **Animal:** current repeated work is already owned by Rigging / Animation / Runtime; no proceduralization was taken from those owners.
- **Building:** existing Procedural receiver / seam / clearance families remain sufficient; current successor chart and source-clearance work is Geometry / Hard-Surface owned.
- **Nature:** existing Procedural response parameterization remains sufficient; current response/playback/receiver questions are VFX / Animation / Runtime owned.
- **Weather:** existing bounded seeded field family already owns deterministic weather-layout variation.
- **Map:** current articulated-Object service envelope, VFX receiving, playback and batching are Environment / VFX / Animation / Runtime / Technical-Art lanes.
- **Object:** selected. A fresh Hard-Surface owner-stack contract plus an already-built derived annular hinge mesh and a separate Rigging consumer now repeat the same exact body-versus-lid knuckle partition manually.

Current specialist status scan confirms the ownership boundary: Hard Surface owns exact knuckle source ownership and annular review geometry; Rigging owns parent binding and motion partition; Geometry owns structural shell representation; Technical Art owns transport / receiver adaptation; Animation owns time-domain playback; Runtime owns representation and device cost; Art Direction / Visual QA own perceptual acceptance. Procedural may automate the repeated **derived owner filtering** only, without inheriting any of those authorities.

## Selected repeated pattern

Repository: `mike-axiom-mir/axm-object-design`  
Existing Procedural PR: **#11 — `Procedural: bounded Object procedural and seeded variation families`**  
Exact Procedural head: **`e08b5aacd97e16f3fe8feea4995db2d0885b68a2`**  
PR state at verification: **OPEN / DRAFT / MERGEABLE**.

Fresh owner donor: Hard Surface PR #25 exact head:

**`172dd9ff5ed1fee3a21cd460c607f07ee0da7520`**

The exact source-owned axial owner sequence is:

**`body / lid / body / lid / body`** over knuckles **`b0 / l0 / b1 / l1 / b2`**.

The same owner split is already needed by Rigging PR #27, which treats `l0 / l1` as the moving lid set and `b0 / b1 / b2` as the fixed body set. The repeated creation operation therefore genuinely deserves a small deterministic family: derive exact review subsets from the existing Hard-Surface annular candidate by source owner, instead of manually filtering those groups again in each downstream review.

## Smallest reusable family

Added:

**`axm.object-hinge-knuckle-owner-partition-family/v0.1`**

Files added to the existing Object Procedural branch:

- `assets/modular-equipment-case-001/hinge-knuckle-owner-partition-family-001.json`;
- `tools/build_hinge_knuckle_owner_partition_family.py`;
- `tests/test_hinge_knuckle_owner_partition_family.py`;
- `.github/workflows/object-hinge-knuckle-owner-partition-family.yml`.

The implementation deliberately **reuses**, rather than copies, the exact Hard-Surface owner verifier and exact annular-mesh builder from owner head `172dd9ff...`. It pins exact donor Git blobs for the host source, owner-stack contract, bore-clearance contract and annular-mesh contract before generation.

The family parameter is only an owner subset over the exact allowlist **`body / lid`**. Requested owner order is canonicalized by the declared allowlist, so `body,lid` and `lid,body` produce the same full output. Unknown, duplicate or empty selectors fail closed. No arbitrary hinge count, size, segment count, owner label, source geometry or fallback partition is inferred.

## Three materially different outputs

The exact retained family contains three outputs:

| variant | exact knuckle IDs | knuckles | vertices | triangles |
|---|---|---:|---:|---:|
| `full` | `b0,l0,b1,l1,b2` | 5 | 240 | 480 |
| `body-only` | `b0,b1,b2` | 3 | 144 | 288 |
| `lid-only` | `l0,l1` | 2 | 96 | 192 |

All **3/3 generated mesh identities are distinct**. Reversing the requested owner order for the full variant reproduces the exact same canonical output.

Canonical family digest:

**`39973aae8bc433b92a4d84152e5e16f0bf916a8f6aef4d9db69050569b145522`**

This is not one lucky case: the full combined family, fixed-body subset and moving-lid subset have materially different membership, vertex counts, triangle counts and mesh identities while being derived from the same exact owner-backed annular candidate.

## Provenance pins

Exact Hard-Surface owner head:

**`172dd9ff5ed1fee3a21cd460c607f07ee0da7520`**

Exact donor Git blobs:

- host source: **`018e36bb08539f212d2c65e6408566e3540fd983`**;
- owner-stack contract: **`e4e7c95769c0827a6a019afd672ff4b20cd13541`**;
- bore-clearance contract: **`e94fbc0d960d949f49fc3a05edba74b706f2a87e`**;
- annular-mesh contract: **`39a52ad5ba8497a8a524d764bbf6744bb11cf54a`**.

Source host SHA-256 remains **`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`**. Procedural does not regenerate or replace that source.

## Failure bounds

Seven deliberate controls fail closed:

1. Hard-Surface owner-head drift;
2. owner-stack contract blob drift;
3. annular-mesh contract blob drift;
4. attempted `rig_parenting_authorized=true` authority expansion;
5. attempted `automatic_downstream_adoption=true` authority expansion;
6. duplicate owner selector;
7. unknown owner selector.

Failure policy:

**`FAIL_CLOSED_NO_UNKNOWN_OWNER_NO_DUPLICATE_SELECTOR_NO_DONOR_DRIFT_NO_SOURCE_OR_RIG_ADOPTION`**

There is no nearest-owner recovery, guessed owner identity, alternate mesh, widened family membership or automatic migration.

## Exact verification

Dedicated exact-head workflow:

**`35288245812 — Object hinge-knuckle owner partition family`**

Result: **SUCCESS**.

- Python **3.11**: exact Hard-Surface donor checkout PASS; compile PASS; complete Object suite **86 tests / OK** with two unrelated donor-dependent tests skipped; exact family generation PASS; seven negative controls PASS; truth gate PASS; retained artifact upload PASS.
- Python **3.13**: exact donor checkout PASS; compile PASS; complete Object suite PASS.
- Truth gate: **`PASS_OBJECT_HINGE_KNUCKLE_OWNER_PARTITION_FAMILY_TRUTH_GATE`**.
- Machine result: **`PASS_BOUNDED_HINGE_KNUCKLE_OWNER_PARTITION_FAMILY`**.
- Decision: **`PASS_DERIVED_OWNER_PARTITIONS_ONLY__NO_SOURCE_RIG_OR_DOWNSTREAM_ADOPTION`**.

Retained exact-head artifact:

- ID **`10525202240`**;
- name `object-hinge-knuckle-owner-partition-family-001-evidence`;
- size **10,321 B**;
- GitHub SHA-256 **`2551157215663fc245d617ecfed0d6490d3aa3e2e2da2082c86b7ea936185e71`**;
- exact head **`e08b5aacd97e16f3fe8feea4995db2d0885b68a2`**.

All **16 pull-request-triggered workflows** associated with that exact Object Procedural head completed **SUCCESS**, including the new family and all inherited Procedural/Object evidence lanes.

No independent local archive rehash is claimed in this activation; the digest above is GitHub's retained artifact digest.

## Ownership / explicit non-claims

Hard Surface retains source owner identity, hinge dimensions, bore/clearance semantics and the annular review candidate. Rigging retains parent binding and moving/fixed motion authority. Geometry retains topology/orientation authority. Technical Art retains target-host transport and receiver adaptation. Animation retains timing/playback. Runtime retains performance and representation acceptance. Materials / Art Direction / Visual QA retain appearance decisions.

Procedural owns only this exact deterministic **derived owner partition** over the already-owned annular review candidate.

This PASS does **not** change or adopt host geometry, turn the annular candidate into source geometry, authorize Rigging parenting, prove physical hinge contact or retention, prove manufacturing fit/tolerance, prove collision/physics/gameplay, authorize Technical-Art or Map receiving, establish Runtime/device fitness, prove visual acceptance, promote UC/Profession Fabric, establish CANON, claim production readiness, or claim Procedural mastery.

## Four-root check

- **Truth:** exact source owner, source blobs and donor builder are pinned; generated subsets are described only as derived review partitions.
- **Agency / non-domination:** Procedural does not convert Hard-Surface ownership into Rigging, Technical-Art, Runtime or visual adoption authority.
- **Continuity:** the existing Hard-Surface annular builder and owner contract remain untouched; the family is additive and rollbackable on the existing Procedural lane.
- **Wisdom before speed:** no second annular generator or generic hinge factory was created. The smallest useful abstraction is just the repeated exact owner partition.

## Next Procedural pass

Re-scan the whole constellation first. Treat this owner-partition family as closed at its present scope. Do not add arbitrary owner classes, hinge dimensions, source adoption or rig behavior unless a source owner or downstream receiver supplies new evidence that creates a genuinely repeated creation problem.