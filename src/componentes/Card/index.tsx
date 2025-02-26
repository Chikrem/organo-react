/* eslint-disable react/prop-types */
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Card.css";
import { CardProps } from "../../compartilhado/ICard";

const Card: React.FC<CardProps> = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart
              color="Red"
              size={32}
              onClick={favoritar}
            />
          ) : (
            <AiOutlineHeart
              size={32}
              onClick={favoritar}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
