import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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
  }

  > button {
    width: 100%;
    margin: 15px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, "#f64c75")};
    }
  }
`;
