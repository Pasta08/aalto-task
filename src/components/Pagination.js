import React, { useState } from "react";
import "../Styles/Pagination.css";
const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  handleClick,
  setCurrentPage,
}) => {


  
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const pages = [];
  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNext = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }


  };
  const handlePrev = () => {};

  return (
    <div>
      <ul className="pageNumbers">
        <li>
          <button
          onClick={handleNext}>
            <i class="fas fa-angle-left"></i>
          </button>
        </li>
        {renderPageNumbers}
        <li>
          <button>
            <i class="fas fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
