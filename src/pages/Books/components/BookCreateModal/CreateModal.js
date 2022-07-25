import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { bookCreateLoadingSelector } from "../../selectors/createBook";
import { Modal } from "../../../../components/Modal/Modal";
import { Form } from "../Form/Form";

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