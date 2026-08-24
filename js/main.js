document.addEventListener("DOMContentLoaded", () => {
    const logado = localStorage.getItem("logado");
    const usuario = localStorage.getItem("usuario");

    const boasVindas = document.getElementById("boasVindas");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    // Segurança caso elemento não exista
    if (!boasVindas || !loginBtn || !logoutBtn) return;

    function atualizarInterface() {
        if (logado === "true" && usuario) {
            boasVindas.innerText = `Bem-vindo, ${usuario}!`;

            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";
        } else {
            boasVindas.innerText = "Bem-vindo! Clique ao lado para fazer login.";

            loginBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";
        }
    }

    atualizarInterface();

    // Deixa funções globais para o HTML onclick funcionar
    window.irParaLogin = function () {
        window.location.href = "login.html";
    };

    window.logout = function () {
        localStorage.removeItem("logado");

        boasVindas.innerText = "Bem-vindo! Clique abaixo para fazer login.";

        loginBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
    };
});
