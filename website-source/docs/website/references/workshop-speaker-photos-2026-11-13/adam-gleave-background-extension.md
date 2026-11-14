# Adam Gleave — background extension, November 13, 2026

November13 framing follow-up: Rachel requested the midpoint between the original and extended framing. The PNG remains unchanged. Workshop CSS scales it by29/27 (1.074074) about bottom center, giving the midpoint of the person’s original/extended displayed position and size while covering the frame. No additional image generation or pixel edit.

Rachel requested a matching background extension above the head while leaving face and body completely untouched. Built-in image editing was used for the added background. The generator's rendered person was not used. Only an empty top-background strip was taken, sized to540×80 and color-matched to the original blue background at the join, excluding the entire hair/halo range from boundary samples. The complete decoded540×540 original photograph was then copied below it without any pixel edits, retouching, resampling or color changes. The final540×620 asset is lossless PNG.

Source original: src/assets/workshop-speakers/adam-gleave.jpg (retained unchanged).
Final asset: src/assets/workshop-speakers/adam-gleave-headroom.png.
The photo data uses the imported asset's .src string so Astro serves the original PNG directly, bypassing the usual lossy WebP transformation. This is workshop-specific; People/Home framing remains unchanged.

Verification: all874,800 original RGB color-channel values compare equal, including face, hair, body, clothing and existing background. SHA256 of the decoded original and the extracted preserved output region:6f45289e8dbbf7951feb81e4f0af4f17cad7e14520c2be917a2381341218ee16. Verified again on the exported PNG referenced in preview HTML. CSS/browser scaling still displays the portrait within the standard4:5 frame. Visually reviewed the background join and desktop/mobile head placement. No generated person pixels were included in the final portrait.

## Final prompt — built-in tool mode

Use case: identity-preserve / background-only outpainting. Edit target: the supplied 540×540 portrait of Adam Gleave. Extend the canvas upward by about 80 pixels (roughly 15% of the original height), with the original square image anchored unchanged at the bottom. The ONLY added area is clean teal-blue studio background above his head. Match the existing background's exact blue/teal color, softly uneven lighting/gradient and texture seamlessly. No new objects, text or scene. Absolutely do not retouch, regenerate, beautify, relight, reshape, move, or alter ANY part of the person: face, hair, ears, neck, clothing, body, expression, pose and original colors must remain completely untouched. Do not extend or invent anatomy. Preserve the original photographic content, and add only matching background in the new headroom. Keep horizontal framing unchanged. Intended output composition is approximately 540×620 with all original content at x=0,y=80. This is for a consistent academic speaker portrait grid.
