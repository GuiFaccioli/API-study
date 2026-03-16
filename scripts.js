async function gerarConselho() {
  document.getElementById("conselho").innerText = "Carregando conselho...";
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const dados = await resposta.json();
    document.getElementById("conselho").textContent = dados.slip.advice;
  } catch (erro) {
    document.getElementById("conselho").textContent =
      "Erro ao buscar conselho.";
  }
}
