import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.pink};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.background800};
  font-size: 16px;
  border: none;
  height: 48px;
  width: 100%;
  &:disabled {
    opacity: 0.5;
  }
`;
