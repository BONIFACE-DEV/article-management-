import React, { useState, useEffect } from "react";
import { Form, Input, Button, TextArea } from "semantic-ui-react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/bloglist/${id}`)
      .then(response => {
        const { title, category, subCategory, description, authorName, authorAvatar, createdAt } = response.data;
        setTitle(title);
        setCategory(category);
        setSubCategory(subCategory);
        setDescription(description);
        setAuthorName(authorName);
        setAuthorAvatar(authorAvatar);
        setCreatedAt(createdAt);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3000/bloglist/${id}`, {
        title,
        category,
        subCategory,
        description,
        authorName,
        authorAvatar,
        createdAt
      })
      .then(response => {
        setSuccessMessage("Article updated successfully");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      })
      .catch(error => {
        setErrorMessage("Something went wrong. Please try again later.");
        console.error(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/bloglist/${id}`)
      .then(response => {
        setSuccessMessage("Article deleted successfully");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      })
      .catch(error => {
        setErrorMessage("Something went wrong. Please try again later.");
        console.error(error);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            placeholder="Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          </Form.Field>
          <Form.Field>
          <Input
            placeholder="Sub Category"
            value={subCategory}
            onChange={e => setSubCategory(e.target.value)}
          />
          </Form.Field>
          <Form.Field>
          <TextArea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          </Form.Field>
          <Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button negative type="submit">
            Delete
          </Button>
          </Form.Field>
        </Form>
      </div>
  );
};

export default EditArticle;

           
