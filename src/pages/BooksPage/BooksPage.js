import { useEffect, useState } from "react";
import { getBooks } from "../../api/books";

import { StyledList, StyledItem, StyledLink } from "./styled";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
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
    </>
  );
}
