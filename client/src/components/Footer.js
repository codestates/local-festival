import React from "react";
import peachmong from "../assets/peachmong.png";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f1f3f5;
  color: black;
  margin-top: 2rem;
  box-shadow: 0 -2px 0 1px #f0f1f4;
  & > img {
    width: 7%;
    margin: 1rem;
    margin-left: 9%;
  }
  & > div {
    margin-right: 9%;
    margin-top: 6rem;
    float: right;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div>Copyright © 2022 Peachmong All rights reserved.</div>
      <img src={peachmong} alt="peachmong" />
    </Wrapper>
  );
};

export default Footer;
