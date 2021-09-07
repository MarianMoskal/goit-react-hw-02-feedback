import styled from "@emotion/styled";

export const Button = styled.button`
  width: 80px;
  padding: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: blue;
  background-color: yellow;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
