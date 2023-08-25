import React, { useContext, useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../contex/ShoppingCartContext'
import LoadingComponent from './LoadingComponent'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

    const ItemDetail = ({ producto }) => {
        const [quantity, setQuantity] = useState('')
        const [loading, setLoading] = useState(true)
        const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantity(cantidad);
        addToCart(producto, cantidad)

        toast('🦄 producto agregado al carrito!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
    }, 2000);

    return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return <div className='cargando'><LoadingComponent/></div>
    }

return (
    <div className='cardi' key={producto.id}>
        <div className='container-image'>
            <img src={producto.img} alt={producto.nombre} />
        </div>
        <div className='texto'>
            <h3>{producto.nombre}</h3>
            <p>{producto.description}</p>
            <p>categoria: {producto.categoria} </p>
            {quantity === '' ? (
            <ItemCount initial={1} onAdd={onAdd} />
        ) : (
            <Link to='/cart'>
            <button className='btn btn-dark'>Terminar compra</button>
            </Link>
        )}
        </div>
    </div>
);
};

export default ItemDetail;