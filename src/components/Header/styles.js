import styled from "styled-components";

export const Line = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.section};
`;

export const Container = styled.header`
  margin: 0 auto;
  width: 100%;
  max-width: 1366px;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.background800};

  > h1 {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.pink};
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    strong {
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.white};
    }
    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.gray200};
      display: flex;
      align-self: flex-end;
    }
  }
  > a {
    img {
      margin-left: 9px;
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  }
`;
