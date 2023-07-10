import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";

test("Render greet correctly", () => {
  render(<Greet />);

  const headerText = "Greet";
  const headerElement = screen.getByText(headerText);
  expect(headerElement).toBeInTheDocument();
});
