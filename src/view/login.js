// JavaScript para o formulário de login
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os dados do formulário de login
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você pode validar o e-mail e a senha com uma API ou apenas verificar se os campos não estão vazios
    if (email && senha) {
        // Se a validação for bem-sucedida, redireciona para a página de Perfis e Buscas de Feedback
        window.location.href = "perfisBusca.html"; // Altere o caminho conforme necessário
    } else {
        alert("E-mail e senha são obrigatórios!");
    }
});
