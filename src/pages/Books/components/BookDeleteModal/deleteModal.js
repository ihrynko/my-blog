import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  deleteBookLoadingSelector,
  deleteBookDataSelector,
} from "../../selectors/deleteBook";
import { Modal } from "../../../../components/Modal/Modal";
import { Loader } from "../../../../components/Loader/Loader";
import { Space, Typography } from "antd";

/**
 * The DeleteBookModal properties.
 *
 * @typedef {object} Props
 * @property {function} onSave - Function for removing a book.
 * @property {function} onCancel - Function to cancel removing a book.
 *
 */

/**
 * The DeleteBookModal component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}
 */

export const DeleteBookModal = ({ onSave, onCancel }) => {
  const loading = useSelector(deleteBookLoadingSelector);
  const data = useSelector(deleteBookDataSelector);

  const { Title, Text } = Typography;

  return (
    <Modal
      loading={loading}
      onCancel={onCancel}
      onSave={() => onSave(data)}
      formName="delete"
    >
      {loading && <Loader />}
      {!loading && (
        <Space direction="vertical">
          <Title level={5}>
            Are you sure that you want to delete{" "}
            <Text underline italic>
              {data.title}
            </Text>
            ?
          </Title>

          <Text>
            The item will be deleted immediately. You can not undo this action.
          </Text>
        </Space>
      )}
    </Modal>
  );
};

DeleteBookModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
