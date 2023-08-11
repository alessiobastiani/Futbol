
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Item = ({
  id,
  nombre,
  description,
  categoria,
  stock,
  img
})=>{

  return (
    <Card className='target' style={{ width: '18rem' }}>
    <Card.Img src={img}/>
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>{categoria}</Card.Text>
      <Link to={`/Item/${id}`}>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="button-text"> ver detalles</span>
      </button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default Item