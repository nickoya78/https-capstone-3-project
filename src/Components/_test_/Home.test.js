import { render, screen, userEvent } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter as Router } from "react-router-dom";
jest.mock("react-router-dom");

describe("Test the Home components", () => {
  test("should make sure Input component wroking properly", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const input = screen.findByTestId("addingAge");
    expect(input).toBeTruthy();
  });

  test("should show user name in div component", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const div = screen.findByTestId("showUser");
    expect(div).not.toBeFalsy();
  });
});
