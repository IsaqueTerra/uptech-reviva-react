import { fireEvent, render } from "@testing-library/react";
import Search from "./Input_Search";

describe("<Search/>", () => {
  test("check text as you type", () => {
    const { getByPlaceholderText } = render(
      <Search placeholder="Faça sua busca aqui se já souber o que está procurando..." />
    );
    const input = getByPlaceholderText(
      "Faça sua busca aqui se já souber o que está procurando..."
    );

    fireEvent.change(input, { target: { value: "teste" } });

    expect(input).toHaveValue("teste");
  });
});
