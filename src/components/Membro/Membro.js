import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nome: props.nome
        }
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
      }
    
    render() {
        return(
            <div>
                <h2>Bem vindo(a) { this.state.nome }</h2>
                <button onClick={ () => this.entrar('Lucas')}>
                    Entrar no sistema
                </button>
                {/* Embora eu tenha criado a função sair, a título de exemplo, a atualização do nome para Visitante foi feita por função anônima. */}
                <button onClick={ () => this.setState( { nome: 'Visitante '})   }>
                    Sair
                </button>
            </div>
        );
    }

    entrar(nome) {
        let state = this.state;
        state.nome = nome;
        this.setState(state);
    }


    sair() {
        let state = this.state;
        state.nome = 'Visitante';
        this.setState(state);
    }
}

export default Membro;