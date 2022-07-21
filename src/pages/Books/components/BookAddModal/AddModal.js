import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { addBookLoadingSelector } from "../../selectors/addBook";
import { Modal } from "../../../../components/Modal/Modal";
import { Form } from "../Form/Form";
import { Loader } from "../../../../components/Loader/Loader";

export const AddBookModal = ({ onSave, onCancel }) => {
  const loading = useSelector(addBookLoadingSelector);
  return (
    <Modal
      form="create"
      onCancel={onCancel}
      formName="create"
      loading={loading}
    >
      {loading && <Loader />}
      {!loading && <Form mode="create" onSave={onSave} name="create" />}
    </Modal>
  );
};

AddBookModal.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};
