import React, { useContext } from 'react';
import { CartContext } from '../contex/ShoppingCartContext';

const CartItem = ({ id, nombre, precio, img, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className='contenedor-cart carti'>
      <div className='item-cart carti'>
        <img className='cart-img' src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p className='text-item-cart'>Precio x unidad: ${precio}</p>
        <p className='text-item-cart'>Unidades: {quantity}</p>
        <button className='btn-delete' onClick={handleRemove}>
        <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default CartItem;