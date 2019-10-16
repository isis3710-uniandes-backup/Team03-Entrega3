import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import Local from '../../api/localBD.js';
import style from '../style.css'
import LocalProductos from './localproductos.js';


class Locales extends Component {

  img() {
    var img = ["https://static.wixstatic.com/media/efd15e_a47028401ba14435bab512449a4d90e6~mv2.png",
      "https://cdn2.iconfinder.com/data/icons/retail-3/128/SHOP-512.png",
      "https://cdn2.iconfinder.com/data/icons/seo-marketing-set6/512/Store_Promotion-01-512.png",
      "https://cdn2.iconfinder.com/data/icons/e-commerce-icons-2/256/Ecommerce_Icons_Rose_Color-100-256.png",
      "https://cdn1.iconfinder.com/data/icons/search-engine-optimisation-seo/44/seo_icons-50-512.png"];

    return img[Math.floor(Math.random() * img.length)];
  }

  renderLocales() {

    return this.props.locales.map((d) => (

      
      <div key={d._id} className="card  mb-4 mt-4 "   >
        <div className="row ">
          <div className="col-5">
            <img src={this.img()} className="card-img" alt="Imagen local" />
          </div>
          <div className="col-md-7 ">
            <h4 className="card-title mt-2 text-center" >{d.nombre}</h4>
            <LocalProductos/>
          </div>

        </div>

      </div>
    ));
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="titulo mt-4">
            <h1 id="titulo1">Locales</h1>
          </div>
        </div>
        <div className="row">
          {this.renderLocales()}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    locales: Local.find({}).fetch(),
  };

})(Locales);