import React, { Component } from 'react';
import { Header, Footer, Banner } from '../components';
import { PlacesWrapper, PlacesContent } from '../styled-components/pages/places';

class PlacesPage extends Component {
    render(){
      return (
          <PlacesWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <PlacesContent>
                places page
              </PlacesContent>
              <Footer/>
          </PlacesWrapper>
      );
    }
}

export default PlacesPage;
