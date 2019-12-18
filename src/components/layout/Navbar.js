import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/ui-logo.svg';
import '../../assets/scss/Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='brand'>
        <Logo className='logo' />
      </div>
      <div className='right'>
        <div className='username'>
          Connected as: <span>Tommy</span>
        </div>
        <button className='disconnect'>Disconnect</button>
      </div>
    </div>
  );
};

export default Navbar;
