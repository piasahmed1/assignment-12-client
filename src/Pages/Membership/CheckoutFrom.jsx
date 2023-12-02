import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-router-dom';




import UseAxiosSecure from '../../Hook/UseAxiosSecure';
import { AuthContext } from '../../Authintication/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../Hook/UseAxiosPublic';

const CheckoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const axiosSecure = UseAxiosSecure();
    const [clientSecret, setclientsecret] = useState('')
    const [transactionId, settransactionId] = useState('')

    const axiospublic = UseAxiosPublic();
    const { user } = useContext(AuthContext)



    const { data: meals = [], refetch } = useQuery({
        queryKey: ['meal'],
        queryFn: async () => {

            const res = await axiospublic.get(`/carts?email=${user.email}`);

            return res.data;
        }
    })


    const totalprice = meals.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalprice })
            .then(res => {
                console.log(res.data.clientSecret);
                setclientsecret(res.data.clientSecret)
            })



    }, [axiosSecure, totalprice])



    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);

            setError(error.message)
        } else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
        }

        //confirm payment
        const { paymentIntent, error: confirmerror } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmerror) {
            console.log('confirm error');


        } else {
            console.log('Payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transactionId', paymentIntent.id);
                settransactionId(paymentIntent.id)
            }
            //save the payment in the database
            const payment = {
                email: user.email,
                price: totalprice,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartId: card.map(item => item._id),
                menuItemId: card.map(item => item.menuId),
                status: 'pending'

            }
            const res = await axiosSecure.post('/payments', payment);
            console.log("payment", res.data);

        }

    }
    return (

        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '21px',
                            color: '#000000',
                            '::placeholder': {
                                color: '#000000',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-red-700 my-10'> {error}</p>
            {
                transactionId && <p className='text-green-700 flex justify-start'>
                    your transactionId {transactionId}
                </p>

            }

            <div className='flex justify-center items-center '>
                <button className='btn w-32 bg-red-700 text-white text-center' type="submit" >
                    Pay
                </button>
            </div>

        </form>
    );
};

export default CheckoutFrom;