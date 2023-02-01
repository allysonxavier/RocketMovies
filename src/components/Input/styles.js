import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 630px;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.background700};
  border-radius: 10px;
  .line {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.section};
  }
  > input {
    width: 100%;
    padding: 19px 24px;
    height: 56px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.gray200};

    font-size: 14px;
    border: 0;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.gray200};
    }
  }
`;
