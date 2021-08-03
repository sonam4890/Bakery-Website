import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

const cart = (props) => {
    if(props.items.length === 0) {
        return (
            <div className='Empty'>
                <h1>Your cart is empty</h1>
                <Link to='/store'>Please Add Item</Link>
            </div>
        )
    } else {
        let totalPrice = 0;
        for(let {price} of props.items){
        totalPrice += price;
        }

    return (
        <div className='Cart'>
            <div className='container'>
            {props.items.map((item) => (
                <div className="row item">
                    <div className='col-4'>
                        <img src={item.name} alt={item.id} className='Item'></img>
                    </div>
                    <div className='col-8'>
                        <p>{item.id}</p>
                        <p>Rs: {item.price}</p>
                        <div className='option'>
                            <span className='link' onClick={() => props.delete(item.id)}>Delete</span>
                            <Link to='/store' className='link'><span>See more like this</span></Link>
                        </div>
                    </div>
                </div> 
            ))}
           </div>
           <div className='Price'>
               <p>Price Details</p>
               <div className='row'>
                   <div className='col-6'>Subtotal ({props.items.length} item)</div>
                   <div className='col-6'>{totalPrice.toFixed(2)}</div>
               </div>
               <Link to='#' className="Button" className='links'>Place Order</Link>
               <Link to='/store' className='links'>Continue Shopping</Link>
           </div>
        </div>
    )
            }
}

export default cart;