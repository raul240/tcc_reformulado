import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import MovieDetails from './components/MovieDetails'
import SignupModal from './components/SignupModal'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tvscore-favorites') || '[]')
    } catch {
      return []
    }
  })
  const [modalMovie, setModalMovie] = useState(null)
  const [rating, setRating] = useState({})
  const [mobileMenu, setMobileMenu] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    localStorage.setItem('tvscore-favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setModalMovie(null)
        setSignupOpen(false)
      }
    }

    window.addEventListener('keydown', onKey)
    document.body.classList.toggle('modal-open', Boolean(modalMovie || signupOpen))

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('modal-open')
    }
  }, [modalMovie, signupOpen])

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    )
  }

  const handleSignupFieldChange = (event) => {
    const { name, value } = event.target
    setSignupData((current) => ({ ...current, [name]: value }))
  }

  const handleSignupSubmit = (event) => {
    event.preventDefault()
    setSignupOpen(false)
    setSignupData({ name: '', email: '', password: '' })
  }

  const handleRate = (movieId, star) => {
    setRating((current) => ({ ...current, [movieId]: star }))
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout
        onOpenSignup={() => setSignupOpen(true)}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onSelectMovie={setModalMovie}
                onOpenSignup={() => setSignupOpen(true)}
              />
            }
          />
          <Route
            path="/catalogo"
            element={
              <CatalogPage
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onSelectMovie={setModalMovie}
                onOpenSignup={() => setSignupOpen(true)}
              />
            }
          />
        </Routes>
      </Layout>

      <MovieDetails
        movie={modalMovie}
        rating={rating}
        favorites={favorites}
        onClose={() => setModalMovie(null)}
        onToggleFavorite={toggleFavorite}
        onRate={handleRate}
      />

      <SignupModal
        isOpen={signupOpen}
        formData={signupData}
        onChange={handleSignupFieldChange}
        onSubmit={handleSignupSubmit}
        onClose={() => setSignupOpen(false)}
      />
    </BrowserRouter>
  )
}

export default App
