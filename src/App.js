import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { datos } from './datos.json'
import Form from './form.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      datos: datos
    }
    this.handlerAddDatos = this.handlerAddDatos.bind(this);
   
  };

  handlerAddDatos(dato) {
    this.setState({
      datos: [...this.state.datos, dato]
    })
  }
  removeDatos = (i) =>{
    this.setState({
      datos: this.state.dato.filter((e , i) =>{
        return (i!== i)
      })
    })
    console.log(i);
  }

  render() {

    const tareas = this.state.datos.map((dato, i) => {
      return (
        <div className="col-md-3" key={i}>
          <div className='card mt-4'>

            <div className='card-header'>
              <h4>{dato.title}</h4>
            </div>

            <span className="badge badge-danger badge-pill m-3">
              {dato.priority}</span>

            <div className='card-body'>
              <p> {dato.descripcion}</p>
            </div>
            <div className="">
              <p> <b>{dato.responsible}</b></p>
            </div>
            <div className='card-footer'>
            <button className='btn btn-danger' onClick={this.remuveDatos}>
            Borrar</button>

              </div>

          </div>
        </div>
      )
    })


    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>tareas
            <span className="badge badge-pill badge-light">
            {this.state.datos.length}
          </span>
        </nav>
        <div className="container">
          <div className="row">
            {tareas}
          </div>

        </div>
        <Form sumarTarea={this.handlerAddDatos} />
      </div>
    );
  }
}

export default App;
