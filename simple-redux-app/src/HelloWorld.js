import React, {Component} from 'react';

class HelloWorld extends Component {
    constructor(props) {

        super(props);
    }

    render() {
        return (<p>{this.props.tech} </p>);
    } ;
}

export default HelloWorld;
