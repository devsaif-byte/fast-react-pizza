import React from 'react';
import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex flex-row items-center justify-between bg-stone-700 p-4 font-semibold uppercase text-stone-100">
      <p className="space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
