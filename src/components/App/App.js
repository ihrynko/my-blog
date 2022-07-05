import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Layout";

const HomePage = lazy(() => import("../../pages/Home"));
const BooksPage = lazy(() => import("../../pages/Books"));
const BookItemPage = lazy(() => import("../../pages/BooksItem"));
const StatisticsPage = lazy(() => import("../../pages/Statistics"));

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
