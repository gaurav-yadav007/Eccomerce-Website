import React ,{ useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ListIcon from '@mui/icons-material/List';
import "./Header.css";
function Header(){
    const [isListOpen, setListOpen] = useState(false);

    const toggleList = () => {
        setListOpen(!isListOpen);
     };
    return(<div className="header">
       <div className="list-icon" onClick={toggleList}>
        <ListIcon fontSize="large" />
        {isListOpen && (
          <ul className="dropdown-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            {/* Add more list items as needed */}
          </ul>
        )}
      </div>
       <Link to="/"><HomeIcon fontSize="large"></HomeIcon> </Link> 
       <Link to="/itemList"><CategoryIcon fontSize="large"></CategoryIcon> </Link> 
       <Link to="/cart" > <ShoppingCartIcon fontSize="large"></ShoppingCartIcon> </Link>
       <nav>
        <ul>
        <li><ScrollLink to="about-section" smooth={true} duration={500}><InfoOutlinedIcon fontSize="large">About</InfoOutlinedIcon></ScrollLink></li>
        </ul>

    </nav>
    </div>)
}
export default Header;