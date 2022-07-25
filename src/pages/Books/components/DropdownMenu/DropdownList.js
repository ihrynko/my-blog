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
        <Link to={`/books/${id}`}>Read More</Link>
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
  data: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    pageCount: PropTypes.number,
    date: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};
