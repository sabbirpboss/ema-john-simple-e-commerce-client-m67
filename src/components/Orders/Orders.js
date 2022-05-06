import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    
    return (
        <div className='shop-container'>
         <div className="review-item-container">
            {
                cart.length > 0 && cart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                    handleRemoveProduct={handleRemoveProduct}
                ></ReviewItem>)
            }
        </div>
        <div className="cart-container">
                <Cart cart={cart}></Cart>
                <Link to="/inventory">Order Proceed</Link>
                <Link to="/shop">Continue Shopping</Link>
        </div>    
        </div>
    );
};

export default Orders;