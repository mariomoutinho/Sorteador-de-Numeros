function sortear() {
  const quantidade = parseInt(document.getElementById("quantidade").value, 10);
  const de = parseInt(document.getElementById("de").value, 10);
  const ate = parseInt(document.getElementById("ate").value, 10);

  // validações básicas
  if (Number.isNaN(quantidade) || Number.isNaN(de) || Number.isNaN(ate)) {
    alert("Preencha todos os campos com números válidos.");
    return;
  }

  if (quantidade < 1) {
    alert("A quantidade deve ser no mínimo 1.");
    return;
  }

  if (de > ate) {
    alert('O campo "Do número" não pode ser maior que o "Até o número".');
    return;
  }

  const totalPossiveis = ate - de + 1;

  if (quantidade > totalPossiveis) {
    alert(
      `Não dá pra sortear ${quantidade} número(s) único(s) entre ${de} e ${ate}. ` +
      `Nesse intervalo só existem ${totalPossiveis} número(s) possível(is).`
    );
    return;
  }

  // sorteio sem repetição
  const sorteados = [];
  while (sorteados.length < quantidade) {
    const numero = gerarNumeroAleatorio(de, ate);
    if (!sorteados.includes(numero)) {
      sorteados.push(numero);
    }
  }

  // mostrar resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;

  // alternar botões
  desabilitarSortear();
  habilitarReiniciar();
}

function reiniciar() {
  // limpar inputs
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";

  // resetar texto do resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

  // alternar botões
  habilitarSortear();
  desabilitarReiniciar();
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// --- controle visual/funcional dos botões ---
function desabilitarSortear() {
  const btn = document.getElementById("btn-sortear");
  btn.disabled = true;
  btn.classList.remove("container__botao");
  btn.classList.add("container__botao-desabilitado");
}

function habilitarSortear() {
  const btn = document.getElementById("btn-sortear");
  btn.disabled = false;
  btn.classList.remove("container__botao-desabilitado");
  btn.classList.add("container__botao");
}

function desabilitarReiniciar() {
  const btn = document.getElementById("btn-reiniciar");
  btn.disabled = true;
  btn.classList.remove("container__botao");
  btn.classList.add("container__botao-desabilitado");
}

function habilitarReiniciar() {
  const btn = document.getElementById("btn-reiniciar");
  btn.disabled = false;
  btn.classList.remove("container__botao-desabilitado");
  btn.classList.add("container__botao");
}