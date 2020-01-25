import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthorWrapper, AuthorContent } from '../styled-components/author';

class Author extends Component {
    render(){
      return (
          <AuthorWrapper>
              <Header page={this.props.data.page}/>
              <AuthorContent>
                author page
              </AuthorContent>
              <Footer/>
          </AuthorWrapper>
      );
    }
}

export default Author;
