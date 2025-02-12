/* eslint-disable react/prop-types */
import './Team.css'

const Team = (props) => {

  const style = {
    backgroundColor: props.corSecundaria,
  };

  const styleH3 = {
    borderColor: props.corPrimaria,
  };

  return (
    <section className="team" style={style}>
      <h3 style={styleH3}>
        {props.nome}
      </h3>
    </section>
  );
};

export default Team;

