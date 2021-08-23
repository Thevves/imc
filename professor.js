function calcularImc(altura,peso){
    return peso / (altura ** 2);
}

function classificarImc(imc) {
    let categoria

    if(imc < 18.5) {
        categoria = "abaixo do peso :("
    } 

    else if(imc < 25) {
        categoria = "tá com o peso ideal em bb <span class='azul'>:D</span>"
    }

    else if(imc <30) {
        categoria = "tá um pouco a cima do peso vidinha :)"
    }

    else if(imc < 35) {
        categoria = "tá com obesidade grau I. Toma cuidado em :|"
    }

    else if(imc < 40) {
        categoria = "Tá com obesidade grau II, vá atrás de um nutricionista. Pelo seu bem :/"
    }

    else {
        categoria = "obesidade grau III. Vá no nutricionista, sua saúde está ruim! <span class='vermelho'>:´( </span>"
    }

    return categoria
}

function camposValidos(){
    return document.querySelector("form").reportValidity()
}

function exibirResultado(){
    const nome = document.getElementById("nome").value 
    const altura = document.getElementById("altura").value.replace(",", ".")
    const peso = document.getElementById("peso").value.replace(",", ".")
    const calcular = document.getElementById("resultado")


     if(camposValidos()) {
    const imc = calcularImc (altura, peso)
    const classificacao = classificarImc (imc)

    calcular.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está com ${classificacao}`
    }

    else{
        calcular.textContent= "pare de palhaçada e coloque alguma coisa"
    }
}

function capturarEnter( evento ) {
    if (evento.key == "Enter") {
        exibirResultado()
    }
}

document.getElementById("calcular")
    .addEventListener("click", exibirResultado)

document.querySelector("form")
    .addEventListener("keypress", capturarEnter)