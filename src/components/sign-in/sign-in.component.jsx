import React, { useState } from 'react';
import {connect} from "react-redux";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = (props) => {
  const {googleSignInStart} = props;
  const [signInState, setSignInState] = useState({
    email: '',
    password: ''
  }); 

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password} = signInState;

    // try {
    //   await auth.signInWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   setSignInState(prevState => ({
    //     ...prevState,
    //     email: '',
    //     password: ''
    //   }));

    // } catch (error) {
    //   console.error(error);
    // }

  };

  const handleChange = event => {
    const { value, name } = event.target;

    setSignInState(prevSignIn => ({ 
      ...prevSignIn,
      [name]: value 
    })
    );
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={signInState.email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={signInState.password}
          handleChange={handleChange}
          label='password'
          required
        />
        <CustomButton type='submit'> Sign in </CustomButton>
        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> Sign in with google </CustomButton>
      </form>
    </div>
  ); 
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
