import React from 'react';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

const Outer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 250px;
  margin-left: -3px;
  margin-bottom: -3px;
  display: block;
  z-index: 998;
`;
const Inner = styled.div`
  float: left;
  color: #fff;
  font: 20px arial, sans-serif;
  cursor: pointer;
  text-align: center;
  width: 120px;
  height: 42px;
  background: rgb(169, 169, 169);
  background: rgba(200, 0, 0, 0.5);
  margintop: 60px;
  margin-right: -42px;
  padding-top: 5px;
  border-radius: 3px;
  transform: rotate(270deg);
`;
const Tag = styled.a`
  background-color: 'transparent';
  &:link,
  &:visited {
    color: #f1f1f1;
  }
  &:hover,
  &:focus,
  &:active {
    color: ; #000
  }
`;

function ContactUsTag() {
  return (
    <>
      <Outer>
        <Tag
          href="https://www.thecitypainters.com/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Inner>Contact Us</Inner>
        </Tag>
      </Outer>
    </>
  );
}
export default ContactUsTag;
