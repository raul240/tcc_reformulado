# TVScore — redesign de frontend

Esta pasta contém uma versão redesenhada do frontend TVScore em React + Vite.

## Como executar no Windows

1. Instale Node.js (versão compatível com Vite 8).
2. Extraia o ZIP.
3. Abra a pasta `TVScore_Redesign` no VS Code.
4. Abra o terminal na pasta e execute:

```bash
npm install
npm run dev
```

5. Abra no navegador o endereço local mostrado pelo Vite.

Para gerar uma versão de produção, execute `npm run build`.

## O que foi incluído

- Interface escura com degradês azuis, amarelo de destaque e branco.
- Layout responsivo para computador e celular.
- Catálogo demonstrativo com busca por título, filtros por tipo e gênero.
- Pôsteres e imagens de fundo hospedados pelo TMDB Image CDN.
- Cards com animações de hover, zoom e revelação de informações.
- Animações de entrada das seções durante a rolagem.
- Modal de detalhes com sinopse e avaliação demonstrativa de 1 a 5 estrelas.
- Lista de favoritos persistida no `localStorage` deste navegador.
- Seções de apresentação do projeto, como funciona, perguntas frequentes e rodapé.
- Suporte a `prefers-reduced-motion`.

## Limitações importantes

- Esta entrega é uma proposta de redesign do frontend. O catálogo usa dados demonstrativos definidos em `src/App.jsx`; não é uma integração ao vivo com a API TMDB.
- Os pôsteres são carregados de URLs externas; se a imagem remota mudar ou falhar, será necessário substituir a URL.
- Favoritos ficam salvos apenas no navegador atual. As notas são demonstrativas e mantidas somente durante a sessão.
- Login, cadastro real e sincronização com MariaDB/Aiven exigem o backend do projeto original em execução e integração validada. Esta pasta não inclui credenciais, banco de dados nem backend.
- A interface não afirma que estatísticas fictícias são reais.

## Estrutura

- `src/App.jsx` — componentes, catálogo e interações.
- `src/App.css` — design, responsividade e animações.
- `src/index.css` — estilos globais.
- `src/main.jsx` — ponto de entrada React.
- `index.html` — documento inicial.
"# tcc_reformulado" 
