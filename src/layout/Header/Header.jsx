import React from 'react';
import Logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="menu-left">
        <Link to="/insertinfo">Insert Info</Link>
        <Link to="/disease">Disease</Link>
        <Link to="/lifemove">Life Movement</Link>
        <Link to="/gopro" className="gopro-link">Go Pro</Link>
      </div>

      <div className="menu-center">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="menu-right">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup-link">Sign Up</Link>
        <Link to="/mypage" className="mypage-link">My Page</Link>
      </div>
    </div>
  );
}

export default Header;
