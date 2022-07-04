import { useEffect, useState } from "react";
import { getBooks } from "../../api/books";
import { Spinner } from "reactstrap";
import Notification from "../../components/Notification";
import { StyledList, StyledItem, StyledLink } from "./styled";

export default function BooksPage() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooks()
      .then(setBooks, setLoading(false))
      .catch((error) => setError(error));
  }, []);

  return (
    <>
      {loading && !books.length && !error && <Spinner />}
      {books.length && !error && (
        <StyledList>
          {books.map((book) => {
            return (
              <StyledItem key={book.id}>
                <h3>{book.title}</h3>
                <p>Description: {book.description.slice(0, 200)}</p>
                <p>
                  Create Date: {new Date(book.publishDate).toLocaleDateString()}
                </p>
                <StyledLink to={`/books/${book.id}`}>
                  <button>View more</button>
                </StyledLink>
              </StyledItem>
            );
          })}
        </StyledList>
      )}
      {error && <Notification />}
    </>
  );
}
