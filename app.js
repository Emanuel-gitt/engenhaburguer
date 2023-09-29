// Função para mostrar o cardápio
function mostrarCardapio() {
    var cardapioPopup = document.getElementById("cardapio-popup");
    cardapioPopup.style.display = "block";
}

// Função para ocultar o cardápio
function ocultarCardapio() {
    var cardapioPopup = document.getElementById("cardapio-popup");
    cardapioPopup.style.display = "none";
}

// Função para mostrar o vídeo como pop-up
function mostrarVideo() {
    var videoPopup = document.getElementById("video-popup");
    videoPopup.style.display = "flex";
    var video = document.getElementById("video-popup-content");
    video.play();
}

// fechar o pop-up de video quando clicar fora dele
document.getElementById("video-popup").addEventListener("click", function(event) {
    var video = document.getElementById("video-popup-content");
    if (event.target === this || event.target === video) {
        video.pause();
        video.currentTime = 0;
        this.style.display = "none";
    }
});

//  botão "Promoções"
var btnPromocoes = document.getElementById("btn-promocoes");

//  event listener botão "Promoções" para mostrar o vídeo como pop-up
btnPromocoes.addEventListener("click", function() {
    mostrarVideo();
});

// Função para mostrar o pop-up de funcionamento
function mostrarFuncionamento() {
    var funcionamentoPopup = document.getElementById("funcionamento-popup");
    funcionamentoPopup.style.display = "block";
}

// Função para ocultar o pop-up de funcionamento
function ocultarFuncionamento() {
    var funcionamentoPopup = document.getElementById("funcionamento-popup");
    funcionamentoPopup.style.display = "none";
}
