const elementoBotaoCadastro = document.getElementById('botao__cadastro')
const elementoEmail = document.getElementById('rodape__email')


elementoBotaoCadastro.addEventListener('click', () => {
    alert('E-mail cadastrado. Boa sorte!')
    campoVazio()

})


function campoVazio() {
    if(elementoEmail === '') {
        alert('Insira um E-mail!')
    }
}


