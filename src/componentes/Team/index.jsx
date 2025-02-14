/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "../Card";
import "./Team.css";
import hexToRgba from "hex-to-rgba";
// npm i hex-to-rgba

const Team = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (

      colaboradores.length > 0 && <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
          <input type='color' className='input-cor' value={time.cor} onChange={evento => {
              mudarCor(evento.target.value, time.id);
          }} />
          <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
          <div className='colaboradores'>
              {colaboradores.map((colaborador, indice) => <Card key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar} />)}
          </div>
      </section>

  )
}

export default Team;
