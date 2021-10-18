import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { Col ,Container,Row} from 'react-bootstrap';
import ReactPaginate from "react-paginate";

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
    const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 2;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = posts
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <Row className="postsElements">
        <Col className="singlePost" lg="5" md="5">
          <h4>{post.title}</h4>
          <p >{post.content.substring(0,50)}...</p>
          </Col>
          </Row>
      );
    });
    
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


        return (
        <>
<Container lg="12" className="flexHeight flexTry">
                {displayPosts}
</Container>
<ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"flexHeight container flexTry postsLists"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
</>
    );
   
};

export default Posts;