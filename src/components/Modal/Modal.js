// import { useState } from "react";
import { Modal } from "antd";

const ModalWindow = ({ isModalVisible }) => {
  return (
    <>
      <Modal title="Create book" visible={isModalVisible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalWindow;
