import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, decreaseCartQuantity, addToCart } from '../management/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart); 
    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };

    const handleCartItemDecreaseQuantity = (item) => {
        dispatch(decreaseCartQuantity(item));
    };

    const handleCartItemIncreaseQuantity = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <div className='cart-container'>
            <h2>Cart</h2>
            {cart?.cartItems.length === 0 ? (
                <div className='cart-empty'>
                    <p>Your cart is empty</p>
                    <div className='start-shopping'>
                        <Link to='/'>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='titles'>
                        <h3 className='product-title'>Product</h3>
                        <h3 className='price'>Price</h3>
                        <h3 className='quantity'>Quantity</h3>
                        <h3 className='total'>Total</h3>
                    </div>
                    <div className='cart-items'>
                        {cart.cartItems && cart.cartItems.map(cartItem => ( 
                            <div className='cart-item' key={cartItem.id}>
                                <div className='cart-product'>
                                {cartItem.image && <img src={cartItem.image} alt={cartItem.name} />} 
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.description}</p>
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </div>
                                <div className='cart-product-price'>
                                    ${cartItem.price}
                                </div>
                                <div className='cart-product-quantity'>
                                    <button onClick={() => handleCartItemDecreaseQuantity(cartItem)}>-</button>
                                    <div className='count'>{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleCartItemIncreaseQuantity(cartItem)}>+</button>
                                </div>
                                <div className='cart-product-total-price'>
                                    ${cartItem.price * cartItem.cartQuantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cart-summary'>
                        <button className='clear-cart'>Clear Cart</button>
                        <div className='cart-checkout'>
                            <div className='sub-total'>
                                <span>Sub total</span>
                                <span className='amount'>
                                    ${cart.cartTotalAmount}
                                </span>
                                <p>Taxes and Shipping calculated @ checkout</p>
                                <button>Check out</button>
                                <div className='continue-shopping'>
                                    <Link to='/'>
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
