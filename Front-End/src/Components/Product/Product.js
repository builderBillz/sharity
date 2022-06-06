
import { Button, Card } from 'react-bootstrap';

function Product({ product, addToCart }) {


  return (
      <Card className="h-100 shadow rounded" style={{ color: "#000"}}>
          <Card.Img src={product.image} alt={product.name} className="card-img-top img-fluid" />
          <Card.Body className="d-flex flex-column">

            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="text-secondary">{product.description}</Card.Text>
            <Card.Text className="card text-end fw-bolder">${product.price}</Card.Text>
            <div className="d-grid justify-content-center mt-4">

            <Button className="btn btn-outline-light"  onClick={() => addToCart(product)}>Buy now</Button>
            </div>

          </Card.Body>
      </Card>
    
  );
}


export default Product;
