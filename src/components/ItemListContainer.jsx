import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { categoria } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const collectionRef = categoria
      ? query(collection(db, 'productos'), where('categoria', '==', categoria))
      : collection(db, 'productos')

    getDocs(collectionRef)
      .then((response) => {
        const productosAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data }
        });
        setProductos(productosAdapted)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [categoria])
  

  return (
    <div className='contenedor-targetas'>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer;