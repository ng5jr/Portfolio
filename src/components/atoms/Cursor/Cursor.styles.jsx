import styled from "styled-components";

export const CursorWrapper = styled.div`
  background-color: #111;
  border-radius: 50%;
  height: 2rem;
  left: ${(props) => props.left}px;
  position: fixed;
  transform: translate(-50%, -50%);
  top: ${(props) => props.top}px;
  width: 2rem;
  z-index: 100;
  pointer-events: none;
`;
