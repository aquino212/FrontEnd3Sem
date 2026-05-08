import './filme.css';

function Filme({ titulo, ano, genero, nota }) {
  return (
    <div className="filme-card">
      <h3>{titulo}</h3>
      <p>Ano: {ano}</p>
      <p>Gênero: {genero}</p>
      <p>Nota: {nota}</p>
    </div>
  );
}

export default Filme;
