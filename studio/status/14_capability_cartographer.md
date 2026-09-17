# Capability Cartographer Status

- Scan started: `2026-09-17T04:52:17Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_OBSERVER_INSTRUMENTATION_IDENTITY_MAP / NATURE CLEAN-VS-DIRECT-CAPTURE + OBJECT REAL-PLAY TRACE SHOW MEASUREMENT PATH CAN CHANGE DELIVERY / PF #38 REFINED WITH FIFTH TEMPORAL IDENTITY / DIRECT FRAME-IDENTITY PASS != REFERENCE TIMING FIDELITY / UC #178 IMPLEMENTS PRIOR INDEXING-OBSERVER PLACEMENT WITHOUT DUPLICATION / BUILDING PLANAR-ROLE RECEIVER REVIEW-READY BUT ADOPTION HELD / NO PRODUCT OR FRAMEWORK IMPLEMENTATION MOVE`

## Selected material cross-repo learning

Fresh VFX and Animation evidence strengthens the previous temporal-provenance map: **observation instrumentation must be a first-class identity, separate from the resulting observed-delivery receipt.**

The previous four-layer model correctly separated:

1. temporal source identity;
2. evaluation schedule identity;
3. presentation-policy identity;
4. observed-delivery receipt.

That is still necessary, but the newest evidence shows the observer itself can change the delivery process. A receipt therefore cannot safely carry observer/capture configuration only as incidental metadata. The reusable temporal map is now:

1. **Temporal source identity** — authored clip/effect plus source-owned duration/cadence semantics.
2. **Evaluation schedule identity** — exact times/method used to inspect or verify the source.
3. **Presentation-policy identity** — receiver-owned scheduling/interpolation/exposure/skip/cache policy.
4. **Observation-instrumentation identity** — exact observer/capture implementation and provenance, including sync/async/external mode, renderer wait/readback hooks, capture/encoding policy, sampling hooks and other measurement I/O/load that can perturb delivery.
5. **Observed-delivery receipt** — what the host/renderer/clock actually delivered under that exact instrumentation identity.

A delivery receipt must not transfer across instrumentation identities merely because source and presentation policy are unchanged. A direct-frame-identity claim may PASS while timing fidelity to an uninstrumented reference remains HOLD.

## Evidence map

### Nature current-world VFX — direct visual capture changes the stream being measured

Repository / lane: `mike-axiom-mir/axm-map-design`, VFX PR #35.

Current exact head:

`b56349f4e5a5335b73f39ec32af28dd81f0f6b24`

Source and receiving policy remain unchanged from the prior clean wall-clock reference:

- exact Nature effect remains the accepted leaf-local micro-flutter;
- 16 unique repeating source phases at nominal `31.25 ms` spacing inside a `0.50 s` cycle;
- presentation remains `PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`;
- no interpolation or retiming is introduced.

Clean no-capture wall-clock reference:

- scheduled: `96`;
- presented: `92`;
- skipped: `4`;
- `path_eye`: `47 / 48`, mean post-draw about `32.0634565 ms`;
- `elevated_oblique`: `45 / 48`, mean post-draw about `33.7925909 ms`.

Fresh synchronous direct-capture successor:

- scheduled: `96`;
- directly presented/captured: `58`;
- skipped: `38`;
- `path_eye`: `33 / 48`, mean post-draw `46.69475 ms`, mean viewport readback `4.9580909 ms`;
- `elevated_oblique`: `25 / 48`, mean post-draw `61.6454167 ms`, mean viewport readback `5.16032 ms`.

The new proof gives exact rendered-frame identity for the instrumented run, but it materially perturbs delivery relative to the clean reference. Therefore:

- `PASS_DIRECT_POST_DRAW_TIMED_FRAME_IDENTITY` remains truthful;
- `HOLD_SYNCHRONOUS_CAPTURE_PERTURBS_REFERENCE_DELIVERY` also remains truthful;
- the direct PNGs are not relabelled as a timing proxy for the clean `92 / 96` stream;
- no source retime or presentation rewrite is justified by the capture artifact.

