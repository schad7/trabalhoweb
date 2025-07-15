document.addEventListener("DOMContentLoaded", function () {
  // CARROSSEL
  const botoes = {
    voltar: document.getElementById("voltar"),
    avancar: document.getElementById("avancar"),
  };

  const itens = document.querySelectorAll(".carrossel-item");
  let indexAtual = 0;

  function mostrarItem(index) {
    itens.forEach((item, i) => {
      item.classList.remove("ativo");
      if (i === index) item.classList.add("ativo");
    });
  }

  if (botoes.avancar && botoes.voltar && itens.length > 0) {
    botoes.avancar.addEventListener("click", () => {
      indexAtual = (indexAtual + 1) % itens.length;
      mostrarItem(indexAtual);
    });

    botoes.voltar.addEventListener("click", () => {
      indexAtual = (indexAtual - 1 + itens.length) % itens.length;
      mostrarItem(indexAtual);
    });

    mostrarItem(indexAtual);
  }

  // FORMULÁRIO DE CONTATO
  const form = document.getElementById("formContato");
  const sucesso = document.getElementById("sucesso");

  if (form && sucesso) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const assunto = document.getElementById("assunto").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      sucesso.style.display = "block";
      form.reset();
    });
  }
});
