document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("novoUsuario").value.trim();
        const senha = document.getElementById("novaSenha").value;

        // Validação usuário
        if (usuario.length < 3) {
            alert("O usuário precisa ter pelo menos 3 caracteres.");
            return;
        }

        // Validação senha
        if (senha.length < 8) {
            alert("A senha precisa ter pelo menos 8 caracteres.");
            return;
        }

        // Salvar somente se tudo estiver correto
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);

        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    });
});