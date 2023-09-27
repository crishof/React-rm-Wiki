import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn btn-primary fs-5 prev"
      nextClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
