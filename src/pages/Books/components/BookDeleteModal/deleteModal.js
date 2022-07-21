import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal/Modal";
import {
  deleteBookLoadingSelector,
  deleteBookDataSelector,
} from "../../selectors/deleteBook";
import { Space, Typography } from "antd";

export const DeleteModal = ({ onSave, onCancel }) => {
  const loading = useSelector(deleteBookLoadingSelector);
  const data = useSelector(deleteBookDataSelector);

  const { Title, Text } = Typography;

  return (
    <Modal onCancel={onCancel} onSave={() => onSave(data)}>
      {!loading && data && (
        <Space direction="vertical">
          <Title level={5}>
            Are you sure that you want to delete
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
