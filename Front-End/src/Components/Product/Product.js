import { useCart } from "react-use-cart";
import { Button, Card } from 'react-bootstrap';

function Product({ product, addToCart }) {
//passed addToBag as props from products components to update how many items in cart

  return (
      <Card className="card h-100 shadow" style={{ color: "#000"}}>
          <Card.Img src={product.image} alt={product.name} variant="top" />
          <Card.Body className="d-flex flex-column">

            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="text-secondary">{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>

          </Card.Body>
      </Card>
    
  );
}


export default Product;
