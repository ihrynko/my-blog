import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 60px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const StyledItem = styled.li`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover,
  &.selected {
    background-color: #ff6b08;
    color: #ffffff;
  }
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #ff6b08;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  pointer-events: none;
  cursor: not-allowed;
  opacity: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff6b08;
  }
  &:not(:disabled) {
    cursor: pointer;
    pointer-events: all;
    opacity: 100%;
  }
`;
export const StyledIcon = styled.svg`
  height: 24px;
  width: 24px;
  stroke: #ff6b08;

  &:hover {
    stroke: #ffffff;
  }
`;
