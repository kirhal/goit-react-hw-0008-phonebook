import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  // padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(3, 25, 39);
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-right: 16px;

  color: rgb(11, 51, 78);
  text-decoration: none;

  font-size: 26px;
  font-weight: bold;

  &.active {
    color: red;
    // text-decoration: underline;
  }
`;
export const AuthLink = styled(NavLink)`
  display: inline-block;
  margin-left: 16px;

  color: rgb(11, 51, 78);
  text-decoration: none;

  font-size: 26px;
  font-weight: bold;

  &.active {
    color: red;
  }
`;

export const AuthNav = styled.div`
  justify-content: space-between;
  align-items: center;
`;
