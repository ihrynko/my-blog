import moment from "moment";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import useAxios from "../../hooks";
import Loader from "../../components/Loader";
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
  const { data: books, error, loading } = useAxios(getBooks);

  return (
    <StyledContainer>
      {loading && !books && !error && <Loader />}
      {!loading && !error && (
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
      {!loading && error && <Notification />}
    </StyledContainer>
  );
}
