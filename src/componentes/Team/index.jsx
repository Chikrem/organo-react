/* eslint-disable react/prop-types */
import Card from '../Card';
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
      <Card />
      <Card />
    </section>
  );
};

export default Team;

