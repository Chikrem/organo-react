// Início Aula-1
import './App.css'
import Banner from './componentes/Banner';
import TextField from './componentes/TextField';

function App() {

  return (
    <>
      <Banner />
      <TextField label="Nome" placeholder="Digite seu nome"/>
      <TextField label="Cargo" placeholder="Digite seu cargo"/>
      <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
    </>
  )
}

export default App
