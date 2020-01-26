import React, { Component } from 'react';
import { Blog, BlogPost, BlogTitle, BlogDate, BlogSubtitle } from '../styled-components/components/blog';
import blogList from '../data/blogList';

class BlogComponent extends Component {
  render(){
    return (
      <Blog>
        {
          blogList.map((a,i) => {
            return (
              <BlogPost key={i}>
                <img src={a.img}/>
                <BlogTitle>{a.title}</BlogTitle>
                <BlogDate>Lars - {a.date}</BlogDate>
                <BlogSubtitle>{a.blurb}</BlogSubtitle>
              </BlogPost>
            )
          })
        }
      </Blog>
    );
  }
}

export default BlogComponent;
