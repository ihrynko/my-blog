import { Suspense } from "react";
import { Spinner } from "reactstrap";
import {
  StyledNav,
  StyledLogo,
  StyledList,
  StyledSpan,
  StyledHeader,
  StyledNavItem,
  StyledNavLink,
} from "./styled";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>
        <StyledHeader>
          <StyledLogo to="/">
            My<StyledSpan class="logo__dark">Blog</StyledSpan>
          </StyledLogo>
          <StyledNav>
            <StyledList>
              <StyledNavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="books">BooksList</StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink to="statistics">Statistics</StyledNavLink>
              </StyledNavItem>
            </StyledList>
          </StyledNav>
        </StyledHeader>
        <div>
          <Suspense fallback={<Spinner color="success">Loading...</Spinner>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
}
