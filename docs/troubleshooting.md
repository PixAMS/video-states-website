# Troubleshooting from this project

| Symptom | What to inspect | Action |
|---|---|---|
| Scroll feels frame-by-frame | Seeking frequency, encoded keyframes, decode latency and scroll mapping | This project changed to click-driven prepared clips. That is a design choice, not proof smooth scroll-scrubbing is impossible. |
| Wall texture crawls | Noise in the original image and temporal generation | Simplify the base wall texture; regenerate unstable motion rather than adding grain to hide it. |
| Clothing rotation feels flat | Motion timing versus structural errors | Retiming can improve a sound pivot. A changing silhouette, sliding foot or malformed back needs a different generation/edit. |
| Walls act like curtains | Prompt choreography and model interpretation | Specify two existing rigid walls translating outwards. No folding, new panels or extra reveal stages. |
| Sunset appears as a graphic stripe | Light element changes before the environment | Prompt one coupled time-of-day progression affecting sky, walls, subject, floor and shadows together. |
| Jump cut has zoom/shake/blur | Camera motion or hiding the cut | Lock the camera; keep the male through descent; cut at touchdown only. If generation cannot comply, a manual matched cut is a valid editorial fallback. |
| Flash of the base before reverse | A visible rewind, poster swap or holding-frame preparation | Keep preparation hidden and retain the previously decoded frame until the incoming video is ready. |
| Black frame after Scene reverse | Export tail and player completion timing | Inspect tail frames. Configure a validated terminal hold; don't rely solely on the `ended` event. |
| Entire frame brightens at a seam | Color/range metadata, different exports or still/video mismatch | Compare the actual files together in an editor and browser; do not automatically blame a UI overlay. |
| Scene scales at handoff | Different object-fit/crop/container or media transforms | Use the same fixed container, center crop and cover geometry for every layer. |
| Reset leaves an empty pill | Text fades before bar expansion begins | Expand the bar while Reset fades; keep controls disabled until reverse completes. |
| Glass edges pinch | Rear and foreground capsules have equal width/radius | Give the foreground a small overhang, narrow the collapsed rear and fade the rear material only. |
| New footage looks unchanged | Browser or CDN cache | Version filenames or content hashes, then retest. |

The supplied website prompt suggests initial end guards of 0.08 seconds and 0.18 seconds for Scene reverse. They come from this demo's implementation, not a universal video fix. Validate a real hold frame for each replacement export.

The original development history did not preserve a reproducible browser trace proving every root cause. Treat historical diagnoses as checks to perform, not universal claims about the browser.
