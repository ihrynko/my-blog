import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Form from "../Form";
import { bookItemFetchInStart } from "../../../BooksItem/thunks/bookItem";
// import { updateFunctionStart } from "../../pages/Books/Modal/thunks/modal";
// import { crudLoadingSelector } from "../../pages/Books/Modal/selectors/modal";
// import { modalLoadingSelector } from "../Modal_redux/selectors";

import { Modal, Button, Spin } from "antd";

const ModalEditWindow = ({ visible, handleCloseModal }) => {
  // const loading = useSelector(crudLoadingSelector);
  const { bookId } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(bookItemFetchInStart(bookId));
  // }, [dispatch, bookId]);
  const onSubmit = (book) => {
    console.log(book);
    // const id = book._id;
    // const data = {
    //   title: book.title,
    //   description: book.description,
    // };
    // dispatch(updateFunctionStart(id, data));
  };

  return (
    <>
      <Modal
        title="Edit book"
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel-edit" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button
            key="submit-edit"
            form="form"
            type="primary"
            htmlType="submit"
          >
            Edit
          </Button>,
        ]}
      >
        <Form onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default ModalEditWindow;
