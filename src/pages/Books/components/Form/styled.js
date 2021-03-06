import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled.p`
  color: red;
`;
export const StyledLabel = styled.label`
  margin-top: 8px;
  color: #212121;
`;
export const StyledInput = styled.input`
  &:focus,
  &:hover {
    outline-color: #778899;
  }
`;

export const StyledTextarea = styled.textarea`
  height: 70px;
  &:focus,
  &:hover {
    outline-color: #778899;
  }
`;
