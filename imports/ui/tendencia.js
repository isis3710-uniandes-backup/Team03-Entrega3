import React, { Component } from 'react';

import DescuentoList from './descuento/descuentoList';

class Tendencia extends Component {
    render() {
        return (
            <DescuentoList categoria={parseInt(1+Math.random()*2)}/>
        );
    }
}

export default Tendencia;