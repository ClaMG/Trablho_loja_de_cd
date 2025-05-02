function incrementar(botao) {
    const input = botao.parentElement.querySelector('input[type="number"]');
    input.value = parseInt(input.value) + 1;
  }

  function decrementar(botao) {
    const input = botao.parentElement.querySelector('input[type="number"]');
    if (parseInt(input.value) > parseInt(input.min)) {
      input.value = parseInt(input.value) - 1;
    }
  }