import moment from "moment";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { booksFetchInStart } from "./thunks/books";
import { addBookItem } from "./thunks/addBook";
import { updateBookItem } from "./thunks/updateBook";
import { deleteBookItem } from "./thunks/deleteBook";

import {
  paginationCurrentPageSelector,
  paginationItemsPerPageSelector,
  booksCurrentBooksSelector,
} from "../../components/Pagination/selectors/pagination";
import { paginationChangePage } from "../../components/Pagination/reducer/pagination";
import { bookUpdateItemIdSetAction } from "./reducers/updateBook";
import { bookDeleteItemDataSetAction } from "./reducers/deleteBook";
import { modalStateSelector } from "../../store/modal/selectors/modal";
import { modalOpenToggleAction } from "../../store/modal/reducers/modal";
import CreateModal from "../Books/components/BookAddModal/AddModal";
import { UpdateModal } from "../Books/components/BookEditModal/EditModal";
import { DeleteModal } from "../Books/components/BookDeleteModal/deleteModal";

import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";

import * as selectors from "./selectors/books";

import { Button, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

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

  const { onShow, name } = useSelector(modalStateSelector);

  const handleCreateBook = (values) => {
    dispatch(addBookItem(values));
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
    // eslint-disable-next-line
  }, []);

  const handleEditModalClose = useCallback(() => {
    dispatch(modalOpenToggleAction({ name: "Update" }));
    // eslint-disable-next-line
  }, []);

  const handleDeleteModalOpenToggle = useCallback((item) => {
    dispatch(bookDeleteItemDataSetAction(item));
    dispatch(modalOpenToggleAction({ name: "Delete" }));
    // eslint-disable-next-line
  }, []);

  const handlePaginate = (pageNumber) => {
    dispatch(paginationChangePage({ page: pageNumber }));
  };

  useEffect(() => {
    dispatch(booksFetchInStart());
  }, [dispatch]);

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
                    <Link to={`/books/${book._id}`}>
                      <Button>
                        <EyeOutlined />
                      </Button>
                    </Link>

                    <Button onClick={() => handleEditOpenModal(book._id)}>
                      <EditOutlined />
                    </Button>

                    <Button onClick={() => handleDeleteModalOpenToggle(book)}>
                      <DeleteOutlined />
                    </Button>
                  </StyledMoreContainer>

                  <StyledTitle>{book.title}</StyledTitle>

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
      {onShow && name === "Create" && (
        <CreateModal
          onSave={handleCreateBook}
          onCancel={handleCreateModalOpenToggle}
        />
      )}
      {onShow && name === "Update" && (
        <UpdateModal
          onSave={handleUpdateBook}
          onCancel={handleEditModalClose}
        />
      )}
      {onShow && name === "Delete" && (
        <DeleteModal
          onSave={handleDeleteBook}
          onCancel={handleDeleteModalOpenToggle}
        />
      )}
      {!loading && error && <Notification />}
    </StyledContainer>
  );
}
