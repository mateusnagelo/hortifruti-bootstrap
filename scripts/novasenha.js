const form = document.getElementById('form')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')
const passwordthree = document.getElementById('password-three')

form.addEventListener('.submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {


    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    const passwordthreeValue = passwordthree.value.trim()



    if (passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if (passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if (passwordValue !== passwordtwoValue) {
        setErrorFor(passwordtwo, 'Senhas não são iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }

    if (passwordthreeValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if (passwordthreeValue !== passwordthreeValue) {
        setErrorFor(passwordthreeValue, 'Senhas não são iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordthreeValue)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
console.log