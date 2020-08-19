import React, {useState, useEffect } from 'react'; 
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }
      setCurrentUser(userAuth);
    })
    console.log(currentUser);
    return () => unsubscribeFromAuth()
    // unsubscribe to the listener when unmounting
  }, []);

  

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
  <div> welcom : {`${currentUser ? currentUser.id : '' }`}</div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage } />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
