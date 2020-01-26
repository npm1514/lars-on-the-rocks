import React, { Component } from 'react';
import { Header, Footer, Banner , Blog, Social, Photos } from '../components';
import { HomeWrapper, HomeContent } from '../styled-components/pages/home';
import { SplitView, SplitLeft, SplitRight } from '../styled-components/global';
import photos from '../data/photoList';

class HomePage extends Component {
    getSixRandom = () => {
      let photoList = photos;
      var list = [];
      for (var i = 0; i < 6; i++) {
        var rando = Math.floor(Math.random()*photoList.length);
        list.push(photoList[rando]);
        photoList.splice(rando, 1);
      }
      return list;
    }
    render(){
      return (
          <HomeWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <HomeContent>
                <SplitView>
                  <SplitLeft width="70%">
                    <Blog/>
                  </SplitLeft>
                  <SplitRight>
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
