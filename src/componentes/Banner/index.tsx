import './Banner.css';

interface BannerProps {
    endereçoImagem: string
    textoAlternativo: string

}

const Banner = ( { endereçoImagem, textoAlternativo }: BannerProps) => {
    return (
        <header className='banner'>
            <img src={endereçoImagem} alt={textoAlternativo}/>       
        </header>
        )
}

export default Banner;