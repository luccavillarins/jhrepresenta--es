/* =========================
   SCRIPT PRINCIPAL
   ========================= */

document.addEventListener("DOMContentLoaded", function () {
  console.log("Site JH Representações carregado com sucesso");

  // ================= SERVIÇOS - ANIMAÇÃO SCROLL =================
  const servicoCards = document.querySelectorAll(".servico-card");

  function animarServicos() {
    servicoCards.forEach(card => {
      const posicao = card.getBoundingClientRect().top;
      const limite = window.innerHeight - 100;

      if (posicao < limite) {
        card.classList.add("show");
      }
    });
  }

  // Executa ao carregar e ao rolar
  window.addEventListener("scroll", animarServicos);
  animarServicos();
});
