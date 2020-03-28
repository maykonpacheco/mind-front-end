import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 60px;
      padding: 0 15px;
      color: #7b7b7b;
      margin: 0 0 10px;
      border: 1px solid #bbbbbb;

      &::placeholder {
        color: #bbbbbb;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 60px;
      background: #01f500;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.09, "#01f500")};
      }
    }

    a {
      color: #b1adbe;
      margin-top: 25px;
      font-size: 15px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    b {
      color: #01f500;
    }
  }
`;
