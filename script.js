document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');
    const responseMessage = document.getElementById('form-message');

    form.addEventListener('submit', (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        if (emailValue) {
            // Remove a classe 'hidden' e adiciona classe de sucesso
            responseMessage.classList.remove('hidden');
            responseMessage.classList.add('success-message');
            
            // Mensagem personalizada para o usuário
            responseMessage.textContent = `Obrigado! O e-mail (${emailValue}) foi cadastrado com sucesso. Juntos pelo futuro! 🌿`;

            // Limpa o campo de texto
            emailInput.value = '';

            // Sumir com a mensagem após 5 segundos
            setTimeout(() => {
                responseMessage.classList.add('hidden');
            }, 5000);
        }
    });
});
