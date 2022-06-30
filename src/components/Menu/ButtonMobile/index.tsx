import { MenuNavegationButton } from "./styles";

interface IButtonMobile {
  onClick: React.MouseEventHandler;
}

const ButtonMobile = ({ onClick }: IButtonMobile) => {
  return <MenuNavegationButton onClick={onClick}>Menu</MenuNavegationButton>;
};
export default ButtonMobile;
