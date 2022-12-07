import React from 'react'
// import { Link } from 'react-router-dom'
import pro1 from '../Product/pro1.png'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Wishlist = () => {
  
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Product</th>
            <th scope="col">Unit</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
            <th scope="col">Add to bag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{paddingTop:'35px'}}>1</th>
            <td><img style={{ hight: '100px', width: '100px', borderRadius: '500px' }} src={pro1} alt="pro1" /></td>
            <td style={{paddingTop:'32px'}}><IconButton aria-label="Remove"><RemoveIcon /></IconButton>
              1
              <IconButton aria-label="Add"> <AddIcon /></IconButton></td>
            <td style={{paddingTop:'35px'}}>Rs:1000</td>
            <td style={{paddingTop:'32px'}}><IconButton aria-label="delete"><DeleteIcon /></IconButton></td>
            <td style={{paddingTop:'32px'}}><IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></td>
          </tr>

        </tbody>
        <tbody>
          <tr>
            <th scope="row" style={{paddingTop:'35px'}}>2</th>
            <td><img style={{ hight: '100px', width: '100px', borderRadius: '500px' }} src={pro1} alt="pro1" /></td>
            <td style={{paddingTop:'32px'}}><IconButton aria-label="Remove"><RemoveIcon /></IconButton>
              1
              <IconButton aria-label="Add"> <AddIcon /></IconButton></td>
            <td style={{paddingTop:'35px'}}>Rs:1000</td>
            <td style={{paddingTop:'32px'}}><IconButton aria-label="delete"><DeleteIcon /></IconButton></td>
            <td style={{paddingTop:'32px'}}><IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></td>
          </tr>

        </tbody>
        <tbody>
          <tr>
            <th scope="row" style={{paddingTop:'35px'}}>3</th>
            <td><img style={{ hight: '100px', width: '100px', borderRadius: '500px' }} src={pro1} alt="pro1" /></td>
            <td style={{paddingTop:'32px'}}><IconButton aria-label="Remove"><RemoveIcon /></IconButton>
              1
              <IconButton aria-label="Add"> <AddIcon /></IconButton></td>
            <td style={{paddingTop:'35px'}}>Rs:1000</td>
            <td style={{paddingTop:'32px'}}><IconButton aria-label="delete"><DeleteIcon /></IconButton></td>
            <td style={{paddingTop:'32px'}}><IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Wishlist