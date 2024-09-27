import React from 'react';
import logo from "../../assets/images/logosm.png";

const Logo = () => {
  const userId = localStorage.getItem('login_token');
  const isLoggedIn = !!localStorage.getItem('login_token');
  if(userId){}
  return (
    <>
    <a href={isLoggedIn ? '/jobs' : '/'} className='navbar-brand'>
      <img src={logo} className='d-inline-block align-text-top' alt="Logo"/>
    </a>
    </>
  );
};

export default Logo;
