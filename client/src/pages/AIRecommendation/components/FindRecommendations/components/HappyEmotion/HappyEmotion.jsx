import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.clicked ? 700 : 300)};
  color: var(--text-white);
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const blink = keyframes`
  0%, 20%, 60%, 100% {
    transform: scaleY(1);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: scaleY(0.1);
  }
`;

const Svg = styled.svg`
  width: 64px;
  height: 64px;
  transition: transform 0.3s;
  cursor: pointer;

  &.clicked {
    transform: scale(1.2) rotate(5deg);
  }

  .face {
    fill: var(--face-fill, var(--primary-color));
    stroke: var(--face-stroke, var(--primary-color-light));
  }

  &.clicked .face {
    fill: var(--face-fill-hover, var(--primary-color-light));
  }

  .eye {
    transform-origin: center;
    animation: ${blink} 4s infinite;
    fill: #000000;
  }

  &.clicked .eye {
    animation: ${blink} 0.5s infinite;
  }

  .mouth {
    transition: d 0.3s;
    stroke: #000000;
  }

  &:hover .mouth,
  &.clicked .mouth {
    d: path("M20 40 Q32 60, 44 40");
  }
`;
const HappyEmotion = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <Svg
        className={clicked ? "clicked" : ""}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        onClick={handleClick}
      >
        <circle className="face" cx="32" cy="32" r="30" strokeWidth="4" />
        <circle className="eye" cx="22" cy="24" r="4" />
        <circle className="eye" cx="42" cy="24" r="4" />
        <path
          className="mouth"
          d="M22 40 C 26 46, 38 46, 42 40"
          strokeWidth="4"
          fill="none"
        />
      </Svg>
      <Title clicked={clicked}>Happy</Title>
    </>
  );
};

export default HappyEmotion;
