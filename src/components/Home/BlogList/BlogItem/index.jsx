import React, {useState, useEffect} from 'react';
import BlogItem from './BlogItem';
import './styles.css';
const BlogList = () => {
  const [blogg, setBlog] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/blogList")
    .then((response) => response.json())
    .then((data) => setBlog(data))
  },[])
  const blogLoop = blogg.map((blog) => {
    return(
      <BlogItem blog={blog} blogg={blogg} setBlog={setBlog} />
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
export default BlogList;