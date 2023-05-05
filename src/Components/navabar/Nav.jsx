import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const auth = localStorage.getItem("users");
  function Logout() {
    if (auth) {
      localStorage.clear();
      navigate("/")
    }
  }
  return (
    <nav>
     <img src="e-compic.png" alt="logo" width="150px" height="80px"/>
      {
        auth ? (<><ul className="nav-links">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/update-product">Update Product</Link>
          </li>
          <li>
            <Link to="/delete-product">Delete Product</Link>
          </li>
         <li>
              <Link to="/profile">Profile({JSON.parse(auth).name})</Link>
            </li>
        </ul>
          <button className="signup-btn" onClick={Logout}>Logout</button> </>) : (<div style={{ display: "flex", gap: "15px" }} ><Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
            <Link to="/login"><button className="signup-btn">Login</button></Link></div>)
      }


    </nav>
  );
}

export default Navbar;
