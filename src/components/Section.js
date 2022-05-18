import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Switch from "./Switch";
import axios from "axios";
import "../Styles/Section.css";
import Post from "./Post";

const Section = () => {
  //states to manage pagination
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  //getting current number of posts visualized per page

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  //states to manage filtering
  const [isCompleted, setIsCompleted] = useState(false);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState();

  const handleCheck = () => {
    setIsCompleted((prevState) => !prevState);
  };
  


 

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

  //Change page
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  //next page
  const handleNextButton = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  //prev page
  const handlePrevButton = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="section">
      {/* FORM SECTION */}
      <div className="filter-wrapper">
        <h1>FILTERS</h1>

        <form className="form" autoComplete="off">
          <div className="search-box-wrap">
            <i className="fas fa-search"></i>
            <input
              type="text"
              className="form-search"
              placeholder="Search..."
            ></input>
          </div>

          <h3>COMPLETED</h3>

          <div className="checkbox-wrap">
            <p>NO</p>{" "}
            <Switch isCompleted={isCompleted} handleCheck={handleCheck} />
          </div>

          <h3>SELECT USER ID</h3>
          <select id="id" name="dropdown"  className="form-selector">
            {posts.map((post) => (
              <option key={post.id}>{post.id}</option>
            ))}
          </select>
          
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
            handleNext={handleNextButton}
            handlePrev={handlePrevButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
