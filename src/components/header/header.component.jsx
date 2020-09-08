import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors.js';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

import { signOutStart } from '../../redux/user/user.actions'

const Header = ({currentUser, hidden, signOutStart}) => (
  <div className='header'>
    <div>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
        <span> Sunest Shop</span>
      </Link>
    </div>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={signOutStart}>Sign Out</div>
        :
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);