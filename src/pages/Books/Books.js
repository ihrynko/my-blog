import moment from "moment";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { booksFetchStart } from "./thunks/books";
import { bookCreate } from "./thunks/createBook";
import { updateBookItem } from "./thunks/updateBook";
import { deleteBookItem } from "./thunks/deleteBook";

import { paginationChangePage } from "../../components/Pagination/reducer/pagination";
import { bookCreateModalResetAction } from "./reducers/createBook";
import {
  bookUpdateItemIdSetAction,
  updateBookModalResetAction,
} from "./reducers/updateBook";
import {
  bookDeleteItemDataSetAction,
  deleteBookModalResetAction,
} from "./reducers/deleteBook";
import { modalOpenToggleAction } from "../../store/modal/reducers/modal";

import {
  paginationCurrentPageSelector,
  paginationItemsPerPageSelector,
  booksCurrentBooksSelector,
} from "../../components/Pagination/selectors/pagination";
import { modalStateSelector } from "../../store/modal/selectors/modal";

import { CreateBookModal } from "./components/BookCreateModal/CreateModal";
import { UpdateBookModal } from "../Books/components/BookEditModal/EditModal";
import { DeleteBookModal } from "./components/BookDeleteModal/DeleteModal";
import { DropdownMenu } from "../Books/components/DropdownMenu/DropdownMenu";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";
import { Notification } from "../../components/Notification/Notification";

import * as selectors from "./selectors/books";

import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledSubtitle,
  StyledButton,
  StyledText,
  StyledMoreContainer,
} from "./styled";

export default function BooksPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectors.booksDataSelector);
  const loading = useSelector(selectors.booksLoadingSelector);
  const error = useSelector(selectors.booksErrorSelector);
  const currentPage = useSelector(paginationCurrentPageSelector);
  const itemsPerPage = useSelector(paginationItemsPerPageSelector);
  const pageBooks = useSelector(booksCurrentBooksSelector);
  const { open, name } = useSelector(modalStateSelector);

  useEffect(() => {
    dispatch(booksFetchStart());
    return () =>
      dispatch(
        bookCreateModalResetAction(),
        updateBookModalResetAction(),
        deleteBookModalResetAction()
      );
  }, [dispatch, currentPage]);

  const handleCreateBook = (values) => {
    dispatch(bookCreate(values));
  };
  const handleUpdateBook = (values) => {
    dispatch(updateBookItem(values));
  };

  const handleDeleteBook = (book) => {
    dispatch(deleteBookItem(book));
  };

  const handleCreateModalOpenToggle = () => {
    dispatch(modalOpenToggleAction({ name: "Create" }));
  };

  const handleEditOpenModal = useCallback((id) => {
    dispatch(bookUpdateItemIdSetAction({ id }));
    dispatch(modalOpenToggleAction({ name: "Update" }));
  }, []);

  const handleEditModalClose = useCallback(() => {
    dispatch(modalOpenToggleAction({ name: "Update" }));
  }, []);

  const handleDeleteModalOpenToggle = useCallback((item) => {
    dispatch(bookDeleteItemDataSetAction(item));
    dispatch(modalOpenToggleAction({ name: "Delete" }));
  }, []);

  const handlePaginate = (pageNumber) => {
    dispatch(paginationChangePage({ page: pageNumber }));
  };

  return (
    <StyledContainer>
      {loading && !data && !error && <Loader />}
      {!loading && !error && (
        <>
          <StyledButton onClick={handleCreateModalOpenToggle}>
            Create book
          </StyledButton>
          <StyledList>
            {pageBooks.map((book) => {
              return (
                <StyledItem key={book._id}>
                  <StyledMoreContainer>
                    <StyledTitle>{book.title}</StyledTitle>
                    <DropdownMenu
                      data={book}
                      onEdit={handleEditOpenModal}
                      onDelete={handleDeleteModalOpenToggle}
                    />
                  </StyledMoreContainer>
                  <StyledText>
                    <StyledSubtitle>Description: </StyledSubtitle>
                    {book.description.slice(0, 100)}...
                  </StyledText>
                  <StyledText>
                    <StyledSubtitle>Pages: </StyledSubtitle>
                    {book.pageCount}
                  </StyledText>
                  <StyledText>
                    <StyledSubtitle>Create Date: </StyledSubtitle>
                    {moment(book.date).format("DD.MM.YYYY")}
                  </StyledText>
                </StyledItem>
              );
            })}
          </StyledList>
        </>
      )}

      {!loading && !error && (
        <Pagination
          dataPerPage={itemsPerPage}
          count={data.length}
          paginationHandler={handlePaginate}
          pageNumber={currentPage}
        />
      )}
      {open && name === "Create" && (
        <CreateBookModal
          onSave={handleCreateBook}
          onCancel={handleCreateModalOpenToggle}
        />
      )}
      {open && name === "Update" && (
        <UpdateBookModal
          onSave={handleUpdateBook}
          onCancel={handleEditModalClose}
        />
      )}
      {open && name === "Delete" && (
        <DeleteBookModal
          onSave={handleDeleteBook}
          onCancel={handleDeleteModalOpenToggle}
        />
      )}
      {!loading && error && <Notification />}
    </StyledContainer>
  );
}
