/* eslint-disable react/prop-types */
import './TextField.css';

const TextField = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;