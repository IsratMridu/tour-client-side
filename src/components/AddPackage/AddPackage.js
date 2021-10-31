import React, { useRef } from 'react';

const AddPackage = () => {
    const countryRef = useRef();
    const capitalRef = useRef();
    const placeRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();


    const addNewPackage = (e) =>{
        e.preventDefault();
        const newPackage = {
            country: countryRef.current.value,
            capital: capitalRef.current.value,
            image: imageRef.current.value,
            places: placeRef.current.value,
            description: descriptionRef.current.value 
        };

        fetch('https://grim-village-10038.herokuapp.com/addNewPackage',{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newPackage)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Package Added Successfully');
                e.target.reset();
            }
        })
    }



    return (
        <div className='text-center bg-success'>
            <form className='py-5' onSubmit={addNewPackage}>
                <input type='text' className='p-2 mb-4 w-25' ref={countryRef} placeholder='Enter Country Name:'/>
                <br/>
                <input type='text' className='p-2 mb-4 w-25' ref={capitalRef} placeholder='Enter Capital Name:'/>
                <br/>
                <textarea placeholder='Enter Places To Visit:' ref={placeRef} className='w-25 mb-4'/>
                <br/>
                <textarea placeholder='Enter Description:' ref={descriptionRef} className='w-50 mb-4'/>
                <br/>
                
                <input type='text' className='p-2 mb-4 w-25' ref={imageRef} placeholder='Enter Image URL:'/>
                <br/>
                <input type='submit' value='Add Package' className='mb-5 p-2 rounded bg-primary text-white' />
                
            </form>
        </div>
    );
};

export default AddPackage;