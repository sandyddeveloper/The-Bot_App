import React from 'react'
import {Article} from '../../components';
import './blog.css'
import {blog01,blog02,blog03,blog04,blog05} from './imports';

const Blog = () => {
  return (
    <div className='bot_blog section_padding' id='blog'>
      <div className='bot_blog-heading'>
        <h1 className='gradient_text'>A lot id happening <br/>We are blogging about it</h1>
      </div>
      <div className='bot_blog-container'>
        <div className='bot_blog-container_groupA'>
          <Article imgUrl={blog01} date="May 2, 202" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='bot_blog-container_groupB'>
        <Article imgUrl={blog02} date="May 28, 2024" text="MRxD-1.O and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="May 28, 2024" text="MRxD-1.O and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="May 28, 2024" text="MRxD-1.O and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="May 28, 2024" text="MRxD-1.O and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
