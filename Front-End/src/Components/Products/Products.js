import axios from "axios"
import { useEffect, useState } from "react"
import Product from "../Product/Product"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import {  useNavigate } from "react-router-dom";


function Products() {

    const navigate = useNavigate();
    const URL = process.env.REACT_APP_API_URL
    const [products, setProducts] = useState([])
    const [bag, setBag] = useState([]);

    console.log(URL)
    useEffect(() => {
        axios
        .get(`${URL}/products`)
        .then((response) =>{
            console.log(response.data)
            setProducts(response.data);
        })
        .catch((error) => console.log("error fetching products", error))
    },[URL])

    const addToBag = (products) => {
        setBag([...bag, products]);
    };

    return(
        <div className="products">
            <header>
                <button onClick={() => navigate("/shoppingCart")}>Go to Cart ({bag.length})</button>
            </header>
            <br></br>
            <br></br>
            
            <article>
                {products.map((product) => {
                    return <Product key={product.id} product={product} addToBag={addToBag} />
                })};
            </article>

        </div>
    )
}

export default Products