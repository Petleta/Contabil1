# Como colocar este site no ar pela Vercel

O site já está configurado para a Vercel: o build (`bun run build`) gera a pasta
`.vercel/output`, que a Vercel detecta sozinha. Nenhum ajuste extra é necessário.

## Opção 1 — pelo GitHub (recomendada)

1. Crie um repositório no GitHub e envie esta pasta para ele.
2. Entre em [vercel.com](https://vercel.com) e clique em **Add New… → Project**.
3. Escolha o repositório e clique em **Deploy**.
4. A Vercel instala as dependências, roda o build e publica. Cada novo push
   publica de novo automaticamente.

## Opção 2 — pelo terminal, sem GitHub

1. Instale a ferramenta da Vercel: `npm i -g vercel`
2. Dentro desta pasta, rode `vercel` (faz login e cria o projeto).
3. Para publicar de vez: `vercel --prod`

## Configuração usada

| Item | Valor |
| --- | --- |
| Instalação | `bun install` |
| Build | `bun run build` |
| Saída | `.vercel/output` (gerada pelo Nitro, preset `vercel`) |
| Runtime da função | Node.js 22 |

Se preferir npm em vez de Bun, troque os dois comandos acima por
`npm install` e `npm run build` no arquivo `vercel.json`.

## Ajustando textos, telefone e endereço

Quase tudo está em `src/routes/index.tsx`. O telefone, o endereço e os horários
também aparecem em `src/routes/__root.tsx` (título e descrição da página).
Depois de editar, rode `bun run dev` para ver o resultado, e publique de novo.

## Domínio próprio

Em **Project Settings → Domains** na Vercel, adicione o seu domínio e siga as
instruções de DNS que ela mostra.
