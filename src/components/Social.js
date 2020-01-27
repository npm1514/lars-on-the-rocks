import React, { Component } from 'react';
import { Social, Title, IconsDiv } from '../styled-components/components/social';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class SocialComponent extends Component {
  render(){
    return (
      <Social>
        <Title>FOLLOW ME</Title>
        <IconsDiv>
          <a
            target="_blank"
            href="https://www.instagram.com/lars.ontherocks/"
          ><InstagramIcon/></a>
          <a
            target="_blank"
            href="https://www.facebook.com/larsontherocksrobertson"
          ><FacebookIcon/></a>
          <a
            target="_blank"
            href="https://twitter.com/larsontherocks"
          ><TwitterIcon/></a>
          <a
            target="_blank"
            href="https://www.pinterest.com/larsontherocks/"
          ><PinterestIcon/></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rlars/"
          ><LinkedInIcon/></a>
        </IconsDiv>
      </Social>
    );
  }
}

export default SocialComponent;
