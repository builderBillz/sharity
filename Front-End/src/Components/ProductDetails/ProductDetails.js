import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
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

    const { image, name, description, price } = product;
    return (

        <div>
            <img src="" alt="" width="" height="" />
            <h3>{name}</h3>
            <h3>{description}</h3>
            <h3>{price}</h3>
        </div>
    )


}
export default ProductDetails;