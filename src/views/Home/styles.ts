import styled from "styled-components";
import { Button as AntdButton } from "antd";

export const Wrapper = styled.main`
  background: rgb(196, 214, 183);
  background: radial-gradient(
    at 50% 40px,
    rgba(196, 214, 183, 1) 0%,
    rgba(196, 214, 183, 1) 20%,
    rgba(246, 245, 240, 1) 50%
  );

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin-top: 15px;
    font-size: 20px;
    color: #3a5726;
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 400;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 16px;
`;
