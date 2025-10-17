/**
 * Header JavaScript - ReceitasTech
 * Funcionalidades do header reutilizável
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // ===== MENU MOBILE =====
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Previne scroll quando menu está aberto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // ===== SCROLL EFFECT =====
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Adiciona classe quando rolar a página
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // ===== HIGHLIGHT ACTIVE PAGE =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (linkPage === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ===== MODAL DE LOGIN =====
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            openLoginModal();
        });
    }

    // ===== MODAL DE REGISTRO =====
    if (registerButton) {
        registerButton.addEventListener('click', function() {
            openRegisterModal();
        });
    }

    // ===== RESPONSIVIDADE =====
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});