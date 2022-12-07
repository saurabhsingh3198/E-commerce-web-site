import React from 'react'
import './SignupAndSignin.css'
import { Link } from "react-router-dom";


  

const SignupAndSignin = () => {
    return (
        <div>
            {/* <a href="/" className="logo" target="_blank">
         
            </a> */}

            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front" style={{ height: '65vh' }}>
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3" style={{color:'white'}}>Log In</h4>
                                                    <div className="form-group">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                       
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        
                                                    </div>
                                                    <Link to="/home" className="btn1 mt-4" style={{ marginTop: '12px' }}>submit</Link>
                                                    <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back" style={{ height: '65vh' }}>
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-1" style={{color:'white'}}>Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="fullname" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                                                        
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="username" name="userName" className="form-style" placeholder="Your User Name" id="userName" autocomplete="off" />
                                                        
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                       
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="Mobile" name="MobileNumber" className="form-style" placeholder="Your Mobile No" id="MobileNumber" autocomplete="off" />
                                                        
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                       
                                                    </div>
                                                    <a href="/" className="btn1 mt-4" style={{ marginTop: '12px' }}>submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default SignupAndSignin