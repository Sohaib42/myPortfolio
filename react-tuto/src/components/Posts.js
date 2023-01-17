import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from '../axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getPosts() {
            const response = await axios.get("/api/posts");
            setPosts(response.data.posts);
            console.log(response);
            return response;
        }
        getPosts();
    }, []);
    console.log(posts);
    return (

        <Row lg="3" fluid>
            {posts.map(post => (
                <Col className="tabs" lg="4">
                    <h1 >{post.title}</h1>
                    <p>{post.content}</p>
                    <caption>{post._id}</caption>
                </Col>
            ))}
        </Row>
    );

};

export default Posts;