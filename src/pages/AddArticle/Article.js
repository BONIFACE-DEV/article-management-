import React from 'react';
import {Link} from 'react-router-dom';
import AddArticle from './AddArticle';
import "./styles.css"
import { Button } from 'semantic-ui-react';
function Article() {
  return (
    <div>
        <Link to="/addArticle" className="btn btn-primary" >Add Articles</Link>
    </div>
  )
}
export default Article