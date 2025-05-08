const pagamentoSelect = document.querySelectorAll("select.tipo")[0]; // Primeiro select é Forma de Pagamento
        const divPraso = document.getElementById("praso");
    
        pagamentoSelect.addEventListener("change", () => {
            if (pagamentoSelect.value === "praso") {
                divPraso.style.display = "block";
            } else {
                divPraso.style.display = "none";
            }
        });
    
        // Oculta inicialmente
        divPraso.style.display = "none";