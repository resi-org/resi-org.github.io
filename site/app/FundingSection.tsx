export default function FundingSection() {
  const actionStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '100%', minWidth: 0, minHeight: '104px', height: '100%',
    boxSizing: 'border-box', borderRadius: '16px', padding: '20px 24px',
    fontSize: '16px', lineHeight: 1.5, fontWeight: 650, textAlign: 'center',
    whiteSpace: 'normal', overflowWrap: 'anywhere',
  } as const;
  return (
    <section className="funding-section-shell" id="funding" aria-labelledby="funding-title">
      <div className="funding-heading-bar">
        <div className="funding-heading-inner">
          <p className="eyebrow">How We Pay for It</p>
          <h2 id="funding-title">Funding and Transparency</h2>
        </div>
      </div>

      <div className="funding-face-sheet-body">
        <div className="funding-static-grid funding-content-frame">
          <p className="funding-recipient-statement">
            RESI launched with founding support from Coefficient Giving and Schmidt Sciences. We welcome conversations with philanthropic partners who share our commitment to building the scientific foundations of safe-by-design AI. Reach us at{' '}
            <a href="mailto:funding@resi.org">funding@resi.org</a>.
          </p>
          <div className="funding-copy-grid">
          <div className="funding-static-intro">
            <h3 style={{ fontSize: '24px', lineHeight: 1.4, marginBottom: '28px' }}>Support the immediate diffusion of work designed for the long term.</h3>
            <p>
              RESI is a non-profit organization fiscally sponsored by the{' '}
              <a href="https://edwardcharlesfoundation.org/" target="_blank" rel="noreferrer">Edward Charles Foundation</a>,
              {' '}a 501(c)(3) public charity, EIN 26-4245043.
            </p>
            <p>Individuals and pooled funds can donate directly through a Donor Advised Fund (DAF) or other account at Every.org.</p>
          </div>

          <div className="funding-static-copy" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p className="funding-static-lead" style={{ fontSize: '24px', lineHeight: 1.4, marginBottom: '28px' }}>Independent support gives RESI the freedom to pursue foundational questions, invest in exceptional researchers, and share results for the highest good.</p>
            <p>Support can also take the form of compute credits, infrastructure, and other resources that help foundational ideas move more quickly into practice.</p>
            <p>All contributions, including cash, stock, and other assets are tax-deductible to the extent permitted by law.</p>
          </div>
          </div>
            <div className="funding-static-actions">
              <a className="primary-button" style={actionStyle} href="https://www.every.org/resi" target="_blank" rel="noopener noreferrer">
                <span>Every.org</span>
              </a>
              <a className="funding-email-button" style={actionStyle} href="mailto:funding@resi.org"><span>Email us at funding@resi.org</span></a>
            </div>
        </div>
      </div>
    </section>
  );
}
