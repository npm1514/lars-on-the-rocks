import styled from 'styled-components';
export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #070707;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;

//desktop

export const DesktopMenu = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  color: #fff;
  text-transform: uppercase;
  @media (min-width: 770px){
    display: block;
  }
`;

export const DesktopMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLink = styled.div`
  width: max-width;
  padding: 12px;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    color: #454545;
  }
  &.selectedDesktopLink a {
    color: #8d8d8d;
  }
  &.selectedDesktopLink a:hover {
    color: #fff;
  }
`;

//mobile

export const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  svg {
    position: absolute;
    height: 36px;
    width: 36px;
    top: 12px;
    right: 12px;
  }
  @media (min-width: 770px){
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 60px;
  z-index: 10;
`;

export const MenuLine = styled.div`
  width: 100%;
  color: #fff;
  background-color: #3f3f3f;
  padding: 16px;
  a {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    background-color: #454545;
  }
  &.selectedMobileLine {
    background-color: #454545;
  }
  &.selectedMobileLine:hover {
    background-color: #3f3f3f;
  }
`;
