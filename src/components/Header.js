import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
// import { MdFavoriteBorder } from 'react-icons/md';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top bg-dark">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item " >
          <Link className="nav-link text-light " aria-current="page" to="/home" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-light" aria-current="page" to="/men">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-light" aria-current="page" to="/women">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-light" aria-current="page" to="/shoes">Shoes</Link>
        </li>
       
      </ul>
      {/* <form className="d-flex" role="search"> */}
     <Link to='/favitam'> <FavoriteBorderIcon color='success'style={{cursor:'pointer'}}/></Link>
            <Badge badgeContent={2} style={{margin:'0 10px 0 20px'}} color="primary">
             <Link to='/bag'> <ShoppingCartOutlined color='success'style={{cursor:'pointer'}} /></Link>
            </Badge>
          
      {/* </form> */}
    </div>
  </div>
</nav>
{props.children} 
    </div>
  )
}

export default Header