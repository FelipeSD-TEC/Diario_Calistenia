function verificarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha === "nois") { // coloque a senha que você quiser
        window.location.href = "mural.html"; // vai para o mural
    } else {
        alert("Senha incorreta!");
    }
}
