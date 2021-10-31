import React, { useRef } from 'react';

const Footer = () => {
    const emailRef = useRef();
    const textRef = useRef();

    const addFeedback = (e)=>{
        e.preventDefault();
        alert('Thank You Very Much For Your Feedback');
        e.target.reset();
       
    }


    return (
        <div className='bg-success text-center'>
            <h1 className='pt-5 text-white'>FeedBack Section</h1>
            <form className='py-5' onSubmit={addFeedback}>
                <input type='text' className='w-25 p-2' ref={emailRef} placeholder='Enter Your Email:' />
                <br/>
                <textarea className='w-25 p-2' ref={textRef} placeholder='Enter Your FeedBack'/>
                <br/>
                <input type='submit' className='w-25 p-2 bg-danger text-white' value='Submit FeedBack' />



            </form>

            <h5 className='text-center text-white pb-5'>This Website is Solely Create For Personal Use Only and Hereby Under The Ownership of <span className='text-warning'> Shams Md. Jubair. </span> </h5>
            
        </div>
    );
};

export default Footer;