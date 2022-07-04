import moment from "moment";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookItem } from "../../api/books";
import Notification from "../../components/Notification";
import { Spinner } from "reactstrap";
import {
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledInfo,
} from "./styled";

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
          <StyledTitle>{book.title}</StyledTitle>
          <StyledInfo>
            <StyledSubtitle>Description</StyledSubtitle>
            <p>{book.description}</p>
          </StyledInfo>
          <StyledInfo>
            <StyledSubtitle>Number of pages</StyledSubtitle>
            <p>{book.pageCount}</p>
          </StyledInfo>
          <StyledInfo>
            <StyledSubtitle>Excerpt</StyledSubtitle>
            <p>{book.excerpt}</p>
          </StyledInfo>
          <StyledInfo>
            <StyledSubtitle>Day of publication</StyledSubtitle>
            <p> {moment(book.publishDate).format("DD.MM.YYYY")}</p>
          </StyledInfo>
        </StyledContainer>
      )}
      {error && <Notification />}
    </>
  );
}
