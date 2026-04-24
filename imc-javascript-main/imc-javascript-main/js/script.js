

function calcular() {
    // alert("função calcuar rodando!!")
    //pagar os valores dos campos

    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // console.log(Nome);
    console.log(altura);
    console.log(peso);

    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("preencha todos os campos: Nome,Altura e Peso");
        return false;
    }
    const IMC = calcuarImc(altura, peso);
    const textoSituacao = gerarTextoIMC(IMC);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(IMC);
    console.log(textoSituacao);

const objetoIMC = {
    nome : nome,
    altura : altura,
    peso : peso,
    IMC : IMC,
    textoSituacao : textoSituacao
}
const retorno = CadastrarNaAPI(objetoIMC);

if (retorno) {
        const tabela = document.getElementById("cadastro"); 
    tabela.innerHTML += `<tr>
            <th>${nome}</th>
            <th>${altura.toFixed(2)}</th>
            <th>${peso.toFixed(2)}</th>
            <th>${IMC.toFixed(2)}</th>
            <th>${textoSituacao}</th>
        </tr>`;

        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";
        alert("Os dados de ${nome} foram cadastrados com sucesso!");
} else {
    alert("Não foi possivel cadastrar");
}
 
}

function calcuarImc(altura, peso) {
    return peso / (altura * altura);
}

function gerarTextoIMC(IMC) {
    if (IMC < 16) {
        return "magreza grave";
    } else if (IMC < 17) {
        return "magreza moderada";

    } else if (IMC < 18.5) {
        return "magreza leve";
    } else if (IMC < 25) {
        return "Saudável";
    } else if (IMC < 30) {
        return "Sobrepeso";
    } else if (IMC < 35) {
        return "obesidade grau 1";
    } else if (IMC < 40) {
        return "obesidade grau 2";
    } else {
        return "obesidade grau 3";
    }
}

async function CadastrarNaAPI(objetoIMC) {
 
try {
        let resposta = await fetch("http://localhost:3000/imc",{
        method: "post",
        body: JSON.stringify(objetoIMC), 
        headers : {
            "Content-Type" : "application/json; charset=UTF-8"
        }

        
    });
    return true;
    
} catch (error) {

    console.log(error);
    return false;
    
}
}

 async function buscarIMCs(){
  try {
    const retorno = await fetch("http://localhost:3000/imc");
    const dadosRetornados = await retorno.json();

    console.log(dadosRetornados);

    const tabela = document.getElementById("cadastro");
    let template = "";

    for (let i = 0; i < dadosRetornados.length; i++) {
        template += `<tr>
            <th>${dadosRetornados[i].nome}</th>
            <th>${dadosRetornados[i].altura}</th>
            <th>${dadosRetornados[i].peso}</th>
            <th>${dadosRetornados[i].IMC.toFixed(2)}</th>
            <th>${dadosRetornados[i].textoSituacao}</th>
         </tr>`;
    }
    
    tabela.innerHTML += template;
  } 
  catch (error) {
    console.log(error);
    
  }
}
