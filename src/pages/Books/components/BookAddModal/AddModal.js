import { useDispatch, useSelector } from "react-redux";
import Form from "../Form";
import { addFunctionStart } from "../../thunks/addBook";
import { addBookLoadingSelector } from "../../selectors/addBook";
import Loader from "../../../../components/Loader";
import { Modal, Button } from "antd";
import { StyledButton } from "./styled";

const CreateModal = ({ visible, handleCloseModal }) => {
  const loading = useSelector(addBookLoadingSelector);
  const dispatch = useDispatch();
  const onSubmit = (book) => {
    dispatch(addFunctionStart(book));
  };
  return (
    <>
      {loading && <Loader />}
      {!loading  && (
        
          <Modal
            title="Create book"
            visible={visible}
            onCancel={handleCloseModal}
            footer={[
              <Button key="cancel" onClick={handleCloseModal}>
                Cancel
          </Button>,
              <StyledButton
                key="submit"
                form="form"
                type="primary"
                htmlType="submit"
              >
                Submit
          </StyledButton>,
            ]}
          >
            <Form onSubmit={onSubmit} />
          </Modal>
        )}
    </>
  );
};

export default CreateModal;
