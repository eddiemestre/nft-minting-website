import styled from "styled-components";

export const Glow = styled.nav`
    position: absolute;
    width: 50%;
    height: 75%;
    left: 2%;
    top: 8%;
    background: radial-gradient(47.49% 47.49% at 50% 50%, rgba(227, 48, 48, 0) 0%, #B947FF 0.01%, rgba(217, 61, 220, 0.56) 43.75%, rgba(0, 0, 0, 0) 100%);
`;


export const Left = styled.nav`
    width: 446px;
    height: 446px;
    border: 1px solid rgba(255, 255, 255, 1);
    left: 10%;
    top: 29%;
    transform: rotate(-22.55deg);
    background: black;
    z-index: 3;
    position: absolute;
`;

export const Middle = styled.nav`
    width: 446px;
    height: 446px;
    border: 1px solid rgba(255, 255, 255, 1);
    left: 15%;
    top: 27%;
    transform: rotate(-8.87deg);
    position: absolute;
    z-index: 5;
    background: black;
`;

export const Top = styled.nav`
    width: 446px;
    height: 446px;
    border: 1px solid rgba(255, 255, 255, 1);
    left: 20%;
    top: 25%;
    position: absolute;
    z-index: 7;
    background: black;
`;