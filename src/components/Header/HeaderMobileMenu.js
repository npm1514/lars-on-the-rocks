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
              <a href={a.link} key={i}>
                <MenuLine className={this.props.page == a.link ? "selectedMobileLine": "genericMobileLine"}>
                  {a.label}
                </MenuLine>
              </a>
            )
          })
        }
      </MobileMenuWrapper>
    );
  }
}

export default HeaderMobileMenu;
