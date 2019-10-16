import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import  CentrosComercialesBD  from '../../api/centroscomercialesBD.js';
import CentroComercialCard from "./centrocomercialcard.js";
 import "../css/style.css";
class CentrosComercialesSearch extends Component {

  renderCentroComercial() {
    if(this.props.centrosComerciales.length==0){
      <h4>Centros comerciales no encontrados.</h4>
     }
    return this.props.centrosComerciales.map((d) => (
      <CentroComercialCard key={d._id} value={d} />
    ));
  }

  render() {
    return (
      <div>
        <div >
          <h2>
            Centros Comerciales        
          </h2>
        </div>
        <div className="scro">
       
          {this.renderCentroComercial()}

          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
           <br></br>
      </div>
    );
  }
}

export default withTracker((props) => {
  
  if(CentrosComercialesBD.find({}).fetch().length==0){
   /**  let dummyProfiles = [
      { nombre: "Centro Comercial Calima", ubicacion: "Calle 1 f Bis No. 19-76, Bogotá D.C., Colombia", imagen:"https://media-cdn.tripadvisor.com/media/photo-s/0a/aa/cb/c5/centro-comercial-calima.jpg",
      { nombre: "Centro Comercial Centro mayor", ubicacion: "Calle 1 f Bis No. 19-76, Bogotá D.C., Colombia", imagen:"https://multiplaza-samantha.s3.amazonaws.com/uploads/custom_seo/image/5/Bogota.jpg",
      { nombre: "Centro Comercial Titan plaza", ubicacion: "Calle 1 f Bis No. 19-76, Bogotá D.C., Colombia", imagen:"https://bogota.gov.co/sites/default/files/styles/despliegue_1366x768_px/public/field/image/Centro-Comercial.gif" },
      { nombre: "Centro Comercial Gran estación", ubicacion: "Calle 1 f Bis No. 19-76, Bogotá D.C., Colombia", imagen:"https://cr00.epimg.net/radio/imagenes/2015/02/14/bogota/1423915860_632758_1423940460_noticia_normal.jpg"},
    ];
  
    dummyProfiles.forEach(e => {
      CentrosComercialesBD.insert(e);
    });*/
  }
  return {
    
    centrosComerciales: CentrosComercialesBD.find({"nombre":{$regex : ".*"+props.value+".*"}}).fetch(),
  };
})(CentrosComercialesSearch);