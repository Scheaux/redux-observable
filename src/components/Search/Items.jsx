import React from 'react';
import Item from './Item';
import { v4 } from 'uuid';

function Items({ items }) {
  return (
    <ul>
      {items.map((x) => {
        return <Item key={v4()} name={x.name} />;
      })}
    </ul>
  );
}

export default Items;
