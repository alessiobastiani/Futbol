import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/ShoppingCartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <div className='contenedor-no-products'>
          <h1 className='no-products'><ion-icon name="sad-outline"></ion-icon>No hay productos en el carro<ion-icon name="sad-outline"></ion-icon></h1>
          <Link to='/'>
            <button className=' btn btn-dark btn-init'>Volver a inicio</button>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              nombre={item.nombre}
              precio={item.precio}
              img={item.img}
              quantity={item.quantity}
            />
          ))}
          <div className='cart-price'>
          <button className='btn btn-dark' onClick={clearCart}>Limpiar carrito</button>
          <h3 className='precio-total text-center'>Precio total: ${totalPrice}</h3>
          <Link to='/Comprar'>
            <button className='btn btn-dark'>Generar compra</button>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;