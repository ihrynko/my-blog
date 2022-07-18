import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editBookDataSelector } from "../../selectors/editBook";
import Form from "../Form";
import { updateFetchDataStart } from "../../thunks/editBook";
import { updateFunctionStart } from "../../thunks/editBook";
import { StyledButton } from "./styled";
import { Modal, Button } from "antd";

const ModalEditWindow = ({ visible, handleCloseModal }) => {
  const dispatch = useDispatch();
  // const data = useSelector(editBookDataSelector);

  // useEffect(() => {
  //   dispatch(updateFetchDataStart(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const onSubmit = (book) => {
    console.log(book);
    // const id = book._id;
    // const book = {
    //   title: book.title,
    //   description: book.description,
    // };

    // dispatch(updateFunctionStart(id, book));
  };
  return (
    <>
      <Modal
        title="Edit book"
        visible={visible}
        onCancel={handleCloseModal}
        maskStyle={{ backgroundColor: "#757575", opacity: 0.1 }}
        footer={[
          <Button key="cancel-edit" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <StyledButton
            key="submit-edit"
            form="form"
            type="primary"
            htmlType="submit"
          >
            Edit
          </StyledButton>,
        ]}
      >
        <Form onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default ModalEditWindow;
