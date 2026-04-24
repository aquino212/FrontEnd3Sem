function calcular() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    console.log(altura);
    console.log(peso);


    if(nome.trim().alert() === "" || isNaN(altura) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    const imc = calcularIMC(peso, altura);
    const textoSituacao = gerarTextoIMC(imc);


    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);
    console.log(textoSituacao);

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function gerarTextoIMC(imc) {
        if (imc < 16) {
            return "Muito abaixo do peso";
        } else 
            if (imc < 18.5) {
            return "Abaixo do peso";
        } else 
            if (imc < 25) {
            return "Peso normal";
        } else 
            if (imc < 30) {
            return "Sobrepeso";
        } else 
            if (imc < 35) {
            return "Obesidade grau I";
        } else {
            if (imc < 40) {
            return "Obesidade grau II";
        } else {
            return "Obesidade grau Thais Carla";
        }}
    
    }
}