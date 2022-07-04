import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  margin-left: auto;
`;

export const StyledSpan = styled.span`
  color: #ffffff;
`;

export const StyledList = styled.ul`
  display: flex;
`;
export const StyledLogo = styled(NavLink)`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: #ff6b08;
  &:hover,
  &:focus {
    color: #ff6b08;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  height: 80px;
  padding-right: 30px;
  padding-left: 30px;
  background-color: #2f303a;
  border-bottom: 2px solid #ececec;
  align-items: center;
`;

export const StyledNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    position: relative;
    padding-bottom: 32px;
    color: #ffffff;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: #ff6b08;
    }
  }
  &:hover,
  &:focus {
    color: #ff6b08;
  }
`;
