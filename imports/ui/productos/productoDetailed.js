import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { DescuentoBD } from "../../api/descuentoBD.js";
import DescuentoList from '../descuento/descuentoList.js';

class ProductoDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarInfo: false
    }
  }
  mostar() {
    this.setState({

      mostrarInfo: !this.state.mostrarInfo
    })
  }
  descuentos() {
    return <DescuentoList key={"descuentosProducto" + this.props.data.nombre} listaids={this.props.descuentos}/>
  }

  render() {

    return (
      <div className="row justify-content-around" >


        <div style={{ borderBottom: ' 2px solid #FFC49B' }} className="col-2" >
          <button onClick={() => this.mostar()} type="button" className="btn bg-transparent">{this.props.data.nombre} <span className="badge badge-pill" style={{ backgroundColor: '#FFC49B' }}>{this.props.data.descuentos.length}</span></button>
        </div>
        <div className="col-6">

          {this.state.mostrarInfo ?
            <div>
              <h5>Categoria:</h5>
              {this.props.data.tipo}
              <h5>Descuentos :</h5>
              {this.descuentos()}
            </div>
            : null
          }

        </div>
      </div>

    );
  }
}

export default withTracker(() => {
  return { descuentos: DescuentoBD.find({}).fetch() };
})(ProductoDetailed);