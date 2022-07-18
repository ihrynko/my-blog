import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { booksFetchInStart } from "./thunks/books";
import ModalCreateWindow from "../Books/components/BookAddModal/AddModal";
import ModalEditWindow from "../Books/components/BookEditModal/EditModal";

import { modalCreateBookOnShowSelector } from "../Books/components/BookAddModal/redux/selectors";
import { modalEditBookOnShowSelector } from "../Books/components/BookEditModal/redux/selectors";
import { toggleCreateModal } from "../Books/components/BookAddModal/redux/slice";
import { toggleEditModal } from "../Books/components/BookEditModal/redux/slice";
import { deleteFunctionStart } from "../Books/thunks/deleteBook";

// import { crudLoadingSelector } from "../Books/Modal/selectors/modal";
import * as selectors from "./selectors/books";
// import { modalLoadingSelector } from "./Modal/selectors/modal";
import { Dropdown, Space, Button, Popconfirm } from "antd";
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
  StyledMoreIcon,
} from "./styled";

export default function BooksPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectors.booksDataSelector);
  const loading = useSelector(selectors.booksLoadingSelector);
  const error = useSelector(selectors.booksErrorSelector);
  const isCreateModalVisible = useSelector(modalCreateBookOnShowSelector);
  const isEditModalVisible = useSelector(modalEditBookOnShowSelector);

  // const modalLoading = useSelector(crudLoadingSelector);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCreateToggleModal = () => {
    dispatch(toggleCreateModal());
  };
  const handleEditToggleModal = () => {
    dispatch(toggleEditModal());
  };

  const itemsPerPage = 6;
  const itemsCount = 100;

  useEffect(() => {
    dispatch(booksFetchInStart());
  }, [dispatch]);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const pageBooks = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <StyledContainer>
      {loading && !data && !error && <Loader />}
      {!loading && !error && (
        <>
          <StyledButton onClick={handleCreateToggleModal}>
            Create book
          </StyledButton>

          <ModalCreateWindow
            visible={isCreateModalVisible}
            handleCloseModal={handleCreateToggleModal}
          ></ModalCreateWindow>
          <StyledList>
            {pageBooks.map((book) => {
              return (
                <StyledItem key={book._id}>
                  <StyledMoreContainer>
                    <StyledTitle>{book.title}</StyledTitle>
                    <Link to={`/books/${book._id}`}>
                      <Button>
                        <EyeOutlined />
                      </Button>
                    </Link>

                    <Button onClick={handleEditToggleModal}>
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
                    </Popconfirm>
                  </StyledMoreContainer>
                  <StyledText>
                    <StyledSubtitle>Description: </StyledSubtitle>
                    {book.description.slice(0, 100)}...
                  </StyledText>
                  <StyledText>
                    <StyledSubtitle>Create Date: </StyledSubtitle>
                    {moment(book.createdAt).format("DD.MM.YYYY")}
                  </StyledText>
                </StyledItem>
              );
            })}
          </StyledList>
        </>
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
