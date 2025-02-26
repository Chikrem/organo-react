import { ReactElement } from 'react'
import './Button.css'

interface BotaoProps {
    children: ReactElement
}

const Button = (props: BotaoProps) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Button