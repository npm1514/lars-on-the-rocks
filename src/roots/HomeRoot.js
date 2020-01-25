import React, { Component } from 'react';
import Home from '../pages/HomePage';

class Root extends Component {
    render() {
        return <Home data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;