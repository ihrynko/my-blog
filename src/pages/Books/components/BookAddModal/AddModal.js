import { useDispatch } from "react-redux";
import Form from "../Form";
import { addFunctionStart } from "../../thunks/addBook";

import { Modal, Button, Spin } from "antd";

const CreateModal = ({ visible, handleCloseModal }) => {
  const dispatch = useDispatch();
  const onSave = (book) => {
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
          <Button key="submit" form="form" type="primary" htmlType="submit">
            Submit
          </Button>,
        ]}
      >
        <Form onSave={onSave} />
      </Modal>
    </>
  );
};

export default CreateModal;
