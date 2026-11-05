function Logo() {
  return (
    <a className="brand" href="#inicio" aria-label="TVScore início">
      <span className="brand-mark">TV</span>
      <span>
        Score<span className="brand-dot">.</span>
      </span>
    </a>
  )
}

export default function Navbar({ mobileMenu, setMobileMenu, onOpenSignup }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo />
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Abrir menu"
          type="button"
        >
          ☰
        </button>
        <nav className={mobileMenu ? 'nav-links nav-links-open' : 'nav-links'}>
          <a href="#catalogo" onClick={() => setMobileMenu(false)}>Explorar</a>
          <a href="#como-funciona" onClick={() => setMobileMenu(false)}>Como funciona</a>
          <a href="#sobre" onClick={() => setMobileMenu(false)}>Sobre o projeto</a>
        </nav>
        <button type="button" className="nav-cta" onClick={onOpenSignup}>
          Cadastrar <span>↗</span>
        </button>
      </div>
    </header>
  )
}
