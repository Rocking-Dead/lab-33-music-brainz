/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Pagination.css';
import usePagination from '../../state/usePagination';



const Pagination = () => {
  const { currentPage, handleClick } = usePagination();

  return (
    <div className={style.paging}>
      <button name="previous" disabled={currentPage === 0} onClick={handleClick}>&lt;</button>
      <span> Page {currentPage} </span>
      <button name="next"  onClick={handleClick}>&gt;</button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired
};

export default Pagination;




