import React, { Component } from 'react';
import { Header, Footer, Banner } from '../components';
import { HomeWrapper, HomeContent } from '../styled-components/home';

class Home extends Component {
    render(){
      return (
          <HomeWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <HomeContent>
                home page
              </HomeContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default Home;
