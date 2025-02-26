import "./App.css";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Team from "./componentes/Team";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Time } from "./compartilhado/ITime";
import { Colaborador } from "./compartilhado/IColaborador";
import timesInicial from "./mocks/timesInicial";
import colabsInicial from "./mocks/colabsInicial";


const App: React.FC = () => { 


  const [times, setTimes] = useState<Time[]>(timesInicial);

  const [colaboradores, setColaboradores] =
    useState<Colaborador[]>(colabsInicial);

  function deletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCor(cor: string, id: string) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime: { nome: string; cor: string }) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function favoritarColaborador(id: string) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          return { ...colaborador, favorito: !colaborador.favorito };
        }
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner
        endereçoImagem="https://raw.githubusercontent.com/Chikrem/organo-react/refs/heads/main/public/imagens/banner.png"
        textoAlternativo="Banner Principal da Página"
      />
      <Form
        aoCriarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, { ...colaborador, id: uuidv4(), favorito: false }])
        }
      />
      {times.map((time, indice) => (
        <Team
          mudarCor={mudarCor}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={favoritarColaborador}
        />
      ))}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
