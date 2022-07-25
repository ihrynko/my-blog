// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
// export const FirstStory = {
//   args: {},
// };
