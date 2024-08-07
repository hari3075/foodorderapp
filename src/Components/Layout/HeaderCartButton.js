
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import cartContext from '../../Store/CartContext'
import { useContext } from 'react'

const HeaderCartButton = (props) => {
 const cartTxt= useContext(cartContext);
 const cartItems=cartTxt.items.reduce((curNumber,item)=>{
return curNumber+item.amount;
 },0)
 const btnClasses=`${classes.button} ${classes.bump}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItems}</span>
    </button>
  )
}

export default HeaderCartButton
