$('#form-contato').submit(function() {
    var nome = $('#nome');
    var cpf = $('#cpf');
    var data = $('#data');
    var email = $('#email')
    var telefone = $('#telefone')
    var cep = $('#cep')
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
    if (email.val() == '') {
        erro.removeClass('d-none');
        campo.html('email'); // nome do campo que não foi preenchido!
        email.focus();
        email.addClass('is-invalid');
        return false;
    }


    if (telefone.val() == '') {
        erro.removeClass('d-none');
        campo.html('telefone'); // nome do campo que não foi preenchido!
        telefone.focus();
        telefone.addClass('is-invalid');
        return false;
    }
    if (cep.val() == '') {
        erro.removeClass('d-none');
        campo.html('cep'); // nome do campo que não foi preenchido!
        cep.focus();
        cep.addClass('is-invalid');
        return false;
    }

    if (numero.val() == '') {
        erro.removeClass('d-none');
        campo.html('numero'); // nome do campo que não foi preenchido!
        numero.focus();
        numero.addClass('is-invalid');
        return false;
    }

    if (complemento.val() == '') {
        erro.removeClass('d-none');
        campo.html('complemeto'); // nome do campo que não foi preenchido!
        complemento.focus();
        complemento.addClass('is-invalid');
        return false;
    }

    if (referencia.val() == '') {
        erro.removeClass('d-none');
        campo.html('referencia'); // nome do campo que não foi preenchido!
        referencia.focus();
        referencia.addClass('is-invalid');
        return false;
    }

    if (senha.val() == '') {
        erro.removeClass('d-none');
        campo.html('senha'); // nome do campo que não foi preenchido!
        senha.focus();
        senha.addClass('is-invalid');
        return false;
    }

    if (confirmacaosenha.val() == '') {
        erro.removeClass('d-none');
        campo.html('confirmcaosenha'); // nome do campo que não foi preenchido!
        confirmacaosenha.focus();
        confirmacaosenha.addClass('is-invalid');
        return false;
    }




    // se chegar aqui pode enviar os dados!
    return true;
});