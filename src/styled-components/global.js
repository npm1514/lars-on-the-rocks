import styled from 'styled-components';
export const SplitView = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 36px;
  max-width: 1200px;
  margin: auto;
`;

export const SplitLeft = styled.div`
  width: 100%;
  height: max-content;
  margin-bottom: 16px;
  img {
    width: 100%;
  }
  @media(min-width: 700px){
    width: ${props => props.width ? props.width : "50%"};
  }
`;

export const SplitRight = styled.div`
  width: 100%;
  height: max-content;
  img {
    width: 100%;
  }
  @media(min-width: 700px){
    width: ${props => props.width ? props.width : "50%"};
  }
`;
