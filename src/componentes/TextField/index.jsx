/* eslint-disable react/prop-types */
import { useState } from 'react';
import './TextField.css';

const TextField = (props) => {

    // let valor = ''

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;