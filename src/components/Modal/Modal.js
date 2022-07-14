import { Modal, Button } from "antd";

const ModalWindow = ({ title, children, handleCloseModal, loading }) => {
  return (
    <>
      <Modal
        title={title}
        visible={true}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal} loading={loading}>
            Cancel
          </Button>,
          <Button
            key="submit"
            form="form"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
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
