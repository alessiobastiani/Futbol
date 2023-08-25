
import React, { useContext } from 'react';
import { CartContext } from '../contex/ShoppingCartContext';

const CartWidget = () => {
  const { total } = useContext(CartContext);
  return (
    <div className="carro">
      <span>
      <ion-icon name="cart-outline"></ion-icon>
      </span>
        <span className='numero'>{total}</span>
    </div>
  )
}

export default CartWidget