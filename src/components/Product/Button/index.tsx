import { useState } from "react";
import {
  ButtonBag,
  ButtonBagContent,
  ContentBackButton,
  ContentFrontButton,
  ProductButtonBag,
} from "./styles";

interface IButton {
  children: React.ReactNode;
  unavailable?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, unavailable, style, onClick }: IButton) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const setStyleAddedToCart = () => {
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <ProductButtonBag data-testid="productButtonBag" style={style} onClick={onClick}>
      <ButtonBagContent
        className="button-bag-content"
        onClick={() => {
          setAddedToCart(true);
          setStyleAddedToCart();
        }}
      >
        <ContentFrontButton>
          <ButtonBag>{children}</ButtonBag>
        </ContentFrontButton>
        <ContentBackButton
          data-testid="contentBackButton"
          addedToCart={addedToCart}
          unavailable={unavailable!}
        ></ContentBackButton>
      </ButtonBagContent>
    </ProductButtonBag>
  );
};

export default Button;
