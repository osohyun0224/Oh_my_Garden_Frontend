import React from "react";
import Logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  font-family: "Dovemayo_gothic";
  font-size: 20px;

  .menu-left,
  .menu-right {
    display: flex;
    gap: 20px;
    color: black;
    font-family: "Dovemayo_gothic";

    a {
      text-decoration: none;
      color: inherit;
      padding: 5px 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    a.gopro-link {
      color: green;
    }

    a.signup-link {
      background-color: #cbe6b7;
    }

    a.mypage-link {
      background-color: #86de51;
    }
  }

  img {
    height: 50px;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <div className="menu-left">
        <Link to="/insertinfo">Insert Info</Link>
        <Link to="/disease">Disease</Link>
        <Link to="/lifemove">Life Movement</Link>
        <Link to="/gopro" className="gopro-link">
          Go Pro
        </Link>
      </div>

      <div className="menu-center">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="menu-right">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
        <Link to="/mypage" className="mypage-link">
          My Page
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
