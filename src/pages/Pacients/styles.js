import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
  width: 350px;

  div {
    margin-left: 20px;

    strong {
      font-size: 16px;
    }

    p {
      font-size: 12px;
      margin: 10px 0;
    }
  }

  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }
`;
