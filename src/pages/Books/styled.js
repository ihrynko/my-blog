import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  max-width: 1300px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 400px;
  height: 250px;
  margin-right: 30px;
  padding: 20px 24px;
  border: 1px solid #ececec;
  &:nth-of-type(3n + 3) {
    margin-right: 0;
  }
  &:nth-last-of-type(-n + 3) {
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 8px;
  color: #212121;
`;

export const StyledSubtitle = styled.span`
  color: #212121;
`;
export const StyledText = styled.p`
  margin-bottom: 5px;
`;

export const StyledButton = styled.button`
  display: flex;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  letter-spacing: 0.03em;
  margin-top: 10px;
  cursor: pointer;
  color: #ffffff;
  background-color: #ff6b08;
  padding: 6px 22px;
  border: 1px solid #ff6b08;
  border-radius: 4px;
  min-width: 73px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #212121;
    background-color: #f5f4fa;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledMoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
