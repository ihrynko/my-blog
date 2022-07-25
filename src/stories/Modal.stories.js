import "antd/dist/antd.min.css";
import { Modal } from "../components/Modal/Modal";
import { Form } from "../pages/Books/components/Form/Form";

export default {
  title: "Components/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const FirstStory = {
  args: {
    onSave: () => {},
    formName: "create",
    children: <Form />,
    loading: false,
    onCancel: () => {},
  },
};
