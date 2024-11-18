// Pega o parâmetro 'role' da URL
const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('role');  // "gestor" ou "funcionario"

// Personaliza o título da página e o formulário conforme o papel
const roleText = document.getElementById('role');
if (role === 'gestor') {
    roleText.textContent = "Gestor";
} else if (role === 'funcionario') {
    roleText.textContent = "Funcionário";
}

// Função para processar o formulário
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Processa os dados ou envia para um servidor (aqui apenas exibimos no console)
    console.log(`Cadastro do ${role}:`);
    console.log(`Nome: ${nome}`);
    console.log(`E-mail: ${email}`);
    console.log(`Senha: ${senha}`);

    // Se a validação for bem-sucedida, redireciona para a página de Perfis e Buscas de Feedback
    window.location.href = "perfisBusca.html"; // Altere o caminho conforme necessário
});
