import React from 'react';
import login_photo from  '../../images/login_page_image.jpg'
import useAuth from '../Context/useAuth';
import './Login.css'

const Login = () => {
    const {handlePassword, handleEmail, handleLogin} = useAuth();
    return (
        <div>
            
           <div className="row g-0">
           <div className='col-lg-8 col-md-8 col-sm-12 col-12'>
               
                   <img src={login_photo} alt='login_photo' className='img-fluid login-image' />

               </div>


               <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>

               <h3 className="text-center mb-3 mt-5">Login to Book Tour Packages.</h3>
                   <form className='text-center  py-5' onClick={handleLogin}>
                       <input type='email'required onBlur={handleEmail} placeholder='Enter Your Email:' className='p-2 w-50 my-3  text-danger' />
                       <br/>
                       <input type='password'required onBlur={handlePassword} placeholder='Enter Your Password:' className='p-2 w-50 my-3 text-danger' />
                       <br/>
                       <input type='submit' value='LOGIN'  className='p-2 w-25 my-3 bg-success text-white' />

                   </form>

               </div>
              

           </div>
        </div>
    );
};

export default Login;