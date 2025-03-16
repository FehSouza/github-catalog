# GitHub Catalog

## Contexto

O GitHub Catalog é um projeto desenvolvido para facilitar a pesquisa e a visualização de usuários do GitHub de forma intuitiva e eficiente.

Ele foi criado com o objetivo de aprofundar estudos em internacionalização e na utilização da biblioteca de componentes Material UI. Além disso, foram realizados testes unitários e end-to-end (E2E) como parte do processo de aprendizado e aprimoramento nessa área, garantindo mais confiabilidade e estabilidade à aplicação.

&nbsp;

## Funcionalidades

**Pesquisa de usuários:** permite buscar usuários no GitHub por nome;

**Visualização de repositórios:** exibe informações de cada repositório do usuário, como descrição, linguagem principal, datas de criação e atualização e número de estrelas;

**Visualização de seguidores:** exibe a lista de seguidores do usuário pesquisado.

&nbsp;

## Tecnologias usadas

**React:** Biblioteca para construção de interfaces de usuário.

**TypeScript:** superset do JavaScript que adiciona tipagem estática ao código;

**Material UI:** biblioteca de componentes para estilização e design responsivo;

**React Intl:** biblioteca para implementação de internacionalização (i18n);

**Vitest:** ferramenta de testes unitários para projetos em JavaScript/TypeScript;

**Playwright:** framework para testes end-to-end (E2E).

&nbsp;

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/FehSouza/github-catalog.git
```

2. Acesse o diretório do projeto:

```bash
cd github-catalog
```

3. Instale as dependências:

```bash
pnpm install
```

4. Execute a aplicação:

   4.1. Com o servidor do GitHub:

   ```bash
   pnpm dev
   ```

   4.2. Com o mock da API:

   ```bash
   pnpm dev:mock
   ```

5. Acesse a aplicação no navegador em http://localhost:3000

&nbsp;

## Testes

### Testes Unitários

Para executar os testes unitários com o Vitest:

```bash
pnpm test
```

### Testes E2E

Para executar os testes E2E com o Playwright:

```bash
pnpm test:e2e
```

&nbsp;

## Link Vercel

https://github-catalog.vercel.app/
