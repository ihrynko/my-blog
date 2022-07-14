import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Popconfirm } from "antd";
import { toast } from "react-toastify";
import { deleteBookFetchStart } from "../../pages/Books/Modal/slice/modal";

import ModalWindow from "../Modal";
import UpdateForm from "../Modal/Form";

const MenuContainer = ({ showModal, book, visible, handleCloseModal }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    setIsModalVisible(false);
    dispatch(deleteBookFetchStart(id));
    toast.success("Book is deleted");
  };
  return (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <p onClick={showModal}>
              Edit
              <ModalWindow
                title="Update book"
                visible={visible}
                handleCloseModal={handleCloseModal}
              >
                <UpdateForm onClose={handleCloseModal} />
              </ModalWindow>
            </p>
          ),
        },
        {
          key: "2",
          label: (
            <Popconfirm
              title="Are you sure to delete this book?"
              onConfirm={() => deleteBook(book.id)}
              onCancel={isModalVisible}
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
};
export default MenuContainer;
