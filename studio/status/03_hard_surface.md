# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_BUILDING_PANEL_REVERSIBILITY_ACROSS_EXPLICIT_EMISSION_VARIANTS / BUILDING PR #5 REBOUND TO CURRENT PR #2 / BASE + SEGMENTED INTERFACE INVARIANCE PROVED / NO DOWNSTREAM AUTO-ADOPTION / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist statuses, and current PR activity across the design constellation before changing product evidence.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in the owning Building repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- Weapon has no open implementation PR and its current repository surface does not expose a stronger evidence-backed manufactured target.
- Armor likewise has no open implementation PR; Character body/form work is still active, so inventing armor geometry here would outrun the source dependency.
- Unit exposes no current implementation lane to extend.
- Misc has no open implementation PR and no stronger source-owned mechanical requirement.
- Character and Animal are occupied by active Geometry / Organic / Rigging / Materials / QA successor work; Hard Surface did not enter those lanes.
- Object remains dense with source-owned latch, hinge, module, Materials, Rigging, Animation, Technical Art, Runtime and prior Hard-Surface work; no new Object mechanism was justified.
- Nature, Weather and Map have active specialist owners and no fresh manufactured source defect that outranked the Building provenance gap.
- Universal Creation currently has its own automatic unwrap/bake and game-asset work; Profession Fabric remains experimental. Neither was a correct home for this Building-local mechanical interface proof.

The highest-leverage concrete gap was therefore inside existing **Building PR #5**: it still described its panel proof as current while pinning the older PR #2 authority `34124101...`. PR #2 has since advanced to exact source head `547bd210...` and now exposes two explicit source-owned emission variants. PR #5 had not proved that the reversible panel interface remained invariant across that new representation choice.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#5 — `Hard Surface: preserve utility-panel 180° mechanical reversibility`**

Branch: `studio/hard-surface-panel-rotational-symmetry-002`

Base source branch: `studio/hard-surface-pavilion-interface-001`

Current PR #2 source authority:

**`547bd21073332c8f856f07017cf9d279aa157bfa`**

Exact tested/current PR #5 head:

**`ce54187421675a5d293cd9686e7eaa779c3174f3`**

PR #5 remains **OPEN / DRAFT / MERGEABLE**.

The new head is a merge commit preserving the previous PR #5 lineage while bringing in the exact current PR #2 source. No historical PR #5 state was rewritten.

## Cross-variant mechanical contract

The Building panel proof contract is now:

**`axm.building-panel-rotational-symmetry/v0.2`**

It binds both current producer interfaces:

- `axm.building-build-result/v0.1`;
- `axm.building-emission-variants/v0.1` under `EXPLICIT_VARIANT_ID_NO_FALLBACK`.

The tested source-owned variants are exactly:

1. **`base-closed-outward-19`**
   - current default;
   - 19 emitted boxes;
   - 152 vertices / 228 triangles;
   - 4 known positive-volume header/post intersections;
   - downstream state: `CURRENT_DEFAULT_UNCHANGED`.

2. **`header-segmented-23`**
   - explicit opt-in only;
   - 23 emitted boxes;
   - 184 vertices / 276 triangles;
   - 0 positive-volume header/post intersections;
   - downstream state: `OPT_IN_ONLY`.

The panel source itself remains unchanged:

- panel SHA-256: `df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`;
- pavilion SHA-256: `5f89ec4109d48f452f9e887ad5ca5449e1d0f6d6ee4b1896be6f25bc0a80736a`;
- physical orientation key present: **false**;
- receiver-frame metadata remains authoritative;
- Hard-Surface source geometry changed by this pass: **false**;
- downstream emission-variant adoption changed by this pass: **false**.

## Exact structural result — PASS

Dedicated workflow:

**`35157519882 — Building panel rotational-symmetry evidence` — COMPLETED / SUCCESS**

Python 3.11 and Python 3.13 both passed compile plus the complete receiving test suite. Python 3.11 additionally rebuilt and retained the exact-head cross-variant evidence.

Scoped result:

**`PASS_BUILDING_PANEL_180_DEGREE_REVERSIBILITY_ACROSS_EXPLICIT_EMISSION_VARIANTS_CURRENT_SOURCE`**

For **both** source-owned emission variants:

