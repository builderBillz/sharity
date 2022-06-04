
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product({ product, addToCart }) {
//passed addToBag as props from products components to update how many items in cart
  return (
      <Card className="h-100 shadow rounded" style={{ color: "#000"}}>
          <Link to={`/products/${product.id}`}>
          <Card.Img src={product.image} alt={product.name} className="card-img-top img-fluid" />
          </Link>
          <Card.Body className="d-flex flex-column">
            <Link to={`/products/${product.id}`}>
            <Card.Title>{product.name}</Card.Title>
            </Link>
            <Card.Text className="text-secondary">{product.description}</Card.Text>
            <Card.Text className="card text-end fw-bolder">${product.price}</Card.Text>
            <div className="d-grid justify-content-end mt-4">

            <Button className="btn btn-outline-light"  onClick={() => addToCart(product)}>Buy now</Button>
            </div>

          </Card.Body>
      </Card>
    
  );
}


export default Product;
