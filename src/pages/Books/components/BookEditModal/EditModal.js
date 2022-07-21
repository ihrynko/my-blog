import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal/Modal";
import {
  editBookLoadingSelector,
  editBookDataSelector,
  editBookFetchDataSelector,
} from "../../selectors/updateBook";
import { updateFetchDataStart } from "../../thunks/updateBook";
import { Form } from "../Form/Form";
// import { StyledSpin } from "../DeleteBookModal/styled";
import { Typography } from "antd";

export const UpdateModal = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const fetchData = useSelector(editBookFetchDataSelector);
  const data = useSelector(editBookDataSelector);
  const loading = useSelector(editBookLoadingSelector);
  const { Text } = Typography;

  useEffect(() => {
    dispatch(updateFetchDataStart(fetchData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      loading={loading}
      form="edit"
      onCancel={onCancel}
      formName="edit"
      disable={!data}
    >
      {/* <StyledSpin spinning={loading} /> */}
      <>
        {!loading && data && (
          <Form mode="edit" onSave={onSave} data={data} name="edit" />
        )}
        {!data && <Text type="danger"> Something went wrong</Text>}
      </>
    </Modal>
  );
};
