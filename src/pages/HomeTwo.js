import React, { useState, useEffect } from 'react';
import EmptyList from '../../src/components/common/EmptyList/index';
import HeaderThree from '../../src/components/Home/Header/HeaderThree';
import SearchBarMain from '../../src/components/Home/SearchBar/SearchBarMain';
import BlogList from '../../src/components/Home/BlogList/index';
import { Link, useNavigate } from 'react-router-dom';

const HomeTwo = () => {
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

          <Link className='blog-goBack' to='/home' style={{marginRight:'50px', fontSize:'1rem'}}>
            Back
          </Link>
          <Link className='blog-goBack' to='/register' style={{marginRight:'50px', fontSize:'1rem'}}>
            Signup
          </Link>
          <Link className='blog-goBack' to='/login' style={{marginRight:'50px', fontSize:'1rem'}}>
            Login
          </Link>
        </div>
      

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default HomeTwo;