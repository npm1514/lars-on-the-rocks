import React, { Component } from 'react';
import { Banner, Mask, Title, Subtitle } from '../styled-components/components/banner';

class BannerComponent extends Component {
  render(){
    return (
      <Banner>
        <Mask>
          <Title>LARS ON THE ROCKS</Title>
          <Subtitle>Adventuring at its Highest</Subtitle>
        </Mask>
      </Banner>
    );
  }
}

export default BannerComponent;
