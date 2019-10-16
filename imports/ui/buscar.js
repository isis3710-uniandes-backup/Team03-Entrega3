import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

import LocalCard from './local/localcard';
import CentroComercialCard from './centroComercial/centrocomercialcard';
import CentrosComercialesBD from '../api/centroscomercialesBD';
import "./css/style.css";
import LocalBD from '../api/localBD';
import {ProductoDB} from'../api/productoBD'
import { Link } from 'react-router-dom';

class Buscar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            centros: [],
            search: '',
        }

    }


    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }



    filterList = (event) => {
        let items = this.state.centrosComerciales;
        items = items.filter((item) => {
            return item.nombre.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ centros: items })
    }


    render() {
        let filtrados = this.props.centrosComerciales.filter(
            (centro) => {
                return centro.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        let locales = this.props.locales.filter(
            (local) => {
                return local.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
let productos=this.props.productos.filter(
    (proucto)=>{
        return proucto.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
)

        return (
            <div>
                <div className="md-form mt-0">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={this.state.search} onChange={(this.updateSearch.bind(this))} />
                </div>

                <hr></hr>
                <h2>Centros Comerciales</h2>

                <br></br>
                <div className="scro">
                    {filtrados.map((centro) => {
                        return <div className="col-6"><CentroComercialCard key={centro._id} value={centro} /></div>
                    })}
                   
                </div>
                <Link to="/centroscomerciales">
                        <button className="btn btn-secondary" style={{borderRadius: '12px' ,backgroundColor:'#E8B38D'  }}>Explora más!!</button>
                </Link>
                <hr></hr>
                <h2>Locales</h2>
                <div className="row">
                    {locales.map((local) => {
                        return <div className="col-6"><LocalCard key={local._id} value={local} /></div>
                    })}
                    </div>    
                <hr></hr>
                <h2>Productos</h2>
                <div className="row" style={{marginBottom:'3rem'}}>
                    <div className="col-8">
                        <ul>
                    {productos.map((producto) => {
                        return <li key={producto.nombre}><h5>{producto.nombre}</h5></li>
                    })}
                    </ul>
                    </div>
                    <div className="col-4">
                        <Link to="/productos">
                        <button className="btn btn-secondary" style={{borderRadius: '12px' ,backgroundColor:'#E8B38D' }}>Explora más!!</button>
                        </Link>
                    </div>
                </div> 


            </div>
        );
    }
}

export default withTracker(() => {
    
    return {
        centrosComerciales: CentrosComercialesBD.find({}).fetch(),
        locales: LocalBD.find({}).fetch(), 
        productos:ProductoDB.find({}).fetch()
    };
})(Buscar);