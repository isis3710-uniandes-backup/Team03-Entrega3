import React, { Component } from 'react';

import { DescuentoBD, ObjectId } from '../../api/descuentoBD';
import Descuento from './descuentoDetail';

import { withTracker } from 'meteor/react-meteor-data';

class DescuentoList extends Component {
    renderDescuentos() {
        if (this.props.descuentos) {
            return this.props.descuentos.map((d) => (
                <Descuento key={d._id} desc={d} />
            ));
        }
        else if (this.props.listaids) {
            let arr = []
            for (let valor of this.props.listaids) {
                arr.push(<Descuento key={valor["_id"]} desc={valor} />);
            }
            console.log(arr);
            return arr;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        {this.renderDescuentos()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTracker(({ categoria }) => {
    if (categoria) {
        return {
            descuentos: DescuentoBD.find({ categoria: categoria }).fetch()
        };
    }
    else {
        return {};
    }
})(DescuentoList);