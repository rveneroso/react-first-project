import React, { Component} from "react";

class App extends Component {

  // Contructor também faz parte do ciclo de vida de um componente
  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  }

  // Essa função é executada logo depois que o componente foi montado. É executado somente uma vez.
  componentDidMount() {
    setInterval(()=> {
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, 1000)
  }

  // É executado toda vez que um componente é atualizado. Aqui será executado de 1 em 1 segundo.
  componentDidUpdate() {
    console.log('Atualizou');
  }

  // Essa função retorna um boolean dizendo se o componente deve ser atualizado ou não. No teste que fiz, quando coloquei false no retorno da função, toda
  // a atualização que o componente estava sofrendo de 1 em 1 segundo, parou de acontecer. Quando coloquei o retorno como true, tudo voltou ao normal.
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return(
      <div>
        <h1>Meu Projeto {this.state.hora} </h1>
      </div>
    );
  }
}

export default App;
