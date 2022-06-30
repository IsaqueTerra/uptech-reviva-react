import { fireEvent, render } from "@testing-library/react";
import { useState } from "react";
import { ButtonBagContent, ContentBackButton, ProductButtonBag } from "./styles";

describe("<ProductButtonBag/>", () => {
  test("checks if the component is rendering", () => {
    const { getByTestId } = render(
      <ProductButtonBag data-testid={"productButtonBag"}></ProductButtonBag>
    );

    const component = getByTestId("productButtonBag");

    expect(component).toBeInTheDocument();
  });

  test("checks if click function was called", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <ProductButtonBag
        data-testid={"productButtonBag"}
        onClick={onClick}
      ></ProductButtonBag>
    );

    const component = getByTestId("productButtonBag");
    fireEvent.click(component);

    expect(onClick).toHaveBeenCalled();
  });
});

describe("<ContentBackButton/>", () => {
  test("checks if the component is rendering", () => {
    const addedToCart = true;
    const unavailable = true;
    const { getByTestId } = render(
      <ContentBackButton
        data-testid={"buttonBagContent"}
        addedToCart={addedToCart}
        unavailable={unavailable}
       ></ContentBackButton>
    );

    const component = getByTestId("buttonBagContent");

    expect(component).toBeInTheDocument();
  }
  );
});
