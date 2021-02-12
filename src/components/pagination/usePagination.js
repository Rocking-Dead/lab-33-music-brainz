import { useState } from 'react';

/* eslint-disable max-len */
const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = ({ target }) => {
    if(target.name === 'next') setCurrentPage(currentPage => currentPage + 1);
    if(target.name === 'previous') setCurrentPage(currentPage => currentPage - 1);
  };

  return {
    currentPage,
    handleClick
  };
};

export default usePagination;
