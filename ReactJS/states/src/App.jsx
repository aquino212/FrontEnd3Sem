
import { useState } from 'react'
import './App.css'

function App() {
  const [titulo, setTitulo] = useState("Brave")

  function mudarTexto() {
    setTitulo("Microsoft")
  }
  return(
    <>
    <h1>Minha página de {titulo}</h1>
    <button onClick={mudarTexto}>Mudar Texto</button>
    </>
  );
}

export default App