import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      scrollTop();
    }
  };
  const handleNextPage = () => {
    if (page <= lastPage) {
      setPage((prevPage) => prevPage + 1);
      scrollTop();
    }
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
      <button
        className="transition-all hover:text-color-accent"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
