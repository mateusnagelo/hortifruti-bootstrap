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
    erro.addClass('d-one');
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
    if (email.val() == '') {
        erro.removeClass('d-none');
        campo.html('E-mail'); // nome do campo que não foi preenchido!
        email.focus();
        email.addClass('is-invalid');
        return false;
    }


    if (telefone.val() == '') {
        erro.removeClass('d-none');
        campo.html('Telefone'); // nome do campo que não foi preenchido!
        telefone.focus();
        telefone.addClass('is-invalid');
        return false;
    }
    if (cep.val() == '') {
        erro.removeClass('d-none');
        campo.html('Cep'); // nome do campo que não foi preenchido!
        cep.focus();
        cep.addClass('is-invalid');
        return false;
    }

    if (numero.val() == '') {
        erro.removeClass('d-none');
        campo.html('Numero'); // nome do campo que não foi preenchido!
        numero.focus();
        numero.addClass('is-invalid');
        return false;
    }

    if (complemento.val() == '') {
        erro.removeClass('d-none');
        campo.html('Complemeto'); // nome do campo que não foi preenchido!
        complemento.focus();
        complemento.addClass('is-invalid');
        return false;
    }

    if (referencia.val() == '') {
        erro.removeClass('d-none');
        campo.html('Referencia'); // nome do campo que não foi preenchido!
        referencia.focus();
        referencia.addClass('is-invalid');
        return false;
    }

    if (senha.val() == '') {
        erro.removeClass('d-none');
        campo.html('Senha'); // nome do campo que não foi preenchido!
        senha.focus();
        senha.addClass('is-invalid');
        return false;
    }

    if (confirmacaosenha.val() == '') {
        erro.removeClass('d-none');
        campo.html('Confirmacão da senhas'); // nome do campo que não foi preenchido!
        confirmacaosenha.focus();
        confirmacaosenha.addClass('is-invalid');
        return false;
    }




    // se chegar aqui pode enviar os dados!
    return true;
});

//  mask dos campos

$("#cpf").mask("000.000.000-00")
$("#telefone").mask("(00) 00000-0000")
$("#cep").mask("00.000-000")
$("#data").mask("00/00/0000")
$("#rg").mask("999.999.999-W", {
    translation: {
        'W': {
            pattern: /[X0-9]/
        }
    },
    reverse: true
})

var options = {
    translation: {
        'A': { pattern: /[A-Z]/ },
        'a': { pattern: /[a-zA-Z]/ },
        'S': { pattern: /[a-zA-Z0-9]/ },
        'L': { pattern: /[a-z]/ },
    }
}