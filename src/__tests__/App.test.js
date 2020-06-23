import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App.js";

describe("App", () => {
  const { asFragment } = render(<App />);

  test("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});