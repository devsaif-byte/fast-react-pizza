import React from 'react';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import toast from 'react-hot-toast';

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <div className="py-8">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="my-6">Your cart, %NAME%</h2>

      <ul className="divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button
          type="secondary"
          onClick={() => {
            dispatch(clearCart());
            if (cart.length) toast.success(`Cart cleared!`);
          }}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
