$('#form-contato').submit(function() {
    var email = $('#email');
    var cpf = $('#cpf');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-one');
    $('.is-invalid').removeClass('is-invalid');

    if (email.val() == '') {
        erro.removeClass('d-none');
        campo.html('email');
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    if (cpf.val() == '') {
        erro.removeClass('d-none');
        campo.html('CPF');
        cpf.focus();
        cpf.addClass('is-invalid');
        return false;
    }
    return true;
});



// Desenvolvido por Mateus Ângelo