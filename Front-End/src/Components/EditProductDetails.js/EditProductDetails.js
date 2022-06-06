import axios from "axios";

const { useState,useEffect } = require("react");
const { useNavigate, useParams } = require("react-router-dom");

function EditProduct(){

    const URL = process.env.REACT_APP_API_URL
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        image:""
    });
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios
        .get(`${URL}/products/${id}`)
        .then((response) => {
            setProduct(response.data);
        })
    }, [URL, id]);

    


    const handleTextChange = (event) =>{
        setProduct({...product, [event.target.id]: event.target.value})
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        axios
        .put(`${URL}/products/${id}`, product)
        .then(() =>
        {navigate(`/products/${id}`)})
    }

    return (

        
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                value={product.name}
                onChange={handleTextChange}
                placeholder="Name of the item for sale"
                required
                />
                <label htmlFor="image">Image URL:</label>
                <input
                id="image"
                type="text"
                value={product.image}
                onChange={handleTextChange}
                placeholder="Link to your image here"
                />
                <label htmlFor="description">Specs:</label>
                <input
                id="description"
                type="text"
                value={product.description}
                onChange={handleTextChange}
                placeholder="describe the product here"
                />
                <label htmlFor="Price">Price: $</label>
                <input
                id="price"
                type="number"
                value={product.price}
                onChange={handleTextChange}
                placeholder="how much are you selling it for"
                />
                <input className="button" type="submit" />
            </form>

        </div>
    )
}

export default EditProduct