import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.background800};
  display: flex;
  flex-direction: column;
  > main {
    padding: 24px 123px;
    display: flex;
    flex-direction: column;
    max-width: 1366px;

    margin: 48px auto;
    width: 100%;
    grid-area: content;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    h1 {
      color: ${({ theme }) => theme.COLORS.white};
    }
    a {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      width: 207px;
      height: 48px;
      font-size: 16px;
      background-color: ${({ theme }) => theme.COLORS.pink};
      border-radius: 8px;
      padding: 32px;
      svg {
        width: 16px;
        height: 16px;
        color: ${({ theme }) => theme.COLORS.background900};
        display: flex;
        align-items: center;
      }
      .button-add {
        width: 100%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
      }
    }
  }
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
