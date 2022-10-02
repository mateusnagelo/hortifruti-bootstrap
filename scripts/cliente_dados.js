$('#form-contato').submit(function() {
    var nome = $('#nome');
    var cpf = $('#cpf');
    var data = $('#data');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    // removendo o elemento da tela sempre que tentar submeter o formulario
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // valida o campo nome
    if (nome.val() == '') {
        erro.removeClass('d-none');
        campo.html('Nome'); // nome do campo que não foi preenchido!
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    if (cpf.val() == '') {
        erro.removeClass('d-none');
        campo.html('CPF'); // nome do campo que não foi preenchido!
        cpf.focus();
        cpf.addClass('is-invalid');
        return false;
    }

    // valida o campo mensagem
    if (data.val() == '') {
        erro.removeClass('d-none');
        campo.html('Data'); // nome do campo que não foi preenchido!
        data.focus();
        data.addClass('is-invalid');
        return false;
    }

    // se chegar aqui pode enviar os dados!
    return true;
});


// atribuindo value nos inputs


// let str = "value";

// ['#nome', '#cpf', '#data'].forEach(function(v, i) {
//     document.getElementById(v).value = (i < str.length) ? str[i] : "";
// });
// for (let i = 0; i < str.length; i++) {
//     var input = document.createElement("input");
//     input.type = "text", "data";
//     input.id = "campo" + (i + 1);
//     input.value = str.charAt(i);
//     div.appendChild(input);
// }