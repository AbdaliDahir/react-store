import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import {signUpStart} from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = (props) => {

  const {signUpStart} = props;

  const [signUpState, setSignUpState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = signUpState;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    } else {
      signUpStart({email, password, displayName});
    }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //   setSignUpState(prevState => ({
    //     ...prevState,
    //     displayName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   }));
      
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    
    setSignUpState(prevState => ({...prevState, [name]: value }));
  };

  // const { displayName, email, password, confirmPassword } = signUpState;

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={signUpState.displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={signUpState.email}
          handleChange={handleChange}
          label='Email Address'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signUpState.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={signUpState.confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: UserInfo => dispatch(signUpStart(UserInfo))
})

export default connect(null,mapDispatchToProps)(SignUp);
