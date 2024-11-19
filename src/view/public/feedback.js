// Seleciona todas as seções de estrelas
document.querySelectorAll('.stars').forEach(starContainer => {
    // Adiciona evento ao passar o mouse
    starContainer.querySelectorAll('label').forEach(star => {
        star.addEventListener('mouseover', () => {
            starContainer.querySelectorAll('label').forEach(label => label.classList.remove('hover'));
            let previousSiblings = [...star.parentNode.children].slice(0, [...star.parentNode.children].indexOf(star) + 1);
            previousSiblings.forEach(sibling => sibling.classList.add('hover'));
        });
    });
    
    // Remove a cor das estrelas quando o mouse sai
    starContainer.addEventListener('mouseleave', () => {
        starContainer.querySelectorAll('label').forEach(label => label.classList.remove('hover'));
    });
});


// Manipulação do formulário
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio para mostrar o feedback

    // Coleta todas as avaliações
    let feedbackData = {};
    document.querySelectorAll('.category').forEach(category => {
        let categoryName = category.querySelector('label').textContent;
        let rating = category.querySelector('input[type="radio"]:checked')?.value || "Não avaliado";
        feedbackData[categoryName] = rating;
    });

    // Coleta o comentário
    feedbackData['Comentários'] = document.getElementById('comments').value;

    // Exibe o resultado no console (ou envia para o servidor)
    console.log("Feedback recebido:", feedbackData);
    alert("Obrigado pelo feedback!");
});
