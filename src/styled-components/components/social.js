import styled from 'styled-components';
export const Social = styled.div`
  position: relative;
  border: 1px solid #8d8d8d;
  width: 100%;
`;

export const Title = styled.div`
  position: absolute;
  background-color: #fff;
  top: -21px;
  padding: 12px 36px;
  left: 0;
  right: 0;
  margin: auto;
  color: #404040;
  width: 50%;
  font-size: 16px;
`;

export const IconsDiv = styled.div`
  width: calc(100% - 48px);
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 40px;
    width: 40px;
    margin: 4px;
    color: #404040;
  }
`;
