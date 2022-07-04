import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Layout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const BooksPage = lazy(() => import("../../pages/BooksPage"));
const BookItemPage = lazy(() => import("../../pages/BooksItemPage"));
const StatisticsPage = lazy(() => import("../../pages/StatisticsPage"));

function App() {
  return (
    <>
      <ToastContainer limit={1} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="books/:bookId" element={<BookItemPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
