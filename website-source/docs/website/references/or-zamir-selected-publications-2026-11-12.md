# Or Zamir: selected-publication recommendation

Reviewed November 12, 2026. Initial recommendation below is historical. Rachel subsequently approved Undetectable Conversations, Consensus Sampling and Proofs of Ownership for Or’s profile, explicitly excluding the layerwise verification note for now. Implementation uses the established coauthor citation records; publication stages are recorded in CHANGELOG.

Current continuing-source Or profile was checked through GitHub: no publications field. Author identity is Or Zamir, https://zamir.prof/. Reviewed his current selected-paper list and the primary abstracts of recent AI/security work. His newest listed paper is Parity and Pattern Detection in Permutation Streams (September 8, 2026), which concerns streaming algorithms; recent hashing/coloring/cycle papers also have a less direct fit to RESI's stated AI-safety priorities.

## Recommended compact profile list

1. **Undetectable Conversations Between AI Agents via Pseudorandom Noise-Resilient Key Exchange** — Vinod Vaikuntanathan, Or Zamir. April 6, 2026 preprint; author lists FOCS 2026. https://arxiv.org/abs/2604.04757
   - Direct fit: limits of oversight, covert multi-agent coordination, cryptographic security. Already featured in RESI Research and Vinod's selected list.
   - Scope: conditional theoretical constructions concerning passive transcript auditing, with cryptographic/entropy assumptions. Does not show all real agents communicate covertly or that every monitoring/control approach fails.
2. **Consensus Sampling for Safer Generative AI** — Adam Tauman Kalai, Yael Tauman Kalai, Or Zamir. First November 12, 2025; revised May 9, 2026. https://arxiv.org/abs/2511.09493
   - Direct fit: a constructive safety mechanism for combining models, with a risk/abstention guarantee relative to an unknown reliable subset. Already on RESI Research and Adam's profile.
   - Scope: needs sampling/output-probability access and overlap among safe distributions. Agreement does not establish truth or safety independently; no guarantee if all constituent models are unsafe.
3. **A Note on Non-Composability of Layerwise Approximate Verification for Neural Inference** — Or Zamir. February 17, 2026 preprint. https://arxiv.org/abs/2602.15756
   - Direct fit: verification, composition and impossibility/counterexample results. Shows that per-layer approximate correctness alone does not generally establish trustworthy final neural-network output.
   - Scope: adversarial approximate errors in a functionally equivalent constructed network; not a claim that all verifiable inference or all approximate verification is impossible. Label as preprint/note, not a peer-reviewed conference publication. Primary HTML reviewed: https://arxiv.org/html/2602.15756v1.

## Optional fourth, if prioritizing newest relevant work

**Proofs of Ownership for Machine Learning Models** — Ran Canetti, Shafi Goldwasser, Or Zamir. June 29, 2026 preprint. https://arxiv.org/abs/2606.30423

A formal model-ownership framework and conditional characterization for black-box classifiers. Relevant to provenance/model security and already under Ran's profile, but less directly about AI behavior/safety guarantees than the three recommendations. It does not settle legal ownership or prove model safety. This is the newest AI-focused paper on the checked author list.

## Older alternatives

Undetectable Watermarks for Language Models (Miranda Christ, Sam Gunn, Or Zamir; COLT 2024 per author's list, https://arxiv.org/abs/2306.09194), Undetectable Steganography for Language Models (TMLR 2024 per author; arXiv title differs: https://arxiv.org/abs/2401.10360), and Planting Undetectable Backdoors in Machine Learning Models (FOCS 2022, already on RESI) are relevant, but adding them all would dilute the requested recent selection.

## Sources and interpretation

- Author list: https://zamir.prof/
- RESI priorities/current foundational list: https://resi.org/research/
- Primary arXiv records linked above establish authors, dates, abstracts and limitations.
- Publication selection and relevance rankings are editorial judgments, not claims of RESI commissioning or institutional authorship. Preserve the site's prior-work attribution.
- Existing foundational-review reading guide in the institutional research library corroborates earlier evaluations of Consensus Sampling, covert conversations and Proofs of Ownership. This is a website-specific profile-selection note; no new peer-institute landscape research was conducted.
