// Início Curso-2
import "./App.css";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Team from "./componentes/Team";
import { useState } from "react";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  // Um useState que permite adicionar um componente recebido de Form.jsx e guardalo em um array
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    // console.log(colaboradores);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => time.nome)} // Mapear a lista de times e retornar apenas o nome para o formulario. O nome é necessário para o select de cargos
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {/* Iterar lista de times com map e renderizar objetos recebendo o nome e duas cores */}
      {times.map((time, index) => (
        <Team
          key={index}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
