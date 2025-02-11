/* eslint-disable no-unused-vars */
// Início Aula-1
import './App.css'
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import { useState } from 'react';

function App() {

  // Um useState que permite adicionar um componente recebido de Form.jsx e guardalo em um array
  const [colaboradores, setColaboradores ] = useState([]);
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
}

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  )
}

export default App
