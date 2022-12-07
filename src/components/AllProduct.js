// import Filter from '../Filter/Filter'
import React from 'react'
import Card from './Card'
// import {  Row, Col, Container } from "react-bootstrap";

const AllProduct = () => {
  return (
    <>
     {/* <div><Filter /></div> */}
      <div style={{ maxWidth: '80%',marginLeft:'12%' }} className=" row" >
       
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
       
        

      </div>
    </>
  )
}

export default AllProduct