import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import { booksFetchStart } from "./slice/books";
import ModalWindow from "../../components/Modal";
import * as selectors from "./selectors/books";
import { Dropdown, Menu, Space, Popconfirm, Button } from "antd";
import {
  StyledContainer,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledSubtitle,
  StyledText,
  StyledMoreContainer,
  StyledMoreIcon,
} from "./styled";

export default function BooksPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectors.booksDataSelector);
  const loading = useSelector(selectors.booksLoadingSelector);
  const error = useSelector(selectors.booksErrorSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  useEffect(() => {
    dispatch(booksFetchStart());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const itemsCount = 100;

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const pageBooks = data.slice(indexOfFirstPost, indexOfLastPost);

  const confirm = (e) => {
    console.log(e);
    toast.success("Click on Yes");
  };

  const cancel = (e) => {
    console.log(e);
    toast.error("Click on No");
  };

  const menu = (book) => (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Button onClick={showModal}>
              {" "}
              Edit
              <ModalWindow isModalVisible={isModalVisible} />
              {/* </ModalWindow>  */}
            </Button>
          ),
        },
        {
          key: "2",
          label: (
            <Popconfirm
              title="Are you sure to delete this book?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
              placement="topRight"
            >
              Delete
            </Popconfirm>
          ),
        },
        {
          key: "3",
          label: <Link to={`/books/${book.id}`}>Open</Link>,
        },
      ]}
    />
  );

  return (
    <StyledContainer>
      {loading && !data && !error && <Loader />}
      {!loading && !error && (
        <StyledList>
          {pageBooks.map((book) => {
            return (
              <StyledItem key={book.id}>
                <StyledMoreContainer>
                  <StyledTitle>{book.title}</StyledTitle>
                  <Dropdown overlay={menu(book)} placement="right">
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
                {/* <Link to={`/books/${book.id}`}>
                  <StyledButton>View more</StyledButton>
                </Link> */}
              </StyledItem>
            );
          })}
        </StyledList>
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
