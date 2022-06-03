import axios from "axios"
import { useEffect, useState } from "react"
import Product from "../Product/Product"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";


function Products(props) {

    const URL = process.env.REACT_APP_API_URL
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
        .get(`${URL}/products`)
        .then((response) =>{
           // console.log(response.data)
            setProducts(response.data);
        })
        .catch((error) => console.log("error fetching products", error))
    },[URL])

    const addToCart = (item) => {
    props.func(item)
    };



    return(
        //<div className="container-fluid">
            <Container className="container-fluid py-5">
                <Row>
                    {products.map(product => (
                    <Col  xs={4} className="md-4" key={product.id}>
                        <Product key={product.id} product={product}  addToCart={addToCart} />
                    </Col> 
                    ))}
                        
                </Row>
            </Container>

       // </div>
    )
}

export default Products