import React, { Component } from 'react';
import About from '../pages/AboutPage';

class Root extends Component {
    render() {
        return <About data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;
