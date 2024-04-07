import React, { Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Thiago",
      contador: 0
    }
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);

  }

  aumentar() {
    let state = this.state;
    state.contador += 1;
    state.nome = "Thiago Maior";
    this.setState(state);
  }

  diminuir() {
    let state = this.state;
    if(state.contador === 0) {
      alert('Contador chegou a zero');
      return;
    }
    state.contador -= 1;
    state.nome = "Thiago Menor";
    this.setState(state);
  }



  render() {
    return(
      <div>
        {this.state.nome}
        <h1>Contador</h1>
        <button onClick={this.diminuir}>-</button>
          {this.state.contador}
        <button onClick={this.aumentar}>+</button>
      </div>
    );
  }
}

export default App;
