import "./title.css"

// destructuring
function Title(xpto){
    return <h1>{xpto.texto} - {xpto.Poderes} - {xpto.NivelDePoder}</h1>    
}

export default Title