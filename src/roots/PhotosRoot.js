import React, { Component } from 'react';
import Photos from '../pages/PhotosPage';

class Root extends Component {
    render() {
        return <Photos data={this.props.data ? this.props.data : {}}/>
    }
}

export default Root;