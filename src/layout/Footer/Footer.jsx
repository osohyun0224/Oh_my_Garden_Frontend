import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: gray;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: "Dovemayo_gothic";
  font-size: 13px;

  h3 {
    margin: 0;
    font-family: "Dovemayo_gothic";
  }

  p {
    margin: 0;
    font-family: "Dovemayo_gothic";
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>
        Dev Team "Oh, my Garden🌿"
        <br />
        Developer. Sohyun.O / PM. Deuni.K <br />
        Contact Us @iamsounii_ & 01067756976
      </h3>
    </FooterWrapper>
  );
};

export default Footer;