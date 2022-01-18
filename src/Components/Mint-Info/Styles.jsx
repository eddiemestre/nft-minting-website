import styled from "styled-components";

export const Body = styled.nav`
    position: relative;
    height: 35em;
    width: 40em;
    top: 15em;
    /* background-color: pink; */
`;

export const Title = styled.div`
    /* background-color: #f3ec78; */
    background-image: linear-gradient(90deg, rgba(250, 0, 255, 1), rgba(166, 223, 255, 1));
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    width: auto;
    height: 122px;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
`;

export const Info = styled.div`
    color: white;
    width: auto;
    font-size: 24px;
    line-height: 196.68%;
    text-align: center;
    /* background-color: purple; */
    padding: 20px;
`;

export const Number = styled.div`
    color: white;
    width: auto;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    /* background-color: gray; */
    padding-top: 20px;
    padding-bottom: 40px;
`;

export const Btn = styled.nav`
  display: flex;
  position: relative;
  /* background-color: blue; */
  margin: 0 auto;
  width: 50%;
  left: 9%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const Address = styled.div`
    color: white;
    /* background-color: blue; */
    text-align: center;
    padding-top: 40px;
    font-size: 18px;
    line-height: 35px;
`;