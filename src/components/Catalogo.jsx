
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';

const Catalogo = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, 'productos')
    getDocs(collectionRef)
        .then((response) => {
        const productosAdapted = response.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data }
        })
        setProductos(productosAdapted);
        })
        .catch((error) => {
        console.log(error)
        })
    }, [])

    return (
    <div className='catalogo-completo'>
        <div className='contenedor-targetas'>
        <ItemList productos={productos} />
        </div>
    </div>
    )
}

export default Catalogo