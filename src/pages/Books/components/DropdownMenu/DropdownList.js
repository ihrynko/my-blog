import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { EditOutlined, DeleteOutlined, ReadOutlined } from "@ant-design/icons";

/**
 * The DropdownList properties.
 *
 * @typedef {object} Props
 * @property {object}  data - Data of one book
 * @property {string}  data._id - Book's id
 * @property {string}  data.title - Book's title
 * @property {string}  data.description - Book's description
 * @property {number}  data.pageCount - Book's pages
 * @property {string}  data.date - Book's publish date
 * @property {string}  data.createdAt - Book's creating date
 * @property {string}  data.updatedAt - Book's updating date
 * @property {function} onEdit - Function for editing a book.
 * @property {function} onDelete - Function for removing a book.
 * @property {function} handleMenuClick - Function to handle dropdown menu.
 *
 */

/**
 * The DropdownList component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement}
 */

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
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
};
