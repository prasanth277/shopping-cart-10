import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const AddToCartbutton = styled.button`
  height: 65px;
  width: 270px;
  margin: 10px;
  border: none;
  background: black;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;
export const AddToCartbuttonActive = styled(AddToCartbutton)`
  background: rgb(255, 196, 0);
`;
