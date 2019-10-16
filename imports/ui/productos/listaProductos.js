import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';
import ProductoDetailed from './productoDetailed'
import { ProductoDB } from "../../api/productoBD.js";

class ListaProductos extends Component {

  productos() {
   
    return this.props.productos.map((data) => (
      <ProductoDetailed key={data._id} data={data}/>
    ));
  }

  render() {

    return (
    
        <div>
          <h2>
            Lista de Productos:
            </h2>
            
            <div                                                                                         >
                  {this.productos()}
                </div>  
            </div>
              
    );
  }
}

export default withTracker(() => {
    return {productos: ProductoDB.find({}).fetch()};
  })(ListaProductos);