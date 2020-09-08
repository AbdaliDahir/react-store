import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});


/*************************
 * ***********************
 *   Google Sign IN
 * ***********************
 * ***********************
*/

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

/********************************************
 * ******************************************
 *   Sign In Succ/Failer for Email & Google
 * ******************************************
 * ******************************************
*/

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

/*************************
 * ***********************
 *     Email Sign In
 * ***********************
 * ***********************
*/

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

/*************************
 * ***********************
 *    Check Session
 * ***********************
 * ***********************
*/
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

/*************************
 * ***********************
 *     Sign Out
 * ***********************
 * ***********************
*/

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

/*************************
 * ***********************
 *     Sign Up
 * ***********************
 * ***********************
*/
export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
});