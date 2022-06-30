import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";

const BooksPage = lazy(() => import("../Books"));
const BookItemPage = lazy(() => import("../BooksItem"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="books" element={<BooksPage />} />
          <Route path=":id" element={<BookItemPage />} />
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
