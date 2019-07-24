import styled from "styled-components";

export const CartItemBlock = styled.div`
  margin-top: 5px;
  height: 200px;
  box-shadow: 1px 1px 1px 1px black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: ${props => (props.onHover === "onHover" ? "black" : "#444242")};
`;
export const RemoveItem = styled.div`
  position: absolute;
  top: 5px;
  right: 0px;
`;

export const CloseIcon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
export const CartProductDiv = styled.div``;

export const CartProductImage = styled.img`
  height: 110px;
  width: 80px;
`;
export const CartDetails = styled.div`
  margin: -10px;
  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.span`
  color: white;
  font-size: 22px;
  text-decoration: ${props =>
    props.onHover === "onHover" ? "line-through" : ""};
`;

export const CartProductSize = styled.span`
  color: grey;
  text-decoration: ${props =>
    props.onHover === "onHover" ? "line-through" : ""};
`;
export const Quantity = styled.span`
  color: grey;
  text-decoration: ${props =>
    props.onHover === "onHover" ? "line-through" : ""};
`;

export const PriceOfItem = styled.span`
  color: rgb(255, 217, 0);
  font-size: 20px;
  text-decoration: ${props =>
    props.onHover === "onHover" ? "line-through" : ""};
`;
export const PriceContainer = styled.div``;
