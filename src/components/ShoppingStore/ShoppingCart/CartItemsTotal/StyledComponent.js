import styled from "styled-components";

export const CartTotalBlock = styled.div`
  width: 500px;
  height: 250px;
  background: black;
  position: fixed;
  bottom: 0;
`;
export const CartSubTotal = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const SubTotalLabel = styled.span`
  font-size: 25px;
  color: grey;
  margin-left: 20px;
`;
export const CartTotal = styled.span`
  color: yellow;
  font-size: 25px;
  margin-right: 20px;
`;
export const PriceBlock = styled.div`
  position: absolute;
  top: 75px;
  right: 20px;
`;
export const InstallDetails = styled.span`
  color: grey;
`;
export const CheckOut = styled.div`
  height: 60px;
  width: 260px;
  border: solid 1px gray;
  color: grey;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;
export const CheckOutBlock = styled.div`
  display: flex;
  justify-content: center;
`;