This is the clearest current proof that measurement provenance can be causally relevant to the claim being measured.

### Object Animation — real play-path evidence under capture load cannot certify authored delivery cadence

Repository / lane: `mike-axiom-mir/axm-object-design`, Animation PR #10.

Current exact head:

`82b0c22e3a9eb346f2b06745b958a570d41beb15`

The exact source-authority sequence is unchanged while the target-host proof now executes real `AnimationPlayer.play()` and records wall-clock state under evidence-capture load.

Observed proof-host facts:

- completion wall-clock: `2.569643 s` for the unchanged authored `2.5 s` sequence;
- live trace frames: `439`;
- directly observed authored slots: `84 / 101`;
- missing authored slots: `17`;
- maximum observed authored-index jump: `5`;
- non-unit index-jump events: `7`;
- maximum process-frame interval: `131.804 ms`;
- source ordering violations: `0`;
- exact source-state correspondence remains green whenever a state is observed;
- terminal keeper / lever drift remains `0.0 m`.

The lane correctly keeps complete `40 Hz` delivery, display scanout and target-device scheduler claims held. It explicitly identifies a future **capture-free** trace as the right next method if scheduler delivery becomes the evidence target because measurement I/O may contribute to the observed stalls.

That future trace would be a new observation-instrumentation identity and a new delivery receipt, not a rewrite of this one.

## Placement decision

The correct current home for the reusable rule remains the existing **Profession Fabric issue #38** experimental evidence/provenance procedure.

PF #38 was refined in comment:

`5708844362`

The proposal now separates five temporal identities and adds an explicit observer-effect state such as:

- `NON_PERTURBING_NOT_ESTABLISHED`;
- `PERTURBATION_OBSERVED`;
- `CONTROLLED_EQUIVALENCE_ESTABLISHED`.

A claim record should declare which observation-instrumentation identity produced its receipt. Changing instrumentation invalidates/reruns only claims that depend on the resulting delivery/measurement, while leaving unchanged source/presentation identities intact.

This is **not** a request to make Profession Fabric a capture engine, scheduler, renderer hook, VFX system, Animation system or perceptual authority. PF remains descriptive evidence/provenance procedure only.

No Universal Creation temporal implementation is justified by this finding. The repeated capability is currently evidence lineage and observer-effect accounting, not a neutral scheduler/capture primitive proven independently of product presentation policy.

Cartography return comments:

- Map VFX PR #35: `5708846263`;
- Object Animation PR #10: `5708848105`.

No product implementation was changed.

## Fresh non-selected signals preserved without duplicate work

### UC #170 placement has progressed into an active implementation lane

Universal Creation PR #178 is now open/draft/mergeable at exact head:

`3601688dc15fb752fcd51bb536722db2f1267a8f`

It implements the previously mapped observer/report-first indexed-surface eligibility contract: source and render vertex domains remain distinct, supported attribute tuples are explicit, protected split identities are preserved, unsupported channels fail closed, and no replacement mesh is emitted.

This is active work on the exact prior Cartography placement, so this run deliberately opened no competing indexing abstraction or UC issue. Generic reindex/weld, product selection and visual/runtime acceptance remain outside that observer.

### Building planar-role receiver materially improves the trade space but remains an explicit alternative

Fresh Building / Map work provides a new exact receiving option rather than a successor/default:

- Building Hard-Surface PR #11 exact head `93f22e4eeb9bb32516d4b11f8d8bcf47d9792910`;
- representation `boundary-only-planar-role-rectangle-render-001`;
- `672 vertices / 336 triangles / 168 rectangles`;
- exact occupied-union boundary coverage, all `19` source owners and all `5` material roles retained.

Map Environment PR #24 binds that exact option into the current world at head `b758f9ca006ec5885ff1c2c52e2fb09e9ccdd464` and finds:

