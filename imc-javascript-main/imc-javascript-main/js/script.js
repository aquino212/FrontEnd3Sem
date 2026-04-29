async function calcular() {
  //pegar os valores dos campos
  const nome = document.getElementById("nome").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const linhaTabela = document.getElementById("cadastro");

  if (nome.trim().length === 0 || isNaN(altura) || isNaN(peso)) {
    alert("Preencha todos os campos");
    return false;
  }

  const IMC = calcularImc(altura, peso);
  const textoSituacao = gerarTextoIMC(IMC);

  console.log(nome);
  console.log(altura);
  console.log(peso);
  console.log(IMC);
  console.log(textoSituacao);

  const objetoImc = {
    nome,
    altura,
    peso,
    imc: IMC,
    situacao: textoSituacao,
  };

  const retorno = await cadastrarNaApi(objetoImc);

  if (retorno) {
    buscarImcs();


    //limpar os campos do formulário apos buscar os dados da API
    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";

    alert(`${nome} foi cadastrado no banco de dados:
    Nome: ${nome}
    Altura: ${altura}
    Peso: ${peso}
    IMC: ${IMC.toFixed(2)}
    Situação: ${textoSituacao}`);
  } else {
    alert("Erro ao cadastrar usuário");
  }
  return false;
}

function calcularImc(altura, peso) {
  return peso / (altura * altura);
}

function gerarTextoIMC(IMC) {
  if (IMC < 16) {
    return "Magreza Grave";
  } else if (IMC >= 16 && IMC < 17) {
    return "Magreza moderada";
  } else if (IMC >= 17 && IMC < 18.5) {
    return "Magreza Leve";
  } else if (IMC >= 18.5 && IMC < 25) {
    return "Saudável";
  } else if (IMC >= 25 && IMC < 30) {
    return "Sobrepeso";
  } else if (IMC >= 30 && IMC < 35) {
    return "Obesidade Grau I";
  } else if (IMC >= 35 && IMC < 40) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}

//funcao para cadastrar na API

async function cadastrarNaApi(objetoImc) {
  try {
    const resposta = await fetch("http://localhost:3000/imc", {
      method: "POST",
      body: JSON.stringify(objetoImc),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function buscarImcs() {
  try {
    const retorno = await fetch("http://localhost:3000/imc");
    const retornaDados = await retorno.json();
    const linhaTabela = document.getElementById("cadastro");
    let template = "";

    console.log(retornaDados);

    const tabela = document.getElementById("cadastro");
    let template = "";

    retornaDados.sort((a, b) => {
      return a.nome.localeCompare(b.nome);
    });

    for (let i = 0; i < retornaDados.length; i++) {
      template += `<tr><td>${retornaDados[i].nome}</td>
      <td>${retornaDados[i].altura}</td>
      <td>${retornaDados[i].peso}</td>
      <td>${retornaDados[i].imc.toFixed(2)}</td>
      <td>${retornaDados[i].situacao}</td></tr>`;
    }

    linhaTabela.innerHTML = template;
  } catch (error) {
    console.log(error);
  }
}