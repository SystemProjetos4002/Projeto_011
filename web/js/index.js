var login = document.querySelector("login")
var senha = document.querySelector("senha")
var button = document.getElementById("confirmar")

var login_cadastro = 'aa'
var senha_cadastro = '123'

// function verifica_login(login) {
//     if(login == login_cadastro) {
//         return true
//     }
// }

// function verifica_senha(senha) {
//     if(senha == senha_cadastro) {
//         return true
//     }
// }

document.getElementById('login').onkeypress = function (e) {
    if (e.keyCode == 13) {
        libera_acesso();
        e.preventDefault();
    }
   
}

document.getElementById('senha').onkeypress = function (e) {
    if (e.keyCode == 13) {
        libera_acesso();
        e.preventDefault();
    }
   
}

document.getElementById("confirmar").onclick = function(e) {
    libera_acesso();
    e.preventDefault();
}

function libera_acesso (login,senha) {
    if(login === login_cadastro && senha === senha_cadastro) {
        window.alert('Acesso liberado!');
    } 
    else {
        window.alert('Credenciais incorretas, verifique e tente novamente!')
    }
}