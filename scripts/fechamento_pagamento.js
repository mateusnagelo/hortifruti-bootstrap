$('#form-cartao').submit(function() {
    var nome = $('#nome');
    var numero = $('#numero');
    var validade = $('#validade');
    var codigo = $('#codigo')
    var erro = $('.alert');
    var campo = $('#campo-erro');

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

    if (numero.val() == '') {
        erro.removeClass('d-none');
        campo.html('Número do Cartão'); // nome do campo que não foi preenchido!
        numero.focus();
        numero.addClass('is-invalid');
        return false;
    }

    // valida o campo mensagem
    if (validade.val() == '') {
        erro.removeClass('d-none');
        campo.html('Validade'); // nome do campo que não foi preenchido!
        validade.focus();
        validade.addClass('is-invalid');
        return false;
    }
    if (codigo.val() == '') {
        erro.removeClass('d-none');
        campo.html('Código de Segurança'); // nome do campo que não foi preenchido!
        codigo.focus();
        codigo.addClass('is-invalid');
        return false;
    }

    return true;
});

// mask dos campos

// $("#nome").mask("mateus angelo gomes silva")
$("#numero").mask("0000.0000.0000.0000")
$("#validade").mask("00/00")
$("#codigo").mask("000")
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