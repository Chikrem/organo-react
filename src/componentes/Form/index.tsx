import "./Form.css";
import TextField from "./../TextField/index";
import SusList from "./../SusList/index";
import Button from "./../Button/index";
import { useState, FormEvent } from "react";

interface FormProps {
  times: string[];
  aoCadastrar: (colaborador: {
    nome: string;
    cargo: string;
    imagem: string;
    time: string;
  }) => void;
  aoCriarTime: (time: { nome: string; cor: string }) => void;
}

const Form: React.FC<FormProps> = ({ aoCadastrar, times, aoCriarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento: FormEvent) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSalvar}>
        <h2>Preencha os dados do Card</h2>
        <TextField
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <TextField
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <SusList
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>
          <span>Criar Card</span>
        </Button>
      </form>

      <form
        className="formulario"
        onSubmit={(evento: FormEvent) => {
          evento.preventDefault();
          aoCriarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo Time</h2>
        <TextField
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <TextField
          obrigatorio={true}
          label="Cor"
          type="color"
          placeholder="Digite sua cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Button>
          <span>Criar um novo time</span>
        </Button>
      </form>
    </section>
  );
};

export default Form;
