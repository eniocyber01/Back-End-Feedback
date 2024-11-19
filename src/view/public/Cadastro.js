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
document.getElementById('formCadastro').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const body = {
        nome,
        email,
        senha,
        role
    }

    const response = await fetch('http://localhost:8080/singup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });

    // Se a validação for bem-sucedida, redireciona para a página de Perfis e Buscas de Feedback
    window.location.href = "login"; // Altere o caminho conforme necessário
});
