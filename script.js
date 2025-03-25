document.addEventListener("DOMContentLoaded", function () {
    let inputElement = document.querySelector(".search-bar input");
    let searchButton = document.querySelector(".search-bar button");
    let produtos = document.querySelectorAll(".product");
    let container = document.querySelector(".main-content .container");

    // Criando a mensagem "Nada encontrado"
    let mensagemNadaEncontrado = document.createElement("p");
    mensagemNadaEncontrado.textContent = "Nada encontrado";
    mensagemNadaEncontrado.style.display = "none";
    mensagemNadaEncontrado.style.textAlign = "center";
    mensagemNadaEncontrado.style.fontSize = "18px";
    mensagemNadaEncontrado.style.marginTop = "20px";
    mensagemNadaEncontrado.style.color = "red";

    // Adicionando a mensagem ao container
    container.appendChild(mensagemNadaEncontrado);

    function pesquisar() {
        let termoPesquisa = inputElement.value.toLowerCase().trim();
        let encontrou = false; // Flag para verificar se encontrou algo

        produtos.forEach(produto => {
            let nomeProduto = produto.querySelector("h3").textContent.toLowerCase();
            let descricaoProduto = produto.querySelector("p").textContent.toLowerCase();

            if (nomeProduto.includes(termoPesquisa) || descricaoProduto.includes(termoPesquisa)) {
                produto.style.display = "block"; 
                encontrou = true;
            } else {
                produto.style.display = "none"; 
            }
        });

        // Exibe a mensagem "Nada encontrado" se não encontrou nenhum produto
        if (!encontrou) {
            mensagemNadaEncontrado.style.display = "block";
        } else {
            mensagemNadaEncontrado.style.display = "none";
        }
    }

    // Evento para o botão de pesquisa
    searchButton.addEventListener("click", pesquisar);

    // Permite pesquisar pressionando "Enter"
    inputElement.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            pesquisar();
        }
    });
});
