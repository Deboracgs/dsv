import { fireEvent, render } from "@testing-library/react";
import WrapperMock from "../../utils/wrapperMock";
import Counter, { CounterProps } from "./Counter";

describe("Counter Component", () => {
  const defaultProps: CounterProps = {
  };

  const counterId = "counter-value";

  const rendered = (props: CounterProps) =>
    render(
      <WrapperMock>
        <Counter {...props} />
      </WrapperMock>
    );

  it("render", () => {
    const { getByTestId, asFragment } = rendered(defaultProps);

    const element = getByTestId(counterId);

    expect(element).toBeDefined();
    expect(element.textContent).toBe("0");
    expect(asFragment()).toMatchSnapshot();
  });

  it("Normal Mode", () => {
    const { getByTestId, asFragment } = rendered(defaultProps);

    const counter = getByTestId(counterId);
    const buttonIncrement = getByTestId("button-increment");
    const buttonDecrement = getByTestId("button-decrement");
    const element = getByTestId("button-normal");
    fireEvent.click(element);
    fireEvent.click(buttonIncrement);
    expect(counter.textContent).toBe("1");
    fireEvent.click(buttonDecrement);
    expect(counter.textContent).toBe("0");

    expect(asFragment()).toMatchSnapshot();
  });

  it("ODD Mode", () => {
    const { getByTestId, asFragment } = rendered(defaultProps);

    const counter = getByTestId(counterId);
    const buttonIncrement = getByTestId("button-increment");
    const buttonDecrement = getByTestId("button-decrement");
    const element = getByTestId("button-odd");
    fireEvent.click(element);
    fireEvent.click(buttonIncrement);
    expect(counter.textContent).toBe("1");
    fireEvent.click(buttonIncrement);
    expect(counter.textContent).toBe("3");
    fireEvent.click(buttonDecrement);
    expect(counter.textContent).toBe("1");

    expect(asFragment()).toMatchSnapshot();
  });

  it("Input Mode", () => {
    const { getByTestId, asFragment, container } = rendered(defaultProps);

    const counter = getByTestId(counterId);
    const fieldText = container.querySelector("#counter") as HTMLInputElement;
    const buttonIncrement = getByTestId("button-increment");
    const buttonDecrement = getByTestId("button-decrement");
    const element = getByTestId("button-input");
    fireEvent.click(element);
    fireEvent.change(fieldText, {target: {value: "3"}});

    fireEvent.click(buttonIncrement);
    expect(counter.textContent).toBe("4");
    fireEvent.click(buttonIncrement);
    expect(counter.textContent).toBe("7");
    fireEvent.click(buttonDecrement);
    expect(counter.textContent).toBe("4");
    fireEvent.click(buttonDecrement);
    expect(counter.textContent).toBe("1");

    expect(asFragment()).toMatchSnapshot();
  });

  it("Reset Mode", () => {
    const { getByTestId, asFragment } = rendered(defaultProps);

    const counter = getByTestId(counterId);
    const buttonIncrement = getByTestId("button-increment");
    const element = getByTestId("button-reset");

    fireEvent.click(buttonIncrement);
    expect(counter.textContent).toBe("2");

    fireEvent.click(element);

    expect(counter.textContent).toBe("0");   
    expect(asFragment()).toMatchSnapshot();
  });

});
