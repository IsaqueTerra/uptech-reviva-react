import { fireEvent, render } from "@testing-library/react";
import { NewsletterInput } from "./styles";

describe("<NewsletterInput/>", () => {
  test("display text as you type", () => {
    const { getByPlaceholderText } = render(
      <NewsletterInput placeholder="Digite seu email..." />
    );

    const input = getByPlaceholderText("Digite seu email...");

    fireEvent.change(input, { target: { value: "teste" } });

    expect(input).toHaveValue("teste");
  });
});
