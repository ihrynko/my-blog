import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const StyledItem = styled.li`
  max-width: 400px;
  margin-right: 30px;
  padding: 20px 24px;
  border: 1px solid #ececec;
  &:nth-of-type(3n + 3) {
    margin-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  margin-bottom: 30px;
  &:nth-last-of-type(-n + 3) {
    margin-bottom: 0;
  }
  color: #000000;
  &:focus,
  &:hover {
    color: #bef5be;
  }
`;
