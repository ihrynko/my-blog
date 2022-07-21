import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { booksFetchInStart } from "./thunks/books";

import {
  paginationCurrentPageSelector,
  paginationItemsPerPageSelector,
  booksCurrentBooksSelector,
} from "../../components/Pagination/selectors/pagination";
import { paginationChangePage } from "../../components/Pagination/reducer/pagination";
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

  // const handleCreateToggleModal = () => {
  //   dispatch(toggleCreateModal());
  // };
  // const handleEditToggleModal = () => {
  //   dispatch(toggleEditModal());
  // };
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
          {/* <StyledButton onClick={handleCreateToggleModal}>
            Create book
          </StyledButton>

          <ModalCreateWindow
            visible={isCreateModalVisible}
            handleCloseModal={handleCreateToggleModal}
          ></ModalCreateWindow> */}
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

                    {/* <Button onClick={handleEditToggleModal}>
                      <EditOutlined />
                    </Button>
                    <ModalEditWindow
                      visible={isEditModalVisible}
                      handleCloseModal={handleEditToggleModal}
                    ></ModalEditWindow>
                    <Popconfirm
                      title={`Are you sure to delete ${book.title}?`}
                      onConfirm={() => dispatch(deleteFunctionStart(book._id))}
                      okText="Yes"
                      cancelText="No"
                      icon={<QuestionCircleOutlined />}
                    >
                      <Button>
                        <DeleteOutlined />
                      </Button>
                    </Popconfirm> */}
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
      {!loading && error && <Notification />}
    </StyledContainer>
  );
}
