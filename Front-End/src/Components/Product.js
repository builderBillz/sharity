function Product({ product }) {
  // const {  } = useState;

  return (
    <div className="container">
      <div className="productCard">
        <div>
          <p>{product.name}</p>

          <p>{product.description}</p>

          <p>{product.price}</p>

          <p>{product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
