import React from "react";
import styled, { keyframes } from "styled-components";

const arrow1 = keyframes`
  from {
    opacity: 0;
    top: -25px;
  }
  
  to {
    opacity: 0;
    top: 0px;
  }
  
  50% {
    opacity: 1;
  }
`;

const arrow2 = keyframes`
  from {
    opacity: 0;
    top: -35px;
  }
  
  to {
    opacity: 0;
    top: -10px;
  }
  
  50% {
    opacity: 1;
  }
`;

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 42px;
  height: 16px;
  opacity: 0;
  
  &::before,
  &::after {
    content: "";
    width: 21px;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    display: inline-block;
  }
  
  &::before {
    transform: rotate(45deg) translateX(25%)
  }
  
  &::after {
    transform: rotate(-45deg) translateX(-25%)
  }
  
  &:nth-child(1) {
    top: -50px;
    opacity: 1;
    animation: ${arrow1} 1s ease 0s infinite;
  }
  
  &:nth-child(2) {
    top: -25px;
    animation: ${arrow2} 1s ease 0.25s infinite;
  }
`;

const Wrapper = styled.div`
  position: relative;
  bottom: 3rem;
  width: 100%;
  height: 3rem;
`

const ScrollDownIndicator = () => (
  <Wrapper>
    <Arrow />
    <Arrow />
  </Wrapper>
);

export default ScrollDownIndicator;
