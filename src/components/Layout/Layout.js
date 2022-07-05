import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  StyledNav,
  StyledLogo,
  StyledList,
  StyledSpan,
  StyledHeader,
  StyledNavItem,
  StyledNavLink,
} from "./styled";
import Loader from "../Loader";

export default function Layout() {
  return (
    <div>
      <StyledHeader>
        <StyledLogo to="/">
          My<StyledSpan>Blog</StyledSpan>
        </StyledLogo>
        <StyledNav>
          <StyledList>
            <StyledNavItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink to="books">Books</StyledNavLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledNavLink to="statistics">Statistics</StyledNavLink>
            </StyledNavItem>
          </StyledList>
        </StyledNav>
      </StyledHeader>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
