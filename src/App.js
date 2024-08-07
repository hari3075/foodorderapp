
import {useState} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import './App.css'
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Route,Switch}from 'react-router-dom'

function App() {
  const [cart,showCart]=useState(false);
  const cartShow=()=>{
    showCart(true);
  }
  const hideCart=()=>{
    showCart(false);
  }
  
  return (
    <BrowserRouter>
    <CartProvider>
{cart&&<Cart onClose={hideCart}/>}
<ToastContainer/>
<Switch>
  <Route exact to='/'componenet={App}/>
</Switch>
< Header onShowCart={cartShow}/>

  <main>
<Meals/>
  </main>
 </CartProvider>
 </BrowserRouter>
  );
}

export default App;
