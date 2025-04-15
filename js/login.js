document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede envio automático do formulário

    if (validarLogin()) {
        window.location.href = "index.html"; // Redireciona para a página desejada
    }
});

function validarLogin() {
    var cargo = document.getElementById("cargo").value;
    var matricula = document.getElementById("matricula").value;
    var senha = document.getElementById("senha").value;
    var erro = document.getElementById("mensagemErro");

    erro.innerHTML = "";
    erro.style.display = "none";

    if (cargo === '') {
        mostrarSelecao("Por favor, selecione seu cargo na lista");
        return false;
    }

    if (matricula === '') {
        mostrarSelecao("Digite sua matrícula para continuar");
        return false;
    }

    if (senha === '') {
        mostrarSelecao("Digite sua senha");
        return false;
    }

    return true;
}

function mostrarSelecao(mensagem) {
    var erro = document.getElementById("mensagemErro");
    erro.innerHTML = mensagem;
    erro.style.color = "red";
    erro.style.display = "block";
}