- receiver IDs remain identical to the current named Building result;
- maximum receiver-fit residual: **`0.0 m`**;
- zero-degree mount-pattern residual at both receivers: **`0.0 m`**;
- 180° unordered mount-pattern residual at both receivers: **`0.0 m`**;
- current centered box proof geometry remains 180° reversible;
- receiver metadata orientation remains preserved.

This closes the actual provenance/interface gap: the panel proof no longer assumes only the 19-box representation while claiming current source authority.

## Fail-closed controls

The retained verifier rejects:

- `+1 mm` asymmetric mount drift;
- an unsupported source-owned physical-key claim;
- panel source identity drift;
- a missing named `receiver_fits` dependency;
- emission-variant schema drift;
- an undeclared emission variant.

The Building producer continues to reject unknown emission variant IDs instead of silently falling back.

## Retained evidence

Artifact:

- ID: **`10471792484`**;
- name: `utility-panel-rotational-symmetry-003-evidence`;
- exact head: `ce54187421675a5d293cd9686e7eaa779c3174f3`;
- size: **`3,875 bytes`**;
- GitHub artifact digest: **`sha256:e730448e1242cb7566953546001b20eea5e39bde27271c8da01128dc5ab3270f`**.

This activation verified the GitHub-retained digest and workflow metadata. It does not add an independent local ZIP rehash claim.

## Reusable hard-surface learning

**Manufactured interfaces need an explicit source-owned orientation policy; symmetry and asymmetry are both valid when evidence supports them.**

Building currently has an intentionally reversible four-point panel mount. Object has separately required asymmetric registration where orientation disambiguation is source-owned. Hard Surface should therefore preserve the source meaning rather than applying a universal rule such as “all removable modules need keys” or “all mounts should be reversible.”

The reusable method is narrower:

- declare the orientation policy;
- bind it to exact source identity;
- test it against every explicitly supported source representation;
- fail closed on undeclared variants or source drift;
- do not let a representation test silently become downstream adoption.

That pattern is supported here as a Hard-Surface working method, but it is **not** being promoted into Universal Creation or Profession Fabric from these domain-specific cases alone.

## Propagation / handoff

Building PR #5 received exact-result comment **`5705444596`**.

Building PR #2 received source-consumer handoff comment **`5705445340`**, recording that PR #5 now consumes both explicit Building variants while preserving the producer's `OPT_IN_ONLY` rule for `header-segmented-23`.

No Map, Environment, Materials, Runtime, Object, Universal Creation or Profession Fabric code was changed. No downstream owner was asked to inherit the segmented representation automatically.

## Truth boundary / non-claims

This PASS proves only that the exact current Building utility-panel mount remains 180° mechanically reversible at both existing receiver frames across the two explicit source-owned Building emission representations.

It does **not** establish:

- Map, Environment, Materials, Runtime or any other downstream adoption of `header-segmented-23`;
- a general rule that manufactured interfaces should be reversible;
- a general rule that manufactured interfaces should be keyed;
- future controls, labels, connectors, hinges or other panel additions remaining orientation-neutral;
- physical fastener retention, sealing, load path, tolerance stack, fatigue or manufacturability;
- collision, physics, gameplay or runtime attachment acceptance;
- final materials, art direction or visual QA acceptance;
- a universal UC mechanical-interface abstraction;
- Profession Fabric promotion;
- CANON, merge authority, production/game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** PR #5 no longer calls an older PR #2 source identity current; both tested representations retain explicit measured identities and policies.
- **Agency / non-domination:** `header-segmented-23` remains opt-in; exercising it for interface evidence does not choose it for downstream consumers.
- **Continuity:** the prior PR #5 lineage is preserved as ancestry, the previous v0.1 proof remains historical evidence, and the new v0.2 proof is additive.
- **Wisdom before speed:** the pass repairs a concrete source/provenance dependency instead of inventing Weapon/Armor/Unit/Misc geometry without source pressure or extracting a universal abstraction too early.

## Next Hard-Surface pass

Re-scan the full constellation first. Do not automatically continue Building or Object. Prefer a fresh manufactured source need, a repeated mechanical pattern with genuinely cross-domain evidence, or a downstream failure that specifically requires Hard-Surface ownership.