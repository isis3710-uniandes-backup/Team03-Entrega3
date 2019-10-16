import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export default class CentroComercialCard extends Component  {
    render() 
    {
        return (
          
 <div className="w3-card">
   <a href={"centrocomercial/"+this.props.value.nombre} className="btn btn-default"style={{"display":"block","width":"400px"}}>
            <img src={this.props.value.imagen} alt="CardCentroComercial"  width="400" height="300" />
                
                 <div className="w3-container w3-center" >
              {this.props.value.nombre} 
                   
            </div>
            </a>
          </div>
        
          
        );
    }
}

