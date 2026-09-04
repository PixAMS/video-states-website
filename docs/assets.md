# Asset map

| UI action | Forward | Reverse | Destination image |
|---|---|---|---|
| Clothing | `video-1.mp4` | `video-1-reverse.mp4` | `state-colorway.png` |
| Scene | `video-2.mp4` | `video-2-reverse.mp4` | `state-environment.png` |
| Lighting | `video-3.mp4` | `video-3-reverse.mp4` | `keyframe-light-shift-v2.png` |
| Cast | `video-4.mp4` | `video-4-reverse.mp4` | `keyframe-full-look-v3.png` |

All files above live in `public/retake/`. The common base is `state-base.png`. The logo lives in `public/ltx-studio-logo.svg`.

The name `retake` is the project's route/folder name. It does not mean that the website runs an LTX Retake endpoint at runtime.

For each pair, compare the forward endpoint with the reverse start, then the reverse endpoint with the common base. Do not require equal durations. Use each file's own metadata and validated terminal hold.

`ASSET_MANIFEST.json` lists the path, byte size and SHA-256 hash of every packaged media file, including experiment files. Run `node scripts/validate.mjs --write-manifest` after an intentional asset update, inspect the diff, then run the validator normally. Regenerating a manifest is not a media quality check.
