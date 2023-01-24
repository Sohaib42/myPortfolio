import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { Col, Container, Figure, Image, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const json = await response.json()
      if (response.ok) {
        setPosts(json)
      }
    }
    fetchPosts();
  }, []);

  return (
    <>

      <Container lg="12" className="flexHeight">
        <h1>Liste des publications</h1>
        <hr></hr>
        {posts && posts.map((post) =>
          <div key={post._id}>
            <h2><b>Titre :</b> {post.title}</h2>
            <p><b>Contenu :</b> {post.content}</p>
            <Image src={post.postImage} />
          </div>
        )}
      </Container>
    </>
  );

};

export default Posts;