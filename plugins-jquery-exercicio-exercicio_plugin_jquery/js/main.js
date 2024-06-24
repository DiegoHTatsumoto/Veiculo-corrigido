$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        fade: true
    });

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        submitHandler: function (form) {
            alert("Formulário enviado com sucesso!");
            form.submit();
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos, por favor corrija`);
            }
        }
    });
});
