import styled from "styled-components";

export const Container = styled.div`
  header {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.background};
    height: 144px;
    display: flex;
    align-items: center;
    padding: 0 124px;

    a {
      color: ${({ theme }) => theme.COLORS.pink};
      font-size: 16px;
    }
    svg {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.COLORS.pink};
    }
  }
`;
export const Avatar = styled.div`
  position: relative;
  margin: -93px auto;
  width: 186px;
  height: 186px;
  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.pink};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
