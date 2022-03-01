import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

export const media = {
    desktop: (...args) => css`
    @media (min-width: 760px) {
      ${css(...args)};
    }
  `
};

export const Footer = styled.footer`
  background-color: black;
  font-family: nunito-sans, sans-serif;
  text-align: center;
  min-height: 20vh;
  ${media.desktop`
    text-align: left;
  `}
`;

export const Contact = styled.div`
  width: 60%;
  font-size: 12px;
  line-height: 1.33;
  color: #ffffff;
  margin: 0 20px;
`;

export const ContactRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
  color: white;
`;