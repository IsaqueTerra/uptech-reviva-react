// import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/global";

export const ProductImage = styled.img`
  box-sizing: border-box;
  padding: 0.2em;
  border: 1px solid ${theme.colors.quaternary};
  box-sizing: border-box;
  grid-area: image;
  padding: 0.2em;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductLinkImage = styled.a`
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;
  grid-area: image;

  &:hover ${ProductImage} {
    animation: identifier 9s 0.5s ease infinite;
  }

  @keyframes identifier {
    0% {
      transform: translateX(0%);
    }

    25% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(-200%);
    }

    75% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;