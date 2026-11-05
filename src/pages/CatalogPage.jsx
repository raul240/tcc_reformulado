import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PosterGrid from '../components/PosterGrid'
import { posters } from '../data/posters'

export default function CatalogPage({ favorites, onToggleFavorite, onSelectMovie, onOpenSignup }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('Todos')
  const [genre, setGenre] = useState('Todos')
  const [showFavorites, setShowFavorites] = useState(false)

  const filtered = useMemo(() => {
    return posters.filter((item) => {
      const matchesQuery = item.title.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR'))
      const matchesType = type === 'Todos' || item.type === type
      const matchesGenre = genre === 'Todos' || item.genre === genre
      const matchesFavorites = !showFavorites || favorites.includes(item.id)

      return matchesQuery && matchesType && matchesGenre && matchesFavorites
    })
  }, [query, type, genre, showFavorites, favorites])

  const resetFilters = () => {
    setQuery('')
    setType('Todos')
    setGenre('Todos')
    setShowFavorites(false)
  }

  return (
    <main>
      <section className="catalog-hero section-wrap">
        <div className="catalog-banner reveal">
          <span className="section-kicker">CATÁLOGO</span>
          <h1>Explore tudo que você pode assistir.</h1>
          <p>Descubra, salve e encontre sua próxima sessão favorita em segundos.</p>
          <div className="hero-buttons">
            <Link className="button button-yellow" to="/">Voltar para home</Link>
            <button type="button" className="button button-ghost" onClick={onOpenSignup}>Cadastrar</button>
          </div>
        </div>
      </section>

      <PosterGrid
        items={filtered}
        favorites={favorites}
        query={query}
        type={type}
        genre={genre}
        showFavorites={showFavorites}
        onQueryChange={setQuery}
        onTypeChange={setType}
        onGenreChange={setGenre}
        onToggleFavorite={onToggleFavorite}
        onSelectMovie={onSelectMovie}
        onClearFilters={resetFilters}
        onToggleFavoritesFilter={() => setShowFavorites((current) => !current)}
      />
    </main>
  )
}
