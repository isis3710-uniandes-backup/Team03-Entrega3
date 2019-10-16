import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import  Local  from '../../api/localBD.js';


class CentroComercialLocal extends Component {

  darImage(){
    var m=["http://retail-intelligence.es/wp-content/uploads/2016/05/retail-intelligence-tc-street.png",
    "http://ceeertify.com/sites/default/files/pequeno_terciario.png",
    "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/shop-icon.png",
  "http://www.paginasamarillasdepanama.com/uploads/images/shop-icon.png",
"https://image.flaticon.com/icons/png/512/265/265754.png"];

    return m[Math.floor(Math.random() * m.length-1)];
  }

  render() {
    return (
      <div>
        <div className="col-6">
        <img src={this.darImage()} className="img-fluid" alt="Institution" width="50%" height="50%"></img>

        </div>
        <div className="col-6">
          <h5>{this.props.local.nombre}</h5>
        </div>
        </div >

 );
  }
}

export default withTracker(() => {
  return {
    local: Local.findOne({"_id":this.props.value})||{"_id" : ""},
  };
})(CentroComercialLocal);