document.addEventListener("DOMContentLoaded", function () {
    // Captura do formulário
    const form = document.getElementById("myForm");

    // Adição do evento de submit
    form.addEventListener("submit", function (event) {
        // Impede o comportamento padrão de recarregar a página
        event.preventDefault();

        // Chamada da função handleSubmit
        handleSubmit();
    });

    // Função para lidar com o envio do formulário
    async function handleSubmit() {
        try {
            // Captura dos valores dos campos do formulário
            const nome = document.getElementById("nome").value;
            const data = document.getElementById("data").value;
            const email = document.getElementById("email").value;
            const endereco = document.getElementById("endereco").value;
            const empresa = document.getElementById("empresa").value;

            // Construção do objeto com os dados do formulário
            const formData = {
                nome: nome,
                data: data,
                email: email,
                endereco: endereco,
                empresa: empresa
            };

            // Configuração da requisição POST usando fetch
            const response = await fetch("https://api.sheetmonkey.io/form/8Vh23kz2vmQtoVFqLxW4CU", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // Verificação do status da resposta
            if (response.ok) {
                // Exibição de mensagem de sucesso
                alert("Enviado com sucesso!");

                // Ocultar o formulário
                form.style.display = "none";
            } else {
                // Exibição de mensagem de erro, se a requisição não for bem-sucedida
                alert("Erro ao enviar o formulário. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error("Erro inesperado:", error);
        }
    }
});
