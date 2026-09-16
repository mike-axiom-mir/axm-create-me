# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **ACTIVE / CONSUMER-OWNED PROVIDER IMPORT CONTRACT PROVEN / HISTORICAL WRECKLINE PROVIDER HOLD NARROWED / UC UNCHANGED**

## Bounded claim

This activation selected the highest-leverage cross-repo integration gap exposed by the current Wreckline hard-surface lane: the Hero Vehicle build recipe depended on a historical Universal Creation provider branch, but the original source provenance did not retain an immutable, executable provider-import closure.

Hard Surface PR #6 had already truthfully stopped its real rebuild when attempted UC commit `ed64069af0ecda34cdba5b5ba68372a6a16a8e02` did not contain `axm_uc.hard_surface`. Technical Art did **not** duplicate that lane by recreating the vehicle or restoring guessed provider code. Instead, it added the smallest source-owned contract needed to answer a more reusable question: *which exact static provider modules does this exact consumer recipe require, which ones resolve at the attempted provider commit, and what source bytes were actually present?*

Result:

`PASS_CONSUMER_OWNED_PROVIDER_IMPORT_CONTRACT / HOLD_HISTORICAL_PROVIDER_INCOMPLETE`

The retained exact-head receipt proves that the attempted historical UC provider is missing **two**, not one, direct modules required by the Hero Vehicle recipe:

- `axm_uc.hard_surface`;
- `axm_uc.vehicle_hardpoints`.

No Universal Creation code was changed. No Wreckline domain knowledge was moved into UC.

## Coordination / constellation scan

Read before work:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/11_technical_art_uc_integration.md`;
- current Technical Art status;
- current Hard Surface status and Wreckline PR #6;
- current Capability Cartographer placement decision;
- active design-repository / runtime evidence relevant to Wreckline;
- the attempted historical `axm-universal-creation` provider state and current source layout.

Relevant lane boundaries:

- **Hard Surface** owns the Wreckline LOD identity candidate and its rebuild / visual acceptance. It had already converted the missing-provider discovery into a truthful HOLD; this pass did not alter candidate geometry.
- **Runtime / Optimization** owns measured LOD residency / draw-call behavior from the previous exact asset state. This pass does not inherit or alter those measurements.
- **Capability Cartographer** already established that source semantics and source adapters remain in the design/consumer repo while UC retains only justified domain-neutral substrate. This pass follows that placement rule.
- Prior **Animal** and **Nature** Technical Art bridges remain valid, separate examples of source-owned adapters into UC's portable surface / GLB boundary. They do not justify placing Wreckline provider semantics into UC.

No competing provider-import-closure lane was found. The gap was therefore bounded enough to act without duplicating an active specialist.

## Gap selected

Historical Wreckline Hero Vehicle build evidence checked out a movable UC branch (`codex/wreckline-vertical-slice-v0-1`) rather than retaining a complete immutable provider closure. The best recovered exact UC attempt for that branch is:

`ed64069af0ecda34cdba5b5ba68372a6a16a8e02`

The Wreckline source recipe imports provider code from both `axm_uc` and `axm_stickers`. A one-file probe had already shown `axm_uc.hard_surface` absent, but that did not establish whether it was the only missing provider module, nor did it hash the source files that *were* available.

That provenance gap blocks truthful historical rebuild claims and is reusable beyond this single asset family.

## Bounded improvement

Opened stacked draft PR:

**`mike-axiom-mir/axm-wreckline#8 — Technical Art: bind exact provider import contract`**

Branch:

`studio/technical-art-provider-import-contract-001`

Stacked base:

`studio/hard-surface-lod-identity-001` / base head `7a86e27967d7b7e1566520285140252b1260fba4`

Exact final Technical Art head:

`ba7f49da25711ec6412d054a108c0001316961ae`

PR state: **DRAFT / OPEN / MERGEABLE**. No merge/CANON authority is inferred.

Added only consumer-owned integration/evidence files:

