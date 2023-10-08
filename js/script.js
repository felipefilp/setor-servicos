$(document).ready(function () {
    $('.slider').slick({
        autoplay: true, // Ativar reprodu��o autom�tica
        autoplaySpeed: 3000, // Velocidade da reprodu��o autom�tica em milissegundos
        arrows: false, // Ocultar setas de navega��o
        dots: true // Mostrar pontos de navega��o
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menu-bar');
    const toggleBtn = document.getElementById('toggle-btn');
    const content = document.querySelector('.content');
    const showMenuBtn = document.getElementById('show-menu');

    // Adicionar evento de clique ao bot�o de toggle
    toggleBtn.addEventListener('click', function () {
        // Alternar a largura da barra de menu entre 20% e 0%
        if (menuBar.style.width === '0%') {
            menuBar.style.width = '20%';
            content.style.marginLeft = '20%';
        } else {
            menuBar.style.width = '0%';
            content.style.marginLeft = '0%';
        }
    });

    // Adicionar evento de clique ao bot�o para mostrar o menu novamente
    showMenuBtn.addEventListener('click', function () {
        menuBar.style.width = '20%';
        content.style.marginLeft = '20%';
    });

    // Adicionar funcionalidade de carrossel para o banner de conte�do
    const bannerSlider = document.querySelector('.banner-slider');
    const bannerImages = document.querySelectorAll('.banner-slider div');

    let currentIndex = 0;

    function updateBanner() {
        const translateX = -currentIndex * 100;
        bannerSlider.style.transform = `translateX(${translateX}%)`;
    }

    setInterval(function () {
        currentIndex = (currentIndex + 1) % bannerImages.length;
        updateBanner();
    }, 5000); // Altere o valor para ajustar a velocidade do carrossel
});

// Função para comparar dois quadros de funcionários com base em seus nomes
function compareNames(a, b) {
    const nameA = a.querySelector('.employee-details h2').textContent.toLowerCase();
    const nameB = b.querySelector('.employee-details h2').textContent.toLowerCase();

    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
}

// Captura todos os quadros de funcionários
const employeeCards = document.querySelectorAll('.employee-card');

// Converte a NodeList em uma matriz para poder ordená-la
const employeeCardsArray = Array.from(employeeCards);

// Ordena os quadros de funcionários com base nos nomes
employeeCardsArray.sort(compareNames);

// Remove todos os quadros de funcionários do contêiner
const employeeContainer = document.querySelector('.employee-container');
employeeContainer.innerHTML = '';

// Adiciona os quadros de funcionários ordenados de volta ao contêiner
employeeCardsArray.forEach(function (employeeCard) {
    employeeContainer.appendChild(employeeCard);
});