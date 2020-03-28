import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  header {
    display: flex;
    justify-content: center;

    margin: 20px;

    strong {
      color: #7b7b7b;
      font-size: 10px;
    }
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  p {
    font-size: 16px;
    margin-left: 20px;
    color: #7b7b7b;
  }

  nav {
    display: flex;
    flex-direction: column;

    span {
      color: #7b7b7b;
      font-size: 10px;
    }

    strong {
      color: #7b7b7b;
      font-size: 18px;
      margin-top: 10px;

      color: ${props => props.day && "#ccc"};
    }
  }
`;

export const AppointmentCLient = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: none;
  border: none;
  width: 240px;
  height: 40px;
  background: #01f500;
  border-radius: 4px;
  margin-left: 20px;
  color: #fff;
  font-weight: bold;

  strong {
    margin-left: 10px;
    font-size: 14px;
  }

  span {
    margin-left: 10px;
    font-size: 12px;
  }
`;

export const Month = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px 0;
  border-radius: 4px;
  background: #ececec;
  height: 80px;
  width: 300px;

  strong {
    font-size: 16px;
    color: #7b7b7b;
  }
`;
