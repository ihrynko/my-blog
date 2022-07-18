import styled from "@emotion/styled";
import { Button } from "antd";
export const StyledButton = styled(Button)`
  border: 1px solid #ff6b08;
  color: #ffffff;
  background-color: #ff6b08;
  &:hover,
  &:focus {
    color: #212121;
    border: 1px solid #ff6b08;
    background-color: #f5f4fa;
  }
`;
