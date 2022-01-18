import {NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    height: 70px;
    width: auto;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
`;

export const NavLink = styled(Link)`
  color: rgba(244, 177, 255, 1);
  display: flex;
  font-weight: normal;
  font-size: 18px;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -220px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

