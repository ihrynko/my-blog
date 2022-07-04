import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getBookItem } from "../../api/books";
import Notification from "../../components/Notification";
import { Spinner } from "reactstrap";
import { StyledContainer } from "./styled";

export default function BookItemPage() {
  const { bookId } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getBookItem(bookId)
      .then(setBook, setLoading(false))
      .catch((error) => setError(error));
  }, [bookId]);

  return (
    <>
      {loading && !book && !error && <Spinner />}
      {book && !error && (
        <StyledContainer>
          <h1>{book.title}</h1>
          <h2>Description</h2>
          <p>{book.description}</p>
          <h2>Number of pages</h2>
          <p>{book.pageCount}</p>
          <h2>Excerpt</h2>
          <p>{book.excerpt}</p>
          <h2>Day of publication</h2>
          <p> {moment(book.publishDate).format("DD.MM.YYYY")}</p>
        </StyledContainer>
      )}
      {error && <Notification />}
    </>
  );
}
