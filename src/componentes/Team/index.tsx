import { Colaborador } from "../../compartilhado/IColaborador";
import { Time } from "../../compartilhado/ITime";
import Card from "../Card";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

interface TeamProps {
  time: Time;
  colaboradores: Colaborador[];
  aoDeletar: (id: string) => void;
  mudarCor: (cor: string, id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Team: React.FC<TeamProps> = ({
  time,
  colaboradores,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        <input
          type="color"
          className="input-cor"
          value={time.cor}
          onChange={(evento) => {
            mudarCor(evento.target.value, time.id);
          }}
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Card
              key={colaborador.id}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
