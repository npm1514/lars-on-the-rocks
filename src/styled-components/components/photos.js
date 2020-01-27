import styled from 'styled-components';
export const Photos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
`;
export const Photo = styled.img`
  width: calc(50% - 8px);
  margin-bottom: 16px;
  @media(min-width: 700px){
    width: calc(calc(100%/3) - calc(32px/3));
  }
`;
