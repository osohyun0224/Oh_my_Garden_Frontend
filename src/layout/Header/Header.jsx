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
        <Link to="/gopro">Go Pro</Link>
      </div>

      <div className="menu-center">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="menu-right">
        <Link to="/signup">회원가입</Link>
        <Link to="/login">로그인</Link>
        <Link to="/mypage">My Page</Link>
      </div>
    </div>
  );
}

export default Header;
