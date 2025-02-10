import "./Form.css";
import TextField from "./../TextField/index";

const Form = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados do Card </h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;
