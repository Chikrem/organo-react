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
    <section className="team" style={style}>
      <h3 style={styleH3}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, index) => (
          <Card
            key={index}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
