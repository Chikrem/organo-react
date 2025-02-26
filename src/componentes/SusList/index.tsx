import './SusList.css'

// Definição da interface para as props do componente SusList
interface SusListProps {
  label: string; // Rótulo da lista suspensa
  aoAlterado: (valor: string) => void; // Função chamada quando o valor da lista é alterado
  obrigatorio: boolean; // Indica se o campo é obrigatório
  valor: string; // Valor atual da lista suspensa
  itens: string[]; // Itens da lista suspensa
}

// Componente funcional SusList
const SusList: React.FC<SusListProps> = (props) => {
  return (
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select 
        onChange={evento => props.aoAlterado(evento.target.value)} // Chama aoAlterado quando o valor do select muda
        required={props.obrigatorio} // Define se o campo é obrigatório
        value={props.valor} // Define o valor atual do select
      >
        <option value="">Selecione o Time</option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option> // Renderiza cada item da lista como uma opção
        })}
      </select>
    </div>
  )
}

export default SusList