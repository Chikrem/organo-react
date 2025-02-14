# organo-react

React: Desenvolvendo com JavaScript

## Descrição

Este projeto é uma aplicação React que permite a criação e visualização de cards de colaboradores, organizados por times. Cada time possui uma cor primária e secundária, e os colaboradores são adicionados através de um formulário.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
  - `App.jsx`: Componente principal da aplicação.
  - `componentes/`: Contém os componentes reutilizáveis da aplicação.
    - `Banner/`: Componente de banner.
    - `Button/`: Componente de botão.
    - `Card/`: Componente de card de colaborador.
    - `Form/`: Componente de formulário para adicionar colaboradores.
    - `SusList/`: Componente de lista suspensa.
    - `Team/`: Componente de time que agrupa os cards de colaboradores.
    - `TextField/`: Componente de campo de texto.
- `public/`: Contém os arquivos públicos, como imagens.
- `index.html`: Arquivo HTML principal.
- `package.json`: Arquivo de configuração do npm.
- `vite.config.js`: Arquivo de configuração do Vite.

## Como Executar o Projeto:

### 1. Instale as dependências do projeto:

```bash
   npm install
```

### 2. Execute o projeto em modo de desenvolvimento:

```bash
   npm run dev
```

### 3. Para criar uma build de produção:

```bash
npm run build
```

### 4. Para visualizar a build de produção:

```bash
npm run preview
```

### 5. Para executar o linting no código:

```bash
npm run lint
```
