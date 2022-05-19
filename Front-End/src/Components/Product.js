import { Link } from "react-router-dom";

function Product({ product, id }) {
  // const {  } = useState;

  return (
    <div className="container">
      <div className="productCard">
        <div>
          <p>
            <Link to={`/products/${id}`}>{product.name}</Link>
          </p>

          <p>{product.description}</p>

          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}
