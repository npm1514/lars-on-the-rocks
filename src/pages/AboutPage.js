import React, { Component } from 'react';
import { Header, Footer, Banner, Social } from '../components';
import { AboutWrapper, AboutContent, WordWrap } from '../styled-components/pages/about';
import { SplitView, SplitLeft, SplitRight } from '../styled-components/global';

class AboutPage extends Component {
    render(){
      return (
          <AboutWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <AboutContent>
                <h3>About Lars</h3>
                <SplitView>
                  <SplitLeft>
                    <img src="/images/C23A3600-Edit.jpg"/>
                  </SplitLeft>
                  <SplitRight style={{height: 'inherit'}}>
                    <WordWrap>
                      <h3>Lars Robertson is a Ginger, Lover, Climber, Adventure Enthusiast, Ex Mormon, and is constantly seeking the next great adventure.</h3>
                      <h3>She takes it on the rocks! 🥃</h3>
                    </WordWrap>
                  </SplitRight>
                </SplitView>
                <Social/>
              </AboutContent>
              <Footer/>
          </AboutWrapper>
      );
    }
}

export default AboutPage;
