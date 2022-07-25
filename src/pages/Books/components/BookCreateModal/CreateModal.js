import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { bookCreateLoadingSelector } from "../../selectors/createBook";
import { Modal } from "../../../../components/Modal/Modal";
import { Form } from "../Form/Form";

/**
 * The CreateBookModal properties.
 *
 * @typedef {object} Props
 * @property {function} onSave - Function for adding a book.
 * @property {function} onCancel - Function to cancel adding a book.
 *
 */

/**
 * The CreateBookModal component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}
 */

export const CreateBookModal = ({ onSave, onCancel }) => {
  const loading = useSelector(bookCreateLoadingSelector);
  return (
    <Modal
      form="create"
      onCancel={onCancel}
      formName="create"
      loading={loading}
    >
      <Form mode="create" onSave={onSave} name="create" loading={loading} />
    </Modal>
  );
};

CreateBookModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
