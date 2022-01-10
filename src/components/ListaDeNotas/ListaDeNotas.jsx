import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
    this.novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this.novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this.novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                nota={nota.nota}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