- `tools/verify_provider_import_contract.py`;
- `assets/hero-vehicle-001/provider-import-contract.json`;
- `tests/test_provider_import_contract.py`;
- `.github/workflows/hero-provider-import-contract.yml`.

The verifier:

1. parses the named exact Wreckline consumer recipes with Python AST;
2. derives direct provider imports under explicitly declared package prefixes;
3. follows resolvable provider-local Python imports recursively;
4. records exact consumer-source SHA-256 values;
5. records every resolved provider source path, byte size and SHA-256;
6. records import edges, direct modules, resolved modules and unresolved modules;
7. verifies the provider checkout's actual Git HEAD against the expected immutable commit;
8. fails closed as `HOLD_PROVIDER_HEAD_MISMATCH` or `HOLD_MISSING_PROVIDER_IMPORTS` when appropriate;
9. reports `PASS_EXACT_PROVIDER_IMPORT_SET` only when the exact head matches and the bounded static import set fully resolves.

This verifier deliberately remains with the consumer. The reusable *pattern* may later deserve promotion if multiple independent consumers prove the same need, but one Wreckline case does not justify adding it to UC.

## Defect found and repaired during this activation

The first CI attempt exposed a test expectation mistake in the new verifier lane. For `from . import CONSTANT`, Python still depends on the containing package even when `CONSTANT` is an attribute rather than a child module. The initial test incorrectly expected only `axm_uc.alpha` to appear as resolved.

The test was corrected to require the package dependency `axm_uc` while explicitly proving that the verifier does **not** invent a nonexistent `axm_uc.CONSTANT` child module. The repaired exact head then passed all dedicated evidence steps.

The failed pre-repair run remains historical evidence; it is not presented as the final proof.

## Exact-head evidence

Exact Wreckline head:

`ba7f49da25711ec6412d054a108c0001316961ae`

All observed PR-triggered workflows on that exact head completed successfully:

- `tests` run **35053303387** — SUCCESS;
- `Hero specialist runtime evidence` run **35053303201** — SUCCESS;
- inherited `Hero hard-surface real candidate evidence` run **35053303330** — SUCCESS as the existing truthful HOLD/evidence path;
- dedicated `Hero provider import contract evidence` run **35053303320** — SUCCESS.

Dedicated retained artifact:

- name: `hero-provider-import-contract-ba7f49da25711ec6412d054a108c0001316961ae`;
- artifact ID: **10429588319**;
- exact head binding: `ba7f49da25711ec6412d054a108c0001316961ae`;
- archive size: **7,221 bytes**;
- archive SHA-256: `0a2914792550e77503994cc168bda87d9f99378575f54365afa0189d9913b079`.

The artifact was downloaded and independently SHA-256 rehashed during this activation; the local ZIP digest matched GitHub's retained artifact digest exactly.

The exact retained `provider-import-report.json` reports:

- schema: `axm.provider-import-contract/v0.1`;
- state: **`HOLD_MISSING_PROVIDER_IMPORTS`**;
- consumer: `axm-wreckline/hero-vehicle-001`;
- receiving head: `ba7f49da25711ec6412d054a108c0001316961ae`;
- expected provider commit: `ed64069af0ecda34cdba5b5ba68372a6a16a8e02`;
- observed provider commit: the same exact SHA;
- direct provider modules discovered: **15**;
- provider modules resolved and hash-recorded by this static closure: **79**;
- import edges recorded: **209**;
- unresolved direct provider modules: **2**;
  - `axm_uc.hard_surface`;
  - `axm_uc.vehicle_hardpoints`;
- `exact_provider_git_head_verified`: **true**;
- `all_static_provider_imports_resolved`: **false**;
- `asset_rebuild_proven`: **false**;
- `provider_behavior_proven`: **false**;
- `dynamic_import_closure_proven`: **false**;
- `runtime_or_visual_acceptance_proven`: **false**.

This materially tightens the prior Hard Surface observation: `axm_uc.hard_surface` was a real missing provider, but it was **not the only missing direct provider** at the attempted exact UC commit. `axm_uc.vehicle_hardpoints` is also absent.

## Reusable learning / placement decision

The reusable boundary is:

