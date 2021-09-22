import React, { useState, useEffect } from 'react';
import axios from '../axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getPosts () {
            const response = await axios.get("/api/posts");
            setPosts(response.data.posts);
            console.log(response);
            return response;
        }
        getPosts();
    },[]);
    console.log(posts);
    return (

        <div className="container">
            {posts.map(post => (
                <>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                </>
            ))}
        </div>
    );
   
};

export default Posts;