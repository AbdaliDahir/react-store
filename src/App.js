import React, {useEffect} from 'react'; 
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors.js';
// import { selectCollectionsItemsForView  } from './redux/collections/collection.selectors';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';

import CheckoutPage from './pages/checkoutpage/checkout.component';
import Header from './components/header/header.component.jsx';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { checkUserSession } from './redux/user/user.actions';

function App(props) {
  
  useEffect(() => {
    const { checkUserSession } = props;
    checkUserSession();
    // const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     })
    //   }
    //   setCurrentUser(userAuth);
    //   // addCollectionAndDocuments('shop', props.collection)
    // })
    // console.log(setCurrentUser);
    // unsubscribeFromAuth();
    // unsubscribe to the listener when unmounting
  }, []);

  
  return (
    <div className="App">
      <Header />
      <div> welcom : {`${props.currentUser ? props.currentUser.id : '' }`}</div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage } />
        <Route exact path='/checkout' component={CheckoutPage} />
        {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
        <Route
            exact
            path='/signin'
            render={() =>
              props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
      </Switch>
    </div>
  );
}

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collection: selectCollectionsItemsForView 
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
