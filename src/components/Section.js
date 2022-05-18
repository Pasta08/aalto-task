import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import "../Styles/Section.css";
import Post from "./Post";

const Section = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  //fetching data from endpoint
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //getting current number of posts visualized per page

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  //Change page
  const handleClick = (event) =>{
    setCurrentPage(Number(event.target.id))
  }

  return (
    <div className="section">
      {/* FILTER SECTION */}
      <div className="filter-wrapper">
        <h1>FILTERS</h1>

        <form className="form" autoComplete="off">
          <div className="search-box-wrap">
            <input
              type="text"
              className="form-search"
              placeholder="Search..."
            ></input>
          </div>

          <h3>COMPLETED</h3>
          <div className="checkbox-wrap">
            <span>NO</span>
            <input type="checkbox"></input>
          </div>

          <h3>SELECT USER ID</h3>
        </form>
      </div>

      {/* TODOS SECTION */}
      <div className="posts-container">
        <div className="infos-wrap">
          <h3>USER ID</h3>
          <h3>TITLE</h3>
          <h3>COMPLETED</h3>
        </div>
        <hr className=""></hr>
        <Post posts={currentPosts} loading={loading} />
        <div className="pagination-wrap">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
            handleClick={handleClick}
           
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
