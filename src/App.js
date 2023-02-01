
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import AddArticle from './pages/AddArticle/AddArticle';
import Blog from './pages/Blog/index'
import ViewArticle from './pages/ViewArticle';
import EditArticle from './pages/EditArticle/EditArticle';
import HomeTwo from './pages/HomeTwo'
import EmptyList from './components/common/EmptyList';
import EditBlog from './pages/EditArticle/EditBlog';
import Logout from './pages/Logout/Logout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addArticle" element={<AddArticle/>}/>
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<HomeTwo/>}/>
        <Route path="/emptyList" element={<EmptyList/>}/>
        <Route exact path="/edit/:id" element={<EditBlog/>}/>
        <Route path="editArticle" exact component={<EditArticle/>}/>
        <Route path="/viewArticle" element={<ViewArticle/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
