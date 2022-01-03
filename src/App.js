import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import "./assets/App.css"

class App extends Component {
  criarNota(titulo, nota){
    console.log('Uma nova nota foi criada 2: ' + titulo + ' - ' + nota);
  }

  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
