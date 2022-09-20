$('#form-contato').submit(function() {
    var nome = $('#nome');
    var cpf = $('#cpf');
    var data = $('#data');
    var numero = $('#numero')
    var complemento = $('#complemento')
    var referencia = $('#referencia')
    var senha = $('#senha')
    var confirmacaosenha = $('#confirmacaosenha')

    var erro = $('.alert');
    var campo = $('#campo-erro');

    // removendo o elemento da tela sempre que tentar submeter o formulario
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // valida o campo nome
    if (nome.val() == '') {
        erro.removeClass('d-none');
        campo.html('nome'); // nome do campo que não foi preenchido!
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    if (cpf.val() == '') {
        erro.removeClass('d-none');
        campo.html('cpf'); // nome do campo que não foi preenchido!
        cpf.focus();
        cpf.addClass('is-invalid');
        return false;
    }

    // valida o campo mensagem
    if (data.val() == '') {
        erro.removeClass('d-none');
        campo.html('data'); // nome do campo que não foi preenchido!
        data.focus();
        data.addClass('is-invalid');
        return false;
    }


    if (numero.val() == '') {
        erro.removeClass('d-none');
        campo.html('data'); // nome do campo que não foi preenchido!
        numero.focus();
        numero.addClass('is-invalid');
        return false;
    }

    // se chegar aqui pode enviar os dados!
    return true;
});