import React from 'react';
import './TextField.css';

// Definição da interface para as props do componente TextField
interface TextFieldProps {
  type?: string; // Tipo do input, padrão é "text"
  label: string; // Rótulo do campo de texto
  placeholder: string; // Placeholder do campo de texto
  valor: string; // Valor atual do campo de texto
  aoAlterado: (valor: string) => void; // Função chamada quando o valor do campo é alterado
  obrigatorio?: boolean; // Indica se o campo é obrigatório, padrão é false
}

// Componente funcional TextField
const TextField: React.FC<TextFieldProps> = ({
  type = "text", // Define o tipo padrão como "text"
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false, // Define o valor padrão de obrigatorio como false
}) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={(evento: React.ChangeEvent<HTMLInputElement>) => aoAlterado(evento.target.value)} // Chama aoAlterado quando o valor do input muda
        required={obrigatorio} // Define se o campo é obrigatório
        placeholder={placeholder} // Define o placeholder do input
      />
    </div>
  );
};

export default TextField;