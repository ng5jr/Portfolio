import styled from "styled-components";

export const RadialMenuWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 10;
  transform: rotate(-90deg);
  font-size: 1.5rem;
  .container {
    transform: translateY(-10px);
    position: absolute;
  }

  button {
    background: none;
    border: none;
    outline: none;
    position: absolute;
    opacity: 0;
    transition: transform 0.5s, opacity 0.3s ease-out;
  }
  #toggle:checked ~ .container > .deg5 {
    transform: rotate(5deg) translate(2.5em) rotate(-5deg);
  }

  #toggle:checked ~ .container > .deg40 {
    transform: rotate(40deg) translate(2.3em) rotate(-40deg);
  }

  #toggle:checked ~ .container > .deg85 {
    transform: rotate(85deg) translate(2.5em) rotate(-85deg);
  }

  #toggle:checked ~ .container > button {
    opacity: 1 !important;
    position: fixed;
  }

  #toggle:checked ~ .container > button {
    opacity: 1 !important;
    position: fixed;
  }

  #toggle:checked ~ .container > button:hover {
    cursor: pointer;
  }

  label:hover {
    cursor: pointer;
  }

  #toggle {
    display: none;
  }

  .fa-home:hover {
    color: #55cc70;
  }

  .fa-comments:hover {
    color: #0099e5;
  }

  .fa-heart:hover {
    color: tomato;
  }
`;
