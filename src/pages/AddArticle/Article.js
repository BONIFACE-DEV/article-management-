import React from 'react';
import {Link} from 'react-router-dom';
import "./styles.css"
function Article() {
  return (
    <div>
        <Link to="/addArticle" className="btn btn-primary" >Add Articles</Link>
    </div>
  )
}
export default Article