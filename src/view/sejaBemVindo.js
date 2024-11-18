// Captura os botões "Gestor" e "Funcionário"
const gestorButton = document.getElementById("gestor");
const funcionarioButton = document.getElementById("funcionario");

// Adiciona eventos de clique nos botões
gestorButton.addEventListener("click", function() {
    // Redireciona para a página de cadastro do Gestor
    window.location.href = "FaçaSeuCadastro.html?role=gestor"; 
});

funcionarioButton.addEventListener("click", function() {
    // Redireciona para a página de cadastro do Funcionário
    window.location.href = "FaçaSeuCadastro.html?role=funcionario"; 
});
