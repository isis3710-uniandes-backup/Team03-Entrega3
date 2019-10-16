import React, { Component } from 'react';
import UsuarioBD from '../api/usuarioBD';
import DescuentoList from './descuento/descuentoList';

class Recomendado extends Component {
    validarUsuario() {
        if (sessionStorage.getItem("Usuario")) {
            let categoria = UsuarioBD.find({ usuario: sessionStorage.getItem("Usuario") }).fetch()[0].categoriaFavorita;
            return <DescuentoList categoria={parseInt(categoria)} />
        }
        else {
            return (
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div className="card text-center" style={{width:"100%"}}>
                                <div className="card-body" style={{backgroundColor: '#FFC49B'}}>
                                    <h5 className="card-title">Oops! parece que no has ingresado como usuario</h5>
                                    <p className="card-text">Te invitamos a ingresar con tus credenciales, o registrarte si no lo has hecho!</p>
                                    <a href="/registrar" class="btn btn-primary">Ingresa aquí!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.validarUsuario()}
            </React.Fragment>
        );
    }
}

export default Recomendado;