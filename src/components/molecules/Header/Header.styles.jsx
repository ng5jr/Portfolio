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

  width: 100%;
  @media (min-width: 0px) {
    gap: 20px;
  }
  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1200px) {
    gap: 60px;
  }
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
  font-size: 30px;
  height: 50px;
  width: 60px;
`;
