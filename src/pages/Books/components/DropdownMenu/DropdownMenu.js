import { useState } from "react";
import { Dropdown } from "antd";
import { DropdownList } from "./DropdownList";
import { StyledMoreIcon } from "./styled";

export const DropdownMenu = (props) => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (event) => {
    if (event.key === "3") {
      this.setState({ visible: false });
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  return (
    <Dropdown
      overlay={<DropdownList {...props} handleMenuClick={handleMenuClick} />}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      placement="right"
      arrow
    >
      <a>
        <StyledMoreIcon />
      </a>
    </Dropdown>
  );
};
