import styled from 'styled-components';
export const Message = styled.div`
  width: calc(100% - 24px);
  border: 1px solid #8d8d8d;
  padding: 12px;
  margin-bottom: 24px;
  input, textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 12px
    border: 1px solid #ccc;
  }
  textarea {
    height: 150px;
  }
  button {
    width: max-content;
    padding: 12px 24px;
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 16px;
    font-family: 'Averia Serif Libre', cursive;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  @media(min-width: 700px){
    width: calc(100% - 16px);
  }
`;
export const Title = styled.div`
  color: #404040;
  font-size: 36px;
  text-align: left;
`;
export const Subtitle = styled.div`
  text-align: left;
  margin: 16px 0;
`;
