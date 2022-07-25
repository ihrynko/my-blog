import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  editBookLoadingSelector,
  editBookDataSelector,
  editBookFetchDataSelector,
} from "../../selectors/updateBook";
import { updateFetchDataStart } from "../../thunks/updateBook";
import { Modal } from "../../../../components/Modal/Modal";
import { Form } from "../Form/Form";
import { Loader } from "../../../../components/Loader/Loader";
import { Typography } from "antd";

/**
 * The UpdateBookModal properties.
 *
 * @typedef {object} Props
 * @property {function} onSave - Function for editing a book.
 * @property {function} onCancel - Function to cancel editing a book.
 *
 */

/**
 * The UpdateBookModal component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}
 */

export const UpdateBookModal = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const fetchData = useSelector(editBookFetchDataSelector);
  const data = useSelector(editBookDataSelector);
  const loading = useSelector(editBookLoadingSelector);
  const { Text } = Typography;

  useEffect(() => {
    dispatch(updateFetchDataStart(fetchData));
  }, []);

  return (
    <Modal
      loading={loading}
      form="edit"
      onCancel={onCancel}
      formName="edit"
      disable={!data}
    >
      {loading && <Loader />}

      {!loading && data && (
        <Form mode="update" onSave={onSave} data={data} name="edit" />
      )}
      {!data && <Text type="danger"> Something went wrong</Text>}
    </Modal>
  );
};

UpdateBookModal.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
