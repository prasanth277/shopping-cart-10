import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const LoaderApi = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid black;
  border-bottom: 16px solid black;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
  margin-top: 350px;
`;
