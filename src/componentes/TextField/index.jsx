/* eslint-disable react/prop-types */
import "./TextField.css";

const TextField = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
