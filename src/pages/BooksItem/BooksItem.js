import moment from "moment";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/Notification";
import Loader from "../../components/Loader";
import {
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledInfo,
  StyledButton,
} from "./styled";
import { bookItemFetchStart } from "./slice/bookItem";
import * as selectors from "./selectors/bookItem";

export default function BookItemPage() {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector(selectors.bookItemDataSelector);
  const loading = useSelector(selectors.bookItemLoadingSelector);
  const error = useSelector(selectors.bookItemErrorSelector);

  useEffect(() => {
    dispatch(bookItemFetchStart({ id: bookId }));
  }, [dispatch, bookId]);

  return (
    <>
      {loading && !book && !error && <Loader />}
      {!loading && !error && (
        <>
        <StyledButton type="button " onClick={() => navigate(-1)}>
            Back
          </StyledButton>
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
          </>
      )}
      {!loading && error && <Notification />}
    </>
  );
}
