import './aluno.css';

function Aluno({ nome, curso, imagem }) {
  return (
    <div className="aluno-card">
      <img src={imagem} alt={nome} />
      <div>
        <h3>{nome}</h3>
        <p>{curso}</p>
      </div>
    </div>
  );
}

export default Aluno;
