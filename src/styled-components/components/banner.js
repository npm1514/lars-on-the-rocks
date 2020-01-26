import styled from 'styled-components';
export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('/images/cropped-photo-apr-11-7-12-08-am.jpg');
  background-position: left;
  background-size: cover;
  margin-top: 60px;
  position: relative;
`;
export const Mask = styled.div`
  width: 100%;
  height: 300px;
  background-color: #00000060;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  color: #fff;
  width: max-content;
  font-size: 54px;
  margin: 4px auto;
  font-weight: 100;
  letter-spacing: 4px;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
`;
export const Subtitle = styled.h3`
  width: max-content;
  margin: 4px auto;
  color: #c9c9c9;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 3px;
  word-wrap: break-word;
`;
