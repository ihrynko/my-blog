import React, { useEffect } from "react";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/Notification";
import Loader from "../../components/Loader";
import { bookItemFetchStart } from "./actions/bookItem";
import {
  StyledContainer,
  StyledTitle,
  StyledSubtitle,
  StyledInfo,
  StyledButton,
} from "./styled";
import * as selectors from "./selectors/bookItem";

export default function BookItemPage() {
  const { bookId } = useParams();
  const loading = useSelector(selectors.bookItemLoadingSelector);

  const book = useSelector((state) => selectors.bookItemDataSelector(state));
  const error = useSelector(selectors.bookItemErrorSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(bookItemFetchStart(bookId));
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
