import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product , handleRemoveProduct} = props;
    const {name, img, price, shipping, quantity} = product;
    // console.log(name);
    return (
        <div className='review-item'>
            <div className='cart-img'>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p className='cart-product-price'>Price: <span className="orange-color">&{price}</span></p>
                    <p className='shipping'>Shipping: <span className="orange-color">&{shipping}</span></p>
                    <p className='quantity'>Quantity: {quantity}</p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;