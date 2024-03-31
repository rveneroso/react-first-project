export default function App() {

  // Criando um componente que poderá ser utiliado posteriormente
  const BemVindo = (props) => {
    return (
      <div>
      <h2>Bem vindo(a) {props.nome} </h2>
      <h3>Tenho {props.idade} anos</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>This is where you must put your components as they'll be loaded by React engine.</h1>
      <BemVindo nome="Matheus" idade="25"/>
      <BemVindo nome="Lucas" idade="18" />
      <h2>Music is enough for a lifetime but a lifetime is not enough for music.</h2>
    </div>
  )
}
