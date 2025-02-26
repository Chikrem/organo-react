import React from 'react';
import './TextField.css';

interface TextFieldProps {
  type?: string;
  label: string;
  placeholder: string;
  valor: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
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
        onChange={(evento: React.ChangeEvent<HTMLInputElement>) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;