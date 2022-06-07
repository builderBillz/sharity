import axios from "axios";
import './NewProducts.css'

const { useState } = require("react");
const { useNavigate } = require("react-router-dom");

function NewProduct(){

    const URL = process.env.REACT_APP_API_URL
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        image:""
    });
    const navigate = useNavigate()


    const handleTextChange = (event) =>{
        setProduct({...product, [event.target.id]: event.target.value})
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        axios
        .post(`${URL}/products`, product)
        .then(() =>
        {navigate(`/products/`)})
    }

    // const handleCheckbox = () => {
    //     setProduct({ ...product, featured: !product.featured });
    // };

    return (

        
        <div className="form">
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
                <br>
                </br>
                <br>
                </br>
                <label htmlFor="image">Image URL:</label>
                <input
                id="image"
                type="text"
                value={product.image}
                onChange={handleTextChange}
                placeholder="Link to your image here"
                />

                <br>
                </br>
                <br>
                </br>
                <label htmlFor="description">Specs:</label>
                <input
                id="description"
                type="text"
                value={product.description}
                onChange={handleTextChange}
                placeholder="describe the product here"
                />
                <br>
                </br>
                <br>
                </br>
                <label htmlFor="Price">Price: $</label>
                <input
                id="price"
                type="number"
                value={product.price}
                onChange={handleTextChange}
                placeholder="how much are you selling it for"
                />
                <br>
                </br>
                <br>
                </br>
                <button>Post</button>
            </form>

        </div>
    )
}

export default NewProduct