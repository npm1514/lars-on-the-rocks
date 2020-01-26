import React, { Component } from 'react';
import { Photos, Photo } from '../styled-components/components/photos';

class PhotosComponent extends Component {
  render(){
    return (
      <Photos>
        { this.props.images.map((a, i) => <Photo key={i} src={a.src}/>) }
      </Photos>
    );
  }
}

export default PhotosComponent;
