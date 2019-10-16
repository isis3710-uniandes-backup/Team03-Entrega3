import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { BrowserRouter as Router, Route, Switch, Link , Redirect} from 'react-router-dom';
import UsuarioBD from '../api/usuarioBD';
import { isNull } from "util";

class Usuario extends Component {

  constructor() {
    super();
    var data = UsuarioBD.findOne({ usuario: sessionStorage.getItem("Usuario") })
    this.state = {
      usuario: data != undefined ? data.usuario : null,
      correo: data != undefined ? data.correo : null,
      categoria: data != undefined ? data.categoriaFavorita : null,
      sali:false
    }
    this.renderSalida = this.renderSalida.bind(this)
  }

  logOut = (event) => {
    event.preventDefault();
    this.setState({
      sali:true
    })
    sessionStorage.setItem("Usuario", null);
    sessionStorage.clear();
  }


  renderSalida = () => {
    if (this.state.sali) {
      return <Redirect to="/tendencia" />
    }

  }

  insertarDatos = () => {

    var dato = sessionStorage.getItem("Usuario")

    this.setState({
      usuario: dato.usuario,
      correo: dato.correo,
      categoria: dato.categoria
    })
  }
  salir(){
    this.setState({
      sali:true
    })
  }
  log() {
    if (this.state.usuario == null) {
      return true
    }
    return false
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          
          <div hidden={this.log()}  >
          <div style={{ display: "flex",
           justifyContent: "center",
           alignItems: "center"}}>
            <div className="card mx-auto text-center">

              <div className="card-body">
                <div className="card-title"><h1>{this.state.usuario}</h1></div>
                <img src="https://image.flaticon.com/icons/svg/483/483361.svg" style={{ width: "30%" }} className="rounded-circle" alt="Foto de perfil"></img>
                <div><h3>Correo</h3>
                  <p>{this.state.correo}</p></div>
                <h3>Categoria</h3>
                <p>{this.state.categoria}</p>
                {this.renderSalida()}
                <button className="btn btn-danger" onClick={(event)=>this.logOut(event)}>Log Out</button>
                
              </div>
              
            </div>
          </div>
          </div>
          <div hidden={!this.log()}>
          <div style={{ display: "flex",
           justifyContent: "center",
           alignItems: "center"}}>
            <div className="card mx-auto text-center">

              <div className="card-body">
                <div className="card-title"><h2>Ops! Pagina no encontrada</h2></div>
                <img className="card-img" variant="top" src="https://image.flaticon.com/icons/svg/1510/1510317.svg" />
                {this.renderSalida()}
                <button className="btn btn-primary" onClick={this.salir}>Volver a la pagina principal</button>
              </div>
            </div>
          </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Usuario;