import styled, { keyframes } from "styled-components";

export const AuthenticationDetails = styled.div`
  height: 400px;
  width: 350px;
  box-shadow: 1px 1px 10px 0px grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const InputUserName = styled.input`
  width: 250px;
  height: 35px;
  border: none;
  border-bottom: #d5d2d2 1px solid;
  position: absolute;
  top: 80px;
  left: 46px;
`;
export const InputPassword = styled(InputUserName)`
  position: absolute;
  top: 180px;
`;
export const Button = styled.div`
  width: 180px;
  height: 38px;
  border: none;
  background: #0abb75;
  position: absolute;
  top: 260px;
  left: 80px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonLabel = styled.span``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
  border: 5px solid #0abb75;
  border-radius: 50%;
  border-top: 4px solid white;
  border-bottom: 4px solid white;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
`;

export const Label = styled.span`
  font-size: 15px;
  position: absolute;
  top: 361px;
  left: 143px;
  text-decoration: underline;
  color: #0abb75;
  cursor: pointer;
`;
export const StatusMessage = styled.div`
  height: 65px;
  width: 450px;
  border-radius: 10px;
  background: #bae8ba;
  position: absolute;
  top: 725px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatusMessageFail = styled(StatusMessage)`
  background: #ffa2a2;
`;
export const StatusLabel = styled.span`
  font-size: 25px;
  color: green;
`;
export const StatusLabelFail = styled.span`
  font-size: 25px;
  color: red;
`;
export const Alert = styled.span`
  font-size: 12px;
  color: red;
  position: absolute;
  top: 220px;
  left: 46px;
  font-weight: inherit;
`;
