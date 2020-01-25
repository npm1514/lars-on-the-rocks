import styled from 'styled-components';
export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #070707;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  }
`;

//mobile

export const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  svg {
    position: absolute;
    right: 16px;
    top: 16px;
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
`;
