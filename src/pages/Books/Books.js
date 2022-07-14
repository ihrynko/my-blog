import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { booksFetchStart } from "./slice/books";
import { updateBookFetchStart } from "./Modal/slice/modal";
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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const itemsPerPage = 6;
  const itemsCount = 100;

  useEffect(() => {
    dispatch(booksFetchStart());
  }, [dispatch]);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const pageBooks = data.slice(indexOfFirstPost, indexOfLastPost);

  const handleUpdateBookSubmit = (id) => dispatch(updateBookFetchStart(id));

  return (
    <StyledContainer>
      {loading && !data && !error && <Loader />}
      {!loading && !error && (
        <>
          <StyledButton onClick={showModal}> Create book</StyledButton>

          <ModalWindow
            title="Create book"
            visible={isModalVisible}
            handleCloseModal={handleCancel}
          >
            <Form onClose={handleCancel} />
          </ModalWindow>
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
                          visible={isModalVisible}
                          handleCloseModal={handleCancel}
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
