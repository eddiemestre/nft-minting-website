import {NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Btn = styled.button`
    display: inline-block;
    border: none;
    margin: 0;
    padding: 0;
    font-family: sans-serif; /* Use whatever font-family you want */
    font-size: 1rem;
    line-height: 1;
    background: transparent;
    -webkit-appearance: none;
  
  color: white;
  padding: 20px;
  width: 200px;
  height: 5px;
  border-radius: 10px;
  font-size: 18px;
  text-align: center;
  line-height: 3px;
  background-image:linear-gradient(to bottom, rgba(100, 255, 181, 1), rgba(207, 70, 255, 1));
  background-size:0 0;
  position: relative;
  z-index: 0;
  transition: 0.5s;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:inherit;
    background-size:auto;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" ><rect x="5" y="5" width="100%" height="100%" style="height:calc(100% - 10px);width:calc(100% - 10px)" rx="10" ry="10" stroke-width="2" fill="transparent" stroke="white"/></svg>') 0 / 100% 100%;
            mask: url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" ><rect x="5" y="5" width="100%" height="100%" style="height:calc(100% - 10px);width:calc(100% - 10px)" rx="10" ry="10" stroke-width="2" fill="transparent" stroke="white"/></svg>') 0 / 100% 100%;
  }

  ${props => props.shouldHover && css`
    &:after { 
      content: "»"; 
      position: absolute; 
      opacity: 0; 
      top: 18px; 
      right: 10px; 
      transition: 0.5s; 
    } 
    &:hover { 
      padding-right: 24px; 
      padding-left: 8px; 
      cursor: pointer;
    }
    &:hover:after { 
      opacity: 1; 
      right: 20px; 
    }
  `}
`;