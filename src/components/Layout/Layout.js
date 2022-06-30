import { Suspense } from "react";
import { NavItem, Spinner } from "reactstrap";
import { StyledNav, StyledHeader, StyledNavLink } from "./styled";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>
        <StyledHeader>
          <StyledNav>
            <NavItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="books">BooksList</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="statistics">Statistics</StyledNavLink>
            </NavItem>
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
