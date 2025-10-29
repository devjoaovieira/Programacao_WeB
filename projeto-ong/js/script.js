/* ============================================= */
/* ARQUIVO: script.js                            */
/* OBJETIVO: Funcionalidades interativas do site */
/* ============================================= */

// --- FUNCIONALIDADE: Menu Hambúrguer Responsivo ---

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('menu-aberto');
    const isMenuOpen = nav.classList.contains('menu-aberto');
    menuToggle.setAttribute('aria-label', isMenuOpen ? 'Fechar menu' : 'Abrir menu');
});

const desktopBreakpoint = 992; 

function resetMenuOnResize() {
    if (window.innerWidth >= desktopBreakpoint) {
        nav.classList.remove('menu-aberto');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    }
}
window.addEventListener('resize', resetMenuOnResize);
resetMenuOnResize(); 

// --- FIM: Menu Hambúrguer ---


// --- FUNCIONALIDADE: Validação Avançada de Formulários ---

// Funções mostrarErro e limparErro (Globais para reutilização)
function mostrarErro(campoId, mensagemId) {
    if (!campoId) return; 
    const campo = document.getElementById(campoId);
    if (campo) campo.classList.add('campo-invalido');
    
    if (!mensagemId) return; 
    const mensagem = document.getElementById(mensagemId);
    if (mensagem) mensagem.classList.add('visivel');
}

function limparErro(campoId, mensagemId) {
     if (!campoId) return;
    const campo = document.getElementById(campoId);
     if (campo) campo.classList.remove('campo-invalido');

     if (!mensagemId) return;
    const mensagem = document.getElementById(mensagemId);
     if (mensagem) mensagem.classList.remove('visivel');
}

// Função que lida com o submit (contém a lógica de validação)
function handleFormSubmit(event) {
    event.preventDefault(); 
    console.log("Submit interceptado para validação.");
    
    let isValid = true; 
    const form = event.target; 

    // --- Validação (Expandir conforme necessário) ---
    const nome = form.querySelector('input[name="nome_contato"], input[name="nome_doador"], input[name="nome"]'); 
    const erroNome = form.querySelector('#erro-nome'); 
    if (nome && nome.required && nome.value.trim() === '') {
        isValid = false;
        mostrarErro(nome.id, erroNome ? erroNome.id : null);
    } else if (nome) {
        limparErro(nome.id, erroNome ? erroNome.id : null);
    }

    const email = form.querySelector('input[type="email"]');
    const erroEmail = form.querySelector('#erro-email'); 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email && email.required && !emailRegex.test(email.value)) {
        isValid = false;
        mostrarErro(email.id, erroEmail ? erroEmail.id : null);
    } else if (email) {
        limparErro(email.id, erroEmail ? erroEmail.id : null);
    }

    // Adicionar validações para outros campos aqui...

    // --- Fim Validação ---

    if (isValid) {
        console.log('Formulário válido. Enviando...');
        alert('Formulário enviado com sucesso! (Simulação)');
        form.reset(); 
        form.querySelectorAll('.campo-invalido').forEach(campo => campo.classList.remove('campo-invalido'));
        form.querySelectorAll('.mensagem-erro.visivel').forEach(msg => msg.classList.remove('visivel'));
    } else {
        console.log('Formulário inválido. Verifique os erros.');
    }
}

// Função auxiliar para inicializar a validação 
function inicializarValidacaoFormulario() {
    // Tenta encontrar um formulário DENTRO do #main-content atual
    const formAtual = document.querySelector('#main-content form'); 
    
    if (formAtual) {
        // Verifica se já não tem um listener (usando dataset como flag)
        if (formAtual.dataset.listenerAttached !== 'true') { 
            formAtual.addEventListener('submit', handleFormSubmit);
            formAtual.dataset.listenerAttached = 'true'; 
            console.log("Listener de validação anexado ao formulário:", formAtual);
        } else {
             console.log("Listener já anexado a este formulário:", formAtual);
        }
    } else {
        console.log("Nenhum formulário encontrado no conteúdo atual.");
    }
}

// --- FIM: Validação ---


// --- FUNCIONALIDADE: Roteamento SPA (Single Page Application) ---

const mainContentContainer = document.getElementById('main-content');

