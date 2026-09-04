# LTX Phase 3 — Light Shift

## Inputs

- First frame: `public/retake/state-base.png`
- Last frame: `public/retake/keyframe-light-shift-v1.png`
- Aspect ratio: 16:9
- Target output: 1920x1080, 6 seconds, 25 fps, audio disabled

## Forward prompt

Locked-off, perfectly static full-body luxury fashion editorial shot. The supplied first and last frames are hard visual anchors. The same fictional male model remains planted on the exact same floor marks, centered and front-facing. He makes only one restrained editorial movement: a very small, slow upward tilt of the chin as the lighting changes, then settles back into the exact supplied final pose. His hands, feet, shoulders, clothing, sunglasses, chains, and body scale remain stable.

The transition follows a strongly shaped S-curve. From 0.0 to 0.8 seconds, hold almost perfectly still and begin the change imperceptibly. From 0.8 to 1.7 seconds, a clean diagonal band of warm light begins moving slowly across the right wall. From 1.7 to 2.5 seconds, the light band accelerates sharply and decisively across the architecture, like a large studio flag snapping through its cue. During this brief fast sweep, daylight changes continuously into deep editorial blue hour. From 2.5 to 5.0 seconds, the sweep decelerates smoothly and the new lighting settles with a long soft ease-out. From 5.0 to 6.0 seconds, hold the exact last frame.

The light change is physical and continuous, never a dissolve, flash, exposure jump, overlay, wipe graphic, or magical effect. The sky gradually deepens from clean daytime blue to rich cobalt. A restrained amber horizon glow appears behind the model. The walls become cooler pale blue-grey while retaining smooth large-scale stone surfaces. The single warm diagonal light band lands on the right wall and a controlled long shadow develops across the floor. Keep the result cinematic, realistic, minimal, and fashion-editorial.

Preserve the exact person, identity, face, skin, sunglasses, bucket hat, gold chains, fuzzy pink-and-green jacket, yellow-and-green trousers, black-and-white sneakers, body proportions, pose, hand positions, garment construction, fiber length, pattern scale, floor contact, camera position, focal length, crop, perspective, wall geometry, floor geometry, and centered safe area. The camera is completely locked: no pan, tilt, roll, dolly, zoom, reframing, focus breathing, lens change, parallax shift, or handheld motion.

## Negative constraints

No body turn. No walking. No foot sliding. No body scaling. No identity drift. No face morphing. No blinking artifacts. No extra limbs or fingers. No garment redesign. No colorway change. No moving spot pattern. No chain deformation. No sneaker mutation. No wall movement. No geometry change. No skyline. No new objects. No particles. No glow effects. No fog. No stars. No moon. No flicker. No exposure pumping. No black frame. No white flash. No crossfade. No texture crawling, fractal noise, mottling, or temporal grain. No camera motion. No text or watermark.

## Acceptance check

1. First and last frames match the supplied anchors without crop or scale changes.
2. The character remains centered and nearly motionless.
3. The transition reads as one physical light cue with slow-in, sharp acceleration, and long ease-out.
4. Architecture and clothing remain temporally stable.
5. There is no dissolve, black frame, flash, exposure jump, or camera movement.
6. The clip remains convincing when played in reverse.

## Website control

- Label: `Light shift`
- Index: `03`
- Forward state: `Blue hour`
- Reverse state: `Original scene`
