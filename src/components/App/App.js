import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const BooksPage = lazy(() => import("../../pages/BooksPage"));
const BookItemPage = lazy(() => import("../../pages/BooksItemPage"));
const StatisticsPage = lazy(() => import("../../pages/StatisticsPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="books/:id" element={<BookItemPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
