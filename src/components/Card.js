import pro1 from '../Product/pro1.png'
import classes from './Card.module.css'
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const Card = () => {
  // const [show, setShow] = useState(false);
 
  return (
    <div className='col-4' >
      <div className={classes.containerImage}>
        <div className={classes.card}>
          <div className="bg-image hover-zoom" >
            <img className={classes.img} src={pro1} alt="img" />
          </div>
          <br />
          <div className="container">
            <h4 className="text-center">
              <b>Burnikk</b>
            </h4>
            <p className="text-center price" style={{ color: 'grey',fontSize: '22px'}}>Rs:1000</p>
            {/* <KeyboardArrowDownIcon style={{cursor:'pointer'}} onClick={() => setShow((s) => !s)}/> */}
            {/* <div style={{ display: show ? "block" : "none" }}> */}
            <Link to='/wishlist'><IconButton color="primary" aria-label="Favorite"><FavoriteIcon /></IconButton></Link>
            <Link to='/'><IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton></Link>
            <Link to='/info'><IconButton color="primary" aria-label="info"><InfoIcon /></IconButton></Link>
            {/* </div> */}
          </div>
        </div>
      </div> 




    </div>
  )
}

export default Card