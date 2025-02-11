/* eslint-disable react/prop-types */
import './Team.css'

const Team = (props) => {
  return (
    <section className="team">
      <h3>
        {props.nome}
      </h3>
    </section>
  );
};

export default Team;

