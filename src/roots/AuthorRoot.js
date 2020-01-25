import React, { Component } from 'react';
import Author from '../pages/AuthorPage';

class Root extends Component {
    render() {
        return <Author data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;