> **Provider provenance belongs with the exact consumer recipe first: exact consumer identity → exact provider commit → statically derived import set → exact provider source hashes → explicit missing set → separate behavior/rebuild evidence.**

That is stronger than pinning a branch name and safer than copying historical domain code into UC merely to make an old build run.

Current placement decision:

- Wreckline owns its dependency declaration and this first executable receipt;
- UC remains unchanged and domain-neutral;
- Capability Cartography may observe the pattern;
- promotion of a generic provider-closure tool requires repeated independent consumers, not this single success.

## Previous proven boundaries retained

Earlier Technical Art work remains valid and separate:

- Animal Design proved one explicit source-owned animal surface → UC GLB bridge;
- Nature Design proved a materially different source-owned Nature surface → UC GLB bridge, including an explicit local leaf-backface compatibility strategy instead of forcing one foliage case into UC.

Those two bridge successes concern portable surface publication. This Wreckline pass concerns **provider-source provenance for a generated build recipe**. It is deliberately not folded into the surface contract.

## Truth boundary / non-claims

This activation proves only that the named Wreckline Python consumer sources can be statically inspected against the exact attempted UC provider commit, that the bounded resolver can retain exact source hashes/import edges, and that this exact attempted provider checkout lacks the two named direct modules.

It does **not** prove:

- complete dynamic import closure;
- non-Python files, templates, assets, data or environment dependencies;
- that the historical missing provider implementations can be reconstructed from present evidence;
- provider behavior or API compatibility;
- Hero Vehicle rebuild equivalence;
- candidate GLB generation;
- Hard Surface PR #6 visual acceptance;
- Art Director acceptance of the 35 m LOD identity repair;
- runtime performance of a rebuilt candidate;
- game-readiness, production readiness, CANON or Technical Art / UC mastery.

## Root gate

- **Truth:** the previous one-module HOLD was not inflated into a recovery story; the exact static closure discovered and retained the second missing provider as well.
- **Agency / non-domination:** Wreckline keeps its source semantics and dependency declaration; UC was not modified for convenience; Hard Surface, Runtime and Art Direction retain their own acceptance authority.
- **Continuity:** PR #8 stacks on the active Hard Surface lane, preserves that lane's candidate untouched, pins exact Wreckline and UC heads, hashes available provider source, and keeps the failed pre-repair CI as historical evidence rather than silently rewriting it.
- **Wisdom before speed:** the smallest executable provenance contract was added first. Missing historical implementations were not guessed or copied into UC simply to obtain a green rebuild.

## Handoffs

- **Hard Surface:** use PR #8's exact receipt as the provider-provenance handoff. A truthful historical rebuild remains blocked by both `axm_uc.hard_surface` and `axm_uc.vehicle_hardpoints`; do not keep probing only the first missing module or inherit a rebuild claim from this green evidence workflow.
- **Capability Cartographer:** record consumer-owned provider-import receipts as a candidate reusable cross-repo procedure. Do not promote the implementation into UC until another materially different consumer independently needs the same contract.
- **Runtime / Optimization:** no new candidate asset was emitted, so no current runtime numbers are transferred to a rebuilt version.
- **Art Director / Visual Observer:** the existing Wreckline 35 m identity hold remains unchanged because no rebuilt/rendered candidate was produced here.
- **Universal Creation:** no code change requested. Historical provider incompleteness at `ed64069...` is evidence about that attempted commit, not a mandate to restore Wreckline-specific functionality onto current UC main.

## Next Technical Art / UC Integration pass

1. First inspect whether a second independent consumer now exhibits the same provider-closure problem; if so, compare contracts before considering a shared domain-neutral home.
2. If Wreckline locates authentic historical source for either missing provider, bind that source to an immutable commit/hash and rerun this exact contract before attempting rebuild behavior.
3. Do not synthesize guessed `hard_surface` or `vehicle_hardpoints` implementations merely to clear the HOLD.
4. Keep provider-source provenance, provider behavior, asset rebuild equivalence, visual acceptance and runtime acceptance as separate gates.
