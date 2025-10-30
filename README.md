# Plataforma Web para ONGs - Projeto de Programação Web

Este é o repositório completo para o projeto das disciplinas de Programação Web, abrangendo as Entregas I, II, III e IV. O projeto consiste em uma plataforma web front-end completa para uma ONG fictícia, implementada com HTML5, CSS3 e JavaScript puro.

O site está hospedado e pode ser acessado através do link do GitHub:
**[https://github.com/devjoaovieira/Programacao_WeB/tree/main/projeto-ong](https://github.com/devjoaovieira/Programacao_WeB/tree/main/projeto-ong)**

---

## 🚀 Funcionalidades Implementadas

O projeto inclui um site de 8 páginas com as seguintes funcionalidades:

### Entrega I: Estrutura
* **HTML5 Semântico:** Estrutura completa para 8 páginas (`<header>`, `<main>`, `<nav>`, `<article>`, `<footer>`, etc.).
* **Formulários Complexos:** 4 formulários com validação nativa de HTML5.
* **Multimídia:** Uso de tags `<picture>`, `<video>` e `<audio>`.
* **Gráficos:** Placeholders para gráficos com a tag `<canvas>`.

### Entrega II: Estilização e Layout
* **Sistema de Design:** Paleta de cores, tipografia e espaçamento modulares definidos com Variáveis CSS.
* **Layout Responsivo:** Implementação de layout "Mobile-First" usando CSS Grid e Flexbox.
* **Grid de 12 Colunas:** Sistema de grid customizado (`.col-sm-6`, `.col-md-4`, etc.).
* **Componentes:** Estilização de `.card`, `.btn` (com estados `:hover`, `:focus`), e formulários.
* **Navegação Sofisticada:** Menu principal com submenu dropdown no desktop e menu hambúrguer interativo no mobile.

### Entrega III: Interatividade
* **Single Page Application (SPA):** Simulação de SPA usando `fetch()` e Hash Routing para carregar conteúdo dinamicamente sem recarregar a página.
* **Validação Avançada:** JavaScript para validação de formulários "on-submit", exibindo mensagens de erro visuais.
* **Templates JS:** Demonstração de função template para geração de HTML dinâmico.

### Entrega IV: Profissionalização
* **Controle de Versão:** Uso de estratégia GitFlow (branches `main`, `develop`, `feature`), commits semânticos, Pull Requests e Release `v1.0.0`.
* **Acessibilidade (WCAG 2.1 AA):**
    * Auditoria completa (WAVE/Lighthouse).
    * Correção de contraste de cores (mínimo 4.5:1).
    * Suporte total à navegação por teclado (`Tab`, foco visível).
    * Uso de atributos ARIA (`role`, `aria-label`, `aria-describedby`) para leitores de tela.
    * Implementação de **Modo Escuro** (alto contraste) com salvamento no `localStorage`.
* **Otimização:**
    * **Minificação:** Geração e uso de arquivos `.min.css` e `.min.js`.
    * **Otimização de Imagens:** Uso de imagens locais, redimensionadas, comprimidas em `.webp` e servidas via tag `<picture>`.

---

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma:
/projeto-ong/
    |-- /assets/ (Imagens, vídeos e áudios otimizados) 
    |-- /css/ (Arquivos CSS modulares e minificados) 
    |-- /documentacao/ (Wireframes, Especificações de Forms/Gráficos, Validação W3C) 
    |-- /js/ (Scripts JavaScript, incluindo a versão minificada) 
    |-- /paginas/ (Os 8 arquivos HTML do site)

---

## 🔧 Como Executar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/devjoaovieira/Programacao_WeB.git](https://github.com/devjoaovieira/Programacao_WeB.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Programacao_WeB/projeto-ong/paginas
    ```
3.  **Execute com o Live Server:**
    * (Requer a extensão "Live Server" no VS Code).
    * Clique com o botão direito no arquivo `index.html`.
    * Selecione "Open with Live Server".