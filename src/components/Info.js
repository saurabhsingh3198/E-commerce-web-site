import React from 'react'
import { Link } from 'react-router-dom'
import pro1 from '../Product/pro1.png'
import classes from './Info.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

const Info = () => {
  return (
    <div>
        <div class={classes.coupon}>
  <div class={classes.container } style={{display:'flex'}}>
 
  <img src={pro1} alt="Avatar" style={{width:'400px',height:'400px'}}/>
  <div>
  <div class={classes.container }style={{backgroundColor:'white'}}>
    <h2><b>Adidas</b></h2>
    <p>Bindass</p>
  </div>
  <div class={classes.container }>
    <p>Use Promo Code: <span class={classes.promo}>BOH232</span></p>
    <h2 class={classes.rs}>Rs:1000</h2>
    <Link to='/bag'> <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></Link>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Info