async function carregarConteudo(url) {
    console.log(`Tentando carregar: ${url}`); 

    // Adiciona uma classe para feedback visual (opcional)
    mainContentContainer.classList.add('carregando'); 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro ao buscar ${url}: ${response.statusText} (${response.status})`);
        }
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        const novoConteudo = doc.getElementById('main-content');

        if (novoConteudo && mainContentContainer) {
            mainContentContainer.innerHTML = novoConteudo.innerHTML;
            console.log(`Conteúdo de ${url} carregado.`);
            inicializarValidacaoFormulario(); // Re-aplica listeners ao novo conteúdo
        } else {
            throw new Error('Container #main-content não encontrado no HTML buscado ou atual.');
        }

    } catch (error) {
        console.error('Falha ao carregar conteúdo:', error);
        if (mainContentContainer) {
            mainContentContainer.innerHTML = `<p class="alert alert-error">Não foi possível carregar a página: ${error.message}. Verifique o console.</p>`;
        }
    } finally {
         // Remove a classe de carregamento, mesmo se der erro
        mainContentContainer.classList.remove('carregando');
    }
}

/**
 * Processa a mudança de hash na URL, determina a página a carregar e chama carregarConteudo.
 * AGORA IGNORA hashes que são apenas âncoras internas.
 */
function handleHashChange() {
    const hash = window.location.hash;
    console.log(`Hash atual: ${hash}`); // Log para depuração

    // Verifica se o hash começa com '#/' (indicando uma página da SPA)
    if (hash.startsWith('#/')) {
        // Pega o ID da página (removendo '#/' e qualquer coisa após outro '#', como âncoras)
        const pageIdWithAnchor = hash.substring(2);
        const pageIdParts = pageIdWithAnchor.split('#'); // Separa página da âncora, se houver
        const pageId = pageIdParts[0] || 'index'; // Pega a parte da página, ou 'index' se vazio
        
        let pageUrl = `${pageId}.html`; 

        console.log(`Hash de página detectado: #${pageId}, carregando URL: ${pageUrl}`);
        carregarConteudo(pageUrl); 
        // Nota: O scroll para a âncora (se houver pageIdParts[1]) não está implementado aqui ainda.
        // O foco é corrigir o erro 404 primeiro.

    } else {
        // Se o hash não começa com '#/' (é vazio, '#', ou '#ancora'), não carrega conteúdo novo.
        console.log(`Hash não é de página SPA ('#/'), ignorando carregamento de conteúdo.`);
        // A validação pode precisar ser reinicializada aqui caso a página
        // já esteja carregada e o usuário navegue apenas por âncoras?
        // Vamos testar primeiro sem isso. A princípio, o conteúdo já está lá.
    }
}

function configurarRoteamento() {
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.html') && !href.includes('#')) {
                event.preventDefault(); 
                const pageId = href.replace('.html', '');
                const newHash = '#/' + pageId;
                if (window.location.hash !== newHash) {
                    window.location.hash = newHash;
                } else {
                    handleHashChange(); // Força recarregar se clicar no link atual
                }
            }
        });
    });

    window.addEventListener('hashchange', handleHashChange);

    window.addEventListener('load', () => {
        // Define hash padrão e carrega conteúdo inicial
        if (!window.location.hash || window.location.hash === '#') {
            window.location.replace('#/index'); // Usa replace para não adicionar entrada duplicada no histórico
        } 
        // Chama handleHashChange para carregar conteúdo baseado no hash (inicial ou definido acima)
        handleHashChange(); 
        // Validação inicial é chamada DEPOIS que handleHashChange (e carregarConteudo) terminar
    });
}

// Inicia o roteamento
configurarRoteamento();

// --- FIM: Roteamento SPA ---


// --- FUNCIONALIDADE: Funções Template (Exemplo) ---

/**
 * Cria uma string HTML para um card de projeto usando Template Literals.
 * Recebe dados do projeto e retorna o HTML correspondente.
 * @param {object} dados - Um objeto contendo informações do projeto.
 * @param {string} dados.id - O ID da seção do projeto (para o link de âncora).
 * @param {string} dados.imgJpg - Caminho da imagem JPG.
 * @param {string} dados.imgWebp - Caminho da imagem WebP.
 * @param {string} dados.alt - Texto alternativo da imagem.
 * @param {string} dados.titulo - Título do projeto.
 * @param {string} dados.descricao - Breve descrição do projeto.
 * @param {string} dados.linkAcao - URL do link do botão (ex: 'doacoes.html').
 * @param {string} dados.textoBotao - Texto do botão (ex: 'APOIE ESTE PROJETO').
 * @returns {string} - A string HTML do card.
 */
function criarCardProjeto(dados) {
    // Usando Template Literals (crases ``) para facilitar a criação do HTML
    // Inclui classes de coluna para layout responsivo
    return `
        <article class="card col-sm-6 col-md-4">
            <picture>
                <source srcset="${dados.imgWebp}" type="image/webp">
                <img src="${dados.imgJpg}" alt="${dados.alt}">
            </picture>
            <div class="card-conteudo">
                <h2 id="${dados.id}">${dados.titulo}</h2> 
                <p>${dados.descricao}</p>
                
                <a href="${dados.linkAcao}" class="btn btn-primario">${dados.textoBotao}</a> 
            </div>
        </article>
    `;
}

// --- COMO USAR (APENAS EXEMPLO, NÃO SERÁ EXECUTADO AGORA) ---
/* // 1. Você teria os dados (poderiam vir de uma API no futuro)
const projetoEducacao = {
    id: 'educacao',
    imgJpg: '../assets/img/criancas-estudando.jpg',
    imgWebp: '../assets/img/criancas-estudando.webp',
    alt: 'Crianças sorrindo em uma sala de aula.',
    titulo: 'Educação para Crianças e Jovens',
    descricao: 'Este é nosso projeto pioneiro...',
    linkAcao: 'doacoes.html',
    textoBotao: 'APOIE ESTE PROJETO'
};

// 2. Você chamaria a função template com os dados
const cardEducacaoHTML = criarCardProjeto(projetoEducacao);

// 3. Você inseriria o HTML gerado na página (ex: dentro de uma <div class="row">)
// const containerProjetos = document.querySelector('#pagina-projetos .row'); 
// if (containerProjetos) {
//     containerProjetos.innerHTML += cardEducacaoHTML;
// } 
*/

// --- FIM: Funções Template ---