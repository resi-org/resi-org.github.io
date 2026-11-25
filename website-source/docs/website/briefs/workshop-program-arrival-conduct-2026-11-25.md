# December 4 workshop — program, arrival and conduct updates, November 25, 2026

Status: W1/W2 implemented in local preview, not published. W3 contact confirmed; policy wording remains under review. W4 preview checks complete for W1/W2, with W3 and live verification outstanding.

Preview: http://127.0.0.1:4515/workshops/safe-by-design-superintelligence/#schedule
Checkout: /Users/rachelsipser/Documents/GitHub/resi-website/output/resi-workshop-program-preview-nov25
Branch: codex/workshop-program-arrival-preview-nov25
Baseline: current continuing source 8b097eff69918e442c4a7beea984d47af1c16559; production 869749ec488e70ccab8028bd3d4d170cc40a1bbd. Only unrelated PR150 was open. Earlier4513/4514 previews, dirty shared checkout, and unpublished header-hover trial preserved.

## Fresh source inspection

Read the live canonical workshop and current source. The approved November24 talk/portrait layout and one-row mobile groups are published, including five previously approved spotlight photos and seven photo credits. Zico is CMU; Mitchell is MIT, formerly OpenAI; Jacob is a panelist only. The program placeholder is still live, with no timetable, directions or conduct link. All existing main talk titles match the current planning tab; Zico remains pending, Orr retains his supplied title awaiting a revision.

The Google Docs connector accessed RESI Opening Event, specifically tab t.b3i2oi3kq4il, verified by metadata as Program draft. Its internal title says Program option1; this does not indicate a second agenda was used. The26 public timetable rows match Rachel’s November25 snapshot exactly. Readback of the native table independently checked every time range and named speaker; all match, with a continuous510-minute8:30am–5pm sequence. No other agenda version was merged. Slack approval excerpts are the quotations Rachel supplied; the Slack messages were not independently reopened. No guest/attendee/dinner tabs were read. Internal logistics and dinner are excluded from application data/output.

## W1 — implemented in preview

Added src/data/workshop-program.ts containing only public session times/references. The page resolves talk titles, affiliations, panel titles, membership and moderators from the canonical event record, preserving approved display order. Added optional spotlight title metadata to the collection schema and Sam’s supplied Data attribution working title. Missing spotlight titles remain explicitly pending; title collection is due November30 per Rachel. No substantive descriptions written or paraphrased.

New #schedule Tentative program uses chronological time/session rows after the hero, in the established720px column, with Cardo18px titles and IBM Plex Sans metadata. At480px/below time precedes session copy on its own line. A local-time/subject-to-change note is visible; the obsolete full-program placeholder is replaced by a tentative-program link. Existing #program remains Panels; no stable anchor moved. Individual talks/panels gain linked anchors. Prior portrait sections are retained unchanged. This layout is an implementation proposal, not a layout prescribed by Adam or approved for publication.

## W2 — implemented in preview

