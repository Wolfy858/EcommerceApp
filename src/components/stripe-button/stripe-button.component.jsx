import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_rSrvIxSyhBLphOPAOmW1z27j00RmVwPmwD';

  const onToken = token => {
    console.log(token);
    alert('USD? USD is no good out here I need something more REAL!')
  }

  return (
    <StripeCheckout
     label='Pay with dirty fiat'
     name='Ecommerce MTG'
     billingAddress
     shippingAddress
     image='https://svgshare.com/i/CUz.svg'
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
