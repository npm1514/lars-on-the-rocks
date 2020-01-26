import React, { Component } from 'react';
import { Header, Footer, Banner } from '../components';
import { ContactWrapper, ContactContent } from '../styled-components/contact';

class Contact extends Component {
    render(){
      return (
          <ContactWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <ContactContent>
                contact page
              </ContactContent>
              <Footer/>
          </ContactWrapper>
      );
    }
}

export default Contact;
