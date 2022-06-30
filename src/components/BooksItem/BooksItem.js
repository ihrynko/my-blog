import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getBookItem } from "../../service/api";
import { Outlet } from "react-router-dom";

export default function BookItemPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getBookItem(id).then(setBook);
  }, [id]);

  const date = book.publishDate.toLocalString();
  return (
    <>
      <button to={location?.state?.from ?? "/books"}>Go back</button>
      {book && (
        <div>
          <h1>{book.title}</h1>
          <h2>Description</h2>
          <p>{book.description}</p>

          <h2>Number of pages</h2>
          <p>{book.pageCount}</p>

          <h2>Excerpt</h2>
          <p>{book.excerpt}</p>
          <h2>Day of publication</h2>
          <p>{date}</p>
        </div>
      )}
      <Outlet />
    </>
  );
}
