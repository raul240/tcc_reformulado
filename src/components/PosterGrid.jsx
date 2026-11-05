import { cleanImageUrl } from '../utils/cleanImageUrl'

export default function PosterGrid({
  items,
  favorites,
  query,
  type,
  genre,
  showFavorites,
  onQueryChange,
  onTypeChange,
  onGenreChange,
  onToggleFavorite,
  onSelectMovie,
  onClearFilters,
  onToggleFavoritesFilter
}) {
  const genres = ['Todos', ...new Set(items.map((item) => item.genre))]

  return (
    <section className="catalog-section section-wrap" id="catalogo">
      <div className="section-title-row reveal">
        <div>
          <span className="section-kicker">ESCOLHA SUA PRÓXIMA HISTÓRIA</span>
          <h2>
            Encontre algo <em>incrível.</em>
          </h2>
          <p>Explore títulos, descubra novos favoritos e mantenha tudo organizado em um só lugar.</p>
        </div>
        <span className="catalog-count">
          {items.length.toString().padStart(2, '0')} <small>TÍTULOS</small>
        </span>
      </div>

      <div className="catalog-tools">
        <label className="search-box">
          <span>⌕</span>
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar filme ou série..."
            aria-label="Buscar filme ou série"
          />
          <kbd>⌕</kbd>
        </label>

        <div className="filter-group" aria-label="Filtrar tipo">
          {['Todos', 'Filme', 'Série'].map((item) => (
            <button
              key={item}
              type="button"
              className={type === item ? 'filter-chip active' : 'filter-chip'}
              onClick={() => onTypeChange(item)}
            >
              {item === 'Todos' ? 'Tudo' : item + (item === 'Série' ? 's' : 's')}
            </button>
          ))}
        </div>

        <select value={genre} onChange={(event) => onGenreChange(event.target.value)} aria-label="Filtrar por gênero">
          {genres.map((item) => (
            <option key={item} value={item}>
              {item === 'Todos' ? 'Todos os gêneros' : item}
            </option>
          ))}
        </select>

        <button
          type="button"
          className={showFavorites ? 'favorites-filter active' : 'favorites-filter'}
          onClick={() => onToggleFavoritesFilter()}
        >
          <span>♡</span> Minha lista <b>{favorites.length}</b>
        </button>
      </div>

      <div className="movie-grid">
        {items.map((item, index) => (
          <div className="movie-reveal reveal" key={item.id}>
            <article className="movie-card" style={{ '--card-index': index }}>
              <button
                className="poster-button"
                onClick={() => onSelectMovie(item)}
                aria-label={`Ver detalhes de ${item.title}`}
                type="button"
              >
                <img
                  className="movie-poster"
                  src={cleanImageUrl(item.poster)}
                  alt={`Pôster de ${item.title}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.visibility = 'hidden'
                  }}
                />
                <span className="poster-shade" />
                <span className="poster-type">{item.type}</span>
                <span className="poster-open">Ver detalhes ↗</span>
              </button>

              <button
                type="button"
                className={favorites.includes(item.id) ? 'favorite-button saved' : 'favorite-button'}
                onClick={() => onToggleFavorite(item.id)}
                aria-label={favorites.includes(item.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                {favorites.includes(item.id) ? '♥' : '♡'}
              </button>

              <div className="movie-info">
                <div className="movie-title-line">
                  <h3>{item.title}</h3>
                  <span className="movie-score">★ {item.score}</span>
                </div>
                <p>
                  {item.year} <span>·</span> {item.genre}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="empty-state">
          <span>⌕</span>
          <h3>Nenhum título encontrado</h3>
          <p>Tente mudar a busca ou os filtros.</p>
          <button
            type="button"
            className="button button-ghost"
            onClick={() => onClearFilters()}
          >
            Limpar filtros
          </button>
        </div>
      )}

      <p className="catalog-note">
        Catálogo demonstrativo para o projeto acadêmico. Os títulos e pôsteres dependem da disponibilidade das imagens externas.
      </p>
    </section>
  )
}
