import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { UsuarioBD } from '../api/usuarioBD.js';
import style from './style.css'



class Registrar extends Component {

    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            name:'',
            redirect:false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        sessionStorage.setItem("Usuario",null);
    }



   renderLogin = () => { 
        
          return <Redirect to = '/login' /> 
        
    }
    renderProfile = () => { 
        if (this.state.redirect) { 
          var str = '/usuario/'.concat(sessionStorage.getItem("Usuario"))
          return <Redirect to ='/usuario'/> 
        } 
    }  
    handleChange=(e)=>{
        let target = e.target;

        let value = target.type === 'checkbox' ? target.checked:target.value;

        let name = target.name;

        this.setState({
            [name]:value 
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        var data = {usuario:document.getElementById("name1").value,password:document.getElementById("password1").value,correo:document.getElementById("email1").value, rol:document.getElementsByName("tipo").value}
        if(UsuarioBD.findOne({usuario:data.usuario})!=null){
            
        }
        UsuarioBD.insert(data);
        sessionStorage.setItem("Usuario",data.usuario);
        if(sessionStorage.getItem("Usuario") != null){
            this.setState({
                redirect:true
            });
        }

    }


    render() {
 return (
            <div className="">
                
                <div className="card">
                    <div className="card-body">
                        <div className="card-title"><h1 className="display-3" style={{textAlign:"center"}}>Registro</h1></div>
                          
                         <form onSubmit={this.handleSubmit} className="form-group" noValidate>
                    <div >
                        <label >Nombre Completo</label>
                        {renderNameValidationError}
                        <input type="text" id="name1" className="form-control" placeholder="Nombre Completo" required />
                    </div>
                    <div >
                        <label >Contraseña</label>
                        {renderPasswordValidationError}
                        <input type="password" id="password1" className="form-control" placeholder="Ingresa tu contraseña"  required />
                    </div>
                    <div >
                        <label >Email</label>
                        {renderEmailValidationError}
                        <input type="email" id="email1" className="form-control" placeholder="email" required />
                    </div>
                    <div>
                        <label>Tipo de Usuario</label>
                        <select name="tipo">
                            <option value="Cliente">Cliente</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </div>
                    <div>
                    <p className="text-center">
                    ¿Ya tienes una cuenta? Ingresa <Link to="/login">aquí</Link>
                  </p>
                  <input type="submit" value="Submit" /> </div>
                </form>
                </div>
                </div>
                {this.renderProfile()}
                
            </div>
        );
    }
}

export default Registrar;