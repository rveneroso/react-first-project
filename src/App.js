import React, { Component} from "react";

class Equipe extends Component {
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component {
  render(){
    return(
      <div>
        <h2>Olá! Sou o  {this.props.nome} </h2>
        <h3>Cargo: {this.props.cargo} </h3>
        <h3>Idade: {this.props.idade} anos</h3>
      </div>
    );
  }
}

export default function App() {

  return (
    <div>
      <h1>Conheça nossa equipe!</h1>
      <Equipe nome="Ludwig van Beethoven" cargo="Pianista & compositor" idade="253"/>
      <Equipe nome="Nicolo Paganini" cargo="Violinista & compositor" idade="241"/>
      <Equipe nome="Camille Saint-Saens" cargo="Organista & compositor" idade="188"/>
    </div>
  )
}
