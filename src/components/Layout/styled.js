import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

export const StyledNav = styled(Nav)`
  justify-content: end;
`;
export const StyledHeader = styled.header`
  height: 80px;
  background: linear-gradient(32deg, #bef5be, #bef5be, #000);
  border-bottom: 2px solid #ececec;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: #ffffff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;

  &.active {
    color: #ffffff;
    box-shadow: 7px 7px 10px 0px rgba(190, 245, 190, 1);
    text-shadow: #bef5be 4px 4px 3px;
  }
`;
