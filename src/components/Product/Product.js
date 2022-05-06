import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: {price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-ratings'>Ratings: {ratings} star</p>
            </div>
            <div>
                <button onClick={ () => handleAddToCart(product)} className="btn-cart">
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;