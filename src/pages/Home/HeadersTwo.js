import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const HeadersTwo = () => {
    return (
      <div> 
        <h1 style={{textAlign: "center", marginTop:"50px"}}>Article Management System</h1>       
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          
          
          <SearchBar style={{ margin: '0 10px' }} />
          <Link to="/register">
                <Button style={{ marginRight: '200px' }}>Signup</Button>
          </Link>
          <Link to="/login">
            <Button style={{ marginLeft: '300px' }}>Login</Button>
          </Link>

        </div>
      </div>

    )
}

export default HeadersTwo;
