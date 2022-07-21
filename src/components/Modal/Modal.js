import { Button, Modal as AntdModal } from "antd";
// import { StyledButton } from "./styled";
export const Modal = ({ children, onCancel, formName, loading, onSave }) => {
  return (
    <AntdModal
      visible={true}
      onCancel={onCancel}
      confirmLoading={loading}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          danger
          loading={loading}
          htmlType="submit"
          form={formName}
          onClick={onSave}
        >
          Confirm
        </Button>,
      ]}
    >
      {children}
    </AntdModal>
  );
};

Modal.defaultProps = {
  onSave: () => {},
};
