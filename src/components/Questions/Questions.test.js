import { render, screen } from "@testing-library/react";
import Questions from "./Questions";

describe("Testing whether Question Component is rendering without crashing", () => {
  test("Question Component", () => {
    render(<Questions question={"How are you feeling Today?"} />);
    const ques = screen.getByText(/How/);
  });
});
