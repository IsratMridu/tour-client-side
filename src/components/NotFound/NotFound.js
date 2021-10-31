import React from 'react';
import { Link } from 'react-router-dom';
import not_found from '../../images/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='text-center'>
                <Link to='/'>
                <button className='btn btn-danger mt-4'>Go Back</button>
                </Link>
            </div>
            
            <div className='text-center'>
            <img src={not_found} alt='not_found' className='w-50' />
            </div>
        </div>
    );
};

export default NotFound;