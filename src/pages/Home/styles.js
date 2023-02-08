import styled from "styled-components";

export const PageTitle = styled.div`
  position: relative;
  top: 0;
  margin: 48px auto;
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  justify-content: space-between;
  > h1 {
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: 400;
  }

  > a {
    height: 48px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 207px;
    padding: auto 32px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.COLORS.pink};
    border-radius: 8px;
    svg {
      margin-right: 8px;
      align-self: center;
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.background900};
    }
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.background800};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  main {
    max-width: 1137px;
    overflow: auto;
    margin-right: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .content {
      height: 100%;
      overflow: auto;
      gap: 24px;
      display: flex;
      flex-direction: column;
      margin-bottom: 60px;
      svg {
        height: 12px;
        width: 12px;
      }
      h1 {
        font-weight: 400;
      }

      ::-webkit-scrollbar {
        margin-left: 8px;
        width: 8px;
        background-color: ${({ theme }) => theme.COLORS.background800};
        height: 8px;
        /* margin-top: 48px; */
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.pink};
        border-radius: 8px;
        width: 16px;
        height: 40px;
        border: 2px solid transparent;
        /* margin-top: 48px; */
      }
      h1 {
        color: ${({ theme }) => theme.COLORS.white};
      }
    }
  }
`;
