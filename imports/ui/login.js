import React, { Component } from 'react';
import UsuarioBD from '../api/usuarioBD';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            mostrar : false,
            redirect:false,
        }

    }
    renderProfile = () => { 
        if (this.state.redirect) { 
          var str = '/usuario/'.concat(sessionStorage.getItem("Usuario"))
          return <Redirect to = '/usuario'/> 
        } 
    }  


    autentication=(event)=> {
        event.preventDefault();

        let user={usuario:document.getElementById("user").value ,password: document.getElementById("password").value };
        var document1 = UsuarioBD.findOne({usuario:user.usuario});
        if(document1 != undefined  && user.password === document1.password){
            sessionStorage.setItem("Usuario", user.usuario);
            this.setState({redirect:true})
        }
        else{
            this.setState({
                mostrar : true
            })
        }
        

    }



    render() {
        return (
            <div className="row"><div className="col-12 ">
                <div style={{ display: "flex",
           justifyContent: "center",
           alignItems: "center"}}>
            
                <div className="card text-center mx-auto">
                    <div className="card-body" style={{backgroundColor: '#FFC49B'}}>
                        <div className="card-title"><h1 className="display-3">Login</h1></div>
                         <form onSubmit={this.handleSubmit} className="form-group">
                    <div>
                        <label>User</label>
                        <input type="text" id="user" className="form-control" placeholder="Nombre Completo"  ></input>
                    </div>
                    <div >
                        <label >Contraseña</label>
                        <input type="password" id="password" className="form-control" placeholder="Ingresa tu contraseña" ></input>
                    </div>
                    <div>
                        {this.state.mostrar ? <p style={{ color: 'red' }}>El nombre de usuario o la contraseña son incorrectas</p>:null}
                    </div>
                    <div >
                       <button onClick = { (event)=>{this.autentication(event)} } className="btn btn-primary">Ingresar</button>
                    </div>
                </form>
                </div>
                </div>
                {this.renderProfile()}
            </div>
            
            </div>
            </div>
        );
    }
}

export default Login;