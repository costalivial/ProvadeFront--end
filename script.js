const formindex = document.getElementById('form-index');

// Escuta o evento de "enviar" (submit) do formulário
formLogin.addEventListener('submit', function(event) {
    // Evita que a página recarregue antes da hora
    event.preventDefault(); 
     // Pega os dados digitados (útil para o futuro)
     const email = document.getElementById('index-email"').value;
     const senha = document.getElementById('index-senha').value;
 
     // Aqui você faria a validação. Por enquanto, redireciona direto:
     window.location.href = "usuario.html";
 });


 // Envio do Usuário
const formcadastro = document.getElementById('form-cadastro');
if (formUsuario) {
    formUsuario.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('cad-nome').value;
        this.reset();
    });
}


// --- LÓGICA DA TELA DE CADASTRO DE USUÁRIO ---
const formcadastro = document.getElementById('form-cadastro');
if (formUsuario) {
    formUsuario.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
}