import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setItems } from '../../redux/slices/services';
import Loading from './Loading';
import Error from './Error';

function SingleService() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(
      setItems(`https://maindetailsbackend.herokuapp.com/api/services/${id}`)
    );
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error msg={error.message} />
      ) : (
        <div>
          {items.name} {items.price} {items.content}
        </div>
      )}
    </>
  );
}

export default SingleService;
