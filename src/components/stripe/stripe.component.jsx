import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustemButton from '../custom-button/custom-button.component'
export const StripePayment = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HL5ARCsdcPJkOJWez9s4o5wYBOm2namHYYcQcdbY1iYDKScqsixuM7LW1AaceDfCsfK4UwJ1RGrbMlUog4gy2A100ogxoyyXL';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Sunest Shop Ltd.'
      billingAddress
      shippingAddress
      image='https://avatars3.githubusercontent.com/u/20466978?s=460&u=9283489062ea9a3ca62376dc520bddc592ded07e&v=4'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    >
    <CustemButton> Pay Now </CustemButton>
  </StripeCheckout>
  );
}
