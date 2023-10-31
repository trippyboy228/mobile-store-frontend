import React, {useState} from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Navbar=()=>{


    const carts=useSelector((state)=>state.allCart);
  
     const auth=localStorage.getItem('user')
     
     const navigate=useNavigate();
     
     const Logout=()=>{
      localStorage.clear();
      navigate("/signup")
     
     }
     
    return(<>
      <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <img alt="logo" className='logo' src="https://img.freepik.com/free-vector/mobile-store-logo-design_23-2149716936.jpg" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     {auth? <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
        <Link className='nav-link active' aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"to="/cart"><span  data-count={carts.length}><i class="fa-solid fa-cart-shopping"></i></span></Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' onClick={Logout}to="/login">Logout ({JSON.parse(auth).name})</Link>
         </li>
      </ul>
      :
      <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
        <Link to="/signup">Sign Up</Link>
        </li>
        <li className='nav-item'>
        <Link to="/login">Login</Link>
        </li>
      </ul>
    }
    
   
    </div>
  </div>
</nav>
     

  
    
      </div>
      
    </>)
}

export default Navbar;