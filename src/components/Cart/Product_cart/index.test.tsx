import { fireEvent, render } from "@testing-library/react";
import { Quantity } from "./styles";

describe("<Quantity/>", () => {
  test("checks if the entered value appears on the screen", () => {
    const { getByTestId } = render(<Quantity data-testid="quantity-test" />);
    const quantity = getByTestId("quantity-test");
    fireEvent.change(quantity, { target: { value: "3" } });
    expect(quantity).toHaveValue("3");
  });

  test("checks if component has been rendered", () => {
    const { getByTestId } = render(<Quantity data-testid="quantity-test" />);
    const quantity = getByTestId("quantity-test");
    expect(quantity).toBeInTheDocument();
  });
});
