
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h1>Hello</h1>
      </div>
    </li>
  );
};

export default CartItem;