import React from 'react';
import Button from '../components/Button';
import './Background.scss';

const Background = () => {
  const buttons = ['Life Pattern', 'Recommend Exercise', 'Find Disease', 'Correct Meal', 'Health Foods'];

  return (
    <div className="background-image">
      <div className="button-container">
        {buttons.map((label, index) => (
          <Button key={index} label={label} />
        ))}
      </div>
      <div className="center-text">
        당신의 생활 패턴 정보만 알려주세요.<br/>
        <span className="green-text">오마이가든🌿</span>이 분석해 제공합니다.</div> 
      <div className="sub-text">
        사용자 생활 패턴 분석을 통해, <br/>
        질병 예측 및 사용자 맞춤 식단 & 생활 운동 추천 웹사이트
      </div>
      <input className="search-box" type="text" placeholder="Search..." />
    </div>
  );
}

export default Background;
