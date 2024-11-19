// Função para abrir a página de feedback do funcionário específico
function openFeedbackPage(employeeId) {
    // Redireciona o usuário para uma página de feedback específica, baseada no ID do funcionário
    window.location.href = `feedback-page.html?employeeId=${employeeId}`;
}
