import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export default class LocalCard extends Component  {
  darImage(){
    var m=["http://retail-intelligence.es/wp-content/uploads/2016/05/retail-intelligence-tc-street.png",
    "http://ceeertify.com/sites/default/files/pequeno_terciario.png",
    "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/shop-icon.png",
  "http://www.paginasamarillasdepanama.com/uploads/images/shop-icon.png",
"https://image.flaticon.com/icons/png/512/265/265754.png"];

    return m[Math.floor(Math.random() * m.length-1)];
  }
    render() 
    {
        return (
          
 <div className="w3-card">
            <img src={this.darImage()} alt="CardLocal"  width="400" height="300" />
                
                 <div className="w3-container w3-center" >
              <a href="#" className="btn btn-default"style={{"display":"block","width":"400px"}}>{this.props.value.nombre} </a>
                   
            </div>
          
          </div>
          
          
        );
    }
}

