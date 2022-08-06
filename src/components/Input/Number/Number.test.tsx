import { fireEvent, render } from "@testing-library/react";
import WrapperMock from "../../../utils/wrapperMock";
import InputNumber, { InputNumberProps } from "./Number";

describe("Input Number Component", () => {
  const defaultProps: InputNumberProps = {
    id: "unit-number", 
    defaultValue: 0,
    onChange: jest.fn()
  };

  const rendered = (props: InputNumberProps) =>
    render(
      <WrapperMock>
        <InputNumber {...props} />
      </WrapperMock>
    );

  it("render", () => {
    const onChangeSpy = jest.spyOn(defaultProps, "onChange");
    const { asFragment, container } = rendered(defaultProps);

    const element = container.querySelector("#unit-number") as HTMLInputElement;

    expect(element).toBeDefined();
    expect(element.defaultValue).toBe("0");
    fireEvent.change(element, {target: {value: 3}});
    
    expect(onChangeSpy).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

});
