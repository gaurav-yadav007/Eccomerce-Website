// ListItem.js
import "./ListItem.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Banner from "./Banner";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
function ListItem() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const  {addToCart}  = useCart();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.Itemname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    closeProductDetails();
    navigate('/cart'); // Navigate to the cart page after adding to the cart
  };

  return (
    <div className="product-list-container">
      <Banner />
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="card-list">
        {filteredProducts.map((product) => (
          <Card className="product-card" key={product._id} onClick={() => openProductDetails(product)}>
            <CardMedia
              component="img"
              alt={product.Itemname}
              height="120"
              image={product.image}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.Itemname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ul>

      {selectedProduct && (
        <div className="product-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeProductDetails}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.Itemname} />
            <div className="product-details">
              <p className="product-name">{selectedProduct.Itemname}</p>
              <p className="product-price">${selectedProduct.price}</p>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
