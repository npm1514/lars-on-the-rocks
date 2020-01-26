import React, { Component } from 'react';
import { Header, Footer, Banner, Photos } from '../components';
import { PhotosWrapper, PhotosContent } from '../styled-components/pages/photos';
import photoList from '../data/photoList';

class PhotosPage extends Component {
    sortPhotos = () => {
      var listOfLocations = [];
      for (var i = 0; i < photoList.length; i++) {
        var locationIndex = listOfLocations.findIndex(a => a.location ==  photoList[i].location)
        if(locationIndex == -1){
          listOfLocations.push({
            location: photoList[i].location,
            photos: [photoList[i]]
          })
        } else {
          listOfLocations[locationIndex].photos.push(photoList[i])
        }
      }
      listOfLocations.sort((a,b) => (a.location > b.location) ? 1 : ((b.location > a.location) ? -1 : 0));
      return listOfLocations.map((a, i) => {
        return (
          <div key={i}>
            <h2>{a.location}</h2>
            <hr/>
            <Photos images={a.photos}/>
          </div>
        )
      });
    }
    render(){
      return (
          <PhotosWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <PhotosContent>
                {this.sortPhotos()}
              </PhotosContent>
              <Footer/>
          </PhotosWrapper>
      );
    }
}

export default PhotosPage;
