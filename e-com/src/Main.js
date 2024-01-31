import React from "react";
import Header from './Header';
import ListItem from './ListItem';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import { Element } from 'react-scroll';
import Cart from './Cart';
import About from './About';
import Home from './Home';


function Main(){
    return(<div>
    <Router>
        <CartProvider>
        <Header />
        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/itemList' element={<ListItem/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
        </CartProvider>
        <Element name="about-section">
            <About />
        </Element>
    </Router>
    </div>)
}
export default Main;