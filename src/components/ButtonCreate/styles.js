import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: none;
  background: #01f500;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 1;

  &:hover {
    background: ${darken(0.09, "#01f500")};
  }
`;
