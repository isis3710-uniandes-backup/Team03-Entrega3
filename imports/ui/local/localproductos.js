import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { ProductoDB } from "../../api/productoBD.js";


class LocalProductos extends Component {

  

  renderProductos() {

    return this.props.productos.map((p) => (       
            <li key={p._id}>
            {p.nombre}
            </li>   
    ));
  }


  render() {
    return (

        <div>
        <h5>Productos:</h5>
          {this.renderProductos()}
      </div>
    );
  }
}



export default withTracker(() => {
  return {
    productos: ProductoDB.find({}).fetch(), 
  };

})(LocalProductos);