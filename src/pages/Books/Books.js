import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { booksFetchInStart } from "./thunks/books";
// import { updateBookFetchStart } from "./Modal/slice/modal";
import ModalWindow from "../../components/BookAddModal";
// import MenuContainer from "../../components/Menu";
import { modalOnShowSelector } from "../../components/Modal_redux/selectors";
import { toggleModal } from "../../components/Modal_redux/slice";
import * as selectors from "./selectors/books";
// import { modalLoadingSelector } from "./Modal/selectors/modal";
// import { Dropdown, Space } from "antd";
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
  const isModalVisible = useSelector(modalOnShowSelector);
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  const itemsPerPage = 6;
  const itemsCount = 10;

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
          <StyledButton onClick={handleToggleModal}>Create book</StyledButton>

          <ModalWindow
            visible={isModalVisible}
            handleCloseModal={handleToggleModal}
            // loading={addLoading}
          ></ModalWindow>
          <StyledList>
            {pageBooks.map((book) => {
              return (
                <StyledItem key={book._id}>
                  <StyledMoreContainer>
                    <StyledTitle>{book.title}</StyledTitle>
                    {/* <Dropdown
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
                    </Dropdown> */}
                  </StyledMoreContainer>
                  <StyledText>
                    <StyledSubtitle>Description: </StyledSubtitle>
                    {book.description.slice(0, 100)}...
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
