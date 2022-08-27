import { render, screen } from "@testing-library/react";
import Login from "../Login";
import { BrowserRouter as Router } from "react-router-dom";

describe("Test the Login Component", () => {
  test("header renders with Sign-in for access in the document", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const linkElement = screen.getByText(/Sign-in for access/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render login component in the document", () => {
    const { getByText } = render(
      <Router>
        <Login />
      </Router>
    );
    const childElement = getByText("E-mail");
    expect(childElement).toBeTruthy();
  });

  test("should  render the login page with 2 button", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("password input field should have type password", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const password = screen.getByPlaceholderText("password");
    expect(password).toHaveAttribute("type", "password");
  });
  test("should render signIn button properly", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const buttonLogin = await screen.findByTestId("signUp-button");
    expect(buttonLogin.signIn).toBeFalsy();
  });

  test("should render register button properly", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const buttonCreate = screen.findByTestId("create-button");
    expect(buttonCreate.register).not.toBeTruthy();
  });
});
