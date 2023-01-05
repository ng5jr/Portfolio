import styled from "styled-components";

export const LightWrapper = styled.div`
  background: -moz-radial-gradient(
    circle at 50% 50%,
    rgba(52, 52, 53, 1) 0%,
    rgba(31, 31, 32, 0.71) 50%,
    rgba(31, 31, 32, 0.88) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 50% 50%,
    rgba(52, 52, 53, 1) 0%,
    rgba(31, 31, 32, 0.71) 50%,
    rgba(31, 31, 32, 0.88) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 50% 50%,
    rgba(52, 52, 53, 1) 0%,
    rgba(31, 31, 32, 0.71) 50%,
    rgba(31, 31, 32, 0.88) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 50% 50%,
    rgba(52, 52, 53, 1) 0%,
    rgba(31, 31, 32, 0.71) 50%,
    rgba(31, 31, 32, 0.88) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 50% 50%,
    rgba(52, 52, 53, 1) 0%,
    rgba(31, 31, 32, 0.71) 50%,
    rgba(31, 31, 32, 0.88) 100%
  );
  border-radius: 50%;
  width: 700px;
  height: 700px;
  position: absolute;
  z-index: 0;
  transform: translate(-50%, -50%);

  @media (min-width: 0px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1000px) {
    display: flex;
  }
`;
