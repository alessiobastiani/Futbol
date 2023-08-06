import React from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({productos}) => {
    const {id} = useParams()
    const filteredProducts = productos.filter((producto) => producto.id == id)
  return (
    <div>
        {filteredProducts.map((p) => {
            return(
                <div key={p.id}>
                    <Card className='card-detail' style={{ width: '20rem' }}>
                        <Card.Img  className='img-detail'  src={p.img} />
                        <Card.Body>
                            <Card.Title>{p.nombre}</Card.Title>
                            <Card.Text>{p.description}</Card.Text>
                            <Card.Text>{p.categoria}</Card.Text>
                        </Card.Body>
                        <ItemCount/>
                    </Card>
                </div>
            )
        })
        }
    </div>
  )
}

export default ItemDetail