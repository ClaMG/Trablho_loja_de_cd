document.addEventListener("DOMContentLoaded", function () {
    const tipoPagamentoSelect = document.querySelectorAll("select.tipo")[1]; // Segundo select (Boleto/Cartão)
    const divCartao = document.getElementById("cart");

    tipoPagamentoSelect.addEventListener("change", () => {
        if (tipoPagamentoSelect.value === "cart") {
            divCartao.style.display = "block";
        } else {
            divCartao.style.display = "none";
        }
    });

    // Oculta inicialmente
    divCartao.style.display = "none";
});