Getting here (#directions) appears after hosts, before the closing invitation/credits/footer. Two short paragraphs identify RESI at the Akamai building,145 Broadway,Cambridge MA02142; link Google Maps; recommend public transport; name Kendall/MIT on the Red Line; give an approximate6-minute walk and link its walking route; link nearby paid public Green Garage/Broadway and Yellow Garage/Ames Place. No attendee parking is implied at Akamai. No floor, office number, security or event entrance procedure is invented.

Current evidence checked November25:
- https://www.cambridgeredevelopment.org/projects/145-broadway-akamai identifies the building.
- Google Maps route from Kendall/MIT station to145Broadway resolves the specified endpoints and currently gives6minutes/0.3mile via Main/Ames/Broadway or Broadway. This is an estimate, not a guaranteed duration.
- https://www.kendallcenter.com/location/ is the property’s primary source: Green entrances Broadway/Ames, Yellow entrance Ames Place; both garages24/7 and managed byVPNE.
- Current public ParkWhiz listings for90Broadway and77Ames offer hourly booking and unreserved-space access. Direct text fetches encountered bot gates/cache limits; Google Maps listings were independently opened and show public booking links,24-hour operation, and the same garage operator contact. No booking was made and no rate is promised.
- Green map query resolves Kendall Center Green Garage,90Broadway; Yellow resolves Kendall Center Yellow Garage,75Ames with its Ames Place vehicle entrance. The booking-address77Ames/property-address75Ames distinction is avoided in visitor copy; the property-confirmed entrance is used.
- Exact venue Maps link, walking link, and both garage-map destinations tested. /inaug already redirects to the canonical workshop in the ordinary browser; unchanged.

## W3 — reporting contact approved; policy under review

Rachel designated hello@resi.org for conduct reports. She asked for institutional examples, particularly Simons, before settling policy wording. No conduct route, placeholder address, workshop link, homepage link, global navigation or footer item has been added yet. Homepage placement is not established by Adam’s main-webpage phrase and remains outside this proposal.

Fresh primary examples:
- https://www.simonsfoundation.org/code-of-conduct/ (Simons Foundation/Flatiron): scientific exchange and debate, respect and participation, concrete prohibited conduct, email reporting. Its sanctions and broader communication/confidentiality rules are institution-specific and are not adopted for RESI.
- https://simons.berkeley.edu/code-conduct (Simons Institute): incorporates foundation and UC Berkeley/UC policies and named institutional reporting channels. RESI must not imply those systems apply to it.
- https://simons.berkeley.edu/workshops/bay-area-discrete-math-day-bad-math-day provides a short workshop-level welcoming/no-harassment statement and organizer contact, but retains old pandemic text; only its policy structure informs this review.
- https://www.ias.edu/math/wam/code-conduct provides a workshop-specific respect/participation model. Its confidentiality and enforcement promises are not adopted.

Proposed revised wording, awaiting Rachel’s confirmation:

RESI’s Safe-by-Design Superintelligence workshop supports open inquiry, respectful scientific debate, and the participation of people from a wide range of backgrounds. This code applies to attendees, speakers, organizers, and staff at the December4,2026 event.

Participants are expected to treat one another with respect. Harassment, discrimination, bullying, intimidation, and retaliation are not acceptable. Neither are personal abuse, repeated disruption of sessions, stalking, unwelcome sexual attention, or inappropriate physical contact. Respect others’ boundaries and stop unwanted conduct when asked.

To ask a question or report a concern about conduct at the workshop, contact hello@resi.org.

This is original concise adaptation informed by the examples, not a policy supplied verbatim by Adam. No confidentiality, response-time, monitoring, sanctions or reporting-process promises are added. The reusable peer-policy findings are retained here as a local handoff; the shared research library is outside this chat’s writable roots and still needs this update indexed there.

## W4 — preview verification; publication outstanding

Astro check61files: zero errors/warnings/hints; build passed;18existing announcement tests passed; git diff --check passed. A first type-narrowing issue was fixed before the final passing check/build.

Actual280/320/390/480/481/635/760/1280px browser checks:26 timetable rows, no viewport overflow, no overflowing timetable/directions copy, no speaker-copy/photo overhang, and all four small portrait groups remain one row. All fragment targets exist.12talks/five pre-existing spotlight photos/seven credits preserved; all29images loaded in the primary preview check.320px keyboard Enter reaches#schedule with visible focus; desktop links reach individual talks, both panels, spotlights and directions below the header. Exact repeated talk/panel titles verified. Interest note remains unchanged in both locations and explicitly says completion does not confirm attendance. Credits remain above the final visible footer.

Static audit against current production finds only workshop HTML changes among existing generated HTML files;29image attribute sets are identical. No Home/Events/People/Search content or portrait pixels/crops changed. No QRcode, print production tasks or redirect edits. No forms submitted, physical-device or spoken screen-reader session.

Visual proof: output/program-arrival-proof/desktop-program.png, mobile-program.png, mobile-afternoon.png, mobile-directions.png, full-page captures and responsive.json; static-audit.json and program-source-audit.json hold checks. Mobile proof is actual390px. Viewport reset and the4515 preview retained for Rachel. Local preview server session69992. No source/publication PR, production merge or deployment has occurred for this scope. W3 link/address and final live verification cannot pass until implementation/content approval and authorized publication.

Next action: obtain Rachel’s decision on the Simons-informed conduct wording, implement/link that page, then complete combined preview review and scoped publication through separate source/generated-output PRs when authorized. Do not publish the current preview wholesale from an old checkout.


November25 W1 wording research only: Rachel asked whether Tentative program is normal. Fresh primary examples confirm legitimate use at AIRE26 and KEIR/CIKM2026, while current Simons Institute uses Schedule and Simons Foundation uses Agenda; IAS uses Scientific Program. No single universal label is established by this sample. Recommendation: Program plus the existing visible session-times-subject-to-change note. This remains a recommendation, not approval; preview wording unchanged and nothing published. Evidence/limits/library handoff: references/workshop-program-labels-2026-11-25.md. W2 preview complete, W3 policy wording still pending, W4 publication/live checks outstanding.


November25 W1 section-order discussion — recommendation only: For RESI’s current invitation/interest page, recommend Speakers and talks → Panels → RESI research spotlights before the full chronological Program, while retaining a prominent Program jump link in the intro. This is editorial judgment: the approved portraits and research subjects introduce the event before a long timetable; returning attendees still have direct schedule access. Current Simons Foundation Wave Turbulence2026 places a Speakers block before Agenda (https://www.simonsfoundation.org/events/simons-collaboration-on-wave-turbulence-annual-meeting-2026/); Simons Institute Industry Day2026 instead proceeds from its intro directly into timed sessions (https://simons.berkeley.edu/workshops/twelfth-annual-industry-day). Both arrangements exist; this does not establish a universal standard. No reorder or heading change implemented or published. W2 preview remains complete; W3 policy wording pending; W4 final/live checks pending publication.


## November 25 — name-first workshop order trial, preview only

Rachel requested: unchanged intro; Speakers; Panelists; RESI research spotlights; Program; then hosts/practical information. Implemented this order and matching contents links at http://127.0.0.1:4515/workshops/safe-by-design-superintelligence/#speakers. Speaker entries now lead with the name in the former talk-heading Cardo70018px style (17.25px/16.5px at narrow breakpoints), affiliation remains muted12px/11.25px, and talk title follows in the former name IBM Plex Sans50016px/15px style. Pending titles remain truthful and muted. Program heading is now Program, with italic “All times Eastern (Cambridge, Massachusetts). Session times are subject to change.” Intro only updates connected program-link terminology/order; its copy/layout is otherwise preserved.

Preserved #program for panelists, #schedule for the timetable and every individual talk/panel anchor. All26 times, canonical names/titles/affiliations/lineups, approved portraits/crops, seven credits, registration wording and concise directions remain unchanged. No conduct page/link, homepage/global link or publication added. W3 policy wording still awaits Rachel’s decision; hello@resi.org is the approved reporting address.

Fresh primary comparison supports this as a legitimate arrangement, not a universal rule: Simons Foundation Wave Turbulence2026 and Global Categorical Symmetries2026 place Speakers before Agenda; their Abstracts entries use name, affiliation, then title. Sources: https://www.simonsfoundation.org/events/simons-collaboration-on-wave-turbulence-annual-meeting-2026/ and https://www.simonsfoundation.org/events/simons-collaboration-on-global-categorical-symmetries-annual-meeting-2026/. This trial supersedes the preceding unimplemented section-order recommendation; it does not establish a published sitewide style.

Validation: Astro check61files zero diagnostics and build passed; git diff --check passed. Browser observations at actual300/320/390/480/481/635/760/1280px show no viewport overflow, clipped speaker/session/directions copy or speaker-copy/photo overhang. All26 timetable rows and fragment targets remain, repeated talk titles match their detail targets, all four small portrait groups retain one row, and the note computes italic. The requested280px override was clamped by this browser to300px, so no new280px claim is made. Desktop and390px mobile visual review completed; all29 images loaded. Preview proof: output/program-arrival-proof/name-first-responsive.json, name-first-review.png, name-first-mobile-full.png and name-first-mobile-top.png. Temporary viewport reset;4515 preview retained. No forms submitted. Preview complete remains distinct from published/live verified.

Next: Rachel reviews this layout trial; separately resolve W3 wording before implementing the conduct page and completing the combined release review.
