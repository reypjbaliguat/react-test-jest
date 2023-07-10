// Login Page should render properly.
// User can type email and password .
// User can click the login button.

import { render, screen } from "@testing-library/react";
import Login from "../../screens/Login";

describe("Login Page", () => {
  render(<Login />);
  it("Renders the Login Page correctly", () => {
    const loginHeader = "Login z";
    const headerElement = screen.getByText(loginHeader);
    expect(headerElement).toBeInTheDocument();
  });
});
