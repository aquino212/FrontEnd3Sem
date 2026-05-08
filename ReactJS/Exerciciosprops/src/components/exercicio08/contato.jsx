import './contato.css';

function Contato({ nome, telefone, email }) {
  return (
    <div className="contato">
      <h4>{nome}</h4>
      <p>{telefone}</p>
      <p>{email}</p>
    </div>
  );
}

export default Contato;
