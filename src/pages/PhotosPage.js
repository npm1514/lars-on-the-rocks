import React, { Component } from 'react';
import { Header, Footer, Banner } from '../components';
import { PhotosWrapper, PhotosContent } from '../styled-components/photos';

class Photos extends Component {
    render(){
      return (
          <PhotosWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <PhotosContent>
                photos page
              </PhotosContent>
              <Footer/>
          </PhotosWrapper>
      );
    }
}

export default Photos;
