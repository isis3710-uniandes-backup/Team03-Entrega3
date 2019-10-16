import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UsuarioBD from '../api/usuarioBD';
import { BrowserRouter as Router, Route, Switch, Link , Redirect} from 'react-router-dom';
import "./css/style.css";
class Reg extends Component {

  constructor(){
    super();
    this.state = {
        mostrarUsuario : false,
        textoUsuario: null,
        mostrarPassword:false,
        textoPassword:null,
        mostrarEmail:false,
        textoEmail:null,
        redirect:false
    }

}

renderProfile = () => { 
  if (this.state.redirect) { 
    var str = '/usuario/'.concat(sessionStorage.getItem("Usuario"))
    this.props.logger;
    return <Redirect to = '/usuario'/> 
  } 
}  

autentication=(event)=> {
        var data = {usuario:document.getElementsByName("username")[0].value,password:document.getElementsByName("password")[0].value,correo:document.getElementsByName("email")[0].value,categoriaFavorita:document.getElementsByName("tipo")[0].value}
        var mailerror= this.validateEmail(data.correo);

        var passError = this.validatePassword(data.password);
        
        if(UsuarioBD.findOne({usuario:data.usuario})!=null){
            this.setState({
              textoUsuario:'Este nombre de usuario ya esta en uso',
              mostrarUsuario:true
            })
        }
        else if(mailerror!= null){
          
         this.setState({
          textoEmail : mailerror,
          mostrarEmail:true
        })
        }
        else if(passError!= null){
          
          this.setState({
           textoPassword : passError,
           mostrarPassword:true
         })
         }
        else{
          UsuarioBD.insert(data);
          sessionStorage.setItem("Usuario",data.usuario);
          this.setState({
            redirect:true,
          })
          this.props.logger;
        }


}

validateEmail(value) {
  let error;
  if (value===null) {
    error = 'Este campo es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Direccion de correo erroneo';
  }
  return error;
}

 validateUsername(value) {
  let error;
  if(!value){
    error = 'Este campo es obligatorio';
  }
  else if (value === UsuarioBD.findOne({usuario:value})) {
    error = 'Lo sentimos, ese nombre de usuario ya esta en uso';
  }
  this.setState({
    textoUsuario : error,
    mostrarUsuario:true
  })
  return error;
}



validatePassword(value){
    let error;
    if(value ===null){
        error = 'Este campo es obligatorio';
    }
    else if(value.length <5){
        error = 'Contraseña muy corta, prueba con otra';
    }

    this.setState({
      textoPassword : error,
      mostrarPassword:true
    })

    return error;
   
}

render() {
    return (
  <div className="row">
    <div  className="col-12">
        
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
      }}
      onSubmit={values => {
        console.log("Heme aquí")
        var data = {usuario:document.getElementById("username").value,password:document.getElementById("password").value,correo:document.getElementById("email").value,categoria:document.getElementById("tipo").value}
        if(UsuarioBD.findOne({usuario:data.usuario})!=null){
            this.setState({
              textoUsuario:'Este nombre de usuario ya esta en uso',
              mostrarUsuario:true
            })
        }
        else{
        UsuarioBD.insert(data);
        sessionStorage.setItem("Usuario",data.usuario);
        }

        console.log(values);
        
      }}
    >
      {({ errors, touched, isValidating }) => (
           <div style={{ display: "flex",
           justifyContent: "center",
           alignItems: "center"}}>
            <div className="card text-center mx-auto">
                  <div className="card-body"  style={{backgroundColor: '#FFC49B'}}>
                  <div className="card-title"><h1 className="display-3" style={{textAlign:"center", color:"#001B2E"}}>Registro</h1></div>
                        
                  <Form>
                      <div>
                  <label style={{color:'FFEFD3'}} >Usuario</label>
                  <br></br>
                    <Field name="username" validate={this.validateUsername} placeholder="Usuario" />
                    <div>
                    {touched.username && this.state.mostrarUsuario ? <p style={{ color: 'red' }}>{this.state.textoUsuario}</p>: null}
                    </div>
                    </div>
                    <div>
                    <label style={{color:'FFEFD3'}}>Contraseña</label>
                    <br></br>
                    <Field name="password" type="password" validate={this.validatePassword} placeholder="Contraseña"/>
                    {errors.password && touched.password &&  this.state.mostrarPassword ? <p style={{ color: 'red' }}>{this.state.textoPassword}</p>: null}
                    </div>
                    <div>
                    <label style={{color:'FFEFD3'}}>Email</label>
                    <br></br>
                    <Field name="email" validate={this.validateEmail} placeholder="Ej: 123@mail.com"/>
                    {errors.email && touched.email && this.state.mostrarEmail ? <p style={{ color: 'red' }}>{this.state.textoEmail}</p>:null}
                    <br></br>
                    <div>
                        <label>Categorias</label>
                        <select name="tipo" id="tipo">
                            <option value="1">C1</option>
                            <option value="2">C2</option>
                            <option value="3">C3</option>
                        </select>
                    </div>
                    <br></br>
                    <p className="text-center">
                    ¿Ya tienes una cuenta? Ingresa <Link to="/login">aquí</Link>
                    </p>
                    <br></br>
                    <button onClick = { (event)=>{this.autentication(event)} } type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                    </Form>
                    </div>
            
            {this.renderProfile()}
        </div>
        </div>
    
      )}
    </Formik>
  </div>
  </div>
  
)
};
}

export default Reg;