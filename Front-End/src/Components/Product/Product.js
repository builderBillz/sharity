
import { Button, Card } from 'react-bootstrap';
import './product.css'

function Product({ product, addToCart }) {


  return (
      <Card className="h-100 shadow rounded" style={{ color: "#000"}}>
          <Card.Img src={product.image} alt={product.name} className="card-img-top img-fluid" id="product" />
          <Card.Body className="d-flex flex-column">

            <Card.Title style={{ fontSize: 30 }}>{product.name}</Card.Title>
            <Card.Text className="text-secondary" style={{ fontSize: 20}}>{product.description}</Card.Text>
            <Card.Text className="card text-end fw-bolder">${product.price}</Card.Text>
            <div className="d-grid justify-content-center mt-4">

            <Button className="btn btn-outline-light"  onClick={() => addToCart(product)}>Buy now</Button>
            </div>

          </Card.Body>
      </Card>
    
  );
}


export default Product;
