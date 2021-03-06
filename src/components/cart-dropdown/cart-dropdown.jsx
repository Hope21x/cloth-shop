import React from 'react';
import CustomButton from '../custom-button/custom-button.jsx';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.jsx';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleHiddenCart} from '../../redux/cart/cart.reducer';




const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {

                cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <div className='empty-message-box'>
                <span className='empty-message'>YOUR CART IS EMPTY</span>
              </div>


            }
        </div>
        <CustomButton click_animate onClick={() => {
            history.push('/checkout');
            dispatch(toggleHiddenCart()); 

            }}>GO TO CHECKOUT</CustomButton>
    </div>


);
const mapStateToProps = createStructuredSelector(
{   cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));