import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/ShoppingCartContext';

const ItemDetail = ({productos}) => {
    const {id} = useParams()
    const filteredProducts = productos.filter((producto) => producto.id == id)
    const [Quantity, setQuantity]= useState("")
    const {addToCart} = useContext(CartContext)
    const onAdd = (cantidad)=>{
        console.log(`compraste ${cantidad} productos`)
        setQuantity(cantidad)
        const item = {
            id
        }
        addToCart(item, cantidad)
    }
  return (
    <div>
        {filteredProducts.map((p) => {
            return(
                <div className='cardi' key={p.id}>
                    <div className="container-image">
                    <img src={p.img} />
                    </div>
                    <div className='texto'>
                        <h3>{p.nombre}</h3>
                        <p>{p.description}</p>
                        <p>categoria: {p.categoria} </p>
                        { Quantity ==='' ?<ItemCount initial={1} onAdd={onAdd}/> :<Link to='/cart'><button className='btn btn-dark'>Terminar compra</button></Link>}
                    </div>
                </div>
            )
        })
        }
    </div>
  )
}

export default ItemDetail