import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding: 32px;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;
  max-width: 1121px;
  cursor: pointer;

  h1 {
    font-size: 24px;
  }
  svg {
    margin-top: 8px;
  }
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.font_p};
    margin-top: 15px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
  }
  footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
    align-self: center;
    > span:first-child {
      margin-left: 0;
    }

    > span {
      padding: 5px 16px;
      color: ${({ theme }) => theme.COLORS.gray};
      margin-left: 8px;
      align-self: center;
      font-size: 12px;
    }
  }
`;