- real Building-local visual differences versus both active segmented and compact-v2 receivers;
- proof-host cost versus active segmented receiver: `+180 primitives / +3,600 B` buffer;
- proof-host cost versus unindexed compact-v2: `-5,148 primitives / -102,960 B` buffer;
- unrelated Nature/Object/Weather continuity remains preserved.

The result is correctly `review-ready`, not default-adopted. Art Direction, independent Visual QA, Runtime and Technical Art retain their gates. This fits the existing PF #38 representation-set rule and does not require a new framework.

### Runtime indexing remains an active consumer-specific proof, not a universal mutator

Map Runtime PR #37 exact head `8692848f12f363d341efb85051e990ca74f421bb` proves post-normal per-surface indexing can reduce compact-v2 receiver storage from `6156 -> 1196` stored vertices and recover `86,888 B` of observed proof-host buffer memory versus unindexed compact-v2 while preserving the same `2052` triangles and five material surfaces.

It still carries `+19,672 B` buffer and `+5,328` primitives versus the actual active segmented receiver, and all 68 matched frames have a nonzero but bounded raster delta of at most 10 pixels / 1 LSB. This remains consumer-specific evidence and is not duplicated while UC PR #178 owns the neutral eligibility-observer lane.

### Weather Procedural now proves exact receiver compatibility across its retained family

Weather Procedural PR #3 exact head `5d5dea20d392734c68673a9c37723d48581b1dd8` reuses the unchanged exact Map source-width receiver across all three retained stochastic seeds. The family executes `3,672` projected-width observations with materially different layouts and near-clip pressure while remaining inside the exact Map tolerance. That is a strong bounded family-compatibility proof, not Map adoption or a universal weather generator, so no horizontal extraction was opened from it here.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; UC intentionally retains its compatible standalone copy; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / PR #178** — attribute-aware indexed-surface eligibility observer, including source→render vertex-domain expansion, protected representation partitions and fail-closed unsupported channels; generic reindex/weld and adoption remain held.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity belongs in neutral UC receiver machinery; producer quantization/adoption remains separate.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG, migration state vs claim verdict, changed/preserved/derived-field dependencies, parallel representation sets with explicit consumer selection, and now five-layer temporal provenance including observation instrumentation.

## Non-claims preserved

- No product source, motion curve, cadence, VFX policy, Animation policy, Runtime policy, topology, material, representation selection or adoption was changed by Cartography.
- No PF implementation was added and no experimental PF procedure was promoted to production authority.
- No UC temporal scheduler/capture/runtime policy was proposed or implemented.
- No direct-capture receipt was relabelled as an uninstrumented timing receipt.
- No proof-host missing-slot pattern was relabelled as source cadence failure.
- No Building planar-role or compact-v2 representation is default-adopted by this map.
- No generic reindex mutator is claimed from UC PR #178 or Runtime PR #37.
- No Art/QA perceptual acceptance, target-device performance, CANON, merge authority or production-readiness state is claimed.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch Map VFX PR #35 for a lower-intrusion asynchronous/external capture method; treat it as a new instrumentation identity and compare it against the clean reference rather than rewriting prior receipts.
- Watch Object Animation PR #10 for a capture-free scheduler trace; preserve the current capture-loaded receipt as historical truth.
- Watch PF #38 only for a bounded experimental procedure implementation; keep observer identity/provenance descriptive and non-authoritative.
- Watch UC PR #178 without duplicating its indexed-surface observer lane; product adoption remains downstream-owned.
- Watch Building planar-role Art/QA/Runtime/Technical-Art review before any default representation selection.

## Recovery / provenance

Previous Cartography coordination commit: `db285b4a7831980eaacf914d6b2fca4961e0f948`.
Previous status blob SHA before this update: `97bdf9cb6943dcfe5ca4154ccb7822c302f46ec8`.
