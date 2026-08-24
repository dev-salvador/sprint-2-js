document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value;

        const usuarioSalvo = localStorage.getItem("usuario");
        const senhaSalva = localStorage.getItem("senha");

        if (usuario === usuarioSalvo && senha === senhaSalva) {
            localStorage.setItem("logado", "true");

            alert("Login realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
});