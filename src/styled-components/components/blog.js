import styled from 'styled-components';
export const Blog = styled.div`
  width: calc(100%);
`;
export const BlogPost = styled.div`
  width: calc(100% - 40px);
  padding: 12px;
  padding-bottom: 24px;
  border: 0.5px solid #8d8d8d;
  margin: 0 12px 16px 0;
  img {
    width: 100%;
  }
`;
export const BlogTitle = styled.div`
  font-size: 20px;
  color: #404040;
`;
export const BlogDate = styled.div`
  font-size: 13px;
  color: #3f3f3f;
  margin: 16px 0;
`;
export const BlogSubtitle = styled.div`
  color: #3f3f3f;
  font-size: 14px;
`;
