import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutFrom from './CheckoutFrom';

const CheckOut = () => {

    const stripePromise = loadStripe('pk_test_51OFJf0KEl3BF64XLulYplbXXyye8oIOVngxCwL3R8dgJWkN1FkugCwqFmNgrkyCypCPLawN8qJEWyRIKTaOsq5gM00t2b4bxqG');
    
    return (
        <div className='py-20 mx-auto h-screen bg-gradient-to-r from-[#9bafd9] to-[#103783] '>
            <div className='lg:w-1/2 mx-auto '>
            <h1 className='text-center lg:text-5xl font-bold my-5 text-black'>PAYMENT</h1>
            <hr className='w-1/2 mx-auto' />
            <div className='my-20 text-white border p-10 rounded-2xl py-20 bg-gradient-to-r from-[#9bafd9] to-[#103783] shadow-2xl'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom></CheckoutFrom>
                </Elements>
            </div>
            </div>
        </div>
    );
};

export default CheckOut;