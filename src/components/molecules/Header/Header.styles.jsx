import styled, { css } from "styled-components";
import COLORS from "../../../theme/constants/colors";

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 45px;
  background-color: ${COLORS.primary};
  position: fixed;
  left: 0;
  box-shadow: 0 0 20px 1px rgba(2, 2, 2, 1);
  z-index: 15;
`;

export const MenuWrapper = styled.menu`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

export const MenuButton = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? COLORS.secondary : "transparent"};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 20px;
  height: 50px;
  width: 50px;
`;
