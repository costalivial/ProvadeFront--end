// --- LÓGICA DA TELA DE LOGIN (index.html) ---
const formIndex = document.getElementById('form-index');

// Verificamos se o formulário de login existe na página atual antes de aplicar o evento
if (formIndex) {
    formIndex.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento da página
        
        // Captura os dados digitados corretamente
        const email = document.getElementById('index-email').value;
        const senha = document.getElementById('index-senha').value;
        
        console.log("Login efetuado com:", email);
        
        // Redireciona para a tela interna do usuário
        window.location.href = "usuario.html";
    });
}


// --- LÓGICA DA TELA DE CADASTRO (cadastro.html) ---
const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento da página
        
        // Capturando os dados principais (Exemplo de uso)
        const nome = document.getElementById('cad-nome').value;
        const email = document.getElementById('cadastro-email').value;
        const senha = document.getElementById('cadastro-senha').value;
        const confirmSenha = document.getElementById('cadastro-Csenha').value;

        // Validação simples de confirmação de senha
        if (senha !== confirmSenha) {
            alert("As senhas não coincidem!");
            return; // Interrompe a execução
        }
        
        console.log("Usuário cadastrado com sucesso:", nome);
        
        // Limpa o formulário
        this.reset();
        
        // Redireciona o usuário de volta para o login
        window.location.href = 'index.html';
    });
}

const cursos = [
    ["Direito", "Ciências Humanas"],
    ["História","Ciências Humanas"],
    ["Medicina", "Ciências da Natureza"],
    ["Agronomia", "Ciências da Natureza"],
    ["Letras", "Linguagens"],
    ["Jornalismo", "Linguagens"],
    ["Artes Visuais", "Linguagens"],
    ["Engenharia Civil", "Ciências Exatas"],
    ["Ciência da Computação", "Ciências Exatas"],
    ["Biomedicina", "Ciências da Natureza"],
    ["Administração", "Ciências Humanas"],
    ["Estatística", "Ciências Exatas"]

];


// Procura por qualquer botão com a classe "btn" que tenha o texto "Voltar"
const botoesVoltar = document.querySelectorAll('.btn');

botoesVoltar.forEach(botao => {
    if (botao.textContent.trim().toLowerCase() === 'voltar') {
        botao.addEventListener('click', function() {
            // Redireciona o usuário para a tela inicial real
            window.location.href = "principal.html"; 
        });
    }
});