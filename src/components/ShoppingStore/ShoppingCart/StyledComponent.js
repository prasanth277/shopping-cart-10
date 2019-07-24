import styled from "styled-components";

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CartIconContent = styled.div``;

export const CartIcon = styled.div`
  height: 60px;
  width: 60px;
  background: black;
  position: fixed;
  right: 0;
  cursor: pointer;
`;
export const OpenCartIcon = styled(CartIcon)`
  position: fixed;
  right: 500px;
`;
export const OuterCartNo = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: rgb(255, 208, 0);
  position: absolute;
  right: 1px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CartImage = styled.img`
  height: 60px;
  width: 60px;
`;

export const CartMenu = styled.div`
  height: 950px;
  width: 500px;
  background: rgb(27, 27, 27);
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
`;
export const CloseCart = styled.div`
  width: 0;
`;
export const CartMessage = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  position: relative;
`;
export const CartCount = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: rgb(255, 208, 0);
  position: absolute;
  top: 98px;
  right: 245px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CartImageinCart = styled.img`
  height: 100px;
  width: 100px;
`;
export const CartLabel = styled.span`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
