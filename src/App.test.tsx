import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders place item", () => {
  render(<App />);
  const soughtElement = screen.getByText(/Tom's/i);
  expect(soughtElement).toBeInTheDocument();
});
