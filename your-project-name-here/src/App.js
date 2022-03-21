import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

      usuarios: [{
        nombre: 'Doe, Jane',
        age: 45,
        colorHair: 'balck',
      },
      {
        nombre: 'Smith, John',
        age: 88,
        colorHair: 'brown',
      }]
    }
  }

  aumentarEdad = ( nombreUsuario) => {
    let usuarioActualizado = this.state.usuarios;

    for( let i = 0; i < usuarioActualizado.length; i++ ){
          if( usuarioActualizado[i].nombre === nombreUsuario){
            usuarioActualizado[i].age ++
          }
        }
        this.setState({
          usuarios: usuarioActualizado
        })
       
        

    }
    
  



  render(){
    const {usuarios} = this.state;
    return(
      <div>
        
        <h1>
          Lista de integrantes
        </h1>

        <div>
          <ul>
            {
              usuarios.map( (usuario, indice) => {
                return (
                  <li key={'usuarios_' + indice}>
                    {usuario.nombre}<br/>
                    {usuario.age}<br/>
                    {usuario.colorHair}<br/>

                    <button onClick={() => this.aumentarEdad(usuario.nombre)}>
                      Aumentar años a {usuario.nombre}
                    </button>

                  </li>
                )
              }
            )}

          </ul>
        </div>

      </div>
    )
  }





}
export default App;
