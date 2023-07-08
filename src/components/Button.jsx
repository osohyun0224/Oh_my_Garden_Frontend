import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  height: 60px;
  border-radius: 30px;
  background-color: rgba(30, 30, 30, 0.58);
  color: white;
  transition: 0.3s;
  text-align: center;
  line-height: 60px;
  display: inline-block;
  padding: 0 20px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Button = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
