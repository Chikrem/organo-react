/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
    return (
      <div className='colaborador'> 
        <div className="deletar" onClick={() => props.aoDeletar(props.nome)}>Deletar</div>
        <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
            <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>)
}

export default Card;