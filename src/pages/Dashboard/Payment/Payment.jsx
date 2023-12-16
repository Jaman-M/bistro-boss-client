import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2)) //dosomik er por 2 ghor porjonto dekhanor jonne
    return (
        <div className='w-5/6'>
            <SectionTitle subHeading="Please Process" heading="Payment"></SectionTitle>
            <h2 className='text-3xl'>Taka payment----</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={total}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;