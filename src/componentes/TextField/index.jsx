/* eslint-disable react/prop-types */
import "./TextField.css";

const TextField = (props) => {
  
    // let valor = ''

  // O `useState` é um Hook do React que permite adicionar estado a componentes funcionais. Quando você 
  // chama `useState`, ele retorna um array com dois elementos: o estado atual e uma função que permite 
  // atualizá-lo.

//   const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
