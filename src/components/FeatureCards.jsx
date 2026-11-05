export default function FeatureCards({ features }) {
  return (
    <section className="how-section" id="como-funciona">
      <div className="section-wrap">
        <div className="center-heading reveal">
          <span className="section-kicker">SIMPLES ASSIM</span>
          <h2>
            Três passos. Um mundo de <em>histórias.</em>
          </h2>
          <p>Do primeiro clique à próxima maratona, seu universo de entretenimento começa aqui.</p>
        </div>

        <div className="steps-grid">
          {features.map((feature) => (
            <div className="step-card reveal" key={feature.number}>
              <div className="step-top">
                <span>{feature.number}</span>
                <b>{feature.icon}</b>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="step-detail">{feature.detail}</div>
              <span className="step-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
