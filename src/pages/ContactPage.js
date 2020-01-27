import React, { Component } from 'react';
import { Header, Footer, Banner, Message, Social } from '../components';
import { ContactWrapper, ContactContent } from '../styled-components/pages/contact';
import { SplitView, SplitLeft, SplitRight } from '../styled-components/global';

class ContactPage extends Component {
    render(){
      return (
          <ContactWrapper>
              <Header page={this.props.data.page}/>
              <Banner/>
              <ContactContent>
                <SplitView>
                  <SplitLeft width="65%">
                    <Message/>
                  </SplitLeft>
                  <SplitRight width="35%">
                    <Social/>
                  </SplitRight>
                </SplitView>
              </ContactContent>
              <Footer/>
          </ContactWrapper>
      );
    }
}

export default ContactPage;
