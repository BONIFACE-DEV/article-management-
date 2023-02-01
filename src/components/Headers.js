import React from 'react';
import SearchBarMain from './../components/Home/SearchBar/SearchBarMain';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Headers = () => {
    return (
      <div> 
        <h1 style={{textAlign: "center", marginTop:"50px"}}>Article Management System</h1>       
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          
          <Link to="/addArticle">
                <Button style={{ marginRight: '300px' }}>Add Article</Button>
          </Link>
            <SearchBarMain/>
          <Link to="/login">
            <Button style={{ marginLeft: '300px' }}>Logout</Button>
          </Link>

        </div>
      </div>

    )
}

export default Headers;
