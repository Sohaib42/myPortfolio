import React, { useState, useEffect } from 'react';
import { Col ,Container,Row} from 'react-bootstrap';

import axios from '../../axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getPosts () {
            const response = await axios.get("/api/posts");
            setPosts(response.data.posts);
            return response;
        }
        getPosts();
    },[posts]);
    const defaultImage ="https://pixy.org/src/477/4774988.jpg"
    return (
        <>
<Container fluid className="flexHeight">
        <Row>
            {posts.map((post,i) => (
                <Col key={i} className="tabs" lg="3">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>{post._id}</p>
                    <img className="post-image" height="auto" src={post.postImage== null||undefined ? defaultImage : post.postImage} alt="try to post something"/>
                </Col>
            ))}
        </Row>
</Container>
</>
    );
   
};

export default Posts;