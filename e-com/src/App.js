import React from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import ListItem from './ListItem';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import About from './About';
import { Element } from 'react-scroll';

import Navigation from './Navigation';

import SignIn from './SignIn';

import SignUp from './SignUp';
function App() {
  return (<div className='Container'>
    {/* <Router>
    
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     
    </Router> */}
    <Router>
        <CartProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
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

export default App;
