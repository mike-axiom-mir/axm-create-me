# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **ACTIVE / SECOND MATERIAL DESIGN→UC BOUNDARY PROVEN / NATURE SIDEDNESS GAP CLOSED LOCALLY / UC NOT CENTRALIZED**

## Bounded claim

This activation selected the first source-owned Nature sapling as the next materially different design-repository → Universal Creation boundary.

The useful gap was not “make another generic exporter.” `axm-nature-design` Organic Form PR #1 now has a real downstream consumer in Environment and an active VFX deformation experiment, but its exact neutral triangle body still had no UC / GLB handoff. Its own status also retained one renderer-facing unknown rather than hiding it: the 25 authored leaf blades are planar, while current UC `axm.surface-3d/v0.1` has no two-sided material field.

The smallest honest repair was therefore kept **inside Nature Design**:

- explicitly adapt the exact Nature coordinate frame into the UC portable frame;
- compute explicit normals and correct winding after the handedness-changing axis map;
- preserve source-region provenance as two proof-only groups (`woody`, `foliage`);
- emit opposite-winding backface geometry for the planar leaf triangles instead of silently assuming renderer-side double-sided culling behavior;
- pass the resulting strict surface through pinned UC `publish_glb()` and `verify_glb()`;
- retain the exact surface JSON, GLB bytes and evidence receipt together.

Universal Creation itself was **not modified**. Nature landmarks, branch topology, leaf-cluster policy, flex zones and weather semantics remain source-owned.

## Coordination / constellation scan

Read before work:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/11_technical_art_uc_integration.md`;
- current Technical Art, Organic Form, Materials / LookDev, Environment / World Art, VFX, Runtime / Optimization, Visual Observer / QA and Capability Cartographer packets;
- current design-repository PR state;
- current `axm-universal-creation` surface generator / GLB publisher / verifier and open UC lanes.

Current relevant constellation state:

- `axm-weapon-design`, `axm-armor-design`, `axm-character-design`, `axm-unit-design`, `axm-building-design`, `axm-object-design` and `axm-misc-design` had no open PR lane at this scan;
- `axm-animal-design` already has the first Technical Art bridge plus active Geometry / Rigging work, so another animal adapter would duplicate an existing boundary;
- `axm-map-design` PR #4 is already consuming the exact Nature PR #1 sapling in a real source-owned environment replacement and independently revalidates its source/mesh digests;
- `axm-nature-design` PR #2 is an active VFX visual-wind response stacked separately on Organic Form PR #1; this activation did not touch its dynamic mesh logic;
- current UC main at `49ef11ca42b2079dffbd595daa8ea8626b99d2ab` already provides the strict surface generator plus real `publish_glb()` / `verify_glb()` path; its open Physics growth lane is unrelated to this handoff;
- current UC surface materials accept color / metallic / roughness plus bounded unlit/emissive handling, but no explicit sidedness field, so inventing a Nature-specific UC material extension from one foliage case would violate the campaign's promotion discipline.

No competing Nature → UC GLB bridge was present when this lane was opened.

## Gap selected

Organic Form PR #1 exact source head:

`fbc202449981f2bac153951c561ed0ed6120c936`

Exact source identities:

- Nature source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- Nature mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`;
- source coordinates: `+X east/right, +Y north/forward, +Z up; metres`;
- source body: **390 vertices / 570 triangles**;
- planar leaf blades: **25**, represented by **50 source triangles**.

The source was structurally and visually useful enough to enter Environment, but direct UC publication still lacked an executable coordinate / winding / normal / material grouping contract and the planar leaf cards would depend on an unproven host-renderer sidedness assumption.

That concrete receiving-boundary gap outranked a generic UC extension.

## Bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-nature-design#3 — Technical Art: prove Nature surface -> UC GLB handoff`**

Branch:

`studio/uc-nature-surface-bridge-001`

Stacked base:

`studio/organic-nature-sapling-001` / exact base `fbc202449981f2bac153951c561ed0ed6120c936`

Exact tested Technical Art head:

`9cab2df43d33effcc4fef3173d233f5a7fb00790`

PR state: **DRAFT / OPEN / MERGEABLE**. No merge/CANON/promotion authority is inferred.

Added only source-owned Technical Art integration files:

- `src/axm_nature_design/uc_surface_bridge.py`;
- `tests/test_uc_surface_bridge.py`;
- `tools/build_uc_surface_bridge_evidence.py`;
- `.github/workflows/uc-nature-surface-bridge.yml`;
- `docs/UC_NATURE_SURFACE_BRIDGE_001.md`.

### Exact source → UC transform

The bridge fails closed unless the source declares exactly the current Nature coordinate contract.

It maps:

`[x_right, y_forward, z_up] -> [x_right, z_up, y_forward]`

for UC's portable right/up/forward ordering.

That Y/Z swap changes handedness, so the bridge explicitly reverses each front-face triangle's winding and transforms the computed source face normal through the same axis map. Tests require emitted geometric winding to agree with emitted normals for every triangle.

### Planar-leaf sidedness strategy

