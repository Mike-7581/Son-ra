const traducao = {
    pt: {
        welcome: "Bem-Vindo",
        subtitle: "Ao Futuro dos Web Players de Música",
        password: "Senha",
        buttonText: "Entrar",
        forgotPassword: "Esqueceu a senha?",
        email: "Digite seu email",
        password: "Digite sua senha",
        quickLogin: "Ou entre rapidamente com:",
        googleLogin: "Entrar com Google"
    },
    en: {
        welcome: "Welcome",
        subtitle: "To the Future of Web Music Players",
        password: "Password",
        buttonText: "Login",
        forgotPassword: "Forgot your password?",
        email: "Write your email",
        password: "Write your password",
        quickLogin: "Or quickly log in with:",
        googleLogin: "Login with Google"
    }
};

function trocaridioma(traduzir) {
    document.getElementById("welcome").innerText = traducao[traduzir].welcome;
    document.getElementById("subtitle").innerText = traducao[traduzir].subtitle;
    document.getElementById("password-label").innerText = traducao[traduzir].password;
    document.getElementById("login-button").innerText = traducao[traduzir].buttonText;
    document.getElementById("forgot-password").innerText = traducao[traduzir].forgotPassword;
    document.getElementById("quick-login-text").innerText = traducao[traduzir].quickLogin;
    document.getElementById("google-login").innerText = traducao[traduzir].googleLogin;
    document.getElementById("email").placeholder = traducao[traduzir].email;
    document.getElementById("password").placeholder = traducao[traduzir].password;
}

document.getElementById("language-button").addEventListener("click", () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "pt" ? "en" : "pt";
    document.documentElement.lang = newLang;
    trocaridioma(newLang);
    const languageButton = document.getElementById("language-button");
    languageButton.innerText = newLang === "pt" ? "🇧🇷" : "🇺🇸";
});
