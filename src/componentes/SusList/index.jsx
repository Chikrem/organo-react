/* eslint-disable react/jsx-key */

/* eslint-disable react/prop-types */
import './SusList.css'

const SusList = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {/* Renderizar uma lista iterando com map */}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SusList