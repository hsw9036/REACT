import React, { Component } from "react";

class S_Props extends Component {
    render () {
        let props_value = this.props.props_val;
        props_value += " from App.js ";
        return <div>{props_value}</div>;
    }
}

export default S_Props;