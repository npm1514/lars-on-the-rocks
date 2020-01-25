import React, { Component } from 'react';
import { DesktopMenuWrapper, MenuLink } from './styled-components';
import menuList from './MenuList';

class HeaderDesktopMenu extends Component {
  render(){
    return (
      <DesktopMenuWrapper>
        {
          menuList.map((a, i) => {
            return (
              <MenuLink className={this.props.page == a.link ? "selectedDesktopLink": "genericDesktopLink"} key={i}>
                <a href={a.link}>{a.label}</a>
              </MenuLink>
            )
          })
        }
      </DesktopMenuWrapper>
    );
  }
}

export default HeaderDesktopMenu;
