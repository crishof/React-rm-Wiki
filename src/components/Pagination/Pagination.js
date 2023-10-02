import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      previousclassName="btn btn-primary fs-5 prev"
      nextclassName="btn btn-primary fs-5 next"
      activeclassName="active"
      pageclassName="page-item"
      pageLinkclassName="page-link"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
