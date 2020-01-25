import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PlacesWrapper, PlacesContent } from '../styled-components/places';

class Places extends Component {
    render(){
      return (
          <PlacesWrapper>
              <Header/>
              <PlacesContent>
                places page
              </PlacesContent>
              <Footer/>
          </PlacesWrapper>
      );
    }
}

export default Places;
