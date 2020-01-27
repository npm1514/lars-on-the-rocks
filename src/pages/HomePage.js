import React, { Component } from 'react';
import { Header, Footer, Banner , Blog, Social, Photos } from '../components';
import { HomeWrapper, HomeContent } from '../styled-components/pages/home';
import { SplitView, SplitLeft, SplitRight } from '../styled-components/global';
import photoList from '../data/photoList';

class HomePage extends Component {
    getSixRandom = () => {
      var list = [];
      var photos = []
      for (var i = 0; i < 6; i++) {
        var rando = Math.floor(Math.random()*photoList.length);
        if(list.find(a => a === rando)){
          i--;
        } else {
          list.push(rando)
          photos.push(photoList[rando]);
        }
      }
      return photos;
    }
    render(){
      return (
          <HomeWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <HomeContent>
                <SplitView>
                  <SplitLeft width="65%">
                    <Blog/>
                  </SplitLeft>
                  <SplitRight width="35%">
                    <Social/>
                  </SplitRight>
                </SplitView>
                <Photos images={this.getSixRandom()}/>
              </HomeContent>
              <Footer/>
          </HomeWrapper>
      );
    }
}

export default HomePage;
