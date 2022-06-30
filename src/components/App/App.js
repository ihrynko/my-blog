import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

const HomePage = lazy(() => import("../Home"));
const BooksPage = lazy(() => import("../Books"));
const BookItemPage = lazy(() => import("../BooksItem"));
const Statictics = lazy(() => import("../Statictics"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="books/:id" element={<BookItemPage />} />
          <Route path="statistics" element={<Statictics />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
