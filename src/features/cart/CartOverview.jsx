import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { getTotalItem, getTotalPrice } from './cartSlice';

function CartOverview() {
  const dispatch = useDispatch();
  const totalItem = useSelector(getTotalItem);

  const totalPrice = useSelector(getTotalPrice);

  if (!totalItem) return null;
  return (
    <div className="flex flex-row items-center justify-between bg-stone-700 p-4 font-semibold uppercase text-stone-100">
      <p className="space-x-4">
        <span>{totalItem} pizzas</span>
        <span>{`${formatCurrency(totalPrice)}`}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
