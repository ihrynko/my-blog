import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editBookDataSelector } from "../../selectors/editBook";
import Form from "../Form";
import { updateFetchDataStart } from "../../thunks/editBook";
import { updateFunctionStart } from "../../thunks/editBook";
import { StyledButton } from "./styled";
import { Modal, Button } from "antd";

const ModalEditWindow = ({ visible, handleCloseModal }) => {
  const dispatch = useDispatch();
  const data = useSelector(editBookDataSelector);

  // useEffect(() => {
  //   dispatch(updateFetchDataStart(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const onSubmit = (event) => {
    console.log(event);
    // const id = event._id;
    // const article = {
    //   title: event.title,
    //   description: event.description,
    // };

    // dispatch(updateFunctionStart(id, article));
  };
  return (
    <>
      <Modal
        title="Edit book"
        visible={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel-edit" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <StyledButton
            key="submit-edit"
            form="form"
            type="primary"
            htmlType="submit"
          >
            Edit
          </StyledButton>,
        ]}
      >
        <Form onSubmit={onSubmit} data={data} />
      </Modal>
    </>
  );
};

export default ModalEditWindow;
