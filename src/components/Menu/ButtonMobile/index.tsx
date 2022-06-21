import styled from "styled-components";
import theme from "styles/global";

const MenuNavegationButton = styled.button`
  display: none;

  @media screen and (max-width: ${theme.breackpoints.md}) {
    background: no-repeat left url(../../icons/logo-menu.svg);
    border: none;
    color: ${theme.colorsNegative.primary};
    display: inline-block;
    font-size: 1.7em;
    font-weight: bold;
    margin: 0 1em;
    text-align: end;
    width: 5em;
  }

  &:hover {
    @media screen and (max-width: ${theme.breackpoints.md}) {
      cursor: pointer;
    }
  }
`;
interface IButtonMobile {
  onClick: React.MouseEventHandler;
}

const ButtonMobile = ({ onClick }: IButtonMobile) => {
  return <MenuNavegationButton onClick={onClick}>Menu</MenuNavegationButton>;
};
export default ButtonMobile;
