import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = ({onAdd,initial}) => {

    const [contador,setContador] = useState(initial)
    const sumar = () =>{
        setContador(contador + 1)
    }

    const restar = ()=>{
      if(contador>0){
        setContador(contador - 1)
      }
    }
  return (
    <div className='count'>
        <p className='numero-count'>{contador}</p>
        <div className='botones'>
        <Button className='botonmas' onClick={sumar} variant="dark"  size='sm' >+</Button>
        <Button className='boton-agregar'variant="dark" size='sm' disabled={contador===0} onClick={()=>onAdd(contador)} >Agregar al carrito</Button>
        <Button className='botonmenos' variant="dark" onClick={restar}  size='sm'>-</Button>
        </div>  
    </div>
  )
}

export default ItemCount