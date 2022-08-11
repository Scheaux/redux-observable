import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearch } from '../../redux/slices/search';
import Items from './Items';
import Loading from './Loading';
import Error from './Error';

function SearchPage() {
  const { items, loading, error, search } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

  function handleChange(evt) {
    dispatch(changeSearch(evt.target.value));
  }

  return (
    <div className='wrap'>
      <input type='text' id='search' onChange={handleChange} />
      {search === '' ? (
        <div>Type something to search...</div>
      ) : loading ? (
        <Loading />
      ) : error ? (
        <Error msg={error.message} />
      ) : (
        <Items items={items} />
      )}
    </div>
  );
}

export default SearchPage;
