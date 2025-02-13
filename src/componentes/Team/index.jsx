/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "../Card";
import "./Team.css";

const Team = (props) => {
  const style = {
    backgroundColor: props.corSecundaria,
  };

  const styleH3 = {
    borderColor: props.corPrimaria,
  };

  return (
    props.colaboradores.length > 0 && // Se tiver colaboradores, renderiza o componente
    <section className="team" style={style}>
      <h3 style={styleH3}>{props.nome}</h3>
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
