import React from 'react';

import './article.css';

const Article = ({ imgUrl,date,text }) => {
  return (
    <div className='bot_blog-container_article'>
      <div className='bot_blog-container_article-image'>
        <img src={imgUrl} alt='blog-image' />
      </div>
      <div className='bot_blog-container_article-content'>
        
          <p>{date}</p>
          <h3>{text}</h3>
        
        <p> Read Full Article</p>
      </div>
    </div>
  );
};


export default Article;
