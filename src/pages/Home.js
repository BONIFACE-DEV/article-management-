import React, {useEffect, useState}  from 'react'
import Articles from '../components/Articles/Articles'
import Headers from '../components/Headers';
import { Link, useNavigate } from 'react-router-dom';
import SearchBarMain from '../components/Home/SearchBar/SearchBarMain';
import HeaderThree from '../components/Home/Header/HeaderThree';
import EmptyList from '../components/common/EmptyList';
import BlogList from '../components/Home/BlogList/index';


function Home() {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:3000/blogList")
    .then((response) => response.json())
    .then((data) => setBlogs(data))
  },[])



  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogs;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogs);
    setSearchKey('');
    navigate('/')
  };

    return (
      <div>
      {/* Page Header */}
      <HeaderThree />

      {/* Search Bar */}
      <div style={{display:'flex', alignItems: "center"}}>
        <SearchBarMain
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

          <Link className='blog-goBack' to='/home' style={{marginRight:'50px', fontSize:'1rem', color:'red'}}>
             Go Back
          </Link>
          <Link className='blog-goBack' to='/addArticle' style={{marginRight:'50px', fontSize:'1rem'}}>
            Add Article
          </Link>
          <Link className='blog-goBack' to='/' style={{marginRight:'50px', fontSize:'1rem'}}>
            Logout
          </Link>
        </div>
      

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  )
}

export default Home