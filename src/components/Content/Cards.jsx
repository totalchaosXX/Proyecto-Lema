import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards =({titulo,descripcion}) =>{

    return (
        <>
            <Card style={{ width: '18rem' }}>
         
         <Card.Body>
             <Card.Title>{titulo}</Card.Title>
             <Card.Text>
             {descripcion}
             </Card.Text>
             <Button variant="primary">Comprar</Button>
         </Card.Body>
         </Card>
        </>

    )
}

export default Cards