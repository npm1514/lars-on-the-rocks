import styled from 'styled-components';

  export const AboutWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    img {
      margin-bottom: 24px;
    }
  `;

  export const AboutContent = styled.div`
    width: calc(100% - 32px);
    padding: 24px 16px;
    min-height: calc(100vh - 300px - 60px);
    text-align: center;
  `;

  export const WordWrap = styled.div`
    width: calc(100% - 24px);
    height: 100%;
    padding: 0 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
      margin-top: 0;
    }
  `;
