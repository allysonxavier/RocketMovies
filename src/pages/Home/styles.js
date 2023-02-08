import styled from "styled-components";
export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.background800};
  height: 100vh;
  width: 100%;
  max-width: 1137px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  .content {
    overflow-y: auto;
    overflow: auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 48px auto;
    grid-template-areas:
      "page"
      "content";

    h1 {
      font-weight: 400;
    }
    main {
      /* background-color: ${({ theme }) => theme.COLORS.background700}; */
      margin-top: 138px;
      grid-area: content;
      overflow: auto;
      margin-right: 8px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;

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

    .page {
      position: relative;
      top: 0;
      margin: 48px auto;
      grid-area: page;
      width: 100%;
      display: flex;
      align-items: center;
      height: 48px;
      > h1 {
        color: ${({ theme }) => theme.COLORS.white};
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
    }
  }
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
