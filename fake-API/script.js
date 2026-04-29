function validarFormulario() {
  let nome = document.getElementById("nome").value.trim();
  let sobrenome = document.getElementById("sobrenome").value.trim();
  // let email = document.getElementById("email").value.trim();
  // let numinter = document.getElementById("numinter").value.trim();
  // let telefone = document.getElementById("telefone").value.trim();
  // let ddd = document.getElementById("ddd").value.trim();
  // let cep = document.getElementById("cep").value.trim();
  // let endereco = document.getElementById("endereco").value.trim();
  // let numero = document.getElementById("numero").value.trim();
  // let complemento = document.getElementById("complemento").value.trim();
  // let bairro = document.getElementById("bairro").value.trim();
  // let cidade = document.getElementById("cidade").value.trim();
  // let estado = document.getElementById("estado").value.trim();
  // let anotacoes = document.getElementById("anotacoes").value.trim();

  let quantidadeErros = 0;

  if (nome.length == 0) {
    FormError("nome");
    quantidadeErros++;

  } else {
    FormSuccess("nome");
  }

  if (sobrenome.length == 0) {
    FormError("sobrenome");
    quantidadeErros++;
  } else {
    FormSuccess("sobrenome");
  }

  //cadastrar na API //
  //gerar um objeto com os dados
  let objetoContato = {
    nome : nome,
    sobrenome : sobrenome
  }

  let cadastrado = cadastrarContato(objetoContato);
  return false;

  // if (email.length == 0) {
  //   FormError("email");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("email");
  // }

  // if (numinter.length == 0) {
  //   FormError("numinter");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("numinter");
  // }

  // if (ddd.length == 0) {
  //   FormError("ddd");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("ddd");
  // }

  // if (telefone.length == 0) {
  //   FormError("telefone");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("telefone");
  // }

  // if (cep.length == 0) {
  //   FormError("cep");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("cep");
  // }

  // if (endereco.length == 0) {
  //   FormError("endereco");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("endereco");
  // }

  // if (numero.length == 0) {
  //   FormError("numero");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("numero");
  // }

  // if (complemento.length == 0) {
  //   FormError("complemento");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("complemento");
  // }

  // if (bairro.length == 0) {
  //   FormError("bairro");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("bairro");
  // }

  // if (cidade.length == 0) {
  //   FormError("cidade");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("cidade");
  // }

  // if (estado.length == 0) {
  //   FormError("estado");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("estado");
  // }

  // if (anotacoes.length == 0) {
  //   FormError("anotacoes");
  //   quantidadeErros++;
  // } else {
  //   FormSuccess("anotacoes");
  // }

  if (quantidadeErros !== 0) {
    alert(`Existem ${quantidadeErros} campo(s) obrigatório(s) não preenchido(s).`);
    quantidadeErros = 0;
  }

  console.log(`
    nome: ${nome} ${sobrenome} | 
    email: ${email} | 
    telefone: +${numinter} ${ddd} ${telefone} | 
    CEP: ${cep} |
    Endereço: ${endereco} |
    Número: ${numero} |
    Complemento: ${complemento} |
    Bairro: ${bairro} |
    Cidade: ${cidade} |
    Estado: ${estado} |
    Anotações: ${anotacoes} |
    `);
}

//funcao que pinta a borda que falta preencher
function FormError(fildId) {
  document.getElementById(fildId).style.border = "1px solid red";
}

//funcao que reinicia a borda do campo preenchido
function FormSuccess(fildId) {
  document.getElementById(fildId).style.border = "none";
}

async function buscarEndereco(cep){
    if (cep.trim().length < 8 ) {
      alert("CEP inválido. O CEP deve conter 8 dígitos.");
      return false;
    }

    try {

        aguardandoCampos();

        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        let dados = await retorno.json();
        console.log(dados);

        document.getElementById("endereco").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.estado;

    } catch {
        alert("Ocorreu um erro ao buscar o endereço.");
    }
    
}

function aguardandoCampos(){
    document.getElementById("endereco").value = "Aguardando CEP...";
    document.getElementById("bairro").value = "Aguardando CEP...";
    document.getElementById("cidade").value = "Aguardando CEP...";
    document.getElementById("estado").value = "Aguardando CEP...";
}

//Funcao que cadastra o contato na Api
async function cadastrarContato(objetoContato) {
  console.log(objetoContato);
  //cadastrar na API
  let resposta = await fetch("http://localhost:3000/contatos", {
    method: "POST",
    body: JSON.stringify(objetoContato),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });
}