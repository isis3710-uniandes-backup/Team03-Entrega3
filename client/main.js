import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import Principal from "../imports/ui/principal";


Meteor.startup(() => {
    render(<Principal/>, document.getElementById('root'));
});