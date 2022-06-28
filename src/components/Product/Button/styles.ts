import styled, { css } from "styled-components";
import theme from "styles/global";

export const ButtonBagContent = styled.div`
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

export const ProductButtonBag = styled.div`
  grid-area: button;
  perspective: 500px;
  transition: 0.5s all;

  &:hover ${ButtonBagContent} {
    cursor: pointer;
    transform: rotateY(180deg);
    transition: transform 0.4s;
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 0 20px 15px #00000036;
  }

`;

export const ContentFrontButton = styled.div`
  align-items: center;
  backface-visibility: hidden;
  background: url(../../icons/logo-bag-white.svg) ${theme.colors.primary} right
    no-repeat;
  border: 0.5em solid transparent;
  box-shadow: 0 0 15px #00000036;
  box-sizing: border-box;
  display: flex;
  height: 5em;
  justify-content: center;
  position: absolute;
  transition: 0.5s all;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    background-size: 2em;
    font-size: 0.8em;
  }
`;

interface ContentBackButtonProps {
  unavailable: boolean;
  addedToCart: boolean;
}

export const ContentBackButton = styled(ContentFrontButton)<ContentBackButtonProps>`
  background: no-repeat center ${theme.colors.quaternary} url(../../icons/check-solid.svg);
  border: none;
  color: ${theme.colorsNegative.primary};
  overflow: hidden;
  transform: rotateY(180deg);
  transition: .1s all ease-in-out;

  &:hover {
    cursor: pointer;
  }
  
  &::after {
          content: "";
          border-radius: 100%;
          bottom: 0;
          left: 0;
          margin: auto;
          position: absolute;
          right: 0;
          top: 0;
          transform: scale(0);
          transition: .5s all ease-in-out;
          width: 20%;
        }

  ${({ addedToCart }) =>
    addedToCart &&
    css`
        &::after {
          background: no-repeat #1C991C center url(../../icons/check-solid-white.svg);
          box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.334);
          overflow: hidden;
          transform: scale(.6);
        }
        background: #41E642
    `}


  ${({ unavailable }) =>
    unavailable &&
    css`
      background-image: none;
      &::before {
        content: "Quantidade Indisponível";
        color: ${theme.colors.quinary};
        font-size: 1.5em;
        background: center/100% ${theme.colors.quaternary};
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
      }
    `}
`;

export const ButtonBag = styled.button`
  background: none;
  border: none;
  color: ${theme.colorsNegative.primary};
  font-size: 1.4em;

  &:hover {
    cursor: pointer;
  }
`;