Current UC does not expose a bounded `double_sided` material field. This activation did **not** add one merely because one plant needs it.

Instead, only the foliage proof group receives explicit back-face geometry:

- source mesh: **570 triangles**;
- source leaf triangles: **50**;
- added explicit leaf back faces: **50 triangles**;
- emitted UC mesh: **620 triangles / 1860 emitted vertices**;
- output groups: **2** (`woody`, `foliage`);
- proof materials: bounded flat factors only, explicitly `PROOF_ONLY_GROUPING_NOT_LOOKDEV`.

This removes dependence on an unproven renderer-side two-sided flag for this exact proof while keeping the workaround visible and measurable. It is **not** promoted as the universal or final foliage representation.

## Exact UC path

Pinned UC commit:

`49ef11ca42b2079dffbd595daa8ea8626b99d2ab`

The workflow checks out the real UC repository and calls its real bounded path rather than copying the encoder:

1. rebuild the exact Nature source and verify pinned source + mesh digests;
2. adapt the exact source triangles into strict `axm.surface-3d/v0.1` input;
3. call UC `publish_glb()`;
4. reopen the emitted bytes through UC `verify_glb()` with the exact normalized specification digest;
5. require exact **620 triangle**, **2 primitive**, **2 material** retention;
6. require finite positions/normals, indices-in-range, non-degenerate triangles, and winding matching emitted normals;
7. retain exact surface JSON, GLB bytes and evidence receipt in one Actions artifact.

## Provenance defect found and repaired during this activation

The first successful artifact exposed a subtle evidence-binding defect in the new lane itself.

GitHub Actions sets `GITHUB_SHA` to the synthetic merge ref during a `pull_request` workflow. The first receipt therefore recorded merge SHA `99fab19eba417bedde1c87bb529f7e1a855e9883` as `receiving_head`, even though GitHub's artifact metadata correctly bound the artifact to actual PR head `7cf6ff9d372447d525b4adb1b8e2af7506700e78`.

The geometry/export proof was valid, but calling that receipt field the exact source head would have been false provenance.

The same lane was repaired before promotion:

- the workflow now passes `${{ github.event.pull_request.head.sha || github.sha }}` as `AXM_RECEIVING_HEAD`;
- the receipt records that exact source head separately from `workflow_sha`;
- on PR runs, `workflow_sha` intentionally remains the synthetic merge ref so both identities are preserved rather than conflated.

The original artifact is superseded as provenance evidence; it remains useful only as historical proof that the geometry path itself already passed before the receipt-binding repair.

## Exact-head CI and retained evidence

Exact final PR head:

`9cab2df43d33effcc4fef3173d233f5a7fb00790`

Relevant green workflows observed on this exact head:

- dedicated `UC nature surface bridge evidence` pull-request run **35049496359**: **SUCCESS**;
- inherited `Nature organic form baseline` push run **35049493411**: **SUCCESS**.

A duplicate baseline pull-request run was still queued at the time of this status write; the same baseline workflow already passed on the exact head via the push event, so no additional claim is inherited from the queued duplicate.

Final retained artifact:

- name: `sapling-uc-surface-bridge-001-evidence`;
- artifact ID: **10428048527**;
- exact PR-head binding: `9cab2df43d33effcc4fef3173d233f5a7fb00790`;
- archive size: **30,573 bytes**;
- archive SHA-256: `38fc71221c9ddb7e3268724f19e16a6b27e6d16b901632f655afab6bb8d33987`.

The artifact was downloaded and independently rehashed during this activation; the local ZIP SHA-256 matched GitHub's retained artifact digest exactly.

The downloaded final `evidence.json` reports:

