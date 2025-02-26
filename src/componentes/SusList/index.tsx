import './SusList.css'

interface SusListProps {
  label: string;
  aoAlterado: (valor: string) => void;
  obrigatorio: boolean;
  valor: string;
  itens: string[];
}

const SusList = (props: SusListProps) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value="">Selecione o Time</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SusList