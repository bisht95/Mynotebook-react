import React from 'react';
import logo from '../assets/images/logo.webp'
import { Link, NavLink  } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='mynavbar mb-3'>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} alt='logo' width="50" height="50" fetchPriority="high" decoding="async"/></Link>
            
            <button className="navbar-toggler order-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-center order-lg-2 order-3" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" 
                  end 
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/about">About</NavLink >
                </li>
              </ul>
            </div>

            <div className="navlogin order-lg-3 order-2">
                <a to="#" className="mybtn order-now-btn">Order Now</a> 
                <a to="#" className="loginbtn">Login</a>  
            </div>

          </div>
        </nav>
    </div>
  )
}

export default Navbar
