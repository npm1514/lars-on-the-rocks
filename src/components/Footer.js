import React, { Component } from 'react';
import { Footer } from '../styled-components/footer';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        © Copyright {new Date().getFullYear()} All rights reserved.<br/>
        larsontherocks.com
      </Footer>
    );
  }
}

export default FooterComponent;
