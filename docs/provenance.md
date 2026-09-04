# Provenance and reproducibility

This release was assembled from the project's current local web asset folder, saved generation briefs and the creator's development conversation.

| Material | Status |
|---|---|
| `PROMPT.md` | New build specification extracted from the inspected implementation and approved design; includes requested robustness requirements |
| `prompts/images/*.md` | Reconstructed, reusable briefs based on approved visuals and the conversation; not verbatim historical generation requests |
| Clothing, Lighting v2 and Cast video briefs | Original saved production documents, copied without editing |
| Scene video brief | Reconstructed from the approved simplified transition instruction; exact historical request was not recovered |
| Eight videos in `public/retake/` | Current edited web exports, copied byte-for-byte; not raw model output or high-resolution masters |
| Five runtime/reference PNGs | Current base and destination references, copied byte-for-byte |
| `experiments/` | Archived source outputs and superseded briefs; not runtime dependencies |

The original Clothing brief mentions an early frame-cache playback proposal. That implementation note is superseded by `PROMPT.md`: the final concept uses prepared MP4 forward/reverse playback. Its older anchor filenames map to `public/retake/state-base.png` and `public/retake/state-colorway.png`.

Some originals contain desired timing, model settings and aspirational constraints such as pixel-locked backgrounds. Those are instructions, not a certification that every generated frame met them. The final web videos underwent selection, trimming, retiming and, for selected footage, upscaling. No seeds, complete API request logs, exact model build identifiers or After Effects projects are provided. Re-running a brief will not reproduce identical pixels.

Third-party reference screenshots, private messages and Figma comment screenshots are excluded. The original developer's portfolio prompt used as an example is not copied or redistributed.

The pack is not an official native Apple/Figma glass implementation. The CSS material is a deliberate browser approximation of the approved visual treatment.

No fresh image/video generation or clean-room website build was performed while assembling this package. Package integrity and runtime visual verification are separate claims.
