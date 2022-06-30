import { useEffect, useState } from "react";
import { getBooks } from "../../service/api";
import { Link } from "react-router-dom";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div>
      <ol>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <Link to={`books/${book.id}`}>{book.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
