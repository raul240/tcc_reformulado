import { useEffect, useMemo, useState } from 'react'
import HeroSection from '../components/HeroSection'
import FeatureCards from '../components/FeatureCards'
import PosterGrid from '../components/PosterGrid'
import { posters } from '../data/posters'
import { features } from '../data/features'

export default function HomePage({ favorites, onToggleFavorite, onSelectMovie, onOpenSignup }) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('Todos')
  const [genre, setGenre] = useState('Todos')
  const [selectedMovie, setSelectedMovie] = useState(posters[0])
  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const featured = selectedMovie || posters[0]

  const filtered = useMemo(() => {
    return posters.filter((item) => {
      const matchesQuery = item.title.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR'))
      const matchesType = type === 'Todos' || item.type === type
      const matchesGenre = genre === 'Todos' || item.genre === genre
      const matchesFavorites = !showFavorites || favorites.includes(item.id)

      return matchesQuery && matchesType && matchesGenre && matchesFavorites
    })
  }, [query, type, genre, showFavorites, favorites])

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie)
    onSelectMovie(movie)
  }

  const resetFilters = () => {
    setQuery('')
    setType('Todos')
    setGenre('Todos')
    setShowFavorites(false)
  }

  return (
    <main>
      <HeroSection featured={featured} onSelectMovie={handleSelectMovie} />

      <section className="intro-strip" id="sobre">
        <div>
          <span className="strip-symbol">✳</span>
          <p>
            <strong>Mais do que dar play.</strong>
            <br />
            Um lugar para descobrir, organizar e compartilhar seu gosto.
          </p>
        </div>
        <span className="strip-side">
          FEITO PARA QUEM AMA HISTÓRIAS <b>✦</b>
        </span>
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
        onSelectMovie={handleSelectMovie}
        onClearFilters={resetFilters}
        onToggleFavoritesFilter={() => setShowFavorites((current) => !current)}
      />

      <FeatureCards features={features} />

      <section className="about-section section-wrap">
        <div className="about-panel reveal">
          <div className="about-orb" />
          <div className="about-copy">
            <span className="section-kicker">CONHEÇA O TVSCORE</span>
            <h2>
              Seu gosto merece
              <br />
              <em>um lugar especial.</em>
            </h2>
            <p>
              O TVScore é um projeto acadêmico pensado para tornar a descoberta e a avaliação de filmes e séries mais simples. Organize o que quer assistir, registre suas opiniões e encontre novas histórias para sua próxima sessão.
            </p>
            <a className="button button-yellow" href="#catalogo">
              Começar a explorar <span>↗</span>
            </a>
          </div>
          <div className="about-art">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-poster poster-a">
              <img src={posters[1].poster} alt="Pôster de Interestelar" />
            </div>
            <div className="art-poster poster-b">
              <img src={posters[2].poster} alt="Pôster de Oppenheimer" />
            </div>
            <div className="art-poster poster-c">
              <img src={posters[3].poster} alt="Pôster de Arcane" />
            </div>
            <span className="art-star star-one">✦</span>
            <span className="art-star star-two">✧</span>
          </div>
        </div>
      </section>

      <section className="faq-section section-wrap">
        <div className="faq-heading reveal">
          <span className="section-kicker">DÚVIDAS FREQUENTES</span>
          <h2>
            Quer saber <em>mais?</em>
          </h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>
              O que é o TVScore?<span>＋</span>
            </summary>
            <p>É um projeto acadêmico para explorar, organizar e avaliar filmes e séries em uma experiência visual simples.</p>
          </details>
          <details>
            <summary>
              Posso salvar títulos para ver depois?<span>＋</span>
            </summary>
            <p>Sim. Nesta versão demonstrativa, sua lista fica salva no armazenamento local deste navegador.</p>
          </details>
          <details>
            <summary>
              As notas exibidas são minhas avaliações?<span>＋</span>
            </summary>
            <p>Não. As notas mostradas no catálogo são demonstrativas e servem para ilustrar a interface. A integração com avaliações de usuários depende do backend.</p>
          </details>
          <details>
            <summary>
              O site já tem cadastro conectado ao servidor?<span>＋</span>
            </summary>
            <p>Esta entrega prioriza o redesign do frontend. Para ativar autenticação real, é necessário iniciar e integrar o backend existente.</p>
          </details>
        </div>
      </section>
    </main>
  )
}
