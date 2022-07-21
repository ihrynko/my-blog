import styled from "@emotion/styled";
import { Button } from "antd";

export const StyledConfirmButton = styled(Button)`
  cursor: pointer;
  color: #ffffff;
  background-color: #ff6b08;
  border: 1px solid #ff6b08;
  min-width: 73px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #212121;
    background-color: #f5f4fa;
    border: 1px solid #ff6b08;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledCancelButton = styled(Button)`
  cursor: pointer;
  &:hover,
  &:focus {
    color: #212121;
    border: 1px solid #ff6b08;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
