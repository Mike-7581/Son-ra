// Seleciona os elementos do formulário
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("passwordinputconfirm");
const messageDiv = document.getElementById("message");
const createAccountButton = document.getElementById("create-account-button");

// Função para exibir mensagens
function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type === "error" ? "error-message" : "success-message";
}

// Funções de validação
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

function doPasswordsMatch(password, confirmPassword) {
    return password === confirmPassword;
}

// Função para armazenar dados no localStorage (com obfuscação simples da senha)
function saveAccountToLocalStorage(email, password) {
    const obfuscatedPassword = btoa(password); // Base64 encoding (não é segura para produção)
    localStorage.setItem("account", JSON.stringify({ email, password: obfuscatedPassword }));
}

// Função para verificar se a conta já existe
function checkExistingAccount() {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account) {
        showMessage("Bem-vindo de volta, " + account.email, "success");
    }
}

// Função principal para criar uma conta
function createAccount() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = passwordConfirmInput.value;

    if (!isValidEmail(email)) {
        showMessage("Por favor, insira um email válido.", "error");
        return;
    }

    if (!isValidPassword(password)) {
        showMessage("A senha deve ter pelo menos 6 caracteres.", "error");
        return;
    }

    if (!doPasswordsMatch(password, confirmPassword)) {
        showMessage("As senhas não coincidem.", "error");
        return;
    }

    // Armazenar a conta em localStorage
    saveAccountToLocalStorage(email, password);
    showMessage("Conta criada com sucesso!", "success");
}

// Verifica se o usuário já está registrado ao carregar a página
window.addEventListener("load", checkExistingAccount);

// Event listener para o botão de criação de conta
createAccountButton.addEventListener("click", createAccount);
