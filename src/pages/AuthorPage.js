import React, { Component } from 'react';
import { Header, Footer, Banner } from '../components';
import { AuthorWrapper, AuthorContent } from '../styled-components/author';

class Author extends Component {
    render(){
      return (
          <AuthorWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <AuthorContent>
                author page
              </AuthorContent>
              <Footer/>
          </AuthorWrapper>
      );
    }
}

export default Author;
