import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  //* const { getByText } = render(<App />);
  //* 소스 코드가 많아지면 비추천
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
