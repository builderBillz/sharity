function Product({ product, addToBag }) {
//passed addToBag as props from products components to update how many items in cart

  return (
    <div className="container">
      <div className="productCard">
        <div>
          <img src={product.image} alt={product.name} width="18%" />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => addToBag(product)}>Add to Cart</button>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Product;
