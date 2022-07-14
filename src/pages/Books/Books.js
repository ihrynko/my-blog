import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { booksFetchStart } from "./slice/books";
import { modalFetchStart } from "../Modal/slice/modal";
import { modalFetchClose } from "../Modal/slice/modal";
import { addBookFetchStart } from "../Modal/slice/modal";
import { updateBookFetchStart } from "../Modal/slice/modal";
import { deleteBookFetchStart } from "../Modal/slice/modal";
import ModalWindow from "../../components/Modal";
import Form from "../../components/Modal/Form";
import MenuContainer from "../../components/Menu";
import * as selectors from "./selectors/books";
import { Dropdown, Space } from "antd";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const itemsCount = 100;

  useEffect(() => {
    dispatch(booksFetchStart());
  }, [dispatch]);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const pageBooks = data.slice(indexOfFirstPost, indexOfLastPost);

  const showModal = () => dispatch(modalFetchStart());
  const closeModal = () => dispatch(modalFetchClose());
  const deleteConfirm = (id) => {
    dispatch(deleteBookFetchStart(id));
    toast.success("Book is deleted");
  };

  const cancel = () => {
    closeModal();
    toast.error("Click on No");
  };
  const handleAddBookSubmit = (book) => dispatch(addBookFetchStart(book));
  const handleUpdateBookSubmit = (id) => dispatch(updateBookFetchStart(id));

  return (
    <StyledContainer>
      {loading && !data && !error && <Loader />}
      {!loading && !error && (
        <>
          <StyledButton onClick={showModal}>
            Create book
            <ModalWindow
              title="Create book"
              loading={loading}
              handleCloseModal={closeModal}
            >
              <Form onSubmit={handleAddBookSubmit} />
            </ModalWindow>
          </StyledButton>

          <StyledList>
            {pageBooks.map((book) => {
              return (
                <StyledItem key={book.id}>
                  <StyledMoreContainer>
                    <StyledTitle>{book.title}</StyledTitle>
                    <Dropdown
                      overlay={
                        <MenuContainer
                          showModal={showModal}
                          book={book}
                          confirm={deleteConfirm(book.id)}
                          cancel={cancel}
                          onSubmit={handleUpdateBookSubmit(book.id)}
                          loading={loading}
                          handleCloseModal={closeModal}
                        />
                      }
                      placement="right"
                    >
                      <Space>
                        <StyledMoreIcon />
                      </Space>
                    </Dropdown>
                  </StyledMoreContainer>
                  <StyledText>
                    <StyledSubtitle>Description: </StyledSubtitle>
                    {book.description.slice(0, 200)}...
                  </StyledText>
                  <StyledText>
                    <StyledSubtitle>Create Date: </StyledSubtitle>
                    {moment(book.publishDate).format("DD.MM.YYYY")}
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