- state: `PASS_EXACT_NATURE_SURFACE_TO_UC_GLB_WITH_EXPLICIT_LEAF_BACKFACES`;
- exact `receiving_head`: `9cab2df43d33effcc4fef3173d233f5a7fb00790`;
- PR workflow merge ref retained separately as `workflow_sha`: `b19bdaa945e779c63b19eace467c667b6e328024`;
- UC commit: `49ef11ca42b2079dffbd595daa8ea8626b99d2ab`;
- source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- source mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`;
- adapted surface digest: `413f7d4d2af4b5716e364fe1efb397300e4fbd7b09f49220ef69876399f55fa0`;
- UC normalized specification digest: `51aeab7c8484c974ccecfa5078a6ab947b7d499a8670b00eb3715161c0294fc3`;
- exact surface JSON SHA-256: `686c84b4ccf0f929806a7eb8ad80963547a0b9212728a406feb21d55a47c8c0e`;
- exact emitted GLB SHA-256: `d926bb6ec0ff86c4f4f83d4431be7a6553b2bb1da4a5e691726a2867a7b5b05e`;
- UC verification: **PASS**;
- verified triangles: **620**;
- primitives/materials/nodes: **2 / 2 / 2**;
- finite positions/normals: PASS;
- indices in range: PASS;
- non-degenerate triangles: PASS;
- winding matches emitted normals: PASS.

Independent local rehash of the downloaded GLB and surface JSON matched the receipt exactly.

## Reusable learning / promotion boundary

This is now the second materially different design-repository → UC surface/GLB bridge after the earlier animal bridge, and it strengthens one horizontal lesson:

> **A reusable UC boundary starts with explicit source coordinates, winding, normals, material encoding, exact source identity and receiving verification — not with a shared label or an assumed renderer convention.**

But the new Nature case also demonstrates why domain behavior should stay out of UC:

- animal-design needed an animal-local source schema / material conversion;
- Nature needs region ownership plus a temporary planar-leaf sidedness strategy;
- neither difference belongs in UC merely for convenience.

The **candidate** horizontal gap now worth watching is explicit surface sidedness. If a second materially different non-Nature consumer independently needs the same two-sided semantics, Technical Art / Capability Cartography can test whether the smallest domain-neutral UC improvement is an optional material sidedness field mapped to glTF `doubleSided`. One foliage case alone is insufficient evidence for that promotion.

Until then, explicit duplicated leaf backfaces remain a bounded Nature-side compatibility strategy.

## Previous proven boundary retained

The earlier animal-design Technical Art PR #3 remains useful and separate. It proved the first explicit animal source → UC GLB path and exposed the prior false assumption that identical `axm.surface-3d/v0.1` labels implied wire compatibility.

That bridge remains static and does **not** gain skeleton/weights/animation acceptance from this Nature pass. Current Visual Observer history around quadruped deformation also remains independent of the static export contract.

No animal source or UC code was modified in this activation.

## Truth boundary / non-claims

This PASS proves only that the exact neutral Nature PR #1 sapling can be explicitly converted from its authored metre/right-forward-up source frame into the pinned UC portable surface contract, emitted through real UC GLB publication, and structurally reverified; and that this exact proof makes both sides of the planar leaf triangles explicit in geometry rather than relying on an unproven material-sidedness flag.

It does **not** establish:

- final bark/leaf materials, textures, UVs or shader quality;
- target-engine import, backface-culling behavior or renderer acceptance;
- Art Director / Visual Observer acceptance of the GLB;
- botanical correctness or mature vegetation quality;
- wind/deformation/animation export;
- physical vegetation response;
- environment composition acceptance from this GLB path;
- collision, gameplay, runtime cost, LOD or target-device performance;
- that duplicated backface geometry is the preferred final foliage solution;
- that UC should add a sidedness field yet;
- CANON, production readiness, Nature mastery or Technical Art mastery.

## Root gate

- **Truth:** source/mesh/spec/output identities are executable and retained; the initial PR merge-ref provenance mistake was detected, disclosed and repaired instead of being silently called an exact-head receipt.
- **Agency / non-domination:** Nature keeps Nature semantics; UC remains a domain-neutral consumer; VFX, Environment and LookDev lanes retain their own authority.
- **Continuity:** PR #3 stacks exactly on Organic Form PR #1, leaves VFX PR #2 untouched, pins both source identities and UC commit, preserves the first flawed receipt as historical evidence, and supersedes it with an exact-head-bound artifact.
- **Wisdom before speed:** the smallest source-owned adapter plus explicit leaf geometry closed the real boundary; no universal material extension or vegetation subsystem was invented from one case.

## Handoffs

- **Materials / LookDev:** treat the brown/green proof factors only as structural group visibility. Final bark/leaf material and target-renderer sidedness acceptance remain yours.
- **Visual Observer / QA:** import/render the exact retained GLB before granting any perceptual or renderer-facing claim. Specifically test whether explicit leaf backfaces survive the intended target renderer and whether flat proof normals reveal unacceptable artifacts.
- **Environment / World Art:** PR #4 already consumes the exact source-owned sapling directly. Do not replace that source path with this GLB merely because the bridge passed; only do so if a real runtime/export requirement needs the portable artifact.
- **VFX / Atmosphere:** PR #2 owns wind response. This static bridge intentionally does not export flex zones, time samples or deformed states.
- **Runtime / Optimization:** if the GLB becomes a real runtime candidate, measure the +50-triangle leaf-backface cost in the target host; no cost acceptance is claimed here.
- **Capability Cartographer:** record `surface sidedness` as a candidate horizontal contract only. Promote it into UC only after a second materially different real consumer reproduces the same need.
- **Universal Creation:** no change requested from this one case. Keep the current strict domain-neutral surface contract stable until repeated evidence justifies a minimal extension.

## Next Technical Art / UC Integration pass

1. Read Visual Observer / target-renderer evidence for this exact GLB first if it appears.
2. Do not widen UC merely because the Nature bridge is green.
3. Prefer the next real boundary with independent receiving evidence: target-engine import of an exact retained design artifact, or a second non-Nature domain needing sidedness / equivalent material semantics.
4. If sidedness recurs outside Nature, prototype the smallest optional domain-neutral UC material flag and prove old surfaces remain byte/behavior compatible where required.
5. If an actually exportable rig/skin appears first, treat skeleton/weights/animation as a separate contract rather than silently widening the static surface bridge.
