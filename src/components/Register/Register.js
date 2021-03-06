import './Register.css'
import img from '../../images/shirtless-fit-male-standing-rocky-cliff-near-lighthouse-beacon-sea.jpg';

import React from 'react';
import useAuth from '../Context/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const {handleEmail, handlePassword, handleRegister} = useAuth();
    return (
        <div>
            <div className='row g-0'>
                <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                    <img src={img} alt='img' className='img-fluid size' />


                </div>

                <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                    <h3 className='mt-5 text-center'>Don't Have An Account? Register Here. </h3>
                    <form className='text-center mt-5' onSubmit={handleRegister}>
                        
                        <input type='email' placeholder='Enter Email: ' onBlur={handleEmail} className='p-2 w-50 mb-5'/>
                        <br/>
                        <input type='password' placeholder='Enter Password: ' onBlur={handlePassword} className='p-2 w-50 mb-5'/>
                        <br/>
                        <input type='submit' value=' REGISTER' className='p-2 w-25 bg-success text-white rounded mb-5'/>
                        <br/>

                        <Link to='/login'>
                        <h6>Already Have an Account? Kindly Go To The Login Page.</h6>
                        </Link>





                    </form>

                </div>

            </div>
            
        </div>
    );
};

export default Register;