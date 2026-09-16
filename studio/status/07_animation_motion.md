# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_ANIMATION_SOURCE_AUTHORITY_REBIND_MOTION_EQUIVALENCE / PASS_TARGET_HOST_SOURCE_AUTHORITY_REBIND_LINEAR_INTERPOLATION / EXACT HARD-SURFACE PR17 + RIGGING PR20 AUTHORITY / NO RETIME + NO RETARGET + NO KEY CHANGE / HISTORICAL LABELS PRESERVED / CONTROLLER + GAMEPLAY HOLD**

## Current activation

The highest-leverage unoccupied Animation gap was not a new clip. Capability Cartography had already identified that Object Animation PR #10 remained truthful for its old exact latch lineage but needed an explicit successor rebind before the newer source-owned Hard-Surface pivot authority and Rigging acceptance could be treated as its dependencies.

The bounded question was:

> Can the existing exact 101-sample equipment-case lid/latch choreography be rebound to the exact current source-owned latch interface and exact Rigging source-authority acceptance without changing timing, keys, target geometry, release threshold, retained lever motion, or historical evidence identity?

`axm-create-me` remained coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-object-design`.

## Constellation scan / lane choice

Character has a newly migrated shoulder-form source but still needs connected Geometry and Rigging before an Animation transfer is justified. Animal's prior sampled motion remains historical rather than a stronger accepted deformation-ready target. Nature, Weather and Map dynamics remain VFX/Environment/Runtime owned. Weapon, Armor, Unit, Building and Misc expose no stronger accepted animation-ready receiver. Object therefore remained the strongest exact motion target, and the existing PR #10 lane was extended rather than duplicated. No UC or Profession Fabric extraction was justified.

## Reused lane

Repository: `mike-axiom-mir/axm-object-design`

Draft PR: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Exact Animation head for this activation:

**`6c81740c7895c90d6bb3a617d74f0863c52053f6`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**. This metadata is not merge authority.

## Exact dependency rebind

Historical Animation donor preserved unchanged:

- prior Animation head: `5cb073f9fcf825014556ed165ee081e1eca71cdc`;
- sequence: `lid-latch-open-hold-close-001`;
- sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- duration/sample grid: `2.5 s`, `40 Hz`, `101` endpoint-inclusive samples;
- historical latch Rigging head: `3b667ff5d30c46ec2fe7da7679518970f8610018`, retained as provenance only.

Current source/mechanical authority consumed exactly:

- Hard-Surface source interface head: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- source interface SHA-256: `bcbbe098371eb702bc9289a97370744093105925202eda6036bdced6e25e34d3`;
- Rigging source-rebind head: `a1acd2bcb2074f41e536562f2673508e2cb0a4d5`;
- Rigging binding SHA-256: `615f8ff34cc0897fd399345301efce1ca9cb0aa58e86caca92b914049b89adce`;
- Rigging result: `PASS_SOURCE_OWNED_FRONT_LATCH_RIG_REBIND`;
- release threshold before/after: `48.66480246428277° / 48.66480246428277°`;
- terminal keeper separation before/after: `0.0015728659779458698 m / 0.0015728659779458698 m`.

The source/Rigging authority uses station labels `left` / `right`, while the historical Animation sequence uses `front-latch-left` / `front-latch-right`. Animation does not rewrite either identity. It records an explicit mapping through the unchanged exact component pairs `latch_0_lever + latch_0_keeper` and `latch_1_lever + latch_1_keeper`. Station-label equality is explicitly **not** required; component identity continuity is.

## Bounded implementation

Added on Object PR #10:

- `assets/modular-equipment-case-001/source-authority-motion-rebind-002.json`;
- `tools/verify_animation_source_authority_rebind.py`;
- `.github/workflows/object-animation-source-authority-rebind.yml`.

The verifier rebuilds the old exact Animation choreography and new exact Rigging source-authority evidence, validates every pinned identity, then recomputes the source-owned latch-lever geometry using the current source pivots at all `101 × 2 = 202` retained samples. It fails closed on pivot, dependency-head, motion-sample, timing, retarget or key-count drift.

The target-host proof reuses the exact Technical Art / UC rigid receiver and exact prior interpolation observer logic. A proof-local station-label adapter exists only so the historical observer can consume the newer Rigging receipt; it preserves current source labels separately and is explicitly not a source contract or Rigging rewrite.

## Evidence-driven repair history

Two failures were retained rather than hidden.

1. Run `35096668731` failed because the first verifier incorrectly assumed historical and current station labels were equal. This exposed `front-latch-left/right` versus `left/right`; no motion result was promoted.
2. Run `35096992751` passed the repaired structural rebind and negative controls, then Godot failed because the inherited observer still joined its rig rows by the historical labels. The final repair added the explicit proof-local label adapter keyed by exact unchanged component pairs instead of silently renaming source evidence.

## Final exact-head validation

Dedicated workflow:

**`35097202979 — Object animation source-authority rebind evidence` — SUCCESS**

Exact tested head:

**`6c81740c7895c90d6bb3a617d74f0863c52053f6`**

Structural result:

**`PASS_ANIMATION_SOURCE_AUTHORITY_REBIND_MOTION_EQUIVALENCE`**

Measured structural evidence:

- source-owned lever geometry comparisons: **202**;
- geometry mismatches: **0**;
- source-interface vs Rigging pivot residual: **0.0 m**;
- release-threshold delta: **0.0°**;
- terminal keeper-separation delta: **0.0 m**;
- motion changed: **false**;
- retimed: **false**;
- retargeted: **false**;
- key count changed: **false**;
- all three deliberate negative controls rejected as expected.

Real target-host result in Godot `4.7.2-stable`, GL Compatibility:

**`PASS_TARGET_HOST_SOURCE_AUTHORITY_REBIND_LINEAR_INTERPOLATION`**

Measured target-host evidence:

- exact UC rebound GLB SHA-256: `9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`;
- `AnimationPlayer` tracks: **3**;
- keys per track: **101 / 101 / 101**;
- midpoint observations: **100 / 100 authored intervals**;
- maximum lid adjacent-key linear residual: **`0.0000136198822247025°`**;
- maximum latch adjacent-key linear residual: **`0.00000457763671590783°`**;
- maximum lid analytic smoothstep error: **`0.0805640891746293°`** under `0.09°` bound;
- maximum latch analytic smoothstep error: **`0.337504577636722°`** under `0.35°` bound;
- neutral pivot-wrapper drift: **`0.0 m`**;
- ordering violations: **0**;
- authored-envelope overshoot violations: **0**;
- exact neutral start/end lid and latch angles: **0°**.

Five retained target-host frames remain at `0.1125 / 0.5125 / 1.2375 / 1.7625 / 2.3875 s`. The first and last midpoint images again share a digest because the authored sequence is symmetric at those equal release/re-engage positions; this is not a physics claim.

## Retained exact evidence

Artifact:

- ID: **`10446966329`**;
- name: `object-animation-source-authority-rebind-6c81740c7895c90d6bb3a617d74f0863c52053f6`;
- size: **`167,390 bytes`**;
- GitHub archive SHA-256: **`9614d65b63a6acf22bea645f62352ad3a9eb6af342ee74ed13010ca4d8bc6b94`**;
- exact-head binding: `6c81740c7895c90d6bb3a617d74f0863c52053f6`.

The exact ZIP was downloaded after CI and independently rehashed to the same archive digest.

## Truth boundary / non-claims

This PASS establishes only that the existing exact Object choreography can explicitly consume the current source-owned Hard-Surface latch interface and current Rigging source-authority acceptance while preserving the historical motion sequence exactly, and that the same sequence still reproduces its bounded LINEAR interpolation behavior in the exact Godot target receiver.

It does **not** establish physical latch hook/catch/retention, forces, collision acceptance, a runtime controller or state machine, input handling, real wall-clock `40 Hz` pacing, gameplay timing or gameplay acceptance, target-device performance, final motion weight/style, Art Direction or Visual QA acceptance, CANON, production/game readiness, or Animation mastery. Technical Art PR #21 and Runtime PR #22 remain truthful for their old exact Animation dependency and are **not silently rebound** by this result; any successor adoption must be explicit in those owning lanes.

## Four-root gate

- **Truth:** both failed rebind attempts remain traceable; the station-label mismatch was represented explicitly rather than normalized away. Final claims bind only to exact successful head/run/artifact evidence.
- **Agency / non-domination:** Hard Surface retains source/mechanical authority, Rigging retains articulation acceptance, Animation owns choreography/rebind motion evidence only, and Technical Art/Runtime/gameplay/Art Direction/QA retain their own gates.
- **Continuity:** PR #10 was extended instead of duplicated; the old Animation head remains valid evidence for its historical dependency chain and was used as the exact motion donor rather than rewritten.
- **Wisdom before speed:** no new choreography, retime, generic UC abstraction, controller, gameplay timing or Profession extraction was added when the narrower provenance rebind closed the real dependency gap.

## Handoffs / next gate

- **Technical Art / UC Integration:** Animation now has an explicit successor source-authority head. Rebind your successor evidence only if adopting it; do not relabel PR #21's historical result.
- **Runtime / Optimization:** the old compact-key result remains truthful for its exact old Animation donor. A successor runtime proof may explicitly consume this new head if needed.
- **Hard Surface / Rigging:** exact current source authority was consumed without numeric-only substitution or source rewrite.
- **Visual Observer / 3D Art Director:** motion content is intentionally unchanged. This activation proves provenance/receiver continuity, not improved aesthetic timing or final motion quality.
