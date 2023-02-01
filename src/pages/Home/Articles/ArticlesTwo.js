import React, {useState, useEffect} from 'react';
import ArticleTwo from '../Article/ArticleTwo';
import './styles.css';

const ArticlesTwo = () => {

  const [blogg, setBlog] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/blogList")
    .then((response) => response.json())
    .then((data) => setBlog(data))
  },[])

 
  const blogLoop = blogg.map((blog) => {
    return(
      <ArticleTwo blog={blog} blogg={blogg} setBlog={setBlog} />
    )
  })

  // const blogLoop = blog.map((item) => {
  //   return(
  //     <BlogItem key={item.id} id={item.id} title={item.title} category={item.category} subCategory={item.subCategory} description={item.description} authorName={item.authorName} authorAvatar={item.authorAvatar} createdAt={item.createdAt} cover={item.cover} item={item} />
  //   )
  // })
  return (
    <div className='blogList-wrap'>
      {blogLoop}
    </div>

  );
};

export default ArticlesTwo;
