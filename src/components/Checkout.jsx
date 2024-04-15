import React, {useContext} from 'react'
import usePost from './hooks/usePost';
import { CartContext } from '../context/cart-context';
import { ModalContext } from '../context/modal-context';

export default function Checkout() {
    const { postData, response, loading, error } = usePost();
    const cartCtx = useContext(CartContext);
    const modalCtx = useContext(ModalContext);

    const formSubmithandler = (e) => {
        e.preventDefault();
        const fD = new FormData(e.target);
        const formValues = Object.fromEntries(fD.entries());
        postData('http://localhost:3000/orders', { order: { customer: formValues } });
    }

    const responseOkHandler = () => {
        cartCtx.dispatchCartItems({type: 'CLEAR'})
        modalCtx.dispatchModal({type: 'CLOSE'})
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (response) {
        return (
            <>
                <h3 className='checkout-response'>Your order has been created! Please check your email for more information.</h3>
                <button onClick={responseOkHandler}>Okay</button>
            </>

        )
    }


    return (
        <form className='checkout' onSubmit={formSubmithandler}>
            <h2>Checkout</h2>
            <div className='checkout-input'>
                <label htmlFor='name'>Full Name</label>
                <input type='text' id='name' name='name' required />
            </div>
            <div className='checkout-input'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required />
            </div>
            <div className='checkout-input'>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' name='street' required />
            </div>
            <div className='checkout-input__group'>
                <div className='checkout-input'>
                    <label htmlFor='postal'>Postal Code</label>
                    <input type='text' id='postal' name='postal-code' required />
                </div>
                <div className='checkout-input'>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' name='city' required />
                </div>
            </div>
            <div className='checkout-submit'>
                 <button className='button' onClick={() => modalCtx.dispatchModal({type: 'SET_TYPE', payload: 'CART'})}>Back</button>
                 <button className='button checkout-submit__button' type='submit'>Submit order</button>
            </div>
        </form>
    )
}
