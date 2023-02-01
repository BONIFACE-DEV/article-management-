import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Header,
  Form,
  Button,
  Icon,
  Input,
  Image,
} from "semantic-ui-react";

const ViewArticle = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/bloglist/${id}`)
      .then((response) => setArticle(response.data));
  }, [id]);

  const handleEdit = () => {
    navigate(`/editArticle/${id}`);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/bloglist/${id}`)
      .then(() => navigate("/"));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "50%", marginTop: "50px" }}>
        <Image src={article.cover} wrapped ui={false} />
        <Card.Content>
          <Header as="h2">{article.title}</Header>
          <Card.Meta>
            <span>{article.category}</span>
            <span>{article.subCategory}</span>
          </Card.Meta>
          <Card.Description>{article.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Header as="h4">Author: {article.authorName}</Header>
          <Image
            src={article.authorAvatar}
            circular
            size="mini"
            spaced="right"
            bordered
          />
          <span>Created at: {new Date(article.createdAt).toDateString()}</span>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={handleEdit}>
              Edit
            </Button>
            <Button basic color="red" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ViewArticle;
