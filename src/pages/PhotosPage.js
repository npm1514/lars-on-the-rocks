import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PhotosWrapper, PhotosContent } from '../styled-components/photos';

class Photos extends Component {
    render(){
      return (
          <PhotosWrapper>
              <Header/>
              <PhotosContent>
                photos page
              </PhotosContent>
              <Footer/>
          </PhotosWrapper>
      );
    }
}

export default Photos;
