import { useLocation, useHistory } from 'react-router-dom';

const usePagination = () => {
  const location = useLocation();
  const history = useHistory();
  const page = Number((new URLSearchParams(location.search)).get('page') || 1);

  const previousPage = () => history.push(`?page=${page - 1}`);     
  const nextPage = () => history.push(`?page=${page + 1}`);       

  return {
    page,
    previousPage,
    nextPage
  };
};

export default usePagination;


