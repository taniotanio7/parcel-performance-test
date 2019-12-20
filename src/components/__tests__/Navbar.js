import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Navbar from "../Navbar";
import { AppContext } from "../../App";


describe("it should render navigation", () => {
  test("it should change theme", () => {
    const setContext = jest.fn();
    const mockContext = {
      theme: "light",
      setContext
    };

    const tree = (
      <AppContext.Provider value={mockContext}>
        <Navbar />
      </AppContext.Provider>
    );

    const { getByLabelText } = render(tree);
    const toggleButton = getByLabelText(/zmień motyw kolorystyczny/i);

    user.click(toggleButton);
    expect(setContext).toHaveBeenCalledTimes(1);
    expect(setContext).toHaveBeenCalledWith({ theme: "dark" });
    user.click(toggleButton);
    expect(setContext).toHaveBeenCalledWith({ theme: "dark" });
  });

  test("it should allow custom children (left side)", () => {
    const sampleContent = "Some content";
    const { getByText } = render(
      <Navbar before={sampleContent} />
    );
    const sampleContentEl = getByText(sampleContent);
    expect(sampleContentEl).toBeInTheDocument();
    expect(sampleContentEl).toHaveStyleRule("margin-right", "0.75rem");
  });

  test("it should allow custom children (right side)", () => {
    const sampleContent = "Some content";
    const {getByText} = render(
      <Navbar>{sampleContent}</Navbar>
    )
    const sampleElement = getByText(sampleContent)
    expect(sampleElement).toBeInTheDocument()
  });

  test("it shouldn't render margins when no children/before props aren't passed", () => {
    const {getByTestId} = render(<Navbar />)
    expect(getByTestId('navbar-before-container')).not.toHaveStyleRule("margin-right", "0.75rem")
  });

  test("the grow of main app title should be controllable", () => {
    const {getByText, rerender} = render(<Navbar noGrow />)
    expect(getByText(/daj kasę/i)).toHaveStyleRule("flex-grow", "0")
    rerender(<Navbar />)
    expect(getByText(/daj kasę/i)).toHaveStyleRule("flex-grow", "1")
  });
});
