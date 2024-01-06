import DeleteButton from '../../ui/DeleteButton';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex justify-between py-4">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p>{formatCurrency(totalPrice)}</p>
        <DeleteButton type="small" pizzaId={pizzaId}>
          Delete
        </DeleteButton>
      </div>
    </li>
  );
}

export default CartItem;
