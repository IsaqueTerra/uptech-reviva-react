import { fireEvent, render } from "@testing-library/react";
import Images from ".";
import { listImagesMock } from "./mock";

describe("<Images/>", () => {
  test("checks for existence contain a description", () => {
    const { getByRole } = render(
      <Images images={listImagesMock} position={0} />
    );

    const image = getByRole("img", { name: "Modelo com Blusa Preta" });
    expect(image).toBeInTheDocument();
  });

  test("check for existence of a src", () => {
    const { getByRole } = render(
      <Images images={listImagesMock} position={0} />
    );

    const image = getByRole("img", { name: "Modelo com Blusa Preta" });
    expect(image).toHaveAttribute("src", "../../images/product-1/img1.jpg");
  });

  test("check image click function", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Images images={listImagesMock} position={0} onClick={onClick} />
    );

    const image = getByRole("img", { name: "Modelo com Blusa Preta" });
    fireEvent.click(image);
    expect(onClick).toHaveBeenCalled();
  });
});
