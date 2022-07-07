import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #cecece;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 12px;
  color: #212121;
`;

export const StyledSubtitle = styled.p`
  color: #212121;
  margin-bottom: 5px;
`;

export const StyledInfo = styled.div`
  margin-bottom: 10px;
`;

export const StyledButton = styled(Link)`
  font-size: 15px;
  line-height: 1.33;
  padding: 10px;
  color: black;
  border-radius: 5%;
  border: 2px solid #3f51b5;
  box-shadow: #3f51b5;
  margin-left: 25px;
`;
