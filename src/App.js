import React from 'react'
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import "./assets/App.css"

function App() {
  return (
    <section className='conteudo'>
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;
