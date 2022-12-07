import React from 'react'
import BagCard from './BagCard'



const Bag = () => {
  return (
    
    <div >
   
    <BagCard/>
    

    <div style={{position:"absolute",marginTop:"-650px",marginLeft:"1000px"}}>
<div style={{width:'400px'}}>
<div class="d-grid gap-2">
  <button class="btn btn-primary mb-3 mt-5" type="button">CHECKOUT</button>
</div>
<div style={{border:'grey 2px solid'}} >
 <h3>ORDER SUMMARY</h3>
 <table>
  
  <tbody>
    <tr>
      <th>ORIGINAL PRICE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
      <td>Rs:1000</td>
      
     
    </tr>
    <tr>
    <th>QUANTITY &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
      <td>2</td>
    </tr>
    <tr>
    <th>DISCOUNT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
      <td>Rs:200</td>
    </tr>
    <tr>
    <th>DELIVERY &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
      <td>FREE</td>
    </tr>
    <tr>
    <th>TOTAL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
      <td>Rs:800</td>
    </tr>
  </tbody>
 </table>
 </div>
</div>
</div>
</div>


































//     <div className='container'>
// <div className={classes.row}>
//   <div className={classes.col-75}>
//     <div className={classes.container2}>
//       <form action="/action">

//         <div className={classes.row}>
//           <div className={classes.col-50} >
//             <h3>Billing Address</h3>
//             <label for="fname"><i className="fa fa-user"></i> Full Name</label>
//             <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
//             <label for="email"><i className="fa fa-envelope"></i> Email</label>
//             <input type="text" id="email" name="email" placeholder="john@example.com"/>
//             <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
//             <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
//             <label for="city"><i className="fa fa-institution"></i> City</label>
//             <input type="text" id="city" name="city" placeholder="New York"/>
//             <label for="state">State</label>
//                 <input type="text" id="state" name="state" placeholder="NY"/>

            
//           </div>

//           <div className={classes.col-50}>
//             <h3>Payment</h3>
           
//             <label for="cname">Name on Card</label>
//             <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
//             <label for="ccnum">Credit card number</label>
//             <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
//             <label for="expmonth">Exp Month</label>
//             <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

//             <div className={classes.row}>
//               <div className={classes.col}>
//               <div>
//               <label className='mx-3' for="expyear">Exp Year</label>
//                 <input type="text" className='mx-3'  id="expyear" name="expyear" placeholder="2018"/>
//               </div>
//               <div>
//               <label for="cvv">CVV</label>
//                 <input type="text" className='w-25 mx-3' id="cvv" name="cvv" placeholder="352"/>
//               </div>
              
                
//               </div>
             
//             </div>
//           </div>

//         </div>
//         <label>
//           <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
//         </label>
//         <input type="submit" value="Continue to checkout" className={classes.btn}/>
//       </form>
//     </div>
//   </div>

//   <div className={classes.col-25}>
//     <div className={classes.container2}>
//       <h4>Cart
//         <span className={classes.price} style={{color:'black'}}>
//           <i className={classes.fa}></i>
//           <b>4</b>
//         </span>
//       </h4>
//       <p><a href="/">Product 1</a> <span className={classes.price}>$15</span></p>
//       <p><a href="/">Product 2</a> <span className={classes.price}>$5</span></p>
//       <p><a href="/">Product 3</a> <span className={classes.price}>$8</span></p>
//       <p><a href="/">Product 4</a> <span className={classes.price}>$2</span></p>
//       <hr/>
//       <p>Total <span className={classes.price} style={{color:'black'}}><b>$30</b></span></p>
//     </div>
//   </div>
// </div>






//     </div>
  )
}

export default Bag