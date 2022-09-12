function logar() {

    var txtEmail = document.getElementById('txtEmail').value;
    var txtSenha = document.getElementById('txtSenha').value;


    if (txtEmail == "mateus" && txtSenha == "1") {
        alert('Sucesso');

        location.href = "cliente_pedidos.html";

    } else {
        alert('Login ou senha inválidos')
    }

}

document.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {


        const btn = document.querySelector("#send");

        btn.click();


    }

});