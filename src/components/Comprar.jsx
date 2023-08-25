
import React, { useContext, useState } from 'react';
import { CartContext } from '../contex/ShoppingCartContext';
import ComprarForm from './ComprarForm';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import LoadingComponent from './LoadingComponent';

const Comprar = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, totalPrice } = useContext(CartContext)

    const createOrder = async (userData) => {
        setLoading(true)

        const firestore = getFirestore() 
        const ordersCollection = collection(firestore, 'orders')

        const objOrder = {
            buyer: userData,
            items: cart,
            total: total,
            totalPrice: totalPrice,
        }

        try {
            const orderRef = await addDoc(ordersCollection, objOrder)
            setOrderId(orderRef.id)
        } catch (error) {
            console.error('Error al guardar la orden:', error)
        } finally {
            setLoading(false)
        }
    };

    if (loading) {
        return <div className='cargando'>
        <LoadingComponent/>
        </div>
    }
    if (orderId) {
        return <h1 className='text-center mt-5 id-generado'>El id generado es: {orderId}</h1>
    }
    return (
        <div>
            <ComprarForm onConfirm={createOrder} />
        </div>
    );
};

export default Comprar;


