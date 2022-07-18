import { useDispatch } from "react-redux";
import Form from "../Form";
import { addFunctionStart } from "../../thunks/addBook";

import { Modal, Button } from "antd";
import { StyledButton } from "./styled";

const CreateModal = ({ visible, handleCloseModal }) => {
  const dispatch = useDispatch();
  const onSubmit = (book) => {
    dispatch(addFunctionStart(book));
  };
  return (
    <>
      <Modal
        title="Create book"
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <StyledButton
            key="submit"
            form="form"
            type="primary"
            htmlType="submit"
          >
            Submit
          </StyledButton>,
        ]}
      >
        <Form onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default CreateModal;
