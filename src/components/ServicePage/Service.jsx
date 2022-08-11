import React from 'react';
import { Link } from 'react-router-dom';

function Service({ name, price, id }) {
  return (
    <Link to={`${id}/details`}>
      <li>
        {name} {price}
      </li>
    </Link>
  );
}

export default Service;
