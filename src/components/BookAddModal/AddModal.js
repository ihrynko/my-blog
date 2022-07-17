import { useDispatch } from "react-redux";
import { Modal, Button, Spin } from "antd";
import Form from "../Form";
import { addFunctionStart } from "../../pages/Books/Modal/thunks/modal";

const ModalWindow = ({ visible, handleCloseModal }) => {
  const dispatch = useDispatch();
  const onSubmit = (book) => {
    console.log(book);
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
          <Button
            key="submit"
            form="form"
            type="primary"
            htmlType="submit"
            // loading={loading}
          >
            Submit
          </Button>,
        ]}
      >
        {/* <Spin> */}
        <Form onSubmit={onSubmit} />
        {/* </Spin> */}
      </Modal>
    </>
  );
};

export default ModalWindow;
// spinning = { loading };
