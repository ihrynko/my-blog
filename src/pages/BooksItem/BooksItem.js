import moment from "moment";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks";
import { getBookItem } from "../../api/books";
import Notification from "../../components/Notification";
import Loader from "../../components/Loader";
import {
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledInfo,
} from "./styled";

export default function BookItemPage() {
  const { bookId } = useParams();
  const { error, data: book, loading } = useAxios(() => getBookItem(bookId));

  return (
    <>
      {loading && !book && !error && <Loader />}
      {!loading && !error && (
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
      {!loading && error && <Notification />}
    </>
  );
}
