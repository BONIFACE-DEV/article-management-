import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import axios from 'axios';
import './styles.css';
import Chip from "../common/Chip/index"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3000/blogList');
      const data = response.data;

      const filteredData = data.filter(item =>
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='searchBar-wrap'>
      <Input
        placeholder='Search by category...'
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      {searchResults.map(result => (
        <div className='blogItem-wrap'>
        <img className='blogItem-cover' src={result.cover} alt='cover' />
        <Chip label={result.category} />
        <h3>{result.title}</h3>
        <p className='blogItem-desc'>{result.description}</p>
        <footer>
          <div className='blogItem-author'>
            <img src={result.authorAvatar} alt='avatar' />
            <div>
              <h6>{result.authorName}</h6>
              <p>{result.createdAt}</p>
            </div>
          </div>
        </footer>
      </div>
      ))}
    </div>
  );
};

export default SearchBar;
