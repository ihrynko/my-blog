import { Suspense } from "react";

import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="books">BooksList</NavLink>
        </nav>
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
