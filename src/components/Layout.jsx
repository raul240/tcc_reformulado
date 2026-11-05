import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout({ children, onOpenSignup, mobileMenu, setMobileMenu }) {
  return (
    <div className="app-shell" id="inicio">
      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        onOpenSignup={onOpenSignup}
      />

      {children}

      <footer className="footer">
        <div className="footer-main">
          <div>
            <Link className="brand" to="/" aria-label="TVScore início">
              <span className="brand-mark">TV</span>
              <span>
                Score<span className="brand-dot">.</span>
              </span>
            </Link>
            <p>Descubra. Avalie. Guarde.</p>
          </div>

          <div className="footer-links">
            <Link to="/catalogo">Explorar</Link>
            <Link to="/">Como funciona</Link>
            <a href="/#sobre">Sobre o projeto</a>
          </div>

          <a className="back-top" href="#inicio">
            VOLTAR AO TOPO ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 TVScore · Projeto acadêmico</span>
          <span>
            Feito para quem ama boas histórias <b>✦</b>
          </span>
        </div>
      </footer>
    </div>
  )
}
