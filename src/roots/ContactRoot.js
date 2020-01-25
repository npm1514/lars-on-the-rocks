import React, { Component } from 'react';
import Contact from '../pages/ContactPage';

class Root extends Component {
    render() {
        return <Contact data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;