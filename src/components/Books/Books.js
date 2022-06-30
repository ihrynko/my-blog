import { useEffect, useState } from "react";
import { getBooks } from "../../service/api";

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
              <StyledLink to={`/books/${book.id}`}>{book.title}</StyledLink>
              <p>Description: {book.description.slice(0, 200)}</p>
              <p>
                Create Date: {new Date(book.publishDate).toLocaleDateString()}
              </p>
            </StyledItem>
          );
        })}
      </StyledList>
    </>
  );
}
