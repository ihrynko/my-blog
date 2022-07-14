import { Modal, Button } from "antd";

const ModalWindow = ({ title, visible, children, handleCloseModal }) => {
  return (
    <>
      <Modal
        title={title}
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
        {children}
      </Modal>
    </>
  );
};

export default ModalWindow;
