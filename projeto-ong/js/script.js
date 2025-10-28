// Seleciona o botão e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

// Adiciona um ouvinte de evento de clique ao botão
menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe 'menu-aberto' na tag <nav>
    nav.classList.toggle('menu-aberto');

    // Muda o texto do aria-label para acessibilidade
    const isMenuOpen = nav.classList.contains('menu-aberto');
    menuToggle.setAttribute('aria-label', isMenuOpen ? 'Fechar menu' : 'Abrir menu');
});



const desktopBreakpoint = 992; 

// Função para verificar e resetar o menu
function resetMenuOnResize() {
    // Verifica se a largura da janela é maior ou igual ao breakpoint
    if (window.innerWidth >= desktopBreakpoint) {
        // Se for tela grande, remove a classe que abre o menu mobile
        nav.classList.remove('menu-aberto');
        // Garante que o aria-label do botão volte ao estado inicial
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    }
}

// Adiciona um ouvinte que chama a função resetMenuOnResize
// toda vez que a janela do navegador for redimensionada
window.addEventListener('resize', resetMenuOnResize);

// Chama a função uma vez no início para garantir o estado correto no carregamento
resetMenuOnResize(); 
