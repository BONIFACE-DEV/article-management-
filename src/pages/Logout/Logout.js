import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../Login/Login';
import "./styles.css"
// import { Button } from 'semantic-ui-react';
function Logout() {
  return (
    <div>
        <button className="addButton" type="submit">
            <Link to="/login">Logout</Link>
        </button>
    </div>
  )
}
export default Logout