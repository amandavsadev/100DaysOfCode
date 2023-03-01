function validar() {
    var nome = form1.nome.value;
    var email = form1.email.value;
    var mensagem = form1.mensagem.value;

    if (nome == "") {
        alert("Preencha seu nome completo");
        form1.nome.focus;
        return false;
    }

    else if (email == "") {
        alert("Preencha seu e-mail");
        form1.email.focus;
        return false;
    }

    else if (mensagem == "") {
        alert("Preencha sua mensagem");
        form1.mensagem.focus;
        return false;
    }

    else {
        alert("Sua mensagem foi enviada. Obrigada por entrar em contato conosco! Daremos retorno assim que possível =)");
    }
}
