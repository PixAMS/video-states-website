# LTX Colorway Pilot

## Inputs

- First frame: `02-master-streetwear-clean-walls-16x9.png`
- Last frame: `03-colorway-night-editorial-target-16x9.png`
- Aspect ratio: 16:9
- Draft output: 1920x1080, 3 seconds, 30 fps, audio disabled

## Smart prompt-workflow

Locked-off, perfectly static full-body fashion editorial shot. The same fictional male model performs one slow, controlled 360-degree clockwise pivot in place and returns to the exact original front-facing stance. He never walks forward or backward. Both feet remain centered on the same floor marks; allow only the minimal heel-and-toe movement physically required for the turn. His posture stays composed, his arms remain relaxed, and the motion feels like a high-end runway fitting rather than a dance.

From 0.0 to 0.35 seconds, hold the exact first-frame pose. From 0.35 to 1.45 seconds, the model turns clockwise. At approximately 1.5 seconds, his back faces the camera and briefly occludes the front of the outfit. During this back-facing interval only, the textile dye changes from the original acid-day colorway to the night-editorial colorway. The jacket becomes deep cobalt blue with burnt-orange spots; the trousers become royal violet with wine-burgundy spots; the bucket hat becomes cobalt, burnt orange, and deep burgundy. The clothing does not dissolve, grow, transform, emit light, or change construction. Only the dye colors change. From 1.65 to 2.7 seconds, he completes the rotation. From 2.7 to 3.0 seconds, hold the exact last-frame pose.

Treat the supplied first and last images as hard visual anchors. Preserve the same person, face, sunglasses, gold chains, body proportions, garment silhouette, fuzzy fiber length, zipper, folds, pattern scale, spot boundaries, black-and-white sneakers, floor contact, shadow direction, and final framing. The first and last body positions must align exactly.

The camera is completely locked: no pan, tilt, roll, dolly, zoom, reframing, focus breathing, lens change, parallax shift, or handheld motion. Preserve the pale-blue architectural walls, inner wall edges, narrow sky wedge, clouds, white floor, light, shadows, exposure, and color outside the outfit. The walls remain smooth and temporally stable with almost-solid mineral plaster and less than two percent micro-texture contrast.

## Negative constraints

No foot sliding. No stepping toward camera. No body scaling. No identity drift. No face morphing. No extra limbs or fingers. No garment redesign. No moving spot pattern. No zipper mutation. No chain deformation. No sneaker mutation. No cloth explosion. No magical particles. No glow. No light sweep. No background movement. No wall shimmer, crawling texture, fractal noise, mottling, or temporal flicker. No camera motion. No text. No logos added. No extra people or objects.

## Acceptance check

1. First frame visually matches the original master.
2. Last frame visually matches the night-editorial target.
3. The turn reads as one physically plausible fashion pivot.
4. Color changes only while the front of the outfit is occluded.
5. Shoes finish on the same floor coordinates.
6. Face, chains, wall edges, clouds, and shadows do not drift.
7. The clip remains convincing when played in reverse.

## Website playback note

Decode the approved three-second clip into approximately 90 cached frames. Forward playback activates Colorway; reverse playback returns to Original. Do not seek the MP4 directly on every pointer or wheel event.
