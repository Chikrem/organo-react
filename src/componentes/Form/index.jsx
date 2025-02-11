import "./Form.css";
import TextField from "./../TextField/index";
import SusList from './../SusList/index';
import Button from './../Button/index';


const Form = () => {

  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form Enviado')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do Card </h2>
        <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <SusList label = "Time" itens = {times}/>
        <Button>
            Criar Card 
        </Button>
      </form>
    </section>
  );
};

export default Form;
