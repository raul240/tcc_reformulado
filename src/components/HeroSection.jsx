import { cleanImageUrl } from '../utils/cleanImageUrl'

export default function HeroSection({ featured, onSelectMovie }) {
  return (
    <section className="hero">
      <div className="hero-backdrop" style={{ backgroundImage: `url(${featured.backdrop})` }} />
      <div className="hero-shade" />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-pulse" /> SEU UNIVERSO DE FILMES E SÉRIES
        </div>
        <h1>
          Histórias que
          <br />
          ficam com <em>você.</em>
        </h1>
        <p className="hero-text">
          Descubra o que assistir, avalie o que amou e monte uma coleção com a sua cara. Seu próximo favorito começa aqui.
        </p>

        <div className="hero-buttons">
          <a className="button button-yellow" href="#catalogo">
            Explorar catálogo <span>↗</span>
          </a>
          <a className="button button-ghost" href="#como-funciona">
            Conheça o TVScore <span>↓</span>
          </a>
        </div>

        <div className="hero-proof">
          <span className="proof-stars">★★★★★</span>
          <span>Seu gosto. Suas escolhas. Sua próxima história.</span>
        </div>
      </div>

      <div className="hero-feature-card">
        <span className="feature-kicker">EM DESTAQUE</span>
        <div className="featured-mini">
          <img src={cleanImageUrl(featured.poster)} alt={`Pôster de ${featured.title}`} />
          <div>
            <h2>{featured.title}</h2>
            <p>
              {featured.year} <span>•</span> {featured.genre}
            </p>
            <div className="featured-score">
              ★ <strong>{featured.score}</strong>
              <small> / 10</small>
            </div>
            <button type="button" onClick={() => onSelectMovie(featured)}>
              Ver detalhes <span>↗</span>
            </button>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#catalogo">
        <span /> ROLE PARA DESCOBRIR
      </a>
    </section>
  )
}
