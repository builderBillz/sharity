import { useCart } from "react-use-cart";
import { Button, Card } from 'react-bootstrap';

function Product({ product, addToCart }) {
//passed addToBag as props from products components to update how many items in cart

  return (
      <Card className="h-100 shadow rounded" style={{ color: "#000"}}>
          <Card.Img src={product.image} alt={product.name} className="card-img-top img-fluid" />
          <Card.Body className="d-flex flex-column">

            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="text-secondary">{product.description}</Card.Text>
            <Card.Text className="fw-bolder">${product.price}</Card.Text>
            <div className="d-grid justify-content-end mt-4">

            <Button variant="primary"  onClick={() => addToCart(product)}>Add to Cart</Button>
            </div>

          </Card.Body>
      </Card>
    
  );
}


export default Product;
