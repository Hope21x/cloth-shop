import React from 'react';
import './custom-button.scss';

const CustomButtom = ({children,isGoogleSignIn, inverted, click_animate,...otherProps}) => (
    <button className={ `${click_animate ? 'click_animate': ''}${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        <div className='button-text'>{children}</div>

    </button>
);
export default CustomButtom;