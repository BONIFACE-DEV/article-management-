import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../Login/Login';
import "./styles.css"
import { Button } from 'semantic-ui-react';
function Logout() {
  return (
    <div>
        <Link to="/Login" className="btn btn-primary" >Logout</Link>
    </div>
  )
}
export default Logout