import styled from "styled-components";

export const Size = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 5px;
  background-color: rgb(209, 209, 209);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ActiveSize = styled(Size)`
  background-color: black;
  color: white;
`;
