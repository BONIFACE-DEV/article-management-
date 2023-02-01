import React, { useState, useEffect } from "react";
import { Form, Input, Button, Header } from "semantic-ui-react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { blogList } from "../../db.json";

const EditBlog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://localhost:3000/blogList/${id}`);
      setBlog(result.data);
    };
    fetchData();
  }, [id]);

 
  function handleDeletes(){

    const url = `http://localhost:3000/blogList/${id}`

    const answer = window.confirm('Are you sure you want to delete this article ?')
    if(answer === true){
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => {
            const newBlogs  = blog.filter(item=>item.id !== id)
            setBlog(newBlogs);
        })
    } 
    console.log(answer)
  }

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/blogList/${id}`, blog);
    navigate("/");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:3000/blogList/${id}`);

    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Header as='h1'>Edit the blog</Header>
        <label>Title</label>
        <Input
          placeholder="Title"
          name="title"
          defaultValue={blog.title}
          onChange={handleChange}
          size="39"
        />
      </Form.Field>
      <Form.Field>
        <label>Author Name</label>
        <Input
          placeholder="Author Name"
          name="authorName"
          value={blog.authorName}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Author Avatar</label>
        <Input
          placeholder="Author Avatar"
          name="authorAvatar"
          value={blog.authorAvatar}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Category</label>
        <Input
          placeholder="Category"
          name="category"
          value={blog.category}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Sub Category</label>
        <Input
          placeholder="Sub Category"
          name="subCategory"
          value={blog.subCategory}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <Input
          placeholder="Description"
          name="description"
          value={blog.description}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Cover</label>
        <Input
          placeholder="Cover"
          name="cover"
          value={blog.cover}
          onChange={handleChange}
        />
      </Form.Field>
      <Button type="submit">Update Blog</Button>
      <Button onClick={handleDelete}>Delete Blog</Button>
    </Form>
  );
}

export default EditBlog;
