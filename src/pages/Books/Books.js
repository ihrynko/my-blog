import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { booksFetchStart } from "./reducersRTK/books";

import * as selectors from "./selectors/books";
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
  const dispatch = useDispatch();
  const data = useSelector((state) => selectors.booksDataSelector(state));
  const loading = useSelector(selectors.booksLoadingSelector);
  const error = useSelector(selectors.booksErrorSelector);

  useEffect(() => {
    dispatch(booksFetchStart());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const itemsCount = 100;

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentBooks = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <StyledContainer>
      {loading && !data && !error && <Loader />}
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
        <div className="pagination-container">
          <Pagination
            dataPerPage={itemsPerPage}
            count={itemsCount}
            paginationHandler={setCurrentPage}
            pageNumber={currentPage}
          />
        </div>
      )}
      {!loading && error && <Notification />}
    </StyledContainer>
  );
}
