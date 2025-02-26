import { ReactElement } from 'react'
import './Button.css'

import React from 'react'

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