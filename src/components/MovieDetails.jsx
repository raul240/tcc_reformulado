import { cleanImageUrl } from '../utils/cleanImageUrl'

export default function MovieDetails({ movie, rating, favorites, onClose, onToggleFavorite, onRate }) {
  if (!movie) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <section
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes de ${movie.title}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar" type="button">
          ×
        </button>
        <div className="detail-backdrop" style={{ backgroundImage: `url(${cleanImageUrl(movie.backdrop)})` }} />
        <div className="detail-content">
          <img src={cleanImageUrl(movie.poster)} alt={`Pôster de ${movie.title}`} />
          <div className="detail-copy">
            <span className="section-kicker">
              {movie.type.toUpperCase()} · {movie.year}
            </span>
            <h2>{movie.title}</h2>
            <div className="detail-meta">
              <span>★ {movie.score} / 10</span>
              <span>{movie.genre}</span>
              <span>{movie.runtime}</span>
            </div>
            <p>{movie.synopsis}</p>

            <div className="your-rating">
              <span>SUA NOTA</span>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={(rating[movie.id] || 0) >= star ? 'rating-star chosen' : 'rating-star'}
                    onClick={() => onRate(movie.id, star)}
                    aria-label={`Avaliar com ${star} de 5 estrelas`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <small>
                {rating[movie.id]
                  ? `Você deu ${rating[movie.id]} de 5 estrelas (salvo nesta sessão).`
                  : 'Escolha uma nota para experimentar a avaliação.'}
              </small>
            </div>

            <button type="button" className="button button-yellow" onClick={() => onToggleFavorite(movie.id)}>
              {favorites.includes(movie.id) ? '♥ Remover da minha lista' : '♡ Adicionar à minha lista'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
