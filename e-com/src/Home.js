// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
// Home.js
// ... (other imports and component setup)

function Home() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
  

    const [selectedProduct, setSelectedProduct] = useState(null);
    const  {addToCart}  = useCart();
    const navigate = useNavigate();



    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/products'); // Replace with your API endpoint
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
  
    const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : [];
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };


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
      <div>
        <div className='HomeImage' ><img src='https://as2.ftcdn.net/v2/jpg/06/69/82/61/1000_F_669826174_2X8ohTqFKzDoFiwIR5nRz2yOPCLPCWYP.jpg' />
</div>
        <h2 style={{marginLeft: '40px'}}>Products</h2>
        <div className="category-container">
          <img
            src="https://m.media-amazon.com/images/I/61BAuSC0UnL._SX679_.jpg"
            alt="Phone"
            onClick={() => handleCategoryClick('phone')}
          />
          <img
            src="https://www.wallpapers.net/web/wallpapers/mac-laptop-hd-wallpaper/3840x2160.jpg"
            alt="Laptop"
            onClick={() => handleCategoryClick('laptop')}
          />
          {/* Add other category images with appropriate paths */}
        </div>
        <ul className="product-list">
          {filteredProducts.map(product => (
            <li className={`product-item ${product.type === 'tv' || product.type === 'computer' ? 'wide-item' : ''}`} key={product._id} onClick={() => openProductDetails(product)}> 
              
                <img src={product.image} alt={product.name} />
                <p>{product.Itemname}</p>
                <p>${product.price}</p>
             
            </li>
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
  
  export default Home;
  