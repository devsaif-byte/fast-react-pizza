import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';

const DeleteButton = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        dispatch(deleteFromCart(pizzaId));
        toast.success('deleted successfully❌');
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
