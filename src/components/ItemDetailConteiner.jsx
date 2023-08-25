import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 

const ItemDetailConteiner = () => {
  const { itemId } = useParams()
  const [producto, setProducto] = useState({})
  const db = getFirestore()

  useEffect(() => {
    // Función para obtener el producto por su ID desde Firebase
    const getProductosFromFirebase = async (id) => {
      try {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)

        if (docSnapshot.exists()) {
          const prodData = docSnapshot.data();
          setProducto({ id: docSnapshot.id, ...prodData })
        } 
      } catch (error) {
        console.log(error)
      }
    };
    getProductosFromFirebase(itemId)
  }, [itemId, db])

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailConteiner;