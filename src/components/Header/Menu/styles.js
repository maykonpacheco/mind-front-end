import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const List = styled.div`
  background: #fff;
  width: 450px;
  height: 100%;

  img {
    width: 30%;
  }

  > section {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 20px;

    a {
      font-size: 20px;
      margin-top: 20px;

      &:visited {
        color: #000;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-left: 20px;

  div {
    margin-left: 20px;

    strong {
      font-size: 16px;
    }

    p {
      color: #bbbb;
      font-size: 12px;
    }
  }

  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }
`;
