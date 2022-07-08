import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookFetchInStart } from "./actions/books";
import Pagination from "../../components/Pagination";
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
import * as selectors from "./selectors/books";

export default function BooksPage() {
  const loading = useSelector(selectors.bookLoadingSelector);
  const books = useSelector((state) => selectors.bookDataSelector(state));
  const error = useSelector(selectors.bookErrorSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookFetchInStart());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const itemsCount = 100;

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <StyledContainer>
      {loading && !books && !error && <Loader />}
      {!loading && !error && (
        <StyledList>
          {currentBooks.map((book) => {
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

      {!loading && !error && (
        <>
          <Pagination
            dataPerPage={itemsPerPage}
            count={itemsCount}
            paginationHandler={setCurrentPage}
            pageNumber={currentPage}
          />
        </>
      )}
      {!loading && error && <Notification />}
    </StyledContainer>
  );
}
