document.addEventListener("DOMContentLoaded", function () {
    const cartaoInput = document.getElementById("numero_cartao");

    cartaoInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // Remove não-dígitos
        value = value.substring(0, 16); // Limita a 16 números

        // Insere espaços a cada 4 dígitos
        value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

        e.target.value = value;
    });
});
