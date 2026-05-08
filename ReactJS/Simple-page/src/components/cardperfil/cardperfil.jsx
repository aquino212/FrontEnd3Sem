import MyPeople from "../../assets/VaiNegarComidaProDawn.png"
import "./cardperfil.css"


function CardPerfil(){
    return(
              <div class="card-perfil">
        <img className="card-perfil__image" src={MyPeople} alt="imagem do usuario" />
      </div>
    );
}

export default CardPerfil