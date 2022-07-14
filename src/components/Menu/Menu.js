import ModalWindow from "../Modal";
import Form from "../Modal/Form";
import { Link } from "react-router-dom";

import { Menu, Popconfirm } from "antd";

const MenuContainer = ({
  showModal,
  book,
  confirm,
  cancel,
  onSubmit,
  loading,
  handleCloseModal,
}) => {
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
                loading={loading}
                handleCloseModal={handleCloseModal}
              >
                <Form onSubmit={onSubmit} />
              </ModalWindow>
            </p>
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
};
export default MenuContainer;
