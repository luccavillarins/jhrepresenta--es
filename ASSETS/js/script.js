// JavaScript para o site JH Representações

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // --- Ativar link de navegação da página atual ---
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        // Remove a classe 'active' de todos os links primeiro
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        // Pega o nome do arquivo do href do link
        const linkFile = link.getAttribute('href').split('/').pop();

        // Adiciona a classe 'active' se o href corresponder à página atual
        if (currentLocation === linkFile || (currentLocation === '' && linkFile === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });


    // --- Validação do Formulário de Contato (Bootstrap 5) ---
    // Pega todos os formulários que precisam de validação
    const forms = document.querySelectorAll('.needs-validation');

    // Loop sobre eles e previne a submissão
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });

});
