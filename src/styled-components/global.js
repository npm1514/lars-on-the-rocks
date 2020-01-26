import styled from 'styled-components';
export const SplitView = styled.div`
  width: calc(100% - 48px - 48px);
  padding: 24px;
  margin: 24px;
  border: 0.5px solid #8d8d8d;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const SplitLeft = styled.div`
  width: ${props => props.width ? props.width : "50%"};50%;
  height: max-content;
  img {
    width: 100%;
  }
`;

export const SplitRight = styled.div`
  width: ${props => props.width ? props.width : "50%"};50%;
  height: max-content;
`;
