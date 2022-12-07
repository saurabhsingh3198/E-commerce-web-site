import React from 'react'
import classes from './Bag.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import pro1 from '../Product/pro1.png'
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'

const BagCard = () => {
    return (
        <div className="container">
            <div class={classes.coupon}>
                <div class={classes.container} style={{ display: "flex" }}>

                    <img src={pro1} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                    <div>
                        <div class={classes.container} style={{ backgroundColor: 'white' }}>
                            <h2><b>Adidas</b></h2>
                            <p>Bindass</p>
                        </div>
                        <div class={classes.container}>
                            <p>Use Promo Code: <span class={classes.promo}>BOH232</span></p>
                            <h2 class={classes.rs}>Rs:1000</h2>
                            <div style={{ display: 'flex' }}>
                                <IconButton aria-label="Remove"><RemoveIcon /></IconButton>
                                <div style={{ backgroundColor: 'white', justifyContent: 'center', width: '25px', display: 'flex', alignItems: 'center', borderRadius: '9px' }}>1</div>
                                <IconButton aria-label="Add"> <AddIcon /></IconButton>
                            </div>
                            <br />
                            <Link to='/bag'> <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></Link>

                        </div>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default BagCard