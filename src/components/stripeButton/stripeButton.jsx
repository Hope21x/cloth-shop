import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceforStripe = price * 100;
    const publishKey = 'pk_test_51Hz453IGKc6ytthgMCzJbIwkhbpOv7pwG4gHggICtDzOfATiBH8pNrgS2SwJ5MxxcNOwonM0C3XyxrqyiVzyz4rd00SNUMHPW5';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name= 'Cloth Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount= {priceforStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
            
        />
    )
}
export default StripeCheckoutButton;