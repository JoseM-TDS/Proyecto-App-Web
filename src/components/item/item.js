import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'

function Item(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Descripcion
        </Card.Text>
        <Card.Text>
          Elaborar una aplicacion web en la que se pueda llevar el control de mis tareas y metas personales.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;