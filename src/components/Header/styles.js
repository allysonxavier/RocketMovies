import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  padding: 30px 0;
  width: 100%;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.section};
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
      height: 100%;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.gray200};
      display: flex;
      align-items: center;
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
