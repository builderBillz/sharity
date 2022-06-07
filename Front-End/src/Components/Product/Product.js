
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product({ product, addToCart }) {
//passed addToBag as props from products components to update how many items in cart
  return (
      <Card className="h-100 shadow rounded" style={{ color: "#000", marginBottom: 15}}>
          <Link to={`/products/${product.id}`}>
          <Card.Img src={product.image} alt={product.name} className="card-img-top" height="300" />
          </Link>
          <Card.Body className="d-flex flex-column">
            <Link to={`/products/${product.id}`}>
            <Card.Title style={{ fontSize: 24, color: "#000"}}>{product.name}</Card.Title>
            </Link>
            <Card.Text style={{ fontSize: 16 }} className="text-secondary">{product.description}</Card.Text>
            <Card.Text className="card text-end">${product.price}</Card.Text>
            <div className="d-grid justify-content-center mt-4">

            <Button  className="btn btn-outline-light"  onClick={() => addToCart(product)}>Buy now</Button>
            </div>

          </Card.Body>
      </Card>
    
  );
}


export default Product;
