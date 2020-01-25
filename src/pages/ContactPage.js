import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContactWrapper, ContactContent } from '../styled-components/contact';

class Contact extends Component {
    render(){
      return (
          <ContactWrapper>
              <Header/>
              <ContactContent>
                contact page
              </ContactContent>
              <Footer/>
          </ContactWrapper>
      );
    }
}

export default Contact;
