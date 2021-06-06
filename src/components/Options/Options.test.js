import { fireEvent, render, screen } from "@testing-library/react";
import Options from "./Options";

describe("Testing whether Option Component is rendering without crashing", () => {
  test("Option Component", () => {
      const optionsArr =  [{id: "a", ans: "It was great and so challenging"},
      {id: "b", ans: "Not bad, but you can improve"}, 
      {id: "c", ans: "It was a nightmare, never again"}];
      const onChange = jest.fn();
    render(
      <Options
        options={optionsArr}
        handleOption={() => onChange()}
        selectedOption= "It was a nightmare, never again"
      />
    );
    const opt = screen.getByText(/It was a nightmare/);
  });
});
