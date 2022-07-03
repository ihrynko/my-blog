import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookItem } from "../../api/books";
import { StyledContainer } from "./styled";

export default function BookItemPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookItem(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      {book && (
        <StyledContainer>
          <h1>{book.title}</h1>
          <h2>Description</h2>
          <p>{book.description}</p>

          <h2>Number of pages</h2>
          <p>{book.pageCount}</p>

          <h2>Excerpt</h2>
          <p>{book.excerpt}</p>
          <h2>Day of publication</h2>
          <p> {new Date(book.publishDate).toLocaleDateString()}</p>
        </StyledContainer>
      )}
    </>
  );
}
