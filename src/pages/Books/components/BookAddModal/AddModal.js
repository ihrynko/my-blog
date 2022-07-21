import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal/Modal";
import { Form } from "../Form/Form";
import Loader from "../../../../components/Loader";
import { StyledButton } from "./styled";

const CreateModal = ({ onSave, onCancel }) => {
  return (
    <Modal form="create" onCancel={onCancel} formName="create">
      <Form mode="create" onSave={onSave} name="create" />
    </Modal>
  );
};

export default CreateModal;
