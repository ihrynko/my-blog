import PropTypes from "prop-types";
import { Modal as AntdModal } from "antd";
import { StyledConfirmButton, StyledCancelButton } from "./styled";

/**
 * The modal properties.
 *
 * @typedef {object} Props
 * @property {React.ReactNode} children - Children for modal.
 * @property {function} onCancel - Close the modal.
 * @property {string} formName - The name of form.
 * @property {bool} loading - The loading of modal.
 * @property {function=} onSave - Save the data.
 *
 */

/**
 * The modal component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}
 */
export const Modal = ({ children, onCancel, formName, loading, onSave }) => {
  const footer = [
    <StyledCancelButton key="cancel" loading={loading} onClick={onCancel}>
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
  onCancel: () => {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  formName: PropTypes.string.isRequired,
  onSave: PropTypes.func,
};
