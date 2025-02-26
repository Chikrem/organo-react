import { Colaborador } from "../../compartilhado/IColaborador";
import { Time } from "../../compartilhado/ITime";
import Card from "../Card";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

// Definição da interface para as props do componente Team
interface TeamProps {
  time: Time; // Objeto que representa um time
  colaboradores: Colaborador[]; // Lista de colaboradores do time
  aoDeletar: (id: string) => void; // Função chamada ao deletar um colaborador
  mudarCor: (cor: string, id: string) => void; // Função chamada ao mudar a cor do time
  aoFavoritar: (id: string) => void; // Função chamada ao favoritar um colaborador
}

// Componente funcional Team
const Team: React.FC<TeamProps> = ({
  time,
  colaboradores,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}) => {
  return (
    // Renderiza o componente apenas se houver colaboradores
    colaboradores.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.6"),
        }}
      >
        {/* Input para mudar a cor do time */}
        <input
          type="color"
          className="input-cor"
          value={time.cor}
          onChange={(evento) => {
            mudarCor(evento.target.value, time.id);
          }}
        />
        {/* Nome do time */}
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        {/* Lista de colaboradores */}
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
