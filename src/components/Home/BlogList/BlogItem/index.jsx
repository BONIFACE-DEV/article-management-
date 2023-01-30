import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';
import {Button} from "semantic-ui-react"

const BlogItem = ({
  blog: {
  description,
  title,
  createdAt,
  authorName,
  authorAvatar,
  cover,
  category,
  id,
  },blogg, setBlog
}) => {

  function handleDelete(){

    const url = `http://localhost:3000/blogList/${id}`

    const answer = window.confirm('Are you sure you want to delete this article ?')
    if(answer === true){
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => {
            const newBlogs  = blogg.filter(item=>item.id !== id)
            setBlog(newBlogs);
        })
    } 
    console.log(answer)
  }



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
      <Button negative onClick={handleDelete}>Delete</Button>
      </footer>
    </div>
  );
};

export default BlogItem;