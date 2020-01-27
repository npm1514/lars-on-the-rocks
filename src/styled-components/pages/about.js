import styled from 'styled-components';

  export const AboutWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const AboutContent = styled.div`
    width: calc(100% - 32px);
    padding: 24px 16px;
    min-height: calc(100vh - 300px - 60px);
    text-align: center;
  `;

  export const WordWrap = styled.div`
    width: calc(100% - 24px);
    padding: 0 12px;
    text-align: center;
    h3 {
      margin-top: 0;
    }
  `;
