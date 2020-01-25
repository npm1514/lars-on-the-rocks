import React, { Component } from 'react';
import { MobileMenuWrapper, MenuLine } from './styled-components';
import menuList from './MenuList';

class HeaderMobileMenu extends Component {
  render(){
    return (
      <MobileMenuWrapper>
        {
          menuList.map((a, i) => {
            return (
              <MenuLine key={i}>
                <a href={a.link}>{a.label}</a>
              </MenuLine>
            )
          })
        }
      </MobileMenuWrapper>
    );
  }
}

export default HeaderMobileMenu;
