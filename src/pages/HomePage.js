import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HomeWrapper, HomeContent } from '../styled-components/home';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
              <Header page={this.props.data.page}/>
              <HomeContent>
                home page
              </HomeContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
