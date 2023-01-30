import React, {useState, useEffect} from "react";
import axios from "axios";
import "./styles.css";
import {Link} from 'react-router-dom';
function AddArticle (){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [description, setDescription] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [authorAvatar, setAuthorAvatar] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [cover, setCover] = useState("");
    const [message, setMessage] = useState(null);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:3000/blogList", {
            title,
            category,
            subCategory,
            description,
            authorName,
            authorAvatar,
            createdAt,
            cover
          });
        //   setIsLoggedIn(true);
        } catch (err) {
          console.error(err);
        }
    };
    // useEffect(() => {
    //     if (isLoggedIn) {
    //       props.history.push("/addArticle");
    //     }
    //   }, [isLoggedIn, props.history]);
    return (
        <div className="addImage">
            <span className="addTitle">Add Article</span>
            {message && <p>{message}</p>}
            <form className="addForm" onSubmit={handleSubmit}>
                <label>Title</label>
                    <input className="input" type="text" name= "title" placeholder="Enter title..." value={title} onChange={e => setTitle(e.target.value)}/>
                <label>Category</label>
                    <input className="input" type="text" name= "category" placeholder="Enter category..." value={category} onChange={e => setCategory(e.target.value)}/>
                <label>SubCategory</label>
                    <input className="input" type="text" name= "subCategory" placeholder="Enter SubCategory..." value={subCategory} onChange={e => setSubCategory(e.target.value)}/>
                <label>Description</label>
                    <input className="input" type="text" name= "description" placeholder="Enter description..." value={description} onChange={e => setDescription(e.target.value)}/>
                <label>Author's Name</label>
                    <input className="input" type="text" name= "authorName" placeholder="Enter author's name..." value={authorName} onChange={e => setAuthorName(e.target.value)}/>
                <label>Author's Avatar</label>
                    <input className="input" type="text" name= "authorAvatar" placeholder="Enter author's  url Avator..." value={authorAvatar} onChange={e => setAuthorAvatar(e.target.value)}/>
                <label>Created At</label>
                    <input className="registinputerInput" accept="image/png, image/jpeg" type="date" name= "createdAt" placeholder="Enter the date Created..." value={createdAt} onChange={e => setCreatedAt(e.target.value)} />
                <label>Cover</label>
                    <input className="input" type="text" accept="image/png, image/jpeg" name= "cover" placeholder="Enter the url cover..." value={cover} onChange={e => setCover(e.target.value)} />
                <button className="addButton" type="submit">Register</button>
            </form>
        </div>
    )
}
export default AddArticle;