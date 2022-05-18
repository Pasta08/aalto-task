import React, { useState } from "react";
import "../Styles/Pagination.css";
const Pagination = ({
  handleNext,
  handlePrev,
  postsPerPage,
  totalPosts,
  currentPage,
  handleClick,
}) => {
  const [pageNumberLimit] = useState(5);
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
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  //function to handle both the next page and the render of new buttons

  const handleNextPagination = () => {
    handleNext();
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  //function to handle both the previous page and the render of new buttons
  const handlePrevPagination = () => {
    handlePrev();
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  return (
    <div>
      <ul className="pageNumbers">
        <li>
          <button
            className="page-btn"
            onClick={handlePrevPagination}
            disabled={currentPage === pages[1] ? true : false}
          >
            <i className="fas fa-angle-left"></i>
          </button>
        </li>
        {renderPageNumbers}
        <li>
          <button
            className="page-btn"
            onClick={handleNextPagination}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
