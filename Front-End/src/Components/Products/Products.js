import axios from "axios"
import { useEffect, useState } from "react"
import Product from "../Product/Product"


function Products() {

    const URL = process.env.REACT_APP_API_URL
    const [products, setProducts] = useState([])

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

    return(
        <div className="products">
            <article>
                {products.map((product) => {
                    return <Product key={product.id} product={product} />
                })};
            </article>
        </div>
    )
}

export default Products