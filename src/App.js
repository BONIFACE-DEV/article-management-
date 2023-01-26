import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Register from './pages/Register/Register';
import Home from './pages/Home/index';
import Login from "./pages/Login/Login";
import Blog from './pages/Blog/index';
import AddArticle from "./pages/AddArticle/AddArticle"
import EditArticle from "./pages/EditArticle/EditArticle"
import './App.css';

const App = () => {

  
  return (
    <div className='container'>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path="/login" exact component={Login} />
        <Route path="/addArticle" exact component={AddArticle} />
        <Route path="/EditArticle" exact component={EditArticle} />
    </Switch>
    </div>
  );
};

export default App;
