import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import { Spinner } from "reactstrap";
import Notification from "../../components/Notification";
import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledSubtitle,
  StyledText,
  StyledButton,
} from "./styled";

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
    <StyledContainer>
      {loading && !books.length && !error && <Spinner />}
      {books.length && !error && (
        <StyledList>
          {books.map((book) => {
            return (
              <StyledItem key={book.id}>
                <StyledTitle>{book.title}</StyledTitle>
                <StyledText>
                  <StyledSubtitle>Description: </StyledSubtitle>
                  {book.description.slice(0, 200)}...
                </StyledText>
                <StyledText>
                  <StyledSubtitle>Create Date: </StyledSubtitle>
                  {moment(book.publishDate).format("DD.MM.YYYY")}
                </StyledText>
                <Link to={`/books/${book.id}`}>
                  <StyledButton>View more</StyledButton>
                </Link>
              </StyledItem>
            );
          })}
        </StyledList>
      )}
      {error && <Notification />}
    </StyledContainer>
  );
}
