import './produto.css';

function Produto({ nome, preco, descricao }) {
  return (
    <div className="produto">
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default Produto;