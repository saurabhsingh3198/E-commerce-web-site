import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
const Footer = (props) => {
  return (
    <div>
    {props.children}
    <div style={{backgroundColor:'black',height:'300px',display:'flex'}}>
    <div style={{color:'white',margin:'25px 10px 10px 175px'}}>
    <h2 style={{fontFamily:'elephant'}}>Product</h2>
    <p>Mens Collection</p>
    <p>Womens Collection</p>
    <p>Shoes Collection</p>
    <p>Clothes Collection</p>
    </div>
    <div style={{color:'white',padding:'25px 10px 15px 175px'}}>
        <h2  style={{fontFamily:'elephant'}}>Support</h2>
        <p>Help</p>
        <p>Customer Service</p>
        <p>Shipping</p>
        <p>Order Tracker</p>
        <p>Returns & Exhanges</p>
    </div>
    <div style={{color:'white',padding:'25px 10px 15px 175px'}}>
        <h2  style={{fontFamily:'elephant'}}>Company Info</h2>
        <p>Entity Details</p>
        <p>Carers</p>
        <p>Company Apps</p>
      
    </div>
    <div style={{color:'white',padding:'90px 10px 15px 175px',display:'flex'}}>
      <a style={{color:'white'}} href="https://www.linkedin.com/">  <FaLinkedin size='3em' style={{cursor:'pointer'}}/></a>
       
      <a style={{color:'white'}} href="https://github.com/">  <FaGithub size='3em' style={{marginLeft:'1vw',cursor:'pointer'}}/></a>
    </div>
    </div>
    </div>
  )
}

export default Footer