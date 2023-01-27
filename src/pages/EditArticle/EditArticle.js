import React from "react";
import { useState, useEffect } from 'react';
function EditArticle(){
    const [data, setData] = useState({
        title: '',
        category:'',
        subCategory:'',
        description: '',
        authorName: '',
        authorAvatar:'',
        createdAt: '',
        cover: '',
      });
      const handlePatch = async () => {
        try {
          const res = await fetch('http://localhost:3000/blogList', {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const response = await res.json();
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        handlePatch();
      }, [data]);
    return(
        <div className="addImage">
            <span className="addTitle">Edit Article</span>
            <input
                type="text"
                className="input"
                placeholder="Title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
            />
             <input
                type="text"
                className="input"
                placeholder="Category"
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
            />
            <input
                type="text"
                placeholder="SubCategory"
                className="input"
                value={data.subCategory}
                onChange={(e) => setData({ ...data, subCategory: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                className="input"
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
            />
            <input
                type="text"
                placeholder="Author's Name"
                className="input"
                value={data.authorName}
                onChange={(e) => setData({ ...data, authorName: e.target.value })}
            />
            <input
                type="image"
                placeholder="Author's Avatar"
                className="input"
                value={data.authorAvatar}
                onChange={(e) => setData({ ...data, authorAvatar: e.target.value })}
            />
            <input
                type="date"
                placeholder="Created At"
                className="input"
                value={data.createdAt}
                onChange={(e) => setData({ ...data, createdAt: e.target.value })}
            />
            <input
                type="text"
                placeholder="Cover"
                className="input"
                value={data.cover}
                onChange={(e) => setData({ ...data, cover: e.target.value })}
            />
            <button onClick={handlePatch}>Edit</button>
        </div>
    )
}
export default EditArticle;