import styled from "@emotion/styled";

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

export const StyledButton = styled.button`
  margin: 20px 150px;
  display: block;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.63;
  letter-spacing: 0.03em;
  margin-top: 10px;
  cursor: pointer;
  color: #212121;
  background-color: #f5f4fa;
  padding: 6px 22px;
  border: 1px solid #ff6b08;
  border-radius: 4px;
  min-width: 73px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #ff6b08;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
