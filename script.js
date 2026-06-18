// --- LÓGICA DA TELA DE LOGIN  ---
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
    { nome: "Direito", area: "Ciências Humanas" },
    { nome: "História", area: "Ciências Humanas" },
    { nome: "Medicina", area: "Ciências da Natureza" },
    { nome: "Agronomia", area: "Ciências da Natureza" },
    { nome: "Letras", area: "Linguagens" },
    { nome: "Jornalismo", area: "Linguagens" },
    { nome: "Artes Visuais", area: "Linguagens" },
    { nome: "Engenharia Civil", area: "Ciências Exatas" },
    { nome: "Ciência da Computação", area: "Ciências Exatas" },
    { nome: "Biomedicina", area: "Ciências da Natureza" },
    { nome: "Administração", area: "Ciências Humanas" },
    { nome: "Estatística", area: "Ciências Exatas" }
];
const corpoTabela = document.getElementById("corpo-tabela");

// 3. Função para renderizar as linhas na tabela
function preencherTabela() {
    // Limpa a tabela antes de preencher (evita duplicados)
    corpoTabela.innerHTML = "";

    // Percorre cada curso da lista
    cursos.forEach(curso => {
        // Cria uma nova linha (tr)
        const linha = document.createElement("tr");

        // Cria a célula do curso (td)
        const celulaCurso = document.createElement("td");
        celulaCurso.textContent = curso.nome;

        // Cria a célula da área (td)
        const celulaArea = document.createElement("td");
        celulaArea.textContent = curso.area;

        // Adiciona as células dentro da linha
        linha.appendChild(celulaCurso);
        linha.appendChild(celulaArea);

        // Adiciona a linha completa dentro do corpo da tabela
        corpoTabela.appendChild(linha);
    });
}

// 4. Executa a função assim que a página carregar
preencherTabela();

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