import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const ProductDetails = ({ addToCart }) => {
    const URL = process.env.REACT_APP_API_URL;
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`${URL}/products/${id}`)
        .then((response) => {
            console.log(response.data)
            setProduct(response.data);
        })
    }, [URL, id]);

    // const addToCart = (item) => {
    //     props.func(item)
    //     };
    

    const { image, name, description, price } = product;
    return (

        <Card className='card-mb-4  py-5 d-grid justify-content-center'  style={{ color: '#000'}}>
            <Card.Img src={image} className="img-fluid " style={{ maxWidth: 550}} alt={name}/>
            <Card.Body className='d-flex flex-column'>
                <Card.Title style={{ fontSize: 38}}>{name}</Card.Title>
                <Card.Text className='text-secondary' style={{ fontSize: 20}}>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <div className='d-grid justify-content-center mt-4'>
                    <Button className='btn btn-outline-light' onClick={() => addToCart(product)}>Add to Cart</Button>
                </div>
            </Card.Body>
            
            
        </Card>
    )


}
export default ProductDetails;