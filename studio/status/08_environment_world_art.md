# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_BUILDING_SOURCE_REPLACEMENT_STRUCTURE / EXACT BUILDING SOURCE COMPOSED AFTER ACCEPTED EAST-TREE STATE / PINNED-GODOT A/B RETAINED / ART DIRECTION + VISUAL QA + BUILDING LOOKDEV + RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read the campaign and Environment standing role, then inspected current Map, Building, Nature, Object, Weather and specialist coordination state before selecting work.

The previous east-foreground Nature question is no longer the leading actionable Environment lane. Visual Observer and Art Direction independently accepted the exact compact-tree replacement for its bounded hierarchy question. They also identify a separate rear/right Nature proxy as the strongest remaining visible Map blockout mass, but no source-owned replacement currently exists for that slot. Reopening the accepted east-tree lane or inventing receiver-side Nature geometry would therefore duplicate or outrun source ownership.

Building changed materially since the previous Environment activation. `mike-axiom-mir/axm-building-design#2` now supplies source-owned `service-pavilion-001` plus `utility-access-panel-001`, deliberately authored against the existing Map `proxy:building-pavilion` slot. Exact Building source head: `4faa769b406bf3ad0ba9489a77141c27f122ce51`.

This made the Building proxy the highest-leverage actionable cross-repo integration gap: use the new Building source in the already accepted seed-29 Environment scene while preserving the existing real Nature and Weather evidence.

`axm-create-me` remains coordination-only. Product/source/evidence implementation is confined to `mike-axiom-mir/axm-map-design` and the Building source remains owned by `mike-axiom-mir/axm-building-design`.

## Selected bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-map-design#11 — Environment: replace Map pavilion proxy with exact Building source`**

Branch:

`studio/environment-building-source-replacement-001`

Base:

- repo lane: `studio/environment-real-nature-weather-001`;
- exact base SHA: `cdac7d1316631b3b130d5e558de2aee462a21d40`.

Exact tested head:

`c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`

PR state after checks:

**OPEN / DRAFT / MERGEABLE**

No merge/CANON authority is inferred.

## Exact source and preserved world context

The receiving lane rebuilds the accepted east-tree Environment state first, then consumes Building PR #2 at exact head `4faa769b406bf3ad0ba9489a77141c27f122ce51`.

Pinned Building source identity:

- pavilion: `service-pavilion-001`;
- panel: `utility-access-panel-001`;
- pavilion source SHA-256: `852038d2288ead9a0ee271e09f1a7f7207ec8fd74668e0c52e739e9a224f87d7`;
- panel source SHA-256: `df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`;
- exact generated proof mesh: 152 vertices / 228 triangles;
- two source-owned utility-panel receiver fits remain required;
- Building's own negative controls must remain rejected.

The Environment candidate removes only `proxy:building-pavilion` and adds one exact `source:building:service-pavilion-001` mesh reconstructed by running the Building source evaluator itself. Environment does not copy Building's domain geometry rules.

Placement policy is:

`PRESERVE_TARGET_CENTER_XY__GROUND_SOURCE_MIN_Z__NO_SOURCE_SCALE__NO_EXTRA_ROTATION`

The receiving evaluator verifies the Building source still agrees with the exact Map reserved slot at position `[0.0, 7.2, 1.8]`, size `[8.0, 2.4, 3.6]`, remains inside that reserved footprint/height, stays grounded to the same slot floor and preserves the Map readable-path minimum gap.

The following accepted context is preserved exactly:

- retained procedural seed 29;
- west source-owned Nature sapling;
- accepted compact east source-owned Nature tree;
- exact source-owned Weather field and presentation semantics;
- both object proxies;
- remaining Nature proxies;
- readable path;
- `path_eye` and `elevated_oblique` fixed cameras;
- unrelated scene items.

The evaluator also checks minimum spacing against proxy items plus both real Nature bodies, rather than validating Building in isolation.

## Materials boundary

Building Materials PR #3 is deliberately **not consumed** in this Environment pass.

The candidate uses the existing neutral Environment source material in the observation host. This isolates the world-composition question from Building LookDev. Materials PR #3 remains separate source-domain evidence and can be integrated only after the structural/compositional candidate is visually accepted.

This avoids silently turning a geometry-composition PASS into a material/art-direction PASS.

## Exact evidence result

Scoped structural result:

**`PASS_BUILDING_SOURCE_REPLACEMENT_STRUCTURE`**

Dedicated exact-head workflow:

- push run `35064585946` — **SUCCESS**;
- pull-request run `35064612189` — **SUCCESS**.

Inherited exact-head checks also remained green:

- `35064612083 — Environment composition baseline` — **SUCCESS**;
- `35064612027 — Procedural environment variation` — **SUCCESS**.

The dedicated workflow reruns the exact Nature base, compact Nature, Weather and Building source dependencies, compiles/tests the receiving code, rebuilds the accepted baseline and Building candidate, validates all structural checks, then renders both scenes through pinned Godot 4.7.2 GL Compatibility.

Both retained target-host contexts pass for baseline and candidate. The candidate receipt sees the accepted compact east tree plus the new Building source mesh. The workflow requires the Building mesh to remain exactly 152 vertices / 228 triangles in each fixed context.

The retained render relation proves the Building replacement reaches the target-host image: `path_eye` is required to be byte-different between baseline and candidate, and at least one fixed context must differ. This is visibility/attribution evidence only; no aesthetic preference is inferred from hash difference.

Retained exact-head artifact from the successful push run:

- artifact ID: `10433692869`;
- name: `environment-building-source-replacement-001-c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- size: `302,507` bytes;
- GitHub artifact digest: `sha256:013daf43979e01ed0987cc9f34ee2fe1ce11db0ac93aa006b91391ac76ad4eb9`;
- exact head binding: `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`.

The artifact retains baseline/candidate scene payloads, structural evidence, runtime receipts, render-hash relation and four fixed-camera PNGs.

## Why this was the correct Environment move

The scene now exercises real source-owned assets from multiple departments in one bounded receiving context: west Nature, east Nature, Weather and Building, while Map still owns placement/composition and Object remains represented by preserved proxies.

This is more useful than creating another isolated Building turntable because it tests whether a newly available domain source can enter the already-evidenced world without erasing accepted cross-department context.

It also avoids the currently blocked rear/right Nature improvement: that visual gap remains real, but Environment should not fabricate the missing Nature source merely to remove a proxy.

## Handoffs

**Art Director / Visual Observer**

Inspect the exact PR #11 baseline/candidate fixed-camera A/B and decide whether the source pavilion improves or harms world hierarchy, silhouette, path framing and scene readability. The current PASS is structural/target-host only.

**Materials / LookDev**

If the Building composition is accepted, evaluate whether Building PR #3 surface-family evidence should be carried into this exact receiving scene. Do not assume standalone Building lookdev transfers automatically under Environment lighting/context.

**Runtime / Optimization**

If this source replacement is visually accepted, measure its exact proof-host/runtime delta separately. This pass makes no draw-call, primitive, memory, FPS, LOD or streaming claim.

**Building / Hard-Surface**

Retain source ownership of pavilion geometry, panel receiver frames and fit rules. Environment consumes exact evidence; it does not centralize those semantics.

**Nature**

The rear/right proxy remains the strongest separately identified Nature blockout mass. A source-owned candidate for that exact slot would unlock the next direct Environment replacement lane.

## Non-claims

This activation does **not** establish:

- final Art Direction or Visual Observer acceptance of the pavilion in the world;
- Building Materials PR #3 integration or final surfaces;
- architectural engineering, building-code compliance, structural loads or weather sealing;
- collision, navigation, traversal or gameplay;
- target-device FPS/GPU time, draw-call/memory budgets, LOD or streaming policy;
- final Nature replacement for the rear/right proxy;
- final lighting or atmosphere;
- Universal Creation extraction;
- CANON, production readiness, or Environment/World Art mastery.

## Coordination boundary

`axm-create-me` contains only this coordination/status update. The actual Environment integration stays in `axm-map-design#11`; Building source semantics stay in `axm-building-design#2`; Materials evidence stays in `axm-building-design#3`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.
