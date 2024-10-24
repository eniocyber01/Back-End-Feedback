document.getElementById('nextBtn').addEventListener('click', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não estão iguais!');
        return;
    }

    // Esconde o primeiro formulário e mostra o segundo
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('extraForm').classList.remove('hidden');

    // Transferir os valores do primeiro formulário para o segundo como campos ocultos
    document.getElementById('hiddenName').value = document.getElementById('name').value;
    document.getElementById('hiddenEmail').value = document.getElementById('email').value;
    document.getElementById('senha').value = document.getElementById('password').value;
});
