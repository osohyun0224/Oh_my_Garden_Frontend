import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Bg from "../assets/image/Background.png";

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-image: url(${Bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: visible;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 120px;
  width: 100%;
`;

const StyledButton = styled(Button)`
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

const CenterText = styled.div`
  color: azure;
  font-family: "Dovemayo_gothic";
  font-size: 30px;
  position: absolute;
  top: 240px;
  width: 100%;
  text-align: center;
`;

const GreenText = styled.span`
  color: #62a443;
`;

const SubText = styled.div`
  color: azure;
  font-family: "Dovemayo_gothic";
  font-size: 20px;
  position: absolute;
  top: 400px;
  width: 100%;
  text-align: center;
`;

const SearchBox = styled.input`
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 900px;
  height: 65px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.76);
  padding: 0 20px;
  font-size: 1em;
`;

const Background = () => {
  const buttons = [
    "Life Pattern",
    "Recommend Exercise",
    "Find Disease",
    "Correct Meal",
    "Health Foods",
  ];

  return (
    <BackgroundWrapper>
      <ButtonContainer>
        {buttons.map((label, index) => (
          <StyledButton key={index} label={label} />
        ))}
      </ButtonContainer>
      <CenterText>
        당신의 생활 패턴 정보만 알려주세요.
        <br />
        <GreenText>오마이가든🌿</GreenText>이 분석해 제공합니다.
      </CenterText>
      <SubText>
        사용자 생활 패턴 분석을 통해,
        <br />
        질병 예측 및 사용자 맞춤 식단 & 생활 운동 추천 웹사이트
      </SubText>
      <SearchBox type="text" placeholder="Search..." />
    </BackgroundWrapper>
  );
};

export default Background;
