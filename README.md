# Igor Studio

Portfólio profissional de Igor de Souza, construído com Next.js App Router e orientado a padrões de produção.

## Descrição

Este projeto apresenta uma landing page de portfólio com foco em:

- arquitetura limpa e componentes reutilizáveis
- performance e experiência responsiva
- SEO técnico com metadata, `robots` e `sitemap`
- estrutura pronta para deploy contínuo na Vercel

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vitest
- ESLint

## Estrutura de pastas

```text
src/
  app/                  # layout, páginas e rotas especiais
  components/
    layout/             # estrutura global (header/footer)
    sections/           # seções principais da home
    shared/             # componentes compartilhados
  content/              # conteúdo estático e tipado
  context/              # contexto global (idioma)
  lib/                  # utilitários e helpers puros
public/
  screenshots/          # capturas para documentação
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts úteis

- `npm run dev` inicia ambiente de desenvolvimento
- `npm run build` gera build de produção
- `npm run start` executa build localmente
- `npm run lint` valida regras de código
- `npm run typecheck` valida tipagem TypeScript
- `npm test` executa testes com Vitest

## Screenshots

Adicione imagens em `public/screenshots/` e referencie abaixo:

- Home: `public/screenshots/home.png`
- Projetos: `public/screenshots/projects.png`
- Mobile: `public/screenshots/mobile.png`

## Deploy na Vercel

1. Faça push do projeto para o GitHub.
2. No painel da Vercel, clique em **Add New > Project**.
3. Importe o repositório e mantenha as configurações padrão do Next.js:
   - Build command: `npm run build`
   - Output: `.next`
4. Defina variáveis de ambiente (se houver) em **Project Settings > Environment Variables**.
5. Faça o deploy e valide as rotas `/`, `/robots.txt` e `/sitemap.xml`.

## Domínio personalizado (`ims.dev.br`)

1. Na Vercel, abra **Project > Settings > Domains**.
2. Adicione `ims.dev.br` e `www.ims.dev.br`.
3. Configure os registros DNS no provedor:
   - `A` para root (`@`) apontando para `76.76.21.21`
   - `CNAME` para `www` apontando para `cname.vercel-dns.com`
4. Aguarde propagação e confirme o status como **Valid Configuration**.

## Qualidade e produção

Antes de publicar:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Se todos os comandos finalizarem sem erro, o projeto está pronto para deploy em produção.
