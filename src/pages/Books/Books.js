import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import useAxios from "../../hooks";
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

export default function BooksPage() {
  const { data, error, loading } = useAxios(getBooks);
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