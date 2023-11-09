import React, { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import { categorias } from './data/categorias';
import { produtos } from './data/produtos'
import Selecao from './componentes/Selecao';
import Produtos from './componentes/Produtos';
import { filtraCategoria } from './services/services';

function App() {

  const [btnClicked, setBtnClicked] = useState("Entradas");
  const [listaProdutosFiltrados, setLista] = useState(filtraCategoria("Entradas"));

  return (

    <body className='limitador-largura'>
      <Banner />
      <Selecao categorias={categorias} produtos={produtos} setLista={setLista} setBtnClicked={setBtnClicked} btnClicked={btnClicked} />
      <Produtos listaProdutosFiltrados={listaProdutosFiltrados} />
    </body>
  );
}

export default App;
