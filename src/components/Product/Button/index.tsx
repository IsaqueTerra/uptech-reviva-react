import styled from "styled-components";
import theme from "styles/global";

const ButtonBagContent = styled.div`
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

const ProductButtonBag = styled.div`
  grid-area: button;
  perspective: 500px;

  &:hover ${ButtonBagContent} {
    cursor: pointer;
    transform: rotateY(180deg);
    transition: transform 0.2s;
  }

  &:active {
    transform: scale(1.05);
  }
`;

const ContentFrontButton = styled.div`
  align-items: center;
  backface-visibility: hidden;
  background: url(../../icons/logo-bag-white.svg) ${theme.colors.primary} right
    no-repeat;
  border: 0.5em solid transparent;
  box-shadow: 0 0 15px #00000036;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const ContentBackButton = styled(ContentFrontButton)`
  background: no-repeat center ${theme.colors.quaternary}
    url(../../icons/check-solid.svg);
  color: ${theme.colorsNegative.primary};
  transform: rotateY(180deg);
  &:focus{
    background: no-repeat center #008844 url(../../icons/check-solid-white.svg);
  }
`;

const BackButtonUnavailable = styled(ContentBackButton)`
  background-image: none;

  &::before {
    content: "Quantidade Indisponível";
    color: ${theme.colors.quaternary};
    font-size: 1.2em;
  }
`;

const ButtonBag = styled.button`
  background: none;
  border: none;
  color: ${theme.colorsNegative.primary};
  font-size: 1.4em;

  &:hover {
    cursor: pointer;
  }
`;
interface IButton {
  children: React.ReactNode;
  classItem?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, classItem, onClick, style }: IButton) => (
  <ProductButtonBag style={style} onClick={onClick}>
    <ButtonBagContent>
      <ContentFrontButton>
        <ButtonBag>{children}</ButtonBag>
      </ContentFrontButton>
      <ContentBackButton  ></ContentBackButton>
    </ButtonBagContent>
  </ProductButtonBag>
);

export default Button;
