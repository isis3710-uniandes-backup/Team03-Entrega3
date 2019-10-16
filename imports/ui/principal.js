import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link , Redirect} from 'react-router-dom';

//COMPONENTES
import Inicio from "./inicio";
import Tendencia from "./tendencia";
import Registrar from "./registrar";
import Reg from "./reg";
import Login from "./login";
import Usuario from './usuario';
import CentroComercialDetail from './centroComercial/centrocomercialdetail';
import CentrosComerciales from './centroComercial/centroscomerciales';
import ListaProductos from './productos/listaProductos';
import Buscar from './buscar';
import Recomendado from './recomendado';


class Principal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            log: false,
            volver:false,
        }

        this.logger = this.logger.bind(this);
    }

    logger() {
        this.setState({
            log: true
        })
    }

    salir =()=>{
        this.setState({
            volver:true
        })
    }

    volver(){
        if(this.state.volver){
            return <Redirect to="/"></Redirect>
        }
    }

    render() {

        let estaLoggeado = sessionStorage.getItem("Usuario");
        if (!this.state.log) {
            estaLoggeado = null
        }

        let label, icon, link;

        if (estaLoggeado != null) {
            label = "Perfil";
            link = "/usuario"
            icon = <img src="https://image.flaticon.com/icons/svg/483/483361.svg" style={{ width: "30%" }} alt="Perfil" />
        }
        else {
            label = "Registrarse";
            link = "/registrar"
            icon = <img src="https://image.flaticon.com/icons/svg/2089/2089689.svg" style={{ width: "30%" }} alt="Registrar" />

        }
        const NoMatchPage = () => {
            return (
                <div className="container-fluid text-center">
                    
                    <img src="https://image.flaticon.com/icons/svg/0/697.svg" style={{ width: "20%" }} alt="Error 404" />
                    <br></br>
                    <h2 style={{ color: "#FFC49B" }}>404 - Ups, algo a salido mal!</h2>
                    {this.volver()}
                    <br></br>
                    <br></br>
                    <button className="btn btn-primary" onClick={this.salir}>Volver a la pagina principal</button>
                </div>
            );
        };

        return (
            <Router>
                <div className="container-fluid">
                    <div className="text-center">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <img src="https://raw.githubusercontent.com/ccjaimes/proyecto3Web/master/img/main.png"></img>
                        </Link>
                    </div>
                </div>
                <div style={{ paddingBottom: '50px' }}>
                    <Switch>
                        <Route exact path="/">
                            <Inicio></Inicio>
                        </Route>
                        <Route path="/tendencia">
                            <Tendencia></Tendencia>
                        </Route>
                        <Route path="/registrar">
                            <Reg logger = {this.logger}></Reg>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/usuario">
                            <Usuario></Usuario>
                        </Route>
                        <Route path="/centroscomerciales">
                            <CentrosComerciales />
                        </Route>
                        <Route path="/centrocomercial/:cc">
                            <CentroComercialDetail />
                        </Route>
                        <Route path="/productos">
                            <ListaProductos></ListaProductos>
                        </Route>
                        <Route path="/buscar">
                            <Buscar ></Buscar>
                        </Route>
                        <Route path="/recomendado">
                            <Recomendado></Recomendado>
                        </Route>
                        <Route component={NoMatchPage}></Route>
                    </Switch>
                </div>
                <footer className="fixed-bottom" style={{ backgroundColor: "#294C60" }}>
                    <div className="row py-3">
                        <div className="col-1 col-md-4">
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="row">
                                <div className="col-3 text-center" style={{ filter: "invert(100%)" }}>
                                    <Link to="/tendencia">
                                        <img src="https://image.flaticon.com/icons/svg/25/25652.svg" style={{ width: "30%" }} alt="Tendencia" />
                                        <br></br>
                                        Tendencia
                                    </Link>
                                </div>
                                <div className="col-3 text-center" style={{ filter: "invert(100%)" }}>
                                    <Link to="/buscar">
                                        <img src="https://image.flaticon.com/icons/svg/25/25313.svg" style={{ width: "30%" }} alt="Buscar" />
                                        <br></br>
                                        Buscar
                                    </Link>
                                </div>
                                <div className="col-3 text-center" style={{ filter: "invert(100%)" }}>
                                    <Link to="/recomendado">
                                        <img src="https://image.flaticon.com/icons/svg/149/149763.svg" style={{ width: "30%" }} alt="Recomendado" />
                                        <br></br>
                                        Recomendado
                                    </Link>
                                </div>
                                <div className="col-3 text-center" style={{ filter: "invert(100%)" }}>
                                    <Link to={sessionStorage.getItem("Usuario") != null ? "/usuario" : "/registrar"} onClick={this.logger}>
                                        {icon}
                                        <br></br>
                                        {sessionStorage.getItem("Usuario") != null ? "Perfil" : "Registrarse"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-md-4">
                        </div>
                    </div>
                </footer>
            </Router>
        );
    }
}

export default Principal;