import styled from "styled-components";
export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.COLORS.gray400};
  border-radius: 8px;

  > span {
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.gray};
    padding: 5px 16px;
  }
`;
