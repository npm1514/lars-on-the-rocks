import React, { Component } from 'react';
import { Header, DesktopMenu, MobileMenu } from './styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderDesktopMenu from './HeaderDesktopMenu';

class HeaderComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  changeMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  render(){
    return (
      <Header>
        <DesktopMenu>
          <HeaderDesktopMenu/>
        </DesktopMenu>
        <MobileMenu>
          <MenuIcon fontSize="large" onClick={this.changeMenu}/>
          {
            this.state.menuOpen &&
            <HeaderMobileMenu/>
          }
        </MobileMenu>
      </Header>
    );
  }
}

export default HeaderComponent;
