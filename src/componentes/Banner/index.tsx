import './Banner.css';

import React from 'react';

interface BannerProps {
    endereçoImagem: string
    textoAlternativo: string

}

const Banner = ( { endereçoImagem, textoAlternativo }: BannerProps) => {
    return (
        <header className='banner'>
            {/* <img src="https://raw.githubusercontent.com/Chikrem/organo-react/refs/heads/main/public/imagens/banner.png" alt="Banner Principal da Página"/>        */}
            <img src={endereçoImagem} alt={textoAlternativo}/>       
        </header>
        )
}

export default Banner;