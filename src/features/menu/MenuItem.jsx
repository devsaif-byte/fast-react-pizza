import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
