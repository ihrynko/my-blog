import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { EditOutlined, DeleteOutlined, ReadOutlined } from "@ant-design/icons";

export const DropdownList = ({ data, onEdit, onDelete, handleMenuClick }) => {
  const { _id: id } = data;
  return (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<ReadOutlined />}>
        <Link to={`/books/${id}`}>Open</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<EditOutlined />} onClick={() => onEdit(id)}>
        <span>Edit</span>
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<DeleteOutlined />}
        onClick={() => onDelete(data)}
      >
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  );
};

DropdownList.propTypes = {
  data: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  handleMenuClick: PropTypes.func,
};
