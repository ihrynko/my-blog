import PropTypes from "prop-types";
import { Modal as AntdModal } from "antd";
import { StyledConfirmButton, StyledCancelButton } from "./styled";

export const Modal = ({ children, onCancel, formName, loading, onSave }) => {
  const footer = [
    <StyledCancelButton key="cancel" onClick={onCancel}>
      Cancel
    </StyledCancelButton>,
    <StyledConfirmButton
      key="submit"
      type="primary"
      danger={formName === "delete" ? true : false}
      loading={loading}
      htmlType="submit"
      form={formName}
      onClick={onSave}
    >
      Confirm
    </StyledConfirmButton>,
  ];

  return (
    <AntdModal
      visible={true}
      onCancel={onCancel}
      confirmLoading={loading}
      zIndex={2000}
      footer={footer}
    >
      {children}
    </AntdModal>
  );
};

Modal.defaultProps = {
  onSave: () => {},
};

Modal.propTypes = {
  children: PropTypes.node,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
  formName: PropTypes.string,
  onSave: PropTypes.func,
};
