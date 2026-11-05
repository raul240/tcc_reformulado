export default function SignupModal({ isOpen, formData, onChange, onSubmit, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <section
        className="signup-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Cadastro no TVScore"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar cadastro" type="button">
          ×
        </button>

        <div className="signup-header">
          <span className="section-kicker">JUNTE-SE AO TVSCORE</span>
          <h2>Crie sua conta</h2>
        </div>

        <form className="signup-form" onSubmit={onSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Seu nome completo"
              required
            />
          </label>

          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="seuemail@email.com"
              required
            />
          </label>

          <label>
            <span>Senha</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="Crie uma senha"
              minLength={6}
              required
            />
          </label>

          <button type="submit" className="button button-yellow signup-submit">
            Cadastrar agora <span>↗</span>
          </button>
        </form>
      </section>
    </div>
  )
}
