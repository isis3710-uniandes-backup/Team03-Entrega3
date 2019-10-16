import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Descuento extends Component {
    render() {
        return (
            <div className="card img-fluid">
                <img className="card-img-top" src={'https://raw.githubusercontent.com/ccjaimes/proyecto3Web/master/img/detailDesc' + this.props.desc.categoria + '.PNG'} alt="CardBackground" style={{ width: "100%" }} />
                <div className="card-img-overlay text-right text-white">
                    <h4 className="card-title">{this.props.desc.porcentaje}</h4>
                    <p className="card-text">{this.props.desc.descripcion}</p>
                    <a href="#" class="btn btn-info">Learn</a>
                </div>
            </div>
        );
    }
}

export default Descuento;