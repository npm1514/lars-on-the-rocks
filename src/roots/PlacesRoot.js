import React, { Component } from 'react';
import Places from '../pages/PlacesPage';

class Root extends Component {
    render() {
        return <Places data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;