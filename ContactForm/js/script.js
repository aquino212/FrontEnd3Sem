  async function validarFormulario() {
        let nome = document.getElementById('nome').value.trim();
        let sobrenome = document.getElementById('sobrenome').value.trim();
        // let email = document.getElementById('email').value.trim();
        // let pais = document.getElementById('pais').value.trim();
        // let ddd = document.getElementById('ddd').value.trim();
        // let telefone = document.getElementById('telefone').value.trim();
        // let cep = document.getElementById('cep').value.trim();
        // let rua = document.getElementById('rua').value.trim();
        // let numero = document.getElementById('numero').value.trim();
        // let apto = document.getElementById('apto').value.trim();
        // let bairro = document.getElementById('bairro').value.trim();
        // let cidade = document.getElementById('cidade').value.trim();
        // let estado = document.getElementById('estado').value.trim();
        // let mensagem = document.getElementById('mensagem').value.trim();

        let quantidadeErros = 0;

        alert(nome.length);

        if(nome.length ==0){
          FormError("nome");
          quantidadeErros++;
        }
        else{
          ReiniciaBorda("nome");
        }

        if(sobrenome.length ==0){
          FormError("sobrenome");
          quantidadeErros++;
        }
        else{
          ReiniciaBorda("sobrenome");
        }

        // if(email.length ==0){
        //   FormError("email");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("email");
        // }

        //   if(pais.length ==0){
        //   FormError("pais");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("pais");
        // }

        //   if(ddd.length ==0){
        //   FormError("ddd");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("ddd");
        // }

        //  if(telefone.length ==0){
        //   FormError("telefone");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("telefone");
        // }

        //  if(cep.length ==0){
        //   FormError("cep");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("cep");
        // }

        //  if(rua.length ==0){
        //   FormError("rua");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("rua");
        // }

        //  if(numero.length ==0){
        //   FormError("numero");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("numero");
        // }

        //  if(apto.length ==0){
        //   FormError("apto");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("apto");
        // }

        //  if(bairro.length ==0){
        //   FormError("bairro");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("bairro");
        // }

        //  if(cidade.length ==0){
        //   FormError("cidade");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("cidade");
        // }

        //  if(estado.length ==0){
        //   FormError("estado");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("estado");
        // }

        //  if(mensagem.length ==0){
        //   FormError("mensagem");
        //   quantidadeErros++;
        // }
        // else{
        //   ReiniciaBorda("mensagem");

        // }

        //cadastrar lá na API
        let objetoContato = {
          nome: nome,
          sobrenome: sobrenome
        };

        let cadastrar =cadastrarContato(objetoContato);
        return false;

        if(quantidadeErros > 0){
          alert(`Existem ${quantidadeErros} campos obrigatórios não preenchidos.`);
          quantidadeErros = 0;
        }

        async function cadastrarContato(objetoContato){
          console.log(objetoContato);

          let resposta = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            body: JSON.stringify(objetoContato),
            headers : {
              "Content-Type": "application/json charset=UTF-8"
            }
    
          });
        }

                

        function FormError(fieldId){
          document.getElementById(fieldId).style.border = "1px solid red";
        }
        function ReiniciaBorda(fieldId){
          document.getElementById(fieldId).style.border = "3px solid green";
        }
        function BuscarEndereco(cep){
          if(cep.trim().length < 0){
            alert("O campo CEP é obrigatório!");
            return false;
          }
        }

        try {
           let retorno = fetch("https://viacep.com.br/ws/${cep}/json/")
           let dados =await retorno.json();
           console.log(dados);

          if(dados.erro){
            alert("CEP não encontrado!");
            return false;
          }

          
          document.getElementById("rua").value = dados.logradouro;
          document.getElementById("bairro").value = dados.bairro;
          document.getElementById("cidade").value = dados.localidade;
          document.getElementById("estado").value = dados.uf;

          let numeroInput = document.getElementById("numero");
          if(numeroInput.value.trim() === ""){
          }

          } catch (error) {
          alert("Erro ao buscar o endereço!");
        }
      }    