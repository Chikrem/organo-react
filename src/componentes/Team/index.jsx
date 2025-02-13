/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "../Card";
import "./Team.css";

const Team = (props) => {

  return (
    props.colaboradores.length > 0 && // Se tiver colaboradores, renderiza o componente
    <section className="team" style={{backgroundImage: 'url(../public/imagens/fundo.png)', backgroundColor: props.corSecundaria}}>
      <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corPrimaria} type="color" className="input-cor"/>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, index) => {
          return (
            <Card
              corDeFundo={props.corPrimaria}
              key={index}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={props.aoDeletar}
            />
          )
        })}
      </div>
    </section>
  );
};

export default Team;
