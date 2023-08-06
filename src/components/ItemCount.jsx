import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = () => {

    const [contador,setContador] = useState(0)

    const sumar = () =>{
        setContador(contador + 1)
    }

    const restar = ()=>{
        setContador(contador - 1)
    }

  return (
    <div className='count'>
        <p className='numero-count'>{contador}</p>
        <div className='botones'>
        <Button className='botonmas' onClick={sumar} variant="dark"  size='sm' >+</Button>
        <Button className='boton-agregar'variant="dark" size='sm' >Agregar al carrito</Button>
        <Button className='botonmenos' variant="dark" onClick={restar}  size='sm'>-</Button>
        </div>  
    </div>
  )
}

export default ItemCount