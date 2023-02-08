import React from 'react';
import Logo from '../../svg/Logo';

import './header.scss';

const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__contaianer">
        <Logo />
        <div className="page-header__buttons">
          <button className="page-header__users-btn">Users</button>
          <button className="page-header__sign-up-btn">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
