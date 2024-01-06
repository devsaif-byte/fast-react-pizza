import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import toast from 'react-hot-toast';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addToCart(newItem));
    toast.success('Successfully added to cart!');
  };
  return (
    <li className="flex gap-4 px-2 py-1">
      <img
        className={`w-32 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="my-auto text-sm capitalize italic">
          Ingredients: {ingredients.join(', ')}
        </p>
        <div
          className={`mt-auto flex items-center justify-between text-sm ${
            soldOut ? 'font-bold text-red-500' : ''
          }`}
        >
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
