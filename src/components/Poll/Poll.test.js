import { fireEvent, render, screen } from "@testing-library/react";
import Poll from "./Poll";

describe("Testing whether Option Component is rendering without crashing", () => {
  test("Poll Component", () => {
    render(
      <Poll/>
    );
    const ques = screen.getByText("How you feel today?");
    const vote = screen.queryByText("Vote")
    fireEvent.click(vote);
  });
});