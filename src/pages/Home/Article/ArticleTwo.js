import React from 'react';
import Chip from '../../../components/common/data';
import './styles.css';
import {Button} from "semantic-ui-react"
import { Link } from 'react-router-dom';

const ArticleTwo = ({
  blog: {
    id,
    title ,
    category,
    subCategory,
    description,
    authorName,
    authorAvatar,
    createdAt,
    cover
    
    
  },
  blogg, setBlog}) => {

  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
      <Link className='blogItem-link' to={`/blog/${id}`} >
          ➝
      </Link>
      </footer>
    </div>
  );
};

export default ArticleTwo;
