import React from "react";
import Footer from "../layout/Footer/Footer";
//import './Home.scss';
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
function Home() {
  return (
    <StyledHome>
      <Footer />
    </StyledHome>
  );
}

export default Home;
