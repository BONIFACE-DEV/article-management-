import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList/index';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  

  // useEffect(() => {
  //   if(Array.isArray(blogList)){
  //     let blog = blogList.find((blog) => blog.id === parseInt(id));
  //     if (blog) {
  //       setBlog(blog);
  //     }
  //   }
  // }, []);
  

  useEffect(() => {
    fetch('http://localhost:3000/blogList')
      .then(response => response.json())
      .then(jsonData => setBlog(jsonData));
  }, []);

  const blogs = blog.find(object => object.id === parseInt(id));

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blogs ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blogs.createdAt}</p>
            <h1>{blogs.title}</h1>
            <div className='blog-subCategory' style={{color: 'blue', fontSize: '1.5rem'}} >
              <div>
                    <Chip label={blogs.subCategory} />
                  </div>
              </div>
          </header>
          <img src={blogs.cover} alt='cover' />
          <p className='blog-desc'>{blogs.description}</p>
          <Link to={`/edit/${id}`} id="addButtons" style={{fontSize:'2rem', marginBottom: '50px'}}>Edit Article </Link>